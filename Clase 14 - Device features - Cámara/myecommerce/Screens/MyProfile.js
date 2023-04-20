import { Image, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import AddButton from "../Components/AddButton";
import * as ImagePicker from 'expo-image-picker'
import { useSelector } from "react-redux";

const MyProfile = ({navigation}) => {
    const {profileImage, imageCamera} = useSelector(state => state.authReducer.value);

    const launchCamera = async () => {
        navigation.navigate('Image Selector')
    };

    return (
        <View style={styles.container}>
            {profileImage || imageCamera ? (
                <Image
                    source={{uri: profileImage || imageCamera}}
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
