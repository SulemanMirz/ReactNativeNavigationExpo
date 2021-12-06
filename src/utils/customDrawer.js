import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { 
    DrawerContentScrollView, 
    DrawerItemList,
    DrawerItem    
} from '@react-navigation/drawer';

const MyCustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props} >
            <View>
                <Text>CustomNavDrawer</Text>
            </View>
            {/* <Button
                title='Home'
                onPress={()=> props.navigation.navigate('Home')}
            />
            <Button
                title='Users'
                onPress={()=> props.navigation.navigate('Users')}
            /> */}
            <DrawerItemList {...props} />
            <DrawerItem 
                label='Contact Us' 
                onPress={()=>alert('Thanks')}
            />
        </DrawerContentScrollView>
    )
}

export default MyCustomDrawer

const styles = StyleSheet.create({})
