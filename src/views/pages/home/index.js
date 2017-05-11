import React from 'react'
import { Actions } from 'react-native-redux-router'
import { Button } from 'react-native-elements'
import { Layout, Flex } from '../../components/flex'

const styles = {
  padding: 10,
  justifyContent: 'center',
} 


class Home extends React.Component {
  render () {
    return (
      <Layout>
        <Flex size={1} style={styles}>
          <Button onPress={Actions['menu']} title='Go to Menu' />
        </Flex>
        <Flex size={1} style={styles}>
          <Button onPress={Actions['task']} title='Go to Task' backgroundColor='blue' />
        </Flex>
        <Flex size={1} style={styles}>
          <Button onPress={Actions['form']} title='Go to Form' backgroundColor='red' />
        </Flex>
        <Flex size={1} style={styles}>
          <Button onPress={Actions['about']} title='Go to About' backgroundColor='green' />
        </Flex>
      </Layout>  
    )
  }
}

export default Home;
