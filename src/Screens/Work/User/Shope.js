import { StyleSheet, Text, View ,TextInput,ScrollView,TouchableOpacity,Image,KeyboardAvoidingView,} from 'react-native'
import React from 'react'
import { borderRadius, colors, screenHeight, screenWidth } from '../../../common/Helper'
import Header from '../../../components/Header'
import img from '../../../images/logo.png'
import { useNavigation } from '@react-navigation/native'





const Shope = () => {

  return (
    <ScrollView >  
    <KeyboardAvoidingView
     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
     style={styles.container}>
    <Header name={'КАТАЛОГ'}/>
        <TouchableOpacity 
        style={styles.tovar}
        
        >
        <Text style={styles.text_shop}>ICE Tea (зеленый)</Text>
        <Text style={styles.text_shop}>Напитки</Text>
        <View>
          <Image source={img} style={styles.img} />
          </View>
          <Text style={styles.money}>20 com</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default Shope

const styles = StyleSheet.create({
  container:{
    flex:1
  },
    tovar:{
      width:screenWidth*0.9,
      height:screenHeight*0.13,
      backgroundColor:colors.green,
      margin:screenWidth*0.05,
      borderRadius:borderRadius.medium,
      padding:screenHeight*0.01,
    },
    text_shop:{
      marginLeft:screenWidth*0.2
    },
    img:{
      width:screenWidth*0.15,
      height:screenWidth*0.15,
      marginTop:-screenHeight*0.03
    },
    money:{
      textAlign:'right',
    }
})