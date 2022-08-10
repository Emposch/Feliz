import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavigationContainer, useFocusEffect } from '@react-navigation/native'




const Main = () => {
  const data = useSelector((store) => store?.cash)
  console.log(data)
  const dispatch = useDispatch()
  const [state, setState] = useState(null)
  useFocusEffect(
    React.useCallback(() => {
      let active = true
      const fetchAccount = async () => {
        try {
          const state = await dispatch(cashData(1))
          if (active) {
            setState(state)
          }
        } catch (e) {}
      }
      fetchAccount()
      return () => {
        active = false
      }
    }, []),
  )

  return (
    <View>
       <Wellcom/>
    </View>
      
  )
}

export default Main

const styles = StyleSheet.create({})