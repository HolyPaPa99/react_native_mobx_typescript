import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import * as Iconfont from '@/common/iconfont/Iconfont';
import * as formStyleSheet from '@/components/form/FormStyleSheet';
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
        <Label name="+86" style={{paddingHorizontal: 0}}/>
        <View style={formStyleSheet.styleSheet.textInputContainer}>
          <TextInput
            placeholder="请输入手机号码"
            placeholderTextColor={formStyleSheet.placeholderTextColor}
            style={formStyleSheet.styleSheet.textInput}
          />
        </View>
        <Iconfont.CloseFilled color={'rgba(239,239,244,1)'} />
      </View>
    );
  }
}
