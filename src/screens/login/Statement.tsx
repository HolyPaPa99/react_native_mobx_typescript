import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import * as ScreenUtil from '@/common/utils/ScreenUtil';
const logo = require('@/assets/png/login/logo.png');

export default class Statement extends React.Component {
  render() {
    return (
      <View
        style={{
          height: ScreenUtil.scaleSize(212),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={logo}
          resizeMode="contain"
          resizeMethod="resize"
          style={{
            width: ScreenUtil.scaleSize(414),
            height: ScreenUtil.scaleSize(212),
          }}
        />
      </View>
    );
  }
}