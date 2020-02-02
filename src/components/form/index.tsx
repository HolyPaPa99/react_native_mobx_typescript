import React from 'react';
import {View} from 'react-native';
import label from './label';
import phoneInput from './phoneInput';
import passwordInput from './passwordInput';
import selectCountry from './selectCountry';
import button from './button';
import message from './message';

/**
 * validator接口
 */
export interface Validator {
  (value: any): boolean;
}

/**
 * form item props define interface
 */
export interface FormItemProps {
  require?: boolean;
  rule?: any;
  validator?: Validator;
  [propName: string]: any;
}

const withForm = (WrappedComponent: React.ComponentType) => {
  return class extends React.Component<FormItemProps> {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export const createForm = ({}) => {};

export const Label = withForm(label);
export const SelectCountry = withForm(selectCountry);
export const PhoneInput = withForm(phoneInput);
export const PasswordInput = withForm(passwordInput);
export const Button = withForm(button);
export const ErrorMessage = withForm(message);
