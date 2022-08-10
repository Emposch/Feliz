import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { baseText, borderRadius, colors, screenHeight, screenWidth } from '../../../../common/Helper'
import Header from '../../../../components/Header'
import { useNavigation } from '@react-navigation/native'

const Catalog = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <Header name={'КАТАЛОГ'} />
        <View style={styles.inputContent}>
          <TextInput style={styles.searchInput} placeholder='🔍 Поиск' placeholderTextColor='#386057' />
        </View>
        <View style={styles.buttons}>
          <View style={styles.buttonContent}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Shope')}>
              <View style={styles.category}>
                <Text style={[styles.categoryName, baseText.textH4,]}>Кофе</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.category}>
                <Text style={[styles.categoryName, baseText.textH4]}>Лимонады</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContent}>
            <TouchableOpacity>
              <View style={styles.category}>
                <Text style={[styles.categoryName, baseText.textH4]}>Кофе</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.category}>
                <Text style={[styles.categoryName, baseText.textH4]}>Лимонады</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContent}>
            <TouchableOpacity>
              <View style={styles.category}>
                <Text style={[styles.categoryName, baseText.textH4]}>Кофе</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.category}>
                <Text style={[styles.categoryName, baseText.textH4]}>Лимонады</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

export default Catalog

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    
  },
  searchInput: {
    width: screenWidth * 0.83,
    height: screenHeight * 0.06,
    backgroundColor:'#becbc9',
    borderRadius: borderRadius.medium,
    paddingLeft: 30,
    
  },
  inputContent: {
    width: screenWidth * 1,
    height: screenHeight * 0.1,
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: screenHeight * 0.05,
    
  },
  category: {
    width: Platform.OS === 'ios' ? 140: 150,
    height: Platform.OS === 'ios' ? 80: 95,
    borderColor:'#8ba29d',
    borderWidth: 0.5,
    borderRadius: borderRadius.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    width: screenWidth * 1,
    height: screenHeight * 0.60,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonContent: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   
  },
  categoryName: {
    color: colors.green,
    
  }
})