import { ColorValue, Dimensions, StyleSheet } from 'react-native'

// Dimensions

export const screenWidth = Dimensions.get('window').width

export const screenHeight = Dimensions.get('window').height

// Scale

export const widthScale = screenWidth / 375

export const heightScale = screenHeight / 812



export const baseStyle = StyleSheet.create({
  screenView: {
    flex: 1,
  },

  scrollView: {
    flexGrow: 1,
  },

  row: {
    flexDirection: 'row',
  },

})




export const colors = {
    green:'#456a62',

    grey:'#eaeeed',
    
    smallGrey:'#79938e',

    white:"#ffffff",

    shadow :'#d1d9d8',
    
    yellow:'#FFD600'
}




export const borderRadius = {

  small: 10,

  medium: 20,

  large: 36,

  square:'0px 0px 20px 20px;'
}


export const baseText = StyleSheet.create({
  
  textH1: {

    fontFamily: 'bold',

    fontSize: 24,

  },
  textH2: {

    fontFamily: 'bold',

    fontSize: 20,

  },
  textH3: {

    fontFamily: 'bold',

    fontSize: 18,

  },
  textH4: {

    fontFamily: 'bold',

    fontSize: 16,

  },
  textH5: {

    fontFamily: 'bold',

    fontSize: 14,

  },
  textH6: {

    fontFamily: 'bold',

    fontSize: 12,

  },
})