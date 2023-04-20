import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import { colors } from "../Global/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import OrderStack from "./OrderStack";
import MyProfileStack from "./MyProfileStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            <Tab.Screen
                name="ShopTab"
                component={ShopStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.item}>
                                <MaterialCommunityIcons
                                    name="shopping-outline"
                                    size={40}
                                    color={
                                        focused
                                            ? colors.lightGray
                                            : colors.green1
                                    }
                                />
                                <Text
                                    style={
                                        ({ ...styles.textIcon },
                                        {
                                            color: focused
                                                ? colors.lightGray
                                                : colors.green1,
                                        })
                                    }
                                >
                                    Shop
                                </Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="CartTab"
                component={CartStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.item}>
                                <Ionicons
                                    name="cart"
                                    size={40}
                                    color={
                                        focused
                                            ? colors.lightGray
                                            : colors.green1
                                    }
                                />
                                <Text
                                    style={
                                        ({ ...styles.textIcon },
                                        {
                                            color: focused
                                                ? colors.lightGray
                                                : colors.green1,
                                        })
                                    }
                                >
                                    Cart
                                </Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="OrdersTab"
                component={OrderStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.item}>
                                <Ionicons
                                    name="list"
                                    size={40}
                                    color={
                                        focused
                                            ? colors.lightGray
                                            : colors.green1
                                    }
                                />
                                <Text
                                    style={
                                        ({ ...styles.textIcon },
                                        {
                                            color: focused
                                                ? colors.lightGray
                                                : colors.green1,
                                        })
                                    }
                                >
                                    Orders
                                </Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="MyProfileTab"
                component={MyProfileStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.item}>
                                <Ionicons
                                    name="person-circle-outline"
                                    size={40}
                                    color={
                                        focused
                                            ? colors.lightGray
                                            : colors.green1
                                    }
                                />
                                <Text
                                    style={
                                        ({ ...styles.textIcon },
                                        {
                                            color: focused
                                                ? colors.lightGray
                                                : colors.green1,
                                        })
                                    }
                                >
                                    Orders
                                </Text>
                            </View>
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.green3,
        shadowColor: "black",
        elevation: 4,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    },
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textIcon: {
        color: colors.lightGray,
        fontSize: 17,
        fontFamily: "Josefin",
    },
});

export default TabNavigator;
