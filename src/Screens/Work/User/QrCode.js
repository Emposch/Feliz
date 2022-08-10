import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../components/Header'

const QrCode = () => {
  return (
    <View style={styles.container}>
      <Header name={'QR-CODE'}/>
      <Text>QrCode</Text>
    </View>
  )
}

export default QrCode

const styles = StyleSheet.create({
  
})