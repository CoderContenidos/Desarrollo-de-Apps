import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { fonts } from './Global/fonts';
import Home from './Screens/Home';
import { colors } from './Global/colors';
import { useState } from 'react';
import ItemDetail from './Screens/ItemDetail';
import ItemListCategories from './Screens/ItemListCategory';
import { useFonts } from 'expo-font'

export default function App() {

  const [fontsLoaded] = useFonts(fonts);

  const [categorySelected, setCategorySelected] = useState("")
  const [productDetailId, setProductDetailId] = useState(0)

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {
        productDetailId ?
        <ItemDetail
          productDetailId = {productDetailId}
          setProductDetailId = {setProductDetailId}
        />
        :
        categorySelected ? 
        <ItemListCategories 
          category={categorySelected}
          setCategorySelected={setCategorySelected}
          setProductDetailId = {setProductDetailId}
        />
        :
        <Home setCategorySelected={setCategorySelected}/> 
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
