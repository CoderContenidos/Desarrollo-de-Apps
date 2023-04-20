import { fonts } from './Global/fonts';
import { useFonts } from 'expo-font'
import Navigator from './Navigation/Navigator';

export default function App() {

  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
      <Navigator/>
  );
}
