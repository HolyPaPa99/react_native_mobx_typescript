import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import * as Iconfont from '@/common/iconfont/Iconfont';
import {
  placeholderTextColor,
  ComponentStyle,
  InputStyle,
} from '@/components/form/FormStyle';
import FormItem, {
  FormItemProps,
  FormItemState,
} from '@/components/form/FormItem';

interface PasswordProps extends FormItemProps {
  style?: any;
  [propName: string]: any;
}

interface PasswordState extends FormItemState {
  secureTextEntry: boolean;
}

export default class extends FormItem<PasswordProps, PasswordState> {
  constructor(props: PasswordProps) {
    super(props);
    this.state = {value: '', secureTextEntry: true};
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
