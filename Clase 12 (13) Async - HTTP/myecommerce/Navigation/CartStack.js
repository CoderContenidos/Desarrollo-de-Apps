import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../Screens/Cart";
import Header from "../Components/Header";

const Stack = createNativeStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={{
                header: () => <Header title="Cart"/>
            }}
        >
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    );
};

export default CartStack;

const styles = StyleSheet.create({});
