import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ${name}Actions, get${name_pascal}Filter } from '../../core/${name}';

class ${name_pascal} extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        ${name_pascal}
      </div>
    )
  }
}

//=====================================
//  PROP_TYPES
//-------------------------------------

${name_pascal}.propTypes = {

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
