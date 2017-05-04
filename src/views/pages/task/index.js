import React from 'react'
import { View, Button, ListView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { taskActions } from '../../../core/task';
import { styles } from './styles'

import TitleDisplay from '../../components/titleDisplay'
import TaskForm from './TaskForm'
import TaskItem from './TaskItem'

class Task extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const { tasks, taskActions } = this.props
      if(!tasks.length){
        taskActions.fetchTask()
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

  addTask(title) {
    let data = {
      id: new Date().getTime(),
      title,
      completed: true
    }
    this.props.taskActions.createTask(data)
  }

  updateTask(data) {
    this.props.taskActions.updateTask(data)
  }

  deleteTask(id) {
    this.props.taskActions.deleteTask(id)
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TaskItem
        key={rowID}
        task={rowData}
        updateTask={(data) => this.updateTask(data)}
        deleteTask={(id) => this.deleteTask(id)} />
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
    const { tasks, loading } = this.props
    return (
      <View style={styles.container}>
        <TaskForm addTask={(title) => this.addTask(title)} onPrev={() => this.onPrev()} />
        { this.listView(tasks, loading) }
        <Button
          onPress={() => this.onPrev()}
          style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}
          title="Go to Home page"
        />
      </View>
    )
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
  tasks: state.task.data,
  loading: state.task.loading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  taskActions: bindActionCreators(taskActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
