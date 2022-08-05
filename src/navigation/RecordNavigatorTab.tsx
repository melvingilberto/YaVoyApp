import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RecordScreen } from '../screens/record/RecordScreen';

export type RootStackNavigationParams = {
    RecordScreen: undefined;
}

const Stack = createStackNavigator<RootStackNavigationParams>();

export const RecordNavigatorTab = () => {
  return (
    <Stack.Navigator

        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }            
        }}
    >
        <Stack.Screen name="RecordScreen" component={RecordScreen} />
    </Stack.Navigator>
  );
}