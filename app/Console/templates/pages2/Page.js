import React from 'react'
import { View, Button, ListView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reset } from 'redux-form'
import { ${name}Actions } from '../../../core/${name}';
import { styles } from './styles'

import TitleDisplay from '../../components/titleDisplay'
import ${name_pascal}Form from '../../forms/${name_pascal}Form'
import ${name_pascal}Item from './${name_pascal}Item'
import { Footer } from '../../components/flex'

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

  renderRow(rowData, sectionID, rowID) {
    return (
      <${name_pascal}Item
        key={rowID}
        ${name}={rowData}
        update${name_pascal}={(data) => this.update${name_pascal}(data)}
        delete${name_pascal}={(id) => this.delete${name_pascal}(id)} />
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
    const { ${name}s, loading } = this.props
    return (
      <View style={styles.container}>
        <${name_pascal}Form onSubmit={this.create${name_pascal}} onPrev={() => this.onPrev()} />
        { this.listView(${name}s, loading) }
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
)(${name_pascal});
