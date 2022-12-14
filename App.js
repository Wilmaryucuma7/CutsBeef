import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from "expo-font";
import Home from './screens/Home';
import CutsInfo from './screens/CutsInfo';
import Options from './screens/Options';
import MyStack from './stacks/MyStack';

export default function App() {
  

  
   const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <MyStack /> : <AppLoading />;
  }
  
}



async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "quicksand-700": require("./assets/fonts/quicksand-700.ttf"),
      "quicksand-500": require("./assets/fonts/quicksand-500.ttf"),
      "roboto-regular": require("./assets/fonts/roboto-regular.ttf"),
      "noto-serif-700": require("./assets/fonts/noto-serif-700.ttf"),
      "noto-sans-mono-700": require("./assets/fonts/noto-sans-mono-700.ttf"),
      "roboto-700": require("./assets/fonts/roboto-700.ttf"),
      "roboto-500": require("./assets/fonts/roboto-500.ttf"),
      "quicksand-regular": require("./assets/fonts/quicksand-regular.ttf"),
      "noto-serif-italic": require("./assets/fonts/noto-serif-italic.ttf"),
      "noto-sans-adlam-700": require("./assets/fonts/noto-sans-adlam-700.ttf")
    })
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
