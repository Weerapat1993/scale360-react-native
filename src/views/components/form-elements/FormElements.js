import React from 'react'
import { View, Text } from 'react-native'
import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements'

export const FormElements = ({ input, label, placeholder, secureTextEntry, meta: { touched, error, warning } }) => {
  return (
    <View>
      <FormLabel>{label}</FormLabel>
      <FormInput
        {...input} 
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        selectionColor={null}
      />
      {touched && ((error && <FormValidationMessage>{error}</FormValidationMessage>) || (warning && <Text style={{color: 'red'}}>{warning}</Text>))}
    </View>
  );
};