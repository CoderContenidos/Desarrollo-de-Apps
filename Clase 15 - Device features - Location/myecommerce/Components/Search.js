import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import { colors } from "../Global/colors";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Search = ({ onSearch }) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    const search = () => {
        console.log(input)
        const expression = /\d/; //Expresión que evalúa si hay presente al menos un número
        if (expression.test(input)) {
            setError("Only search letters");
        } else {
            setError("");
            onSearch(input);
        }
    };

    const removeInput = () => {
        setInput("");
        setError("")
    };

    console.log(error);

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={input}
                    onChangeText={setInput}
                    placeholder="Search product..."
                />
                <Pressable onPress={search}>
                    <AntDesign name="search1" size={25} color="black" />
                </Pressable>
                <Pressable onPress={removeInput}>
                    <Entypo name="circle-with-cross" size={25} color="black" />
                </Pressable>
            </View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        paddingTop: 10,
    },
    input: {
        color: "white",
        backgroundColor: colors.green3,
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.lightGray,
        width: "80%",
        fontSize: 20,
    },
    errorText: {
        color: "red",
        fontSize: 15,
        fontStyle: "italic",
    },
});
