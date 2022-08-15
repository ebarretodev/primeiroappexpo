import 'react-native-gesture-handler';
import { useState } from 'react';
import CustomButton from './src/components/CustomButton';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import ScreenA from './src/Screens/ScreenA';
import ScreenB from './src/Screens/ScreenB';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createBottomTabNavigator()
// const Tab = createMaterialBottomTabNavigator()
const Tab = createMaterialTopTabNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // header: () => null,

          tabBarIcon: ({ focused, size, color }) => {
            let iconName
            if (route.name === 'Screen_A') {
              iconName = 'autoprefixer'
              size = focused ? 25 : 20
              // color = focused ? '#f0f' : '#555'
            } else if (route.name === 'Screen_B') {
              iconName = 'btc'
              size = focused ? 25 : 20
              // color = focused ? '#f0f' : '#555'
            }
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color = { color }
              />
            )
          },
          // tabBarActiveTintColor: '#f0f',
          // tabBarInactiveTintColor: '#555',
          // tabBarActiveBackgroundColor: '#fff',
          // tabBarInactiveBackgroundColor: '#999',
          // tabBarShowLabel: true,
          // tabBarLabelStyle: { fontSize: 14}
        })}
        activeColor='#f0edf6'
        inactiveColor='#3e2465'
        barStyle={{
          backgroundColor: '#694fad'
        }}
      >
        <Tab.Screen
          name="Screen_A"
          component={ScreenA}
          options={{
            // tabBarBadge : 3
          }}
        />
        <Tab.Screen
          name="Screen_B"
          component={ScreenB}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}