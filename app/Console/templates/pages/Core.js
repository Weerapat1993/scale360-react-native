import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reset } from 'redux-form'
import { ${name}Actions } from '../../../core/${name}';
import { styles } from './styles'

import ${name_pascal}Form from './${name_pascal}Form'
import ${name_pascal}List from './${name_pascal}List'
import { Footer } from '../../components/flex'

class ${name_pascal} extends Component {
  constructor() {
    super()

    this.update${name_pascal} = this.update${name_pascal}.bind(this)
    this.delete${name_pascal} = this.delete${name_pascal}.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.${name}Actions.fetch${name_pascal}()
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

  create${name_pascal}(values, dispatch, props) {
    const data = {
      id: new Date().getTime(),
      title: values.title,
      completed: false
    }
    dispatch(${name}Actions.create${name_pascal}(data));
    dispatch(reset('${name}'));
  }

  update${name_pascal}(data) {
    this.props.${name}Actions.update${name_pascal}(data)
  }

  delete${name_pascal}(id) {
    this.props.${name}Actions.delete${name_pascal}(id)
  }

  render() {
    const { ${name}s, loading } = this.props
    return (
      <View style={styles.container}>
        <${name_pascal}Form onSubmit={this.create${name_pascal}} onPrev={this.onPrev.bind(this)} />
        <${name_pascal}List
          data={${name}s}
          loading={loading}
          update${name_pascal}={this.update${name_pascal}}
          delete${name_pascal}={this.delete${name_pascal}}
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
  ${name}s: state.${name}.data,
  loading: state.${name}.loading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  ${name}Actions: bindActionCreators(${name}Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(${name_pascal})
