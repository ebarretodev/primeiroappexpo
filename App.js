import 'react-native-gesture-handler';
import { useState } from 'react';
import CustomButton from './src/components/CustomButton';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './src/Screens/ScreenA';
import ScreenB from './src/Screens/ScreenB';

const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ()=>null
        }}
      >
        <Stack.Screen
          name="Screen_A"
          component={ScreenA}
          // options={{
          //   header: () => null
          // }}
        />
        <Stack.Screen
          name="Screen_B"
          component={ScreenB}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}