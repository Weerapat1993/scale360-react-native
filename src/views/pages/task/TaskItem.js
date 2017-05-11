import React from 'react'
import { View, Text, StyleSheet, Switch, TouchableHighlight } from 'react-native'
import { Button, FormInput, CheckBox } from 'react-native-elements'
import { btnWarning, btnSuccess, btnDanger, defaultColor } from '../../styles/variables'
import { Flex } from '../../components/flex'

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

class TaskItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false,
      title: props.task.title,
    }
  }

  editTitle() {
    this.setState({editing: true});
  }

  stopEditing() {
    this.setState({editing: false});
  }

  updateTask() {
    if (this.state.editing) {
      const { task } = this.props;
      const title = this.state.title

      if (title.length && title !== task.title) {
        this.props.updateTask({title , id: task.id });
      }
      this.stopEditing();
    }
  }

  toggleStatus(task) {
    this.props.updateTask({ id: task.id, completed: !task.completed });
  }

  deleteTask(id) {
    this.props.deleteTask(id);
  }

  renderTitle(task) {
    let styleTitle;
    if(!task.completed)
      styleTitle = styles.textCompleted
    else
      styleTitle = styles.text
    return (<Text style={styleTitle}>{task.title}</Text>)
  }

  renderTitleInput(task) {
    return (
      <Flex>
        <FormInput
          placeholder="Edit Task"
          onChangeText={title => this.setState({title}) }
          value={this.state.title}
        />
      </Flex>
    )
  }

  renderButton(task) {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <Button
          onPress={() => this.editTitle()}
          raised
          title="Edit"
          backgroundColor={btnWarning}
          containerStyle={{ margin: 0 , height: 30 }}
        />
        <Button
          onPress={() => this.deleteTask(task.id)}
          raised
          title="Delete"
          backgroundColor={btnDanger}
          containerStyle={{ margin: 0, height: 30 }}
        />
      </View>
    )
  }

  renderButtonEdit(task) {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <Button
          onPress={() => this.updateTask()}
          title="Update"
          raised
          backgroundColor={btnSuccess}
          buttonStyle={{ margin: 0 , height: 30 }}
        />
      </View>
    )
  }

  render() {
    const { task } = this.props
    return (
      <TouchableHighlight
        accessible={true}
        onPress={() => this.toggleStatus(task)}
        underlayColor='rgba(14, 43, 77, 0.03)' >
        <View style={styles.container}>
          <View style={{ width: 50 }} >
            <CheckBox
              checked={task.completed}
              onPress={() => this.toggleStatus(task)}
              checkedIcon='check'
              uncheckedIcon='close'
              containerStyle={{ padding: 0, backgroundColor: 'white', borderColor: 'white' }}
            />
          </View>
          <Flex>
            { this.state.editing ? this.renderTitleInput(task) : this.renderTitle(task) }
          </Flex>
          { this.state.editing ? this.renderButtonEdit(task) : this.renderButton(task) }
        </View>
      </TouchableHighlight>
    )
  }
}

export default TaskItem;
