import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
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

class CoreItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false,
      title: props.core.title,
    }
  }

  editTitle() {
    this.setState({editing: true});
  }

  stopEditing() {
    this.setState({editing: false});
  }

  updateCore() {
    if (this.state.editing) {
      const { core } = this.props;
      const title = this.state.title

      if (title.length && title !== core.title) {
        this.props.updateCore({title , id: core.id });
      }
      this.stopEditing();
    }
  }

  toggleStatus(core) {
    this.props.updateCore({ id: core.id, completed: !core.completed });
  }

  deleteCore(id) {
    this.props.deleteCore(id);
  }

  renderTitle(core) {
    let styleTitle;
    if(!core.completed)
      styleTitle = styles.textCompleted
    else
      styleTitle = styles.text
    return (<Text style={styleTitle}>{core.title}</Text>)
  }

  renderTitleInput(core) {
    return (
      <Flex>
        <FormInput
          placeholder='Edit Core'
          onChangeText={title => this.setState({title}) }
          value={this.state.title}
        />
      </Flex>
    )
  }

  renderButton(core) {
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
          onPress={() => this.deleteCore(core.id)}
          raised
          title='Delete'
          backgroundColor={btnDanger}
          containerStyle={{ margin: 0, height: 30 }}
        />
      </View>
    )
  }

  renderButtonEdit(core) {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <Button
          onPress={() => this.updateCore()}
          title='Update'
          raised
          backgroundColor={btnSuccess}
          buttonStyle={{ margin: 0 , height: 30 }}
        />
      </View>
    )
  }

  render() {
    const { core } = this.props
    return (
      <TouchableHighlight
        accessible={true}
        onPress={() => this.toggleStatus(core)}
        underlayColor='rgba(14, 43, 77, 0.03)' >
        <View style={styles.container}>
          <View style={{ width: 50 }} >
            <CheckBox
              checked={core.completed}
              onPress={() => this.toggleStatus(core)}
              checkedIcon='check'
              uncheckedIcon='close'
              containerStyle={{ padding: 0, backgroundColor: 'white', borderColor: 'white' }}
            />
          </View>
          <Flex>
            { this.state.editing ? this.renderTitleInput(core) : this.renderTitle(core) }
          </Flex>
          { this.state.editing ? this.renderButtonEdit(core) : this.renderButton(core) }
        </View>
      </TouchableHighlight>
    )
  }
}

export default CoreItem;
