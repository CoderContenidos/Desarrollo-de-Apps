import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Components/Header";
import MyProfile from "../Screens/MyProfile";
import ImageSelector from "../Screens/ImageSelector";
import LocationSelector from "../Screens/LocationSelector";
import ListAddress from "../Screens/ListAddress";

const Stack = createNativeStackNavigator();

const MyProfileStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="My Profile"
            screenOptions={{
                header: () => <Header title="Profile"/>
            }}
        >
            <Stack.Screen name="My Profile" component={MyProfile} />
            <Stack.Screen name="Image Selector" component={ImageSelector} />
            <Stack.Screen name="List Address" component={ListAddress}/>
            <Stack.Screen name="Location Selector" component={LocationSelector} />
        </Stack.Navigator>
    );
};

export default MyProfileStack;