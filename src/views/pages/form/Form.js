import React from 'react'
import { View } from 'react-native'
import { reset } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { userActions } from '../../../core/user'
import LoginForm from '../../forms/LoginForm'
import TitleDisplay from '../../components/titleDisplay'
import { Layout } from '../../components/flex'

export class Form extends React.Component {
  constructor() {
    super()

    this.onPrev = this.onPrev.bind(this)
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

  handleSubmit(values, dispatch, props) {
    console.log(values);
    dispatch(userActions.loginUser(values))
    // dispatch(reset('login'))
  }

  render () {
    const { navigator, error, loading, login } = this.props
    return (
      <Layout navigator={navigator}>
        {
          (loading) ? <TitleDisplay title='Loading...' /> :
          <LoginForm onSubmit={this.handleSubmit} onPrev={this.onPrev} /> 
        }
        { (error || login) ? <TitleDisplay title={error} /> : <View /> }
      </Layout>
    )
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
  loading: state.user.loading,
  error: state.user.error,
  login: state.user.login,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  userActions: bindActionCreators(userActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
