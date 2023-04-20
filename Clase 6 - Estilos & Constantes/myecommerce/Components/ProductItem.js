import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors';

const ProductItem = ({item}) => {
  
  return (
    <View style = {styles.card}>
      <Text style = {styles.text}>{item.title}</Text>
      <Image 
        style = {styles.image} 
        resizeMode = "cover"
        source={{uri: item.images[0]}}
      />
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  card: {
    height: 100,
    backgroundColor: colors.green3,
    padding: 20,
    margin: 15,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 5,
  },
  text: {
    fontFamily: 'Josefin',
    fontSize: 20,
    color: colors.lightGray
  }
})