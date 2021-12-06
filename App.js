import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { Button, Image, StyleSheet, View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/home'
import Users from './src/users'


const Stack = createNativeStackNavigator()
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home' >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeSettings" >
        {props => <Text> Home Settings </Text>}
      </Stack.Screen>
      <Stack.Screen name="HomePosts" >
        {props => <Text> Home Posts </Text>}
      </Stack.Screen>
      <Stack.Screen name="Home2" >
        {props => <Text> Home 2 </Text>}
      </Stack.Screen>
    </Stack.Navigator>
    )
}


const Tab = createBottomTabNavigator()
const UserTab = () => {
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'UserSettings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'User') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'UserProfile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name='User' component={Users} />
      <Tab.Screen name='UserSettings' >
        { props => <Text>User Settings</Text> }
      </Tab.Screen>
      <Tab.Screen name='UserProfile' >
        { props => <Text>User Profile</Text> }
      </Tab.Screen>
    </Tab.Navigator>
  )
}


const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' >
        <Drawer.Screen name='HomeStack' component={HomeStack} />
        <Drawer.Screen name='Users' component={UserTab} />
        <Drawer.Screen name='Posts'>
          { props => <Text> Posts Main </Text> }
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})