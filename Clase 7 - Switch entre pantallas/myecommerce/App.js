import { StyleSheet, View } from 'react-native';
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

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {
        categorySelected ? 
        <ItemListCategories 
          category={categorySelected}
          setCategorySelected={setCategorySelected}
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
    // justifyContent: 'center',
  },
});
