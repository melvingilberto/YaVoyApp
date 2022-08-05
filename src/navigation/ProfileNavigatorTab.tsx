import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from '../screens/profile/ProfileScreen';

export type RootStackNavigationParams = {
    ProfileScreen: undefined;
}

const Stack = createStackNavigator<RootStackNavigationParams>();

export const ProfileNavigatorTab = () => {
  return (
    <Stack.Navigator

        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }            
        }}
    >
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}