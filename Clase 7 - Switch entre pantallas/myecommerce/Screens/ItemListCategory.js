import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import ProductItem from "../Components/ProductItem";
import allProducts from '../data/products.json';

const ItemListCategories = ({ category }) => {

    const [products, setProducts] = useState([])

    useEffect(()=> {
        if (category) {
            const products = allProducts.filter(product => product.category === category);
            setProducts(products);
        } else {
            setProducts(allProducts);
        }
    }, [category])

    return (
        <>
            <Header title={category} />
            <View style ={styles.container}>
                <FlatList 
                    data={products}
                    renderItem = {({item})=> <ProductItem item={item}/>}
                    keyExtractor = {item => item.id}
                />  
            </View>
        </>
    );
};

export default ItemListCategories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    }
});