import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ButtonStyle} from '@/components/form/FormStyle';
import Log from '@/common/log';

export default class extends React.Component<
  {style?: any; textStyle?: any; value?: string; onPress?: any},
  {}
> {
  render() {
    Log.info('render Button');
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
