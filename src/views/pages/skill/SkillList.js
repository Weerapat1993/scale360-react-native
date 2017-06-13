import React, { Component } from 'react'
import { View, ListView } from 'react-native'
import { pageStyles } from './styles'

import TitleDisplay from '../../components/titleDisplay'
import SkillItem from './SkillItem'

class SkillList extends Component {

  renderRow(rowData, sectionID, rowID) {
    return (
      <SkillItem
        data={rowData}
        onClickItem={this.props.onClickItem}
        key={rowID}
        id={rowID}
      />
    )
  }

  render() {
    const { data } = this.props
    const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.guid !== r2.guid })
    return (
      <View style={pageStyles.flex}>
        { data ? 
          <ListView 
            dataSource={dataSource.cloneWithRows(data)} 
            renderRow={this.renderRow.bind(this)} 
            removeClippedSubviews={false}
          />
          : <TitleDisplay title='No data to Display' />
        }
      </View>
    )
  }
}

export default SkillList