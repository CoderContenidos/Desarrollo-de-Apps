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

const ItemListCategories = ({
    navigation,
}) => {
    const productsFilteredByCategory = useSelector(state => state.shopReducer.value.productsFilteredByCategory);
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState("");
 
    useEffect(() => {
        const productsFiltered = productsFilteredByCategory.filter((product) =>
            product.title.includes(keyword)
        );
        setProducts(productsFiltered);
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
