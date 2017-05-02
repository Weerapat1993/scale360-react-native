import React from 'react'
import { View, Button, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ${name}Actions } from '../../../core/${name}';
import { styles } from './styles'

import TitleDisplay from '../../components/titleDisplay'
import ${name_pascal}Form from './${name_pascal}Form'
import ${name_pascal}Item from './${name_pascal}Item'

class ${name_pascal} extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const { ${name}s, ${name}Actions } = this.props
      if(!${name}s.length){
        ${name}Actions.fetch${name_pascal}()
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

  add${name_pascal}(title) {
    let data = {
      id: new Date().getTime(),
      title,
      completed: true
    }
    this.props.${name}Actions.create${name_pascal}(data)
  }

  update${name_pascal}(data) {
    this.props.${name}Actions.update${name_pascal}(data)
  }

  delete${name_pascal}(id) {
    this.props.${name}Actions.delete${name_pascal}(id)
  }

  render() {
    const { ${name}s, loading } = this.props
    const listData = (${name}s.length) ? ${name}s.map((item) => (
      <${name_pascal}Item
        key={item.id}
        ${name}={item}
        update${name_pascal}={(data) => this.update${name_pascal}(data)}
        delete${name_pascal}={(id) => this.delete${name_pascal}(id)} />
    )) : <TitleDisplay title='No data to display' />
    return (
      <View style={styles.container}>
        <${name_pascal}Form add${name_pascal}={(title) => this.add${name_pascal}(title)} onPrev={() => this.onPrev()} />
        <View style={{ flex: 1, flexDirection: 'column'}}>
          <ScrollView
            automaticallyAdjustContentInsets={false}
            vertical={true}
            horizontal={false}
          >
            { (!loading) ? listData : <TitleDisplay title='Loading...' />}
          </ScrollView>
          <Button
            onPress={() => this.onPrev()}
            style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}
            title='Go to Home page'
          />
        </View>
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
)(${name_pascal});
