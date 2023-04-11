import { StyleSheet, FlatList, View, Pressable, Text } from "react-native";
import React, { useState, useEffect } from "react";
import allCartItems from "../data/cart.json";
import CartItem from "../Components/CartItem";
import { colors } from "../Global/colors";
import { usePostOrderMutation } from "../services/realtimeDatabaseService";
import { useSelector } from "react-redux";

const Cart = () => {

    const cartItems = useSelector(state => state.cartReducer.value.items);
    const total = useSelector(state => state.cartReducer.value.total)
    const [triggerPost, result] = usePostOrderMutation()
    
    const confirmCart = () => {
        triggerPost({total, cartItems, user: 'loggedUser'})
    }

    return (
        <View style={styles.container}>
            {
                cartItems.length ?
                <>
                    <FlatList
                    style={styles.list}
                    data={cartItems}
                    keyExtractor={(cartItem) => cartItem.id}
                    renderItem={({ item }) => <CartItem cartItem={item} />}
                />
                    <View style={styles.confirmContainer}>
                        <Pressable onPress={confirmCart}>
                            <Text style={styles.confirmText}>Confirm</Text>
                        </Pressable>
                        <Text style={styles.confirmText}>Total: ${total}</Text>
                    </View>
                </>
            :
                <Text>The cart is empty</Text>
            }
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 130,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: colors.lightGray,
    },
    list: {
        width: "100%",
    },
    confirmContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "gray",
        padding: 15,
        width: "100%",
    },
    confirmText: {
        fontFamily: "PlayFair",
        fontSize: 18,
        color: "white",
    },
});
