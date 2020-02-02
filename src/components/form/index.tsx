import React from 'react';
import {View} from 'react-native';
import label from './label';
import phoneInput from './phoneInput';
import passwordInput from './passwordInput';
import selectCountry from './selectCountry';
import button from './button';
import message from './message';

const withForm = (WrappedComponent: React.ComponentType) => {
  return class extends React.Component<{[propName: string]: any}> {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export const Form = (props: {items: Array<any>}) => {};

export const Label = withForm(label);
export const SelectCountry = withForm(selectCountry);
export const PhoneInput = withForm(phoneInput);
export const PasswordInput = withForm(passwordInput);
export const Button = withForm(button);
export const ErrorMessage = withForm(message);
