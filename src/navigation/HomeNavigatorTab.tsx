import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';

export type RootStackNavigationParams = {
    HomeScreen: undefined;
}

const Stack = createStackNavigator<RootStackNavigationParams>();

export const HomeNavigatorTab = () => {
  return (
    <Stack.Navigator

        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }            
        }}
    >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}