import React from 'react';
import {View, TextInput} from 'react-native';
import * as Iconfont from '@/common/iconfont/Iconfont';
import {
  InputStyle,
  placeholderTextColor,
  ComponentStyle,
} from '@/components/form/FormStyle';
import Label from '@/components/form/label';
import FormItem, {
  FormItemProps,
  FormItemState,
} from '@/components/form/FormItem';

interface PhoneInputProps extends FormItemProps {
  style?: any;
  defaultValue?: string;
  areaCode?: string;
  placeholder?: string;
  [propName: string]: any;
}

interface PhoneInputState extends FormItemState {}

export default class extends FormItem<PhoneInputProps, PhoneInputState> {
  constructor(props: PhoneInputProps) {
    super(props);
    this.state = {value: ''};
  }
  render() {
    console.log('render PhoneInput');
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
        <Iconfont.Phone />
        <Label name={this.props.areaCode} style={{paddingHorizontal: 0}} />
        <View style={InputStyle.container}>
          <TextInput
            placeholder={this.props.placeholder}
            placeholderTextColor={placeholderTextColor}
            style={InputStyle.textInput}
            defaultValue={this.props.defaultValue}
            clearButtonMode="always"
          />
        </View>
      </View>
    );
  }
}
