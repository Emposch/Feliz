import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../../components/Header'
import { baseText, borderRadius, colors, screenHeight, screenWidth } from '../../../common/Helper'


const Profile = () => {
  return (
    <View style={styles.container}> 
    <Header name={'ПРОФИЛЬ'}/>
      <View style={styles.cont}>
     <View style={styles.viewInput}>
       <Text style={styles.Text}>Имя:  </Text>
       <TextInput placeholder='_ _ _ _ _ _ _ _ _ _ _ _ _ _'/>
     </View>
     <View style={styles.viewInput}>
       <Text style={styles.Text}>email:  </Text>
       <TextInput placeholder='_ _ _ _ _ _ _ _ _ _ _ _ _ _'/>
     </View>
     <View style={styles.viewInput}>
       <Text style={styles.Text}>Номер телефона:  </Text>
       <TextInput placeholder='_ _ _ _ _ _ _ _ _ _ _ _ _ _'/>
     </View>
     <View style={styles.viewInput}>
       <Text style={styles.Text}>Пароль:  </Text>
       <TextInput placeholder='_ _ _ _ _ _ _ _ _ _ _ _ _ _'/>
     </View>
     <View style={styles.btnview}>
     <TouchableOpacity>
        <View  style={styles.btn}>
          <Text  style={[styles.btntext,baseText.textH3]}>изменить</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.btn}>
          <Text style={[styles.btntext,baseText.textH3]}>сохранить</Text>
        </View>
      </TouchableOpacity>
     </View>
      </View>  
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  },
   cont:{
     borderRadius:borderRadius.medium,
     width:screenWidth*0.9,
     height:screenHeight*0.5,
     backgroundColor:colors.green,
     marginTop:screenWidth*0.2,
     padding:screenHeight*0.04,
   },
   viewInput:{
     flexDirection:'row',
     marginTop:screenWidth*0.07
   },
   Text:{
     color:colors.white,
   },
   btn:{
     backgroundColor:colors.white,
     width:screenWidth*0.3,
     height:screenHeight*0.04,
     borderRadius:borderRadius.small,
     marginLeft:30,
   },
   btntext:{
     textAlign:'center',
     justifyContent:'center',
     alignItems:'center',
     color:colors.green,
   },
   btnview:{
     flexDirection:'row',
     justifyContent:'space-evenly',
     marginTop:screenHeight*0.13,
     marginLeft:20,
   }
})