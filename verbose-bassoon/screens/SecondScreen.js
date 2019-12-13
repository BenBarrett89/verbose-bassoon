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
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam('count')} seconds`,
    }
  }

  render() {
    const { navigation } = this.props
    const count = navigation.getParam('count')
    return (
      <View style={styles.container}>
        <Ionicons name="md-stopwatch" size={32} color="#baf1e4" />
        <Text>Second screen!</Text>
        <Text>{navigation.getParam('count')} seconds</Text>
        <Button
          title="Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Second"
          onPress={() => navigation.push('Second', { count: count + 1 })}
        />
        <Button
          title="Back"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Start Again"
          onPress={() => navigation.popToTop()}
        />
        <Button
          title="Really Start Again"
          onPress={() => navigation.navigate('Home', { precount: 0 })}
        />
      </View>
    )
  }
}