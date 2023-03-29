import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../Global/colors";
import { useDispatch, useSelector } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
} from "../features/counter/counterSlice";

const Counter = () => {
    const [inputToAdd, setInputToAdd] = useState(0);

    const count = 0;

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>
                <Text style={styles.span}>{count}</Text>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>
            <View style={styles.buttonsContainer}>
                <TextInput
                    placeholder="Cantidad a aumentar"
                    style={styles.spanInput}
                />
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Add</Text>
                </Pressable>
            </View>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Reset</Text>
            </Pressable>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: colors.green1,
        padding: 10,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginBottom: 10,
    },
    button: {
        padding: 10,
        backgroundColor: colors.green2,
    },
    span: {
        backgroundColor: colors.lightGray,
        width: "43%",
        padding: 10,
        textAlign: "center",
        fontSize: 20,
        fontFamily: "Lobster",
    },
    spanInput: {
        backgroundColor: colors.lightGray,
        width: "43%",
        padding: 10,
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Lobster",
    },
    buttonText: {
        fontSize: 18,
        fontFamily: "Josefin",
    },
});
