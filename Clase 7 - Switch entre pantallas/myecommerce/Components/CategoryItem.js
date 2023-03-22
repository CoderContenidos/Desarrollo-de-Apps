import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/colors";
import Card from "./Card";

const CategoryItem = ({ category, setScreenSelected }) => {

    return (
        <Pressable
            onPress={() => {
                setScreenSelected({ category, home: false });
            }}
        >
            <Card style = {styles.cardContainer}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </Pressable>
    );
};

export default CategoryItem;

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 30,
        marginVertical: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "Josefin",
        fontSize: 20,
    },
});