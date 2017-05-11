import React from 'react'
import { Actions } from 'react-native-redux-router'
import { List, ListItem } from 'react-native-elements'
import { Grid, Flex } from '../../components/flex'

const list = [
  {
    title: 'Home',
    icon: 'home'
  },
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
]

class Menu extends React.Component {
  render() {
    return (
      <Grid>
        <Flex>
          <List>
            {
              list.map((item, i) => (
                <ListItem
                  onPress={() => Actions.pop()}
                  key={i}
                  title={item.title}
                  leftIcon={{name: item.icon}}
                />
              ))
            }
          </List>
        </Flex>
      </Grid>
    )
  }
}

//=====================================
//  CONNECT
//-------------------------------------

export default Menu;

