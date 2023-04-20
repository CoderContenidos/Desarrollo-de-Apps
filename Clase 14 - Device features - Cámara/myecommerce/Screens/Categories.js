import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
// import categories from '../data/categories.json';
import CategoryItem from '../Components/CategoryItem';
import Counter from '../Components/Counter';
// import { useSelector } from 'react-redux';
import { useGetCategoriesQuery } from '../services/shopService';

const Categories = ({navigation}) => {

  // const categories = useSelector(state => state.shopReducer.value.categories);

  const {data, isLoading, error} = useGetCategoriesQuery();

  return (
    <View style = {styles.container}>
      <Counter/>
      <FlatList 
        styles={styles.container}
        renderItem={({item}) => <CategoryItem 
          category={item}
          navigation = {navigation}
        />}
        data = {data}
        keyExtractor ={category => category}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingBottom: 130,
  }
})