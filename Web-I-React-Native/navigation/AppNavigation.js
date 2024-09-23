import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import LoginScreen from '../screens/LoginScreen';
import PilotFinderScreen from '../screens/PilotFinderScreen';

enableScreens(); 

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="PilotFinder" 
        component={PilotFinderScreen} 
      />
     
    </Stack.Navigator>
  );
}