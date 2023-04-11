import React, { useEffect } from "react";
import AuthStack from "./AuthStack";
import ShopTabNavigator from "./ShopTabNavigator";
import { useDispatch, useSelector } from "react-redux";
import { setProfilePicture, setUser, setUserLocation } from "../features/auth/authSlice";
import { useGetProfileImageQuery, useGetUserLocationQuery } from "../services/realtimeDatabaseService";
import { NavigationContainer } from "@react-navigation/native";
import { fetchSession } from "../db";

const MainNavigator = () => {

    const {email, localId} = useSelector(state => state.authReducer.value)
    const dispatch = useDispatch()

    const {data:profileImage, error, isLoading} = useGetProfileImageQuery(localId)
    const {data:location} = useGetUserLocationQuery(localId);

    useEffect(()=> {
      ( async ()=> {
        try {
          const session = await fetchSession();
          console.log(session);
          if (session?.rows.length) {
            const user = session.rows._array[0]
            dispatch(setUser(user));
          }
        } catch (error) {
          console.log(error.message)
        }
      })()
    }, [])

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