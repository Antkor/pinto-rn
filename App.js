import * as React from 'react';
import Navigator from './src/routes/mainDrawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  YanoneKaffeesatz_400Regular,
} from '@expo-google-fonts/yanone-kaffeesatz';


export default function App() {
  let [fontsLoaded] = useFonts({
    YanoneKaffeesatz_400Regular,
  });

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
