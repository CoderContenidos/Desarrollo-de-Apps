import { StyleSheet, FlatList, View, Pressable, Text } from "react-native";
import React, { useState, useEffect } from "react";
import allCartItems from "../data/cart.json";
import CartItem from "../Components/CartItem";
import { colors } from "../Global/colors";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = allCartItems.reduce(
            (acc, currentItem) =>
                (acc += currentItem.quantity * currentItem.price),
            0
        );
        setCartItems(allCartItems);
        setTotal(total);
    }, [allCartItems]);

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={cartItems}
                keyExtractor={(cartItem) => cartItem.id}
                renderItem={({ item }) => <CartItem cartItem={item} />}
            />
            <View style={styles.confirmContainer}>
                <Pressable>
                    <Text style={styles.confirmText}>Confirm</Text>
                </Pressable>
                <Text style={styles.confirmText}>Total: ${total}</Text>
            </View>
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 130,
        justifyContent: "flex-end",
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
