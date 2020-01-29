import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Iconfont from '@/common/iconfont/Iconfont';

export default class PhoneInput extends React.Component {
  render() {
    return (
      <View
        style={{
          flexGrow: 4,
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
          <Iconfont name="person" size={16} color="rgba(60,60,67,0.3)" />
        </View>
        <View
          style={{
            height: 48,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'normal',
              color: '#5EA2EC',
            }}>
            +86
          </Text>
        </View>
        <View
          style={{
            height: 48,
            flex: 1,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'normal',
              color: 'rgba(60,60,67,0.3)',
              lineHeight: 48,
              paddingLeft: 13,
            }}>
            请输入手机号码
          </Text>
        </View>
        <View
          style={{
            width: 48,
            height: 48,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Iconfont
            name="right-indicator"
            size={16}
            color="rgba(60,60,67,0.3)"
          />
        </View>
      </View>
    );
  }
}
