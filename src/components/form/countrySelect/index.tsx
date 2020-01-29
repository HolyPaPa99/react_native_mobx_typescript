import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Iconfont from '@/common/iconfont/Iconfont';

export default class CountrySelect extends React.Component {
  render() {
    return (
      <View
        style={{
          flexGrow: 2,
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: '#D8D8D8',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 104,
            height: 48,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'normal',
              color: '#5EA2EC',
              lineHeight: 48,
              textAlign: 'center',
            }}>
            国家/地区
          </Text>
        </View>
        <TouchableOpacity style={{flex: 2, flexDirection: 'row'}}>
          <View
            style={{
              height: 48,
              flex: 1,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'normal',
                color: '#5EA2EC',
                lineHeight: 48,
                paddingLeft: 13,
              }}>
              中国
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
        </TouchableOpacity>
      </View>
    );
  }
}
