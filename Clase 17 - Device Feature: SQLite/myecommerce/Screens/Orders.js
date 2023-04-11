import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'
import orders from '../data/orders.json'
import CartItem from '../Components/CartItem'
import OrderItem from '../Components/OrderItem'

const Orders = () => {
  return (
    <View style = {styles.container}>
        <FlatList 
            data={orders}
            renderItem = {({item}) => <OrderItem order={item}/>}
            keyExtractor = {order => order.id}
            style = {styles.list}
        />
    </View>
  )
}

export default Orders

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
    }
})