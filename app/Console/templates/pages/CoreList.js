import React, { Component } from 'react'
import { ListView } from 'react-native'
import TitleDisplay from '../../components/titleDisplay'
import ${name_pascal}Item from './${name_pascal}Item'

class ${name_pascal}List extends Component {
  renderRow(rowData, sectionID, rowID) {
    return (
      <${name_pascal}Item
        key={rowID}
        ${name}={rowData}
        update${name_pascal}={this.props.update${name_pascal}.bind(this)}
        delete${name_pascal}={this.props.delete${name_pascal}.bind(this)} />
    )
  }

  render() {
    const { data, loading } = this.props
    const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.guid !== r2.guid })
    const dataSourceClone = dataSource.cloneWithRows(data)
    const listData = !!data.length ? (
      <ListView dataSource={dataSourceClone} renderRow={this.renderRow.bind(this)} />
    ) : <TitleDisplay title='No data to display' />

    return loading ? <TitleDisplay title='Loading...' /> : listData
  }
}

export default ${name_pascal}List