import React from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native'
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
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Ionicons name="md-musical-notes" size={32} color="green" />
        <Text>I am a bassoon that is very verbose!</Text>
        <Button
          title="Second"
          onPress={() => navigation.navigate('Second', { count: 0 })}
        />
      </View>
    )
  }
}