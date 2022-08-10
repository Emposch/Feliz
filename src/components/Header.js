import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import logo from './../images/logo.png'
import { baseText, borderRadius, colors, screenHeight, screenWidth } from '../common/Helper'

const Header = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Text style={[styles.name,baseText.textH1]}>{props.name}</Text>
            <Image source={logo} />
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        width: screenWidth*1,
        height: Platform.OS === 'ios' ? 140 : 160,
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems:'center',
        borderBottomRightRadius: borderRadius.medium,
        borderBottomLeftRadius: borderRadius.medium,
    },
    content:{
      marginTop:screenWidth*0.1,
      width: screenWidth*0.8,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'space-between',
    },
    name:{
      color: colors.white,
    }
})