import React from 'react';
import {View, Text} from 'react-native';

import {LabelStyle} from '@/components/form/FormStyle';

export default class extends React.Component<{
  name?: string | undefined;
  style?: any;
  textStyle?: any;
}> {
  render() {
    return (
      <View style={{...LabelStyle.container, ...this.props.style}}>
        <Text style={{...LabelStyle.text, ...this.props.textStyle}}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}
