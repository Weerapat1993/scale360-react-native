import React from 'react'
import { View, Button, ScrollView } from 'react-native'
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

  render() {
    const { todos, loading } = this.props
    const listData = (todos.length) ? todos.map((item) => (
      <TodoItem
        key={item.id}
        todo={item}
        updateTodo={(data) => this.updateTodo(data)}
        deleteTodo={(id) => this.deleteTodo(id)} />
    )) : <TitleDisplay title='No data to display' />
    return (
      <View style={styles.container}>
        <TodoForm addTodo={(title) => this.addTodo(title)} onPrev={() => this.onPrev()} />
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
