import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import * as Iconfont from '@/common/iconfont/Iconfont';
import {scaleSize} from '@/common/utils/ScreenUtil';
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
            height: scaleSize(48),
          },
          ...this.props.style,
        }}>
        <Iconfont.Phone />
        <Label
          text={this.props.areaCode}
          style={{paddingHorizontal: 0}}
          textStyle={{color: Theme.Color.Font.Font1}}
        />
        <View
          style={{
            flex: 1,
            height: scaleSize(48),
            justifyContent: 'center',
            paddingRight: scaleSize(10),
          }}>
          <TextInput
            placeholder={this.props.placeholder}
            placeholderTextColor={Theme.Color.Font.Font1}
            style={{
              ...Theme.FontStyles.Font3,
              paddingHorizontal: scaleSize(10),
            }}
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
