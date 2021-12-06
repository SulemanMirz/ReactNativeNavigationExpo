import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { Button, Image, StyleSheet, View } from 'react-native'
import {  } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const isDrawerOpen = useDrawerStatus() === 'open';

import Home from './src/home'
import Users from './src/users'
import LogoTitle from './src/utils/logoTitle'
import MyCustomDrawer from './src/utils/customDrawer';
import Logo from './src/images/paypal-logo.png'

const CustomTabBar = (props) => {
  return (
    <View style={{flexDirection:'row',width:'100%'}}>
      <Button title='Home' onPress={()=> props.navigation.navigate('Home')} />
      <Button title='User' onPress={()=> props.navigation.navigate('Users')} />
    </View>
    )
}

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}

        // From DOCs

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Users') {
              iconName = focused ? 'people' : 'people-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}

        // screenOptions={({route})=> ({
        //   tabBarIcon: ({focused,color,size}) =>{

        //     if(route.name === 'Home'){
        //       return <Ionicons name="home" size={24} color="black" />
        //     }
        //     return <Ionicons name="people" size={24} color="black" />
        //   }
        // }),
        //   {
        //   tabBarActiveTintColor: 'green',
        //   tabBarInactiveTintColor:'red',
        //   tabBarActiveBackgroundColor: '#fedcba',
        //   tabBarStyle:{
        //     backgroundColor:'grey',
        //     borderTopWidth:2,
        //     borderTopColor:'black',
        //   },
        //   tabBarLabelStyle:{
        //     fontSize:15,
        //     fontWeight:'bold'
        //   }
          
        //   // headerBackgroundContainerStyle:{backgroundColor:'#abcdef'}
        // }}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen 
          name='Users' 
          component={Users} 
          option={{
            
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})