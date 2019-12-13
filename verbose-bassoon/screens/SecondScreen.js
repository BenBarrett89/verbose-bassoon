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
    backgroundColor: '#5c5c5c',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default class SecondScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons name="md-stopwatch" size={32} color="#baf1e4" />
        <Text>Second screen!</Text>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Second"
          onPress={() => this.props.navigation.push('Second')}
        />
        <Button
          title="Back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Start Again"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    )
  }
}