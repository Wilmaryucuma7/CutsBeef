import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CutsInfo from '../screens/CutsInfo';
import Home from '../screens/Home';
import Options from '../screens/Options';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
          headerStyle: styles.headerStyle,
          headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Options" component={Options} />
      <Stack.Screen name="CutsInfo" component={CutsInfo} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        height:116
    },
})

export default MyStack;