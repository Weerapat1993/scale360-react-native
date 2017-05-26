import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { Field, reduxForm } from 'redux-form'
import { ${name}Validation } from '../../../core/form/${name}Validation'

const styles = StyleSheet.create({
  inputContainer: {
    padding: 8,
    backgroundColor: '#3f51b5',
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  input: {
    height: 30,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
})

const renderField = ({ input, placeholder, type, meta: { touched, error, warning } }) => {
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        {...input} 
        placeholder={placeholder}
        style={styles.input} 
      />
      {touched && ((error && <Text style={{color: 'red'}}>{error}</Text>) || (warning && <Text style={{color: 'red'}}>{warning}</Text>))}
    </View>
  );
};

class ${name_pascal}Form extends Component {
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

  render() {
    const { handleSubmit, onPrev } = this.props
    return (
      <View style={styles.inputContainer}>
        <Button 
          onPress={onPrev} 
          icon={{ name: 'arrow-left', type: 'font-awesome' }} 
          backgroundColor={'#3f51b5'}
          buttonStyle={{ margin: 0, padding: 0 , height: 40 }}
        />
        <Field name='title' component={renderField} placeholder='Add ${name_pascal}' />
        <Button
          onPress={handleSubmit}
          title='Add'
          backgroundColor={'#3f51b5'}
          buttonStyle={{ margin: 0, padding: 0 , height: 40 }}
        />
      </View>
    );
  }
}

// Decorate the form component
${name_pascal}Form = reduxForm({
  form: '${name}', // a unique name for this form
  validate: ${name}Validation,
})(${name_pascal}Form);

export default ${name_pascal}Form;
