import { fonts } from './Global/fonts';
import { useFonts } from 'expo-font'
import { Provider, useDispatch } from 'react-redux';
import Store from './Store';
import MainNavigator from './Navigation/MainNavigator';
import { init } from './db';

init()
  .then(() => console.log('DB Initialized'))
  .catch(err => {
    console.log("Initialization DB failed:");
    console.log(err.message);
  })

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
