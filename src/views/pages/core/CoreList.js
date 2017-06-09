import React, { Component } from 'react'
import { ListView } from 'react-native'
import TitleDisplay from '../../components/titleDisplay'
import CoreItem from './CoreItem'

class CoreList extends Component {
  renderRow = (rowData, sectionID, rowID) => (
    <CoreItem
      key={rowID}
      core={rowData}
      updateCore={this.props.updateCore.bind(this)}
      deleteCore={this.props.deleteCore.bind(this)} />
  )

  render() {
    const { data = [], loading } = this.props
    const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.guid !== r2.guid })
    const dataSourceClone = dataSource.cloneWithRows(data)
    const listData = !!data.length ? (
      <ListView dataSource={dataSourceClone} renderRow={this.renderRow.bind(this)} />
    ) : <TitleDisplay title='No data to display' />

    return loading ? <TitleDisplay title='Loading...' /> : listData
  }
}

export default CoreList