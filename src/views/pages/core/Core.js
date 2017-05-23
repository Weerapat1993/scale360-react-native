import React from 'react'
import { View, Button, ListView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reset } from 'redux-form'
import { coreActions } from '../../../core/core';
import { styles } from './styles'

import TitleDisplay from '../../components/titleDisplay'
import CoreForm from '../../forms/CoreForm'
import CoreItem from './CoreItem'
import { Footer } from '../../components/flex'

class Core extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const { cores, coreActions } = this.props
      if(!cores.length){
        coreActions.fetchCore()
      }
    }, 1000);
  }

  onPrev(){
    const Actions = this.props.routes;
    if (this.props.onPrev){
        this.props.onPrev();
        return;
    }
    if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1){
        Actions.pop();
    }
  }

  createCore(values, dispatch, props) {
    const data = {
      id: new Date().getTime(),
      title: values.title,
      completed: false
    }
    dispatch(coreActions.createCore(data));
    dispatch(reset('core'));
  }

  updateCore(data) {
    this.props.coreActions.updateCore(data)
  }

  deleteCore(id) {
    this.props.coreActions.deleteCore(id)
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <CoreItem
        key={rowID}
        core={rowData}
        updateCore={(data) => this.updateCore(data)}
        deleteCore={(id) => this.deleteCore(id)} />
    )
  }

  listView(data, loading) {
    const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.guid !== r2.guid })
    const dataSourceClone = dataSource.cloneWithRows(data)
    const listData = (data.length) ? (
      <ListView dataSource={dataSourceClone} renderRow={this.renderRow.bind(this)} />
    ) : <TitleDisplay title='No data to display' />

    return loading ? <TitleDisplay title='Loading...' /> : listData
  }

  render() {
    const { cores, loading } = this.props
    return (
      <View style={styles.container}>
        <CoreForm onSubmit={this.createCore} onPrev={() => this.onPrev()} />
        { this.listView(cores, loading) }
        <Footer />
      </View>
    )
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
  cores: state.core.data,
  loading: state.core.loading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  coreActions: bindActionCreators(coreActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Core);
