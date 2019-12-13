import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../screens/HomeScreen'
import SecondScreen from '../screens/SecondScreen'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Second: SecondScreen
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(AppNavigator);