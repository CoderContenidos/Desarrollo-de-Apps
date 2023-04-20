import { Image, StyleSheet, View } from "react-native";
import React from "react";
import AddButton from "../Components/AddButton";
import { useSelector } from "react-redux";

const MyProfile = ({navigation}) => {
    const {imageCamera, profileImage} = useSelector(state => state.authReducer.value);

    const launchCamera = async () => {
        navigation.navigate('Image Selector')
    };

    const launchLocation = async () => {
        navigation.navigate('List Address')
    }

    return (
        <View style={styles.container}>
            {imageCamera || profileImage ? (
                <Image
                    source={{uri: imageCamera || profileImage}}
                    style={styles.image}
                    resizeMode="cover"
                />
            ) : (
                <Image
                    source={require("../assets/defaultProfile.png")}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}
            <AddButton onPress={launchCamera} title="Add profile picture" />
            <AddButton onPress={launchLocation} title="My address" />
        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});
