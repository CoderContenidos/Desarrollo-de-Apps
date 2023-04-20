import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { colors } from "../Global/colors";
import MapPreview from "../Components/MapPreview";
import { googleAPI } from "../firebase/googleAPI";
import AddButton from "../Components/AddButton";
import { usePostUserLocationMutation } from "../services/realtimeDatabaseService";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../features/auth/authSlice";

const LocationSelector = ({ navigation }) => {

    const [location, setLocation] = useState({ latitude: "", longitude: "" });
    const {localId} = useSelector(state => state.authReducer.value)
    const [address, setAddress] = useState(null);
    const [error, setError] = useState("");
    const [triggerPostAddress, result] = usePostUserLocationMutation();
    const dispatch = useDispatch();

    const onConfirmAddress = () => {
        const locationFormatted = {
            latitude: location.latitude,
            longitude: location.longitude,
            address: address
        }
        dispatch(setUserLocation(locationFormatted))
        
        triggerPostAddress({location: locationFormatted, localId})
    }
    
    useEffect(() => {
        (async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                    setError("Permission to access location was denied");
                    return;
                }
    
                let location = await Location.getCurrentPositionAsync({});
                setLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                });
                
            } catch (error) {
                console.log(error.message);
                setError(error.message)
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                if (location.latitude) {
                    const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleAPI.mapStatic}`;
                    const response = await fetch(url_reverse_geocode);
                    const data = await response.json();
                    console.dir(data);
                    setAddress(data.results[0].formatted_address);
                }
            } catch (error) {
                setError(error.message);
            }
        })();
    }, [location]);

    return (
        <View style={styles.container}>
            <Text>My Address</Text>
            {/* Flatlist con las directions */}
            {location ? (
                <>
                    <Text>
                        Lat: {location.latitude}, long: {location.longitude}.
                    </Text>
                    <MapPreview location={location} />
                    <Text style={styles.address}>
                        Formatted address: {address}
                    </Text>
                    <AddButton
                        onPress={onConfirmAddress}
                        title="Confirm address"
                    />
                </>
            ) : (
                <>
                    <View style={styles.noLocationContainer}>
                        <Text>{error}</Text>
                    </View>
                </>
            )}
        </View>
    );
};

export default LocationSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        paddingBottom: 130,
    },
    noLocationContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colors.green3,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    address: {
        padding: 10,
        fontFamily: "PlayFair",
        fontSize: 16,
    },
});
