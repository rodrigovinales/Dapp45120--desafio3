import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import ShopNavigator from './navigation/ShopNavigator'

export default function App() {

  const [fontsLoaded] = useFonts({
    'IndieFlower-Regular': require('./assets/fonts/IndieFlower-Regular.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'SmoochSans-Regular': require('./assets/fonts/SmoochSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
      <ShopNavigator />
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
