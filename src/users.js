import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'

const Users = () => {
    const navigation = useNavigation()
    // const route = useRoute()
    // const {id,codeName} = route.params

    useEffect(() => {
        setTimeout(() => {
            navigation.setOptions({
                headerRight: ()=> <Button
                    title='GoMore'
                    onPress={()=>alert('more')}
                />
            })
        }, 2000);
    }, [navigation])

    // console.log(navigation);

    return (
        <View>
            {/* <Text>ID: {id}</Text>
            <Text>Name: {codeName}</Text> */}
            <Button
                title='Go Back'
                onPress={()=> navigation.navigate('Home',{
                    active:'Yes'
                })}
            />
            <Button
                title='Change Header'
                onPress={()=> navigation.setOptions({
                    title:'New Title'
                })}
            />
        </View>
    )
}

export default Users

const styles = StyleSheet.create({})
