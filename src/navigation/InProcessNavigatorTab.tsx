import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { InProcessScreen } from '../screens/inProcess/InProcessScreen';

export type RootStackNavigationParams = {
    InProcessScreen: undefined;
}

const Stack = createStackNavigator<RootStackNavigationParams>();

export const InProcessNavigatorTab = () => {
  return (
    <Stack.Navigator

        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }            
        }}
    >
        <Stack.Screen name="InProcessScreen" component={InProcessScreen} />
    </Stack.Navigator>
  );
}