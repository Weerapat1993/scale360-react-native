import React from 'react'
import { View, Button, ScrollView } from 'react-native'
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

  render() {
    const { tasks, loading } = this.props
    const listData = (tasks.length) ? tasks.map((item) => (
      <TaskItem
        key={item.id}
        task={item}
        updateTask={(data) => this.updateTask(data)}
        deleteTask={(id) => this.deleteTask(id)} />
    )) : <TitleDisplay title="No data to display" />
    return (
      <View style={styles.container}>
        <TaskForm addTask={(title) => this.addTask(title)} onPrev={() => this.onPrev()} />
        <View style={{ flex: 1, flexDirection: 'column'}}>
          <ScrollView
            automaticallyAdjustContentInsets={false}
            vertical={true}
            horizontal={false}
          >
            { (!loading) ? listData : <TitleDisplay title="Loading..." />}
          </ScrollView>
          <Button
            onPress={() => this.onPrev()}
            style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}
            title="Go to Home page"
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
