import React from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

class ReduxScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Redux',
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text>Redux count: {this.props.count}</Text>
        <Button
          title="Increment"
          onPress={this.props.increment}
        />
        <Button
          title="Decrement"
          onPress={this.props.decrement}
        />
        <Button
          title="Reset"
          onPress={this.props.reset}
        />
      </View>
    )
  }
}

export default connect(
  state => ({ count: state.count }),
  dispatch => ({
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' })
  })
)(ReduxScreen)