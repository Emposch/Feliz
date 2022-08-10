import { StyleSheet, Text, View,ScrollView  } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'
import { borderRadius, colors, screenHeight } from './common/Helper'

import Balans from './Screens/Work/User/Balans'
import QrCode from './Screens/Work/User/QrCode'
import Profile from './Screens/Work/User/Profile'
import Catalog from './Screens/Work/User/Shope/Catalog'



const MainNavigation = () => {
    const catalog = 'Shop'
    const balans = 'Balans' 
    const profile = 'Profile'
    const qrcode = 'Qr-Code'

    const Tab = createBottomTabNavigator()
    return (
     <Tab.Navigator 
      initialRouteName={catalog}
      screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
            let iconName
            let rn = route.name
            if(rn == catalog){
                iconName = focused ? 'shopping-bag':'shopping-bag'
            }else if(rn == profile){
                iconName = focused ? 'user':'user'
            }else if(rn == balans){
                iconName = focused ? 'wallet':'wallet'
            }else if(rn == qrcode){
                iconName = focused ? 'qrcode':'qrcode'
            }
            return <FontAwesome5 name = {iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor:colors.white,
        tabBarInactiveTintColor:colors.smallGrey,
        tabBarShowLabel:false,
        tabBarStyle:{
            backgroundColor:colors.green,
            paddingVertical:Platform.OS === 'ios' ? 3 : 10 ,
            height:screenHeight*0.11,
            borderTopLeftRadius:borderRadius.medium,
            borderTopRightRadius:borderRadius.medium
        }
      })}
     >
         <Tab.Screen name={catalog} component={Catalog}  options={{headerShown:false}}/>
         <Tab.Screen name={balans} component={Balans} options={{headerShown:false}}/>
         <Tab.Screen name={qrcode} component={QrCode}  options={{headerShown:false}}/> 
         <Tab.Screen name={profile} component={Profile}  options={{headerShown:false}}/>
     </Tab.Navigator>

  )
}

export default MainNavigation

const styles = StyleSheet.create({})