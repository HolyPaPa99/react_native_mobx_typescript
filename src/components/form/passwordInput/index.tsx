import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import * as Iconfont from '@/common/iconfont/Iconfont';

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
            height: 48,
            justifyContent: 'center',
          }}>
          <TextInput
            placeholder="请输入密码"
            placeholderTextColor="rgba(60,60,67,0.3)"
            style={{
              fontSize: 16,
              fontWeight: 'normal',
            }}
          />
        </View>
        <Iconfont.CloseFilled
          style={{width: 18}}
          color={'rgba(239,239,244,1)'}
        />
        <Iconfont.ViewShow />
      </View>
    );
  }
}
