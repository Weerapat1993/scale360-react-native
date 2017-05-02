import React from 'react'
import { View, Text, StyleSheet, Button, Switch, TextInput } from 'react-native'
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

class ${name_pascal}Item extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false,
      title: props.${name}.title,
    }
  }

  editTitle() {
    this.setState({editing: true});
  }

  stopEditing() {
    this.setState({editing: false});
  }

  update${name_pascal}() {
    if (this.state.editing) {
      const { ${name} } = this.props;
      const title = this.state.title

      if (title.length && title !== ${name}.title) {
        this.props.update${name_pascal}({title , id: ${name}.id });
      }
      this.stopEditing();
    }
  }

  toggleStatus(${name}) {
    this.props.update${name_pascal}({ id: ${name}.id, completed: !${name}.completed });
  }

  delete${name_pascal}(id) {
    this.props.delete${name_pascal}(id);
  }

  renderTitle(${name}) {
    let styleTitle;
    if(!${name}.completed)
      styleTitle = styles.textCompleted
    else
      styleTitle = styles.text
    return (<Text style={styleTitle}>{${name}.title}</Text>)
  }

  renderTitleInput(${name}) {
    return (
      <TextInput
        placeholder='Edit ${name_pascal}'
        onChangeText={title => this.setState({title}) }
        value={this.state.title}
        style={styles.inputEdit}
      />
    )
  }

  renderButton(${name}) {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <Button
          onPress={() => this.editTitle()}
          title='Edit'
          style={{ flex: 1, height: 30 }}
          color={btnWarning}
        />
        <Button
          onPress={() => this.delete${name_pascal}(${name}.id)}
          title='Delete'
          style={{ flex: 1, height: 30 }}
          color={btnDanger}
        />
      </View>
    )
  }

  renderButtonEdit(${name}) {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <Button
          onPress={() => this.update${name_pascal}()}
          title='Update'
          style={{ flex: 1, height: 30 }}
          color={btnSuccess}
        />
      </View>
    )
  }

  render() {
    const { ${name} } = this.props
    return (
      <View style={styles.container}>
        <View style={{ width: 50 }} >
          <Switch
            onValueChange={() => this.toggleStatus(${name})}
            value={${name}.completed}
          />
        </View>
        <View style={{ flex: 1 }} >
          { this.state.editing ? this.renderTitleInput(${name}) : this.renderTitle(${name}) }
        </View>
        { this.state.editing ? this.renderButtonEdit(${name}) : this.renderButton(${name}) }
      </View>
    )
  }
}

export default ${name_pascal}Item;
