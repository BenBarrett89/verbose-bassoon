import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../screens/HomeScreen'
import SecondScreen from '../screens/SecondScreen'
import ReduxScreen from '../screens/ReduxScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Second: SecondScreen,
    Redux: ReduxScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#5c5c5c',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
)

export default createAppContainer(AppNavigator);