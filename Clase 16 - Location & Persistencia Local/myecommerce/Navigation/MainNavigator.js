import React, { useEffect } from "react";
import AuthStack from "./AuthStack";
import ShopTabNavigator from "./ShopTabNavigator";
import { useDispatch, useSelector } from "react-redux";
import { setProfilePicture, setUserLocation } from "../features/auth/authSlice";
import { useGetProfileImageQuery, useGetUserLocationQuery } from "../services/realtimeDatabaseService";
import { NavigationContainer } from "@react-navigation/native";

const MainNavigator = () => {

    const {email, localId} = useSelector(state => state.authReducer.value)
    const dispatch = useDispatch()

    const {data:profileImage, error, isLoading} = useGetProfileImageQuery(localId)
    const {data:location} = useGetUserLocationQuery(localId);

    useEffect(()=> {
        if (profileImage && location) {
            dispatch(setProfilePicture(profileImage.image))
            dispatch(setUserLocation(location));
        }
    }, [profileImage, location])

    return (
        <NavigationContainer>
            {email && !isLoading ? <ShopTabNavigator /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default MainNavigator;