import React from 'react'
import { reset } from 'redux-form'
import LoginForm from '../../forms/LoginForm'
import { Layout } from '../../components/flex'

class Form extends React.Component {
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
    alert('Email : ' + values.email);

    dispatch(reset('login'));
  }

  render () {
    const { navigator } = this.props
    return (
      <Layout navigator={navigator}>
        <LoginForm onSubmit={this.handleSubmit} onPrev={() => this.onPrev()} />
      </Layout>
    )
  }
}

export default Form;
