import React from 'react'
import { Text } from 'react-native'
import { Grid, Flex, Header, Footer } from './index'

const styles = {
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  }
}

class Layout extends React.Component {
  render () {
    const { title, children } = this.props
    return (
      <Grid flexDirection='column'>
        <Header>
          <Text style={styles.headerText}>{ title }</Text>
        </Header>
        <Grid flexDirection='column'>
          <Flex size={1}> 
            { children }
          </Flex>
        </Grid>
        <Footer />
      </Grid>
    )
  }
}

export default Layout;
