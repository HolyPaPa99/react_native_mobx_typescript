import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import * as Iconfont from '@/common/iconfont/Iconfont';
import {
  itemHight,
  fontSize,
  placeholderTextColor,
} from '@/components/form/FormStyle';
import * as ScreenUtil from '@/common/utils/ScreenUtil';

export default class PasswordInput extends React.Component {
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
        <Iconfont.PasswordFilled />
        <View
          style={{
            flex: 1,
            height: itemHight,
            justifyContent: 'center',
          }}>
          <TextInput
            placeholder="请输入密码"
            placeholderTextColor={placeholderTextColor}
            style={{
              fontSize: fontSize,
            }}
          />
        </View>
        <TouchableOpacity>
          <Iconfont.CloseFilled
            style={{width: ScreenUtil.scaleSize(18)}}
            color={'rgba(239,239,244,1)'}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Iconfont.EyeOpen />
        </TouchableOpacity>
      </View>
    );
  }
}
