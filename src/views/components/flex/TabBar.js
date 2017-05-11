import React from 'react'
import { StyleSheet } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'

const tabs = [
  {
    name: 'home',
    icon: 'home',
  },
  {
    name: 'feed',
    icon: 'whatshot',
  },
  {
    name: 'profile',
    icon: 'person',
  },
  {
    name: 'about',
    icon: 'info',
  }
]

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#3f51b5',
  },
  titleStyle: {
    fontWeight: 'bold', 
    fontSize: 10, 
    color: 'white'
  },
  selectedTitleStyle: {
    marginTop: -1, 
    marginBottom: 6, 
    color: 'white'
  },
  iconStyle: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 12,
  }
})

class TabBar extends React.Component { 
  constructor() {
    super()
    this.state = {
      selectedTab: 'home',
    }
  }

  changeTab (selectedTab) {
    this.setState({selectedTab})
  }

  renderIcon = (icon) => (
    <Icon containerStyle={styles.iconStyle} color='white' name={icon} size={33} />
  )

  renderSelectedIcon = (icon) => (
    <Icon color={'#6296f9'} name={icon} size={30} />
  )

  render() {
    const { selectedTab } = this.state
    const data = tabs.map((item, i) => (
      <Tab
        key={i}
        titleStyle={styles.titleStyle}
        selectedTitleStyle={styles.selectedTitleStyle}
        selected={selectedTab === item.name}
        title={selectedTab === item.name ? item.name.toUpperCase() : null}
        renderIcon={() => this.renderIcon(item.icon)}
        renderSelectedIcon={() => this.renderSelectedIcon(item.icon)}
        onPress={() => this.changeTab(item.name)}>
        <Icon color={'#6296f9'} name={item.icon} size={30} />
      </Tab>
    ))
    return (
      <Tabs tabBarStyle={styles.tabBarStyle}>
        {data}
      </Tabs>
    )
  }
}

export default TabBar