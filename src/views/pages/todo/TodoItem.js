import React from 'react'
import { View, Text, StyleSheet, Button, Switch, TextInput, TouchableHighlight } from 'react-native'
import { btnWarning, btnSuccess, btnDanger, defaultColor } from '../../styles/variables'

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: defaultColor,
  },
  textCompleted: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: defaultColor
  },
  text: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
  inputEdit: {
    height: 30,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
  }
});

class TodoItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false,
      title: props.todo.title,
    }
  }

  editTitle() {
    this.setState({editing: true});
  }

  stopEditing() {
    this.setState({editing: false});
  }

  updateTodo() {
    if (this.state.editing) {
      const { todo } = this.props;
      const title = this.state.title

      if (title.length && title !== todo.title) {
        this.props.updateTodo({title , id: todo.id });
      }
      this.stopEditing();
    }
  }

  toggleStatus(todo) {
    this.props.updateTodo({ id: todo.id, completed: !todo.completed });
  }

  deleteTodo(id) {
    this.props.deleteTodo(id);
  }

  renderTitle(todo) {
    let styleTitle;
    if(!todo.completed)
      styleTitle = styles.textCompleted
    else
      styleTitle = styles.text
    return (<Text style={styleTitle}>{todo.title}</Text>)
  }

  renderTitleInput(todo) {
    return (
      <TextInput
        placeholder='Edit Todo'
        onChangeText={title => this.setState({title}) }
        value={this.state.title}
        style={styles.inputEdit}
      />
    )
  }

  renderButton(todo) {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <Button
          onPress={() => this.editTitle()}
          title='Edit'
          style={{ flex: 1, height: 30 }}
          color={btnWarning}
        />
        <Button
          onPress={() => this.deleteTodo(todo.id)}
          title='Delete'
          style={{ flex: 1, height: 30 }}
          color={btnDanger}
        />
      </View>
    )
  }

  renderButtonEdit(todo) {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <Button
          onPress={() => this.updateTodo()}
          title='Update'
          style={{ flex: 1, height: 30 }}
          color={btnSuccess}
        />
      </View>
    )
  }

  render() {
    const { todo } = this.props
    return (
      <TouchableHighlight
        accessible={true}
        accessibilityLabel={todo.id}
        onPress={() => this.toggleStatus(todo)}
        underlayColor='rgba(14, 43, 77, 0.03)' >
        <View style={styles.container}>
          <View style={{ width: 50 }} >
            <Switch
              onValueChange={() => this.toggleStatus(todo)}
              value={todo.completed}
            />
          </View>
          <View style={{ flex: 1 }} >
            { this.state.editing ? this.renderTitleInput(todo) : this.renderTitle(todo) }
          </View>
          { this.state.editing ? this.renderButtonEdit(todo) : this.renderButton(todo) }
        </View>
      </TouchableHighlight>
    )
  }
}

export default TodoItem;
