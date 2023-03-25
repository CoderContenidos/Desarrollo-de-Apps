import {
    FlatList,
    Pressable,
    StyleSheet,
    View,
    Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import ProductItem from "../Components/ProductItem";
import allProducts from "../data/products.json";
import Search from "../Components/Search";

const ItemListCategories = ({
    navigation,
    route,
}) => {
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState("");

    const {category} = route.params
 
    useEffect(() => {
        if (category) {
            const products = allProducts.filter(
                (product) => product.category === category
            );
            const productsFiltered = products.filter((product) =>
                product.title.includes(keyword)
            );
            setProducts(productsFiltered);
        } else {
            const productsFiltered = allProducts.filter((product) =>
                product.title.includes(keyword)
            );
            setProducts(productsFiltered);
        }
    }, [category, keyword]);

    return (
        <>
            <Pressable onPress={() => navigation.goBack()}>
                <Text>Go back</Text>
            </Pressable>
            <Search onSearch={setKeyword} />
            <View style={styles.container}>
                <FlatList
                    data={products}
                    renderItem={({ item }) => (
                        <ProductItem
                            item={item}
                            navigation={navigation}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </>
    );
};

export default ItemListCategories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
});
