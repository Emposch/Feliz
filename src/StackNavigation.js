import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './Screens/Auth/Login/Login'
import Wellcom from './Screens/Auth/Wellcom'
import Main from './Screens/Work/User/Main'
import Registration from './Screens/Auth/Registration/Registration'
import MainNavigation from './MainNavigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Catalog from './Screens/Work/User/Shope/Catalog'
import Shope from './Screens/Work/User/Shope'

const StackNavigation = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name='Wellcom' options={{ headerShown: false }} component={Wellcom} />
                <Stack.Screen name='Catalog' options={{ headerShown: false }} component={Catalog} />
                <Stack.Screen name='Login' options={{ headerShown: false }} component={Login} />
                <Stack.Screen name='Shope' options={{headerShown:false}} component={Shope} />
                <Stack.Screen name='Registration' options={{ headerShown: false }} component={Registration} />
                <Stack.Screen name='Main' options={{ headerShown: false }} component={Main} />
                <Stack.Screen name='MainNavigation' options={{ headerShown: false }} component={MainNavigation} />
            </Stack.Group>
        </Stack.Navigator>
    )

}

export default StackNavigation