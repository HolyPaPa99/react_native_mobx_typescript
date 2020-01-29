import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Iconfont from '@/common/iconfont/Iconfont';

export default class PasswordInput extends React.Component {
  render() {
    return (
      <View
        style={{
          flexGrow: 3,
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: '#D8D8D8',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 48,
            height: 48,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Iconfont name="lock" size={16} color="rgba(60,60,67,0.3)" />
        </View>
        <View
          style={{
            width: 181,
            height: 48,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'normal',
              color: 'rgba(60,60,67,0.3)',
              lineHeight: 48,
              paddingLeft: 13,
            }}>
            请输入密码
          </Text>
        </View>
        <View
          style={{
            width: 48,
            height: 48,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Iconfont name="view" size={16} color="rgba(60,60,67,0.3)" />
        </View>
      </View>
    );
  }
}
