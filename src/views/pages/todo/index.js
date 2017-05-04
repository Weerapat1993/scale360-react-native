import React from 'react'
import { View, Button, ListView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { todoActions } from '../../../core/todo';
import { styles } from './styles'

import TitleDisplay from '../../components/titleDisplay'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

class Todo extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const { todos, todoActions } = this.props
      if(!todos.length){
        todoActions.fetchTodo()
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

  addTodo(title) {
    let data = {
      id: new Date().getTime(),
      title,
      completed: true
    }
    this.props.todoActions.createTodo(data)
  }

  updateTodo(data) {
    this.props.todoActions.updateTodo(data)
  }

  deleteTodo(id) {
    this.props.todoActions.deleteTodo(id)
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TodoItem
        key={rowID}
        todo={rowData}
        updateTodo={(data) => this.updateTodo(data)}
        deleteTodo={(id) => this.deleteTodo(id)} />
    )
  }

  listView(data, loading) {
    const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.guid !== r2.guid })
    const dataSourceClone = dataSource.cloneWithRows(data)
    const listData = (data.length) ? (
      <ListView dataSource={dataSourceClone} renderRow={this.renderRow.bind(this)} />
    ) : <TitleDisplay title='No data to display' />
    console.log(listData);
    return loading ? <TitleDisplay title='Loading...' /> : listData
  }

  render() {
    const { todos, loading } = this.props
    return (
      <View style={styles.container}>
        <TodoForm addTodo={(title) => this.addTodo(title)} onPrev={() => this.onPrev()} />
        { this.listView(todos, loading) }
        <Button
          onPress={() => this.onPrev()}
          style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}
          title='Go to Home page'
        />
      </View>
    )
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
  todos: state.todo.data,
  loading: state.todo.loading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  todoActions: bindActionCreators(todoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
