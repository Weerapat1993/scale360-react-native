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
      <Flex>
        <FormInput
          placeholder='Edit ${name_pascal}'
          onChangeText={title => this.setState({title}) }
          value={this.state.title}
        />
      </Flex>
    )
  }

  renderButton(${name}) {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <Button
          onPress={() => this.editTitle()}
          raised
          title='Edit'
          backgroundColor={btnWarning}
          containerStyle={{ margin: 0 , height: 30 }}
        />
        <Button
          onPress={() => this.delete${name_pascal}(${name}.id)}
          raised
          title='Delete'
          backgroundColor={btnDanger}
          containerStyle={{ margin: 0, height: 30 }}
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
          raised
          backgroundColor={btnSuccess}
          buttonStyle={{ margin: 0 , height: 30 }}
        />
      </View>
    )
  }

  render() {
    const { ${name} } = this.props
    return (
      <TouchableHighlight
        accessible={true}
        onPress={() => this.toggleStatus(${name})}
        underlayColor='rgba(14, 43, 77, 0.03)' >
        <View style={styles.container}>
          <View style={{ width: 50 }} >
            <CheckBox
              checked={${name}.completed}
              onPress={() => this.toggleStatus(${name})}
              checkedIcon='check'
              uncheckedIcon='close'
              containerStyle={{ padding: 0, backgroundColor: 'white', borderColor: 'white' }}
            />
          </View>
          <Flex>
            { this.state.editing ? this.renderTitleInput(${name}) : this.renderTitle(${name}) }
          </Flex>
          { this.state.editing ? this.renderButtonEdit(${name}) : this.renderButton(${name}) }
        </View>
      </TouchableHighlight>
    )
  }
}

export default ${name_pascal}Item;
