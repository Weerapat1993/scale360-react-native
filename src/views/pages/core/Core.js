import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reset } from 'redux-form'
import { coreActions } from '../../../core/core';
import { styles } from './styles'

import CoreForm from './CoreForm'
import CoreList from './CoreList'
import { Footer } from '../../components/flex'

export class Core extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.coreActions.fetchCore()
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

  render() {
    const { cores, loading } = this.props
    return (
      <View style={styles.container}>
        <CoreForm onSubmit={this.createCore} onPrev={this.onPrev.bind(this)} />
        <CoreList
          data={cores}
          loading={loading}
          updateCore={this.updateCore.bind(this)}
          deleteCore={this.deleteCore.bind(this)}
        />
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
)(Core)
