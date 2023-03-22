import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font'
import { fonts } from './Global/fonts';
import Home from './Screens/Home';
import { colors } from './Global/colors';

export default function App() {

  return (
    <View style={styles.container}>
      <Home/>
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
