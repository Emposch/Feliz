import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/constantStore/store";
import StackNavigation from "./src/StackNavigation";
import { useFonts } from 'expo-font'


export default function App () {
  let[fontsLoaded] = useFonts({
    'bold':require('./assets/Font/Lato/Lato-Bold.ttf'),
  })
  if(!fontsLoaded){
    return <></>
  }else
  return (
    <NavigationContainer>
       <Provider store={store}>
         <StackNavigation/>
       </Provider>
    </NavigationContainer>
  );
}


