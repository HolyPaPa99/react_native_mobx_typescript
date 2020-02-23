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
import Log from '@/common/log';
import Theme from '@/common/theme';

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
    Log.info('render PhoneInput');
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
        <Label
          text={this.props.areaCode}
          style={{paddingHorizontal: 0}}
          textStyle={{color: Theme.FORM_PLACEHOLDER_COLOR}}
        />
        <View style={InputStyle.container}>
          <TextInput
            placeholder={this.props.placeholder}
            placeholderTextColor={placeholderTextColor}
            style={InputStyle.textInput}
            defaultValue={this.props.defaultValue}
            clearButtonMode="always"
            onChangeText={(text: any) => {
              this.setState({value: text});
            }}
          />
        </View>
      </View>
    );
  }
}
