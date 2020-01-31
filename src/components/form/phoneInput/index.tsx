import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import * as Iconfont from '@/common/iconfont/Iconfont';
import {
  InputStyle,
  placeholderTextColor,
  ComponentStyle,
} from '@/components/form/FormStyle';
import Label from '@/components/form/label';

export default class PhoneInput extends React.Component<{style?: any}, {}> {
  render() {
    return (
      <View
        style={{
          ...{
            flexGrow: 4,
            flexDirection: 'row',
          },
          ...ComponentStyle.container,
          ...this.props.style,
        }}>
        <Iconfont.Phone />
        <Label name="+86" style={{paddingHorizontal: 0}} />
        <View style={InputStyle.container}>
          <TextInput
            placeholder="请输入手机号码"
            placeholderTextColor={placeholderTextColor}
            style={InputStyle.textInput}
          />
        </View>
        <TouchableOpacity style={{display:'none'}}>
          <Iconfont.CloseFilled />
        </TouchableOpacity>
      </View>
    );
  }
}
