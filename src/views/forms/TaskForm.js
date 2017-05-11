import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Text, Button } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { taskValidation } from '../../core/form/taskValidation'
import { btnSuccess } from '../styles/globalStyle'

const styles = StyleSheet.create({
  inputContainer: {
    padding: 8,
    backgroundColor: 'steelblue',
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

class TaskForm extends Component {
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
        <View style={{ width: 50 }}>
          <Button onPress={onPrev} title="<" color={btnSuccess} />
        </View>
        <Field name='title' component={renderField} placeholder='Add Task' />
        <View style={{ width: 75 }}>
          <Button
            onPress={handleSubmit}
            title="Add"
            color={btnSuccess}
          />
        </View>
      </View>
    );
  }
}

// Decorate the form component
TaskForm = reduxForm({
  form: 'task', // a unique name for this form
  validate: taskValidation,
})(TaskForm);

export default TaskForm;
