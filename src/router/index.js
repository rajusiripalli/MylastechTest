import { StyleSheet, Text, View, Easing} from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    createStackNavigator,
    CardStyleInterpolators,
  } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';



const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

const Router = () => {
  return (
    <NavigationContainer>
          <Stack.Navigator
         
         screenOptions={{
           headerShown: false,
           gestureEnabled: true,
           gestureDirection: 'horizontal',
           transitionSpec: {
             open: config,
             close: closeConfig,
           },
           cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
         }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        
        </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Router

const styles = StyleSheet.create({})