import React from 'react'
import { Text } from 'react-native'
import { Grid, Flex, Header, Footer } from './index'

class Layout extends React.Component {
  render () {
    console.log(this.props.navigator)
    return (
      <Grid flexDirection='column'>
        <Header>
          <Text style={{ color: 'white' }}>Header</Text>
        </Header>
        <Grid flexDirection='column'>
          <Flex size={1}> 
            { this.props.children }
          </Flex>
        </Grid>
        <Footer>
          <Text style={{ color: 'white' }}>Footer</Text>
        </Footer>
      </Grid>
    )
  }
}

export default Layout;
