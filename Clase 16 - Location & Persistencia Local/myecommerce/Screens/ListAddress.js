import { StyleSheet, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import AddressItem from "../Components/AddressItem";
import AddButton from "../Components/AddButton";

const ListAddress = ({ navigation }) => {
    const { location } = useSelector((state) => state.authReducer.value);

    return location.latitude ? (
        <AddressItem location={location} navigation={navigation} />
    ) : (
        <>
            <Text>No location registered</Text>
            <AddButton
                title="Set location"
                onPress={() => navigation.navigate("Location Selector")}
            />
        </>
    );
};

export default ListAddress;

const styles = StyleSheet.create({});
