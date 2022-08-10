import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import vector from "../../images/vector.png";
import { baseText,borderRadius,colors,screenHeight,screenWidth,} from "../../common/Helper";
import { useNavigation } from "@react-navigation/native";


const Wellcom = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={vector} />
      <Text style={[styles.enterText, baseText.textH2]}>
        Встал ради чашки кофе, а потом не заметил, как день прошёл. И так каждое
        утро...
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.enterButton}
      >
        <Text style={[styles.buttonText, baseText.textH1]}>ВХОД</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=> navigation.navigate("Registration")}
      style={styles.enterButton}>
        <Text style={[styles.buttonText, baseText.textH2]}>
          ЗАРЕГИСТРИРОВАТЬСЯ
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Wellcom;
const styles = StyleSheet.create({
  container: {
    width: screenWidth * 1,
    height: screenHeight * 1.1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  enterText: {
    width: screenWidth * 0.7,
    textAlign: "center",
    marginTop: "15%",
    color: colors.green,
  },
  enterButton: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.07,
    backgroundColor: colors.green,
    borderRadius: borderRadius.medium,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  buttonText: {
    color: colors.white,
    
  },
});
