import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
        <Text>I am a bassoon that is very verbose!</Text>
      </View>
    );
  }
}