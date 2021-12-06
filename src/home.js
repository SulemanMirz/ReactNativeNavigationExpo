import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Home = (props) => {
    // console.log(props)
    // let s = 'Luqman'
    // let r = s.split("").reverse().join("") // reverse the string
    // console.log(r);

    return (
        <View>
            {/* <Text>Home</Text>
            {
                props.route.params ?
                <Text>{props.route.params.active}</Text>
                :null    
            }
            <Button
                title='Go to Users'
                onPress={()=> props.navigation.navigate('Users',{
                    id:56,
                    // codeName:'slmn'
                })}
            /> */}
            <Button
                title='Go to Home Settings'
                onPress={()=> props.navigation.navigate('HomeSettings')}
            />
            <Button
                title='Go to Home Posts'
                onPress={()=> props.navigation.navigate('HomePosts')}
            />
            <Button
                title='Go to Home2'
                onPress={()=> props.navigation.navigate('Home2')}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
