import React, { useEffect } from "react";
import AuthStack from "./AuthStack";
import ShopTabNavigator from "./ShopTabNavigator";
import { useDispatch, useSelector } from "react-redux";
import { setProfilePicture } from "../features/auth/authSlice";
import { useGetProfileImageQuery } from "../services/shopService";
import { NavigationContainer } from "@react-navigation/native";

const MainNavigator = () => {

    const {email, localId} = useSelector(state => state.authReducer.value)
    const dispatch = useDispatch()
    const {data, error, isLoading} = useGetProfileImageQuery(localId)

    useEffect(()=> {
        if (data) {
            dispatch(setProfilePicture(data.image))
        }

    }, [data])

    return (
        <NavigationContainer>
            {email && !isLoading ? <ShopTabNavigator /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default MainNavigator;