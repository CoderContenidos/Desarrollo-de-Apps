import { fonts } from './Global/fonts';
import { useFonts } from 'expo-font'
import Navigator from './Navigation/ShopStack';
import TabNavigator from './Navigation/TabNavigator';

export default function App() {

  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
      <TabNavigator/>
  );
}
