import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import * as Iconfont from '@/common/iconfont/Iconfont';

export default class CountrySelect extends React.Component {
  render() {
    return (
      <View
        style={{
          flexGrow: 2,
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: '#D8D8D8',
          borderRadius: 5,
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
            <Iconfont.RightIndicator/>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
