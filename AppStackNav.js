import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { Button, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './src/home'
import Users from './src/users'
import LogoTitle from './src/utils/logoTitle'

const Stack = createNativeStackNavigator()
const defaultHeader = {
  headerTitleAlign:'center',
  headerStyle:{
    backgroundColor: 'grey',
    // color: '#ffffff'
    // borderBottomWidth: 6,
    // borderBottomColor: 'black',
  },
  headerBackVisible:false,
  // headerTitleAlign:'center',
  // headerTintColor: '#abcdef',  
  // headerTitleStyle:{
  //   color:'red',
  //   fontWeight:'bold',
  //   // fontSize:10
  // },
  headerBackTitleVisible: true,
  headerBackTitle: 'back',
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"   
        mode='card'
        screenOptions={{
          ...defaultHeader,
          headerTitle: props => LogoTitle(props),
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen 
          name='Users' 
          component={Users} 
          initialParams={{ id:1, codeName:'Suleman'}} 
          options={({navigation})=>({
            headerLeft: ()=> <Button
              title='GoBack'
              onPress= {()=>navigation.navigate('Home')}
            />
          })}
            
          // {
          //   // headerTitle: props => LogoTitle(props)
          //   // title:'Userrs',            
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
