import { StyleSheet, Text, View,Image, TextInput , TouchableOpacity,ScrollView  } from 'react-native'
import iconU from '../../../images/Vector(2).png'
import React,{useState} from 'react'
import { baseText, borderRadius, colors, screenHeight, screenWidth } from '../../../common/Helper'
import { useNavigation } from '@react-navigation/native'
import { sumbitAuth } from '../../../api'




const Login = () => {
  const navigation = useNavigation();

  const [auth, setAuth] = useState([]);

  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");

  console.log(auth);

  const storeData = async (token) => {
    try {
      await AsyncStorage.setItem('tokenUser', token)
    } catch (e) {
      // Нечего потому что нахер надо сохранять ошибку!!!
    }
  }

  return (
    <ScrollView>
         <View>
             <Image source={iconU} style={styles.icon}></Image>
         </View>
         <View style={styles.regView}>
             <Text style={[styles.regtxt,baseText.textH2]}>Добро пожаловать в {'\n'}cashback-сервис{'\n'} FELIZ </Text>
             <Text style={[styles.regtext,baseText.textH4]}> Введите свои данные</Text>
             <TextInput
             onChangeText={(text) => setPhone(text)}
             style={styles.regInput}
             placeholder='Номер телефона'
             placeholderTextColor='#c7d2d0'
             />
             <TextInput
              onChangeText={(text) => {
                setPassword(text);
              }}
             style={styles.regInput2}
             placeholder='Пароль'
             placeholderTextColor='#c7d2d0'
             />
             <TouchableOpacity>
              <Text style={{color:'#c7d2d0',fontSize:12}}>Забыли пароль?</Text>
             </TouchableOpacity>
             <TouchableOpacity 
             style={styles.regBtn}
             onPress={async () => {
              sumbitAuth(
                phone,
                password,
                setAuth,
                navigation,
                storeData,
              );
            }}
             >
               <Text style={{color:colors.green}}>ВОЙТИ</Text>
             </TouchableOpacity>
         </View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  icon:{
    width:screenWidth*0.4,
    // height:screenHeight*0.2,
    marginTop:screenHeight*0.035,
    marginLeft:'65%'
  },
  regView:{
    width:screenWidth*0.8,
    paddingVertical:Platform.OS === 'ios' ? 40 : 50 ,
    backgroundColor:colors.green,
    borderRadius:borderRadius.medium,
    marginLeft:'10%',
    marginTop:'15%',
    alignItems:'center',
    paddingTop:'10%'
  },
  regtxt:{
    color:colors.white,
    textAlign:'center',
    paddingBottom:'9%'
  },
  regtext:{
    color:colors.white,
    textAlign:'center',
    paddingBottom:'12%'
  },
  regInput:{
    width:screenWidth*0.6,
    height:screenHeight*0.04,
    color:colors.smallGrey,
    textAlign:'center',
    borderBottomColor:colors.smallGrey,
    borderBottomWidth: 1,
    marginBottom:'4%'
  },
  regInput2:{
    width:screenWidth*0.6,
    height:screenHeight*0.04,
    color:colors.smallGrey,
    textAlign:'center',
    borderBottomColor:colors.smallGrey,
    borderBottomWidth: 1,
    marginBottom:'4%'
  },
  regBtn:{
    marginTop:'6%',
    backgroundColor:colors.white,
    padding:45,
    borderRadius:borderRadius.large,
    paddingVertical:10,
  }
})