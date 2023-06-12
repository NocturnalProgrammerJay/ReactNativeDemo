import React from "react"
import { StyleSheet, Dimensions, Text, TouchableWithoutFeedback, View, Image, SafeAreaView, Platform, StatusBar} from 'react-native'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import WelcomeScreen from "./app/screens/WelcomeScreen"
import ViewImageScreen from "./app/screens/ViewImageScreen"

export default function App() {
  // console.log(Dimensions.get("screen"))
  // console.log(useDimensions)
  // const {landscape} = useDeviceOrientation()

  return (
    <ViewImageScreen />
    // <WelcomeScreen/>
    // <View
    //   style={{
    //     backgroundColor: "#fff",
    //     flex: 1,
    //     justifyContent: "center",
    //     flexDirection: "row",
    //     alignItems: "center"
    //   }}
    //   >
    //   <View style={{
    //     backgroundColor: "dodgerblue",
    //     width: 100,
    //     height: 100
    //   }}/>
    //   <View style={{
    //     backgroundColor: "gold",
    //     width: 100,
    //     height: 100
    //   }}/>
    //   <View style={{
    //     backgroundColor: "tomato",
    //     width: 100,
    //     height: 100
    //   }}/>
    // </View>

    // <SafeAreaView style={styles.container}>
    //   <View style={{
    //     backgroundColor: "dodgeblue",
    //     width: "100%",
    //     height: landscape ? 30 : 100
    //   }}>

    //   </View>
    // </SafeAreaView>
  )
}
// bs comment 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
})
