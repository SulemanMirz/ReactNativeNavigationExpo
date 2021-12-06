import 'react-native-gesture-handler';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { Button, StyleSheet } from 'react-native'
import { createDrawerNavigator, useDrawerStatus } from '@react-navigation/drawer';

// const isDrawerOpen = useDrawerStatus() === 'open';

import Home from './src/home'
import Users from './src/users'
import LogoTitle from './src/utils/logoTitle'
import MyCustomDrawer from './src/utils/customDrawer';

const Drawer = createDrawerNavigator()


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={(props)=> <MyCustomDrawer {...props} /> }
        initialRouteName='Home' 
        // screenOptions={{
        //   drawerActiveTintColor:'red',
        //   // drawerItemStyle:{backgroundColor:'grey'},
        //   drawerLabelStyle:{fontWeight:'bold'}, // text style
        //   drawerStyle:{backgroundColor:'#cecece'},
        // }}
      >
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen 
          name='Users' 
          component={Users} 
          initialParams={{ id:1, codeName:'Suleman'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})