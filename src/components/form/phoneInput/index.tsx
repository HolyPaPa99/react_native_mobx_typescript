import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import * as Iconfont from '@/common/iconfont/Iconfont';
import {InputStyle, placeholderTextColor} from '@/components/form/FormStyle';
import Label from '@/components/form/label';

export default class PhoneInput extends React.Component<{}, {}> {
  render() {
    return (
      <View
        style={{
          flexGrow: 4,
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: '#D8D8D8',
          borderRadius: 5,
          marginTop: 5,
          alignItems: 'center',
          justifyContent: 'center',
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
        <TouchableOpacity>
          <Iconfont.CloseFilled color={'rgba(239,239,244,1)'} />
        </TouchableOpacity>
      </View>
    );
  }
}
