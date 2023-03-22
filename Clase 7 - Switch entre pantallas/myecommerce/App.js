import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font'
import { fonts } from './Global/fonts';
import Home from './Screens/Home';
import { colors } from './Global/colors';
import { useState } from 'react';
import ItemDetail from './Screens/ItemDetail';
import ItemListCategories from './Screens/ItemListCategory';

export default function App() {

  const [fontsLoaded] = useFonts(fonts);

  const [screenSelected, setScreenSelected] = useState({
    home: true,
    category: "",
    idDetail: "",
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {
        screenSelected.home ? <Home setScreenSelected = {setScreenSelected}/> :
        screenSelected.category ? <ItemListCategories category={screenSelected.category}/> :
        <ItemDetail detail={screenSelected.idDetail}/>
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
