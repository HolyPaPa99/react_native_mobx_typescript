import React from 'react';
import {View} from 'react-native';
import label from './label';
import phoneInput from './phoneInput';
import passwordInput from './passwordInput';
import selectCountry from './selectCountry';

const withForm = (WrappedComponent: React.ComponentType) => {
  return class extends React.Component<any, {}> {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export const Label = withForm(label);
export const SelectCountry = withForm(selectCountry);
export const PhoneInput = withForm(phoneInput);
export const PasswordInput = withForm(passwordInput);
