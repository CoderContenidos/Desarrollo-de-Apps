import React from "react";
import { colors } from "../Global/colors";
import {
    Image,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
    Pressable,
} from "react-native";

const ProductItem = ({ item, setProductDetailId}) => {
    const { height, width } = useWindowDimensions();

    console.log(height, width);

    return (
        <Pressable 
            style={styles.card}
            onPress = {()=> setProductDetailId(item.id)}
        >
            <Text style={width < 350 ? styles.textMin : styles.text}>
                {item.title}
            </Text>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: item.thumbnail }}
            />
        </Pressable>
    );
};

export default ProductItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.green3,
        padding: 20,
        margin: 15,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    image: {
        minHeight: 90,
        minWidth: 90,
        width: "30%",
        borderRadius: 5,
    },
    text: {
        width: "70%",
        fontFamily: "Josefin",
        fontSize: 20,
        color: colors.lightGray,
    },
    textMin: {
        width: "70%",
        fontFamily: "Josefin",
        fontSize: 15,
        color: colors.lightGray,
    },
});
