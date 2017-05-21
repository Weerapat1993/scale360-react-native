import React from 'react'
import { Text } from 'react-native'
import { Grid, Flex, Header, Footer } from './index'

class Layout extends React.Component {
  render () {
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
        <Footer />
      </Grid>
    )
  }
}

export default Layout;
