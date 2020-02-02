import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import * as Iconfont from '@/common/iconfont/Iconfont';
import {FormItem, Validator} from '@/components/form/FormTypes';
import {
  placeholderTextColor,
  ComponentStyle,
  InputStyle,
} from '@/components/form/FormStyle';

interface FormItemPropsType {
  name?: string;
  validator?: Validator;
  style?: any;
  [propName: string]: any;
}

interface FormItemStateType {
  value: string;
  secureTextEntry: boolean;
}

export default class
  extends React.Component<FormItemPropsType, FormItemStateType>
  implements FormItem {
  constructor(props: FormItemPropsType) {
    super(props);
    this.state = {value: '', secureTextEntry: true};
  }

  getName() {
    return this.props.name;
  }

  getValue() {
    return this.state.value;
  }

  validate() {
    if (this.props.validator) {
      this.props.validator.call(this, this.state.value);
    }
    return true;
  }

  render() {
    return (
      <View
        style={{
          ...{
            flexGrow: 3,
            flexDirection: 'row',
          },
          ...ComponentStyle.container,
          ...this.props.style,
        }}>
        <Iconfont.PasswordFilled />
        <View style={InputStyle.container}>
          <TextInput
            placeholder="请输入密码"
            placeholderTextColor={placeholderTextColor}
            clearButtonMode="always"
            style={InputStyle.textInput}
            secureTextEntry={this.state.secureTextEntry}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            this.setState({secureTextEntry: !this.state.secureTextEntry});
          }}>
          {this.state.secureTextEntry ? (
            <Iconfont.EyeClose />
          ) : (
            <Iconfont.EyeOpen />
          )}
        </TouchableOpacity>
      </View>
    );
  }
}
