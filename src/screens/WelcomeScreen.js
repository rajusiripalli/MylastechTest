import { StyleSheet, Text, View, StatusBar, ImageBackground, Image } from 'react-native'
import React from 'react'

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor="#f7f0ef" />

<ImageBackground source={require('../assets/images/Vector-2.png')} resizeMode="contain" style={styles.image}>
    <View style={{flex: 0.6}}>
    <ImageBackground style={{flex:1}} source={require('../assets/images/Vector-1.png')} resizeMode="cover" >
    
    <Image resizeMode="contain" style={{width: 230, height:350, position:'absolute', top: 88, left: 58,transform: [{ rotate: '2deg'}], }} source={require('../assets/images/grocerycustomer.png')}/>
</ImageBackground>
    </View>
    <View style={{flex:0.4, }}>

    </View>

</ImageBackground>
<Image source={require('../assets/images/strawberryicon.png')} style={{position:'absolute', top: 40, left:45}} />
<Image source={require('../assets/images/grapes.png')} style={{position:'absolute', top: 350, left:25}} />
<Image source={require('../assets/images/banana.png')} style={{position:'absolute', top: 450, left: 235}} />

</View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
      },
      image: {
        flex: 1,
        
       // justifyContent: "center"
      },
})