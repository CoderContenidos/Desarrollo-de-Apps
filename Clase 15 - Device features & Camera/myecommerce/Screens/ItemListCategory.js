import {
    FlatList,
    Pressable,
    StyleSheet,
    View,
    Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import ProductItem from "../Components/ProductItem";
import Search from "../Components/Search";
import { useSelector } from "react-redux";
import { useGetProductsbyCategoryQuery } from "../services/shopService";

const ItemListCategories = ({
    navigation,
}) => {
    const category = useSelector(state => state.shopReducer.value.categorySelected)
    const {data: productsFilteredByCategory, isLoading, error} = useGetProductsbyCategoryQuery(category);
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState("");

    console.log();
 
    useEffect(() => {
        if (productsFilteredByCategory) {
            const productsRaw = Object.values(productsFilteredByCategory)
            const productsFiltered = productsRaw.filter((product) =>
                product.title.includes(keyword)
            );
            setProducts(productsFiltered);
        }
    }, [productsFilteredByCategory, keyword]);

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
