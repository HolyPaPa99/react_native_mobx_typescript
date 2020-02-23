import React from 'react';
import {View, Image} from 'react-native';
import * as ScreenUtil from '@/common/utils/ScreenUtil';
import Theme from '@/common/theme';
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
          source={Theme.STATEMENT_TEXT}
          resizeMode="contain"
          resizeMethod="resize"
          style={{
            width: ScreenUtil.scaleSize(347),
            height: ScreenUtil.scaleSize(80),
          }}
        />
      </View>
    );
  }
}
