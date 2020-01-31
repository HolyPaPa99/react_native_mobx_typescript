import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import * as Iconfont from '@/common/iconfont/Iconfont';
import Label from '@/components/form/label';

export default class extends React.Component {
  render() {
    return (
      <View
        style={{
          flexGrow: 2,
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: '#D8D8D8',
          borderRadius: 5,
          justifyContent: 'center',
        }}>
        <Label name="国家/地区" />
        <TouchableOpacity style={{flex: 2, flexDirection: 'row'}}>
          <Label name="中国" style={{flex: 1}} />
          <Iconfont.RightIndicator />
        </TouchableOpacity>
      </View>
    );
  }
}
