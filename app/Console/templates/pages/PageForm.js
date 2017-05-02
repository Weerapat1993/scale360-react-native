import React from 'react'
import { View, TextInput, Button } from 'react-native'
import { styles } from './styles'
import { btnSuccess } from '../../styles/variables'

class ${name_pascal}Form extends React.Component {
  constructor() {
    super()

    this.state = {
      title: ''
    }
  }

  clearInput() {
    this.setState({title: ''});
  }

  handleKeyUp(e) {
    if (e.keyCode === 27) {
      this.clearInput();
    }
  }

  handleSubmit() {
    const title = this.state.title.trim();
    if (title.length) this.props.add${name_pascal}(title);
    this.clearInput();
  }

  render () {
    const { onPrev } = this.props
    return (
      <View style={styles.inputContainer}>
        <View style={{ width: 50 }}>
          <Button onPress={onPrev} title='<' color={btnSuccess} />
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            style={styles.input}
            placeholder='Add ${name_pascal}'
            onChangeText={(title) => this.setState({title})}
            value={this.state.title}
          />
        </View>
        <View style={{ width: 75 }}>
          <Button
            onPress={() => this.handleSubmit()}
            title='Add'
            color={btnSuccess}
          />
        </View>
      </View>
    )
  }
}

export default ${name_pascal}Form;
