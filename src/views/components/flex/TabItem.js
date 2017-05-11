import React from 'react'
import { StyleSheet } from 'react-native'
import { Tab, Icon } from 'react-native-elements'

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
    marginTop: 12
  }
})

class TabItem extends React.Component {
  renderIcon = (icon) => (
    <Icon containerStyle={styles.iconStyle} color='white' name={icon} size={33} />
  )

  renderSelectedIcon = (icon) => (
    <Icon color={'#6296f9'} name={icon} size={30} />
  )

  render() {
    const { selectedTab, name, icon, children, changeTab } = this.props 
    return (
      <Tab
        titleStyle={styles.titleStyle}
        selectedTitleStyle={styles.selectedTitleStyle}
        selected={selectedTab === name}
        title={selectedTab === name ? name : null}
        renderIcon={() => this.renderIcon(icon)}
        renderSelectedIcon={() =>this.renderSelectedIcon(icon)}
        onPress={() => changeTab(name)} >
        { children }
      </Tab>
    )
  }
}

export default TabItem