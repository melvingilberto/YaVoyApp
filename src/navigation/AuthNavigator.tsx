import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/login/LoginScreen';
import { RegisterScreen } from '../screens/register/RegisterScreen';
import { GeneralBottonTabBarContainer } from './GeneralBottonTabBarContainer';

export type RootStackNavigationParams = {
    LoginScreen: undefined;
    RegisterScreen: undefined;
    GeneralBottonTabBarContainer: undefined;
}

const Stack = createStackNavigator<RootStackNavigationParams>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }            
        }}
    >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="GeneralBottonTabBarContainer" component={GeneralBottonTabBarContainer} />
    </Stack.Navigator>
  );
}