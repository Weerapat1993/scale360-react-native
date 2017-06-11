import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from './styles'
import { Layout } from '../../components/flex'

class Skill extends Component {
  constructor() {
    super()

    this.onPrev = this.onPrev.bind(this)
  }
  onPrev(){
    const { routes, onPrev, navigator } = this.props
    const Actions = routes;
    if (onPrev){
        onPrev();
        return;
    }
    if (navigator && navigator.getCurrentRoutes().length > 1){
        Actions.pop();
    }
  }

  render() {
    return (
      <Layout title='Skill'>
        <View style={styles.container}>
          <Text>Skill Simmulator</Text>
          <Button onPress={this.onPrev} title="Go to Home page" />
        </View>
      </Layout>
    )
  }
}

export default Skill