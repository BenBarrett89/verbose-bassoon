
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Ionicons } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
        <Text>I am a bassoon that is very verbose!</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);