import { fonts } from './Global/fonts';
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux';
import Store from './Store';
import MainNavigator from './Navigation/MainNavigator';

export default function App() {

  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={Store}>
      <MainNavigator/>
    </Provider>
  );
}
