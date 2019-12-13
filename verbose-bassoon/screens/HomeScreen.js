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
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('precount') ? `Precounted ${navigation.getParam('precount')}` : 'Home',
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }

  render() {
    const { navigation } = this.props
    const precount = navigation.getParam('precount') ? navigation.getParam('precount') : 0
    return (
      <View style={styles.container}>
        <Ionicons name="md-musical-notes" size={32} color="green" />
        <Text>I am a bassoon that is very verbose!</Text>
        <Button
          title="Second"
          onPress={() => navigation.navigate('Second', { count: precount + 1 })}
        />
        <Button
          title="Precount"
          onPress={() => navigation.setParams({ precount: precount + 1 })}
        />
        <Text>Precount: {precount}</Text>
        <Button
          title="Reset"
          onPress={() => navigation.setParams({ precount: 0 })}
        />
      </View>
    )
  }
}