import React, { Component } from 'react'
import { Button } from 'react-native-elements'
import { Field, reduxForm } from 'redux-form'
import { Flex, Grid } from '../components/flex'
import { ${name}Validation } from '../../core/form/${name}Validation'
import { FormElements } from '../components/form-elements'

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
      <Grid flexDirection='column'>
        <Field name='email' component={FormElements} label='Email' placeholder='Email' />
        <Field name='password' secureTextEntry={true} component={FormElements} label='Password' placeholder='Password' />
        <Grid flexDirection='row' style={{ paddingTop: 20 }}>
          <Flex size={1}>
            <Button
              onPress={onPrev}
              title='Back'
            />
          </Flex>
          <Flex size={1}>
            <Button
              onPress={handleSubmit}
              raised
              iconRight
              icon={{name: 'cached'}}
              title='Submit'
              backgroundColor='#397af8'
            />
          </Flex>
        </Grid>
      </Grid>
    );
  }
}

// Decorate the form component
${name_pascal}Form = reduxForm({
  form: '${name}', // a unique name for this form
  validate: ${name}Validation,
})(${name_pascal}Form);

export default ${name_pascal}Form;
