import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { HomeNavigatorTab } from './HomeNavigatorTab';
import { Image } from 'react-native';
import { InProcessNavigatorTab } from './InProcessNavigatorTab';
import { RecordNavigatorTab } from './RecordNavigatorTab';
import { ProfileNavigatorTab } from './ProfileNavigatorTab';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export const GeneralBottonTabBarContainer = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: '#fff'
        }}
        screenOptions={{
            headerShown: false,            
            tabBarActiveTintColor: '#F9B11F',
            tabBarInactiveTintColor: "#fff",
            tabBarStyle: {
                backgroundColor: '#F54C56', 
                paddingBottom: 10,
                borderWidth: 0,
                elevation: 0,
                height: 60
            }
        }}
    >
        <Tab.Screen 
            name="HomeNavigatorTab" 
            options={{
                tabBarIcon: ({color}) => (<Icon name='home-outline' color={color} size={25} />),
                tabBarLabel: 'Inicio',
            }}
            component={HomeNavigatorTab} />
        <Tab.Screen 
            name="InProcessNavigatorTab" 
            options={{
                tabBarIcon: ({color}) => (<Icon name='timer-outline' color={color} size={25} />),
                tabBarLabel: 'En proceso'
            }}
            component={InProcessNavigatorTab} />
        <Tab.Screen 
            name="RecordNavigatorTab" 
            options={{
                tabBarIcon: ({color}) => (<Icon name='cube-outline' color={color} size={25} />),
                tabBarLabel: 'Historial'
            }}
            component={RecordNavigatorTab} />
        <Tab.Screen 
            name="ProfileNavigatorTab" 
            options={{
                tabBarIcon: ({color}) => (<Icon name='person-outline' color={color} size={25} />),
                tabBarLabel: 'Perfil'
            }}
            component={ProfileNavigatorTab} />
    </Tab.Navigator>
  );
}