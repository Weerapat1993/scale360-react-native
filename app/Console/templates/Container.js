import React, { PropTypes } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ${name}Actions, get${name_pascal}Filter } from '../../core/${name}';
import { Layout } from '../components/flex'

class ${name_pascal} extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Layout>
        <Text>${name_pascal}</Text>
      </Layout>
    )
  }
}

//=====================================
//  PROP_TYPES
//-------------------------------------

${name_pascal}.propTypes = {
  children: PropsType.any
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
  ${name}: get${name_pascal}Filter(state, ownProps)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  ${name}Actions: bindActionCreators(${name}Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(${name_pascal});
