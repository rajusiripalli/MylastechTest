import { StyleSheet, Text, View, StatusBar, ImageBackground } from 'react-native'
import React, {useEffect} from 'react'


const image = { uri: "https://reactjs.org/logo-og.png" };

const SplashScreen = ({navigation}) => {
    useEffect(()=> {
        setTimeout(() => navigation.navigate('Welcome'), 3000)

    }, [])

  return (

    <View style={styles.container}>
            <StatusBar backgroundColor="#fcf7f6" />

    <ImageBackground source={require('../assets/images/splashbg.png')} resizeMode="cover" style={styles.image}>
    </ImageBackground>
  </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: "center"
      },
      text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
      }
})