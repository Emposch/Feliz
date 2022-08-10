import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import iconU from '../../../images/Vector(2).png'
import { baseText, borderRadius, colors, screenHeight, screenWidth } from '../../../common/Helper'
import { useNavigation } from '@react-navigation/native'
import { sumbit } from '../../../api'





const Registration = () => {
  const navigation = useNavigation();

  const [userName, SetUserName] = useState('')
  const [email, SetEmail] = useState('')
  const [phone, SetPhone] = useState('')
  const [password, SetPassword] = useState('')
  const [password2, SetPassword2] = useState('')
  const [err, setErr] = useState()

  const [regis, setRegis] = useState([])

  console.log(regis);

  const storeData = async (token) => {
    try {
      await AsyncStorage.setItem('tokenUser', token)
    } catch (e) {
      // Нечего потому что нахер над сохранять ошибку!!!
    }
  }




  return (
    <View>
      <View >
        <Image source={iconU} style={styles.icon}></Image>
      </View>
      <View style={styles.Regist}>
        <Text style={[styles.Registtext, baseText.textH2]}>Добро пожаловать в {'\n'}cashback-сервис{'\n'} FELIZ </Text>
        <Text style={[styles.Registtext, baseText.textH4]}> Пройдите пажалуйста {'\n'}регистрацию</Text>

        <TextInput onChangeText={(text) => SetUserName(text)} style={styles.RegistInput} placeholderTextColor='#BFCBC9' placeholder='Имя' />
        <TextInput onChangeText={(text) => SetEmail(text)} style={styles.RegistInput} placeholderTextColor='#BFCBC9' placeholder='Email' />
        <TextInput onChangeText={(text) => SetPhone(text)} style={styles.RegistInput} placeholderTextColor='#BFCBC9' placeholder='Номер телефона' />
        <TextInput onChangeText={(text) => SetPassword(text)} style={styles.RegistInput} placeholderTextColor='#BFCBC9' placeholder='Пароль' />
        <TextInput onChangeText={(text) => SetPassword2(text)} style={styles.RegistInput} placeholderTextColor='#BFCBC9' placeholder='Повторите пароль' />
        <TouchableOpacity
          style={styles.RegistBtn} onPress={() => {
            sumbit(userName, email, phone, password, password2, setRegis, navigation, storeData)
          }} >
          <Text style={{ color: colors.green, fontSize: 15, }}>ЗАРЕГИСТРИРОВАТЬСЯ</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Registration

const styles = StyleSheet.create({
  icon: {
    width: screenWidth * 0.4,
    // height:screenHeight*0.2,
    marginTop: screenHeight * 0.035,
    marginLeft: '65%'
  },
  Regist: {
    width: screenWidth * 0.8,
    paddingVertical: Platform.OS === 'ios' ? 30 : 50,
    backgroundColor: colors.green,
    borderRadius: borderRadius.medium,
    marginLeft: '10%',
    marginTop: '5%',
    alignItems: 'center',
    paddingTop: '10%'
  },
  Registtext: {
    color: colors.white,
    textAlign: 'center',
    paddingBottom: '9%'
  },
  RegistInput: {
    width: screenWidth * 0.6,
    height: screenHeight * 0.04,
    color: '#79938e',
    textAlign: 'center',
    borderBottomColor: colors.smallGrey,
    borderBottomWidth: 1,
    marginBottom: '4%'
  },
  RegistBtn: {
    marginTop: '6%',
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: borderRadius.large,
    paddingVertical: 10,
  }
})