import React from 'react';
import {View, Text} from 'react-native';
import {ErrorMessageStyle} from '@/components/form/FormStyle';

export default class extends React.Component<{
  message?: string;
  [propName: string]: any;
}> {
  render() {
    return (
      <View style={ErrorMessageStyle.container}>
        <Text style={ErrorMessageStyle.text}>{this.props.message}</Text>
      </View>
    );
  }
}
