import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {ButtonStyle} from '@/components/form/FormStyle';

export default class extends React.Component<
  {style?: any; textStyle?: any; value?: string; onPress?: any},
  {}
> {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          ...ButtonStyle.container,
          ...this.props.style,
        }}>
        <Text style={{...ButtonStyle.text, ...this.props.textStyle}}>
          {this.props.value}
        </Text>
      </TouchableOpacity>
    );
  }
}
