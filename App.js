import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator}from 'react-navigation'
import Splash from './Screens/Splash'
import Sign from './Screens/Sign'
export default function App() {
  return (
   <AppContainer />
  );
}



var navigator=createSwitchNavigator({
  Splash:Splash,
  Sign:Sign,
})

const AppContainer=createAppContainer(navigator)
