import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from './styles'

class About extends React.Component {
  constructor() {
    super()

    this.onPrev = this.onPrev.bind(this)
  }
  onPrev(){
    const Actions = this.props.routes;
    if (this.props.onPrev){
        this.props.onPrev();
        return;
    }
    if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1){
        Actions.pop();
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>About</Text>
        <Button onPress={this.onPrev} title="Go to Home page" />
      </View>
    )
  }
}

export default About;
