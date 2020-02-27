import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {scaleSize} from '@/common/utils/ScreenUtil';
import Theme from '@/common/theme';
import Log from '@/common/log';

const defaultStyles = StyleSheet.create({
  container: {
    height: scaleSize(48),
    justifyContent: 'center',
    paddingHorizontal: scaleSize(15),
    marginBottom: scaleSize(5),
  },
  text: Theme.FontStyles.Font2,
});

export default class extends React.Component<{
  text?: string | undefined;
  style?: any;
  textStyle?: any;
}> {
  render() {
    Log.info('render Label');
    return (
      <View style={{...defaultStyles.container, ...this.props.style}}>
        <Text style={{...defaultStyles.text, ...this.props.textStyle}}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}
