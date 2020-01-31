import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import * as Iconfont from '@/common/iconfont/Iconfont';
import {
  itemHight,
  fontSize,
  placeholderTextColor,
  ComponentStyle,
} from '@/components/form/FormStyle';
import * as ScreenUtil from '@/common/utils/ScreenUtil';

export default class PasswordInput extends React.Component<{style?: any}, {}> {
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
        <TouchableOpacity style={{display: 'none'}}>
          <Iconfont.CloseFilled style={{width: ScreenUtil.scaleSize(18)}} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Iconfont.EyeOpen />
        </TouchableOpacity>
      </View>
    );
  }
}
