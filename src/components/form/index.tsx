import React from 'react';
import {View} from 'react-native';
import label from './label';
import phoneInput from './phoneInput';
import passwordInput from './passwordInput';
import picker from './picker';
import message from './message';
import touchableInput from './touchableInput';
import userNameInput from './userNameInput';
import FormItem from './FormItem';
import Theme from '@/common/theme';
import Log from '@/common/log';
export class Form extends React.Component<any, {errMsg: string}> {
  private childrenRef: Array<any> = [];
  constructor(props: any) {
    super(props);
    this.state = {errMsg: ''};
  }
  /**
   * 获取form表单值
   */
  getFormValues(): {[key: string]: any} {
    let formValues: Array<{name: string; value: any}> = [];
    this.childrenRef.map((item, i) => {
      if (item instanceof FormItem) {
        formValues.push({name: item.getName(), value: item.getValue()});
      }
    });
    return formValues;
  }
  /**
   * 验证form表单
   */
  validateForm(): boolean {
    try {
      this.childrenRef.forEach((item, i) => {
        if (item instanceof FormItem) {
          item.validate();
        }
      });
    } catch (e) {
      Log.error(e);
      this.setState({errMsg: e});
      return false;
    }
    this.setState({errMsg: ''});
    return true;
  }
  render() {
    Log.info('render Form');
    return (
      <View style={this.props.style}>
        {React.Children.map(this.props.children, (child, i) => {
          return React.cloneElement(child as React.ReactElement, {
            ref: (ref: any) => {
              this.childrenRef[i] = ref;
            },
          });
        })}
        <ErrorMessage message={this.state.errMsg} />
      </View>
    );
  }
}
export class Separator extends React.Component {
  render() {
    return (
      <View
        style={{
          height: 0.5,
          backgroundColor: Theme.Color.Background.Background5,
        }}></View>
    );
  }
}
export const Label = label;
export const Picker = picker;
export const PhoneInput = phoneInput;
export const PasswordInput = passwordInput;
export const ErrorMessage = message;
export const TouchableInput = touchableInput;
export const UserNameInput = userNameInput;
