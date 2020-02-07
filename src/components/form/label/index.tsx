import React from 'react';
import {View, Text} from 'react-native';

import {LabelStyle} from '@/components/form/FormStyle';
import Log from '@/common/log';

export default class extends React.Component<{
  text?: string | undefined;
  style?: any;
  textStyle?: any;
}> {
  render() {
    Log.info('render Label');
    return (
      <View style={{...LabelStyle.container, ...this.props.style}}>
        <Text style={{...LabelStyle.text, ...this.props.textStyle}}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}
