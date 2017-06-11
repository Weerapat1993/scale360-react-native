import React from 'react'
import { Actions } from 'react-native-redux-router'
import { Button } from 'react-native-elements'
import { Layout, Flex } from '../../components/flex'

const styles = {
  padding: 10,
  justifyContent: 'center',
} 

export class Home extends React.Component {
  render () {
    return (
      <Layout title='Home'>
        <Flex style={styles}>
          <Button onPress={Actions['menu']} title='Go to Menu' />
        </Flex>
        <Flex style={styles}>
          <Button onPress={Actions['core']} title='Go to Core' backgroundColor='orange' />
        </Flex>
        <Flex style={styles}>
          <Button onPress={Actions['form']} title='Go to Form' backgroundColor='red' />
        </Flex>
        <Flex style={styles}>
          <Button onPress={Actions['skill']} title='Skill Simulator' backgroundColor='blue' />
        </Flex>
        <Flex style={styles}>
          <Button onPress={Actions['about']} title='Go to About' backgroundColor='green' />
        </Flex>
      </Layout>  
    )
  }
}

export default Home;
