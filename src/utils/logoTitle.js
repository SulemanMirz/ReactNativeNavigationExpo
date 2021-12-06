import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import Logo from '../images/paypal-logo.png'

const LogoTitle = () => {
    return (
        <View>
            <Image
                source={Logo}
                style={{width:50, height:50}}
            />
        </View>
    )
}

export default LogoTitle

const styles = StyleSheet.create({})
