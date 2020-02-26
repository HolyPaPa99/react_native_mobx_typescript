import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import ButtonStyles from './ButtonStyles';
import {getProperty} from '@/common/utils/ObjectUtil';
import Log from '@/common/log';

export default class extends React.Component<
  {
    style?: any;
    textStyle?: any;
    value?: string;
    onPress?: any;
    type?: keyof ButtonStyles;
  },
  {
    defaultStyle: {
      default: any;
      textDefault: any;
    };
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      defaultStyle: getProperty(
        new ButtonStyles(),
        props.type ? props.type : 'primary',
      ),
    };
  }
  render() {
    Log.info('render Button');
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          ...this.state.defaultStyle.default,
          ...this.props.style,
        }}>
        <Text
          style={{
            ...this.state.defaultStyle.textDefault,
            ...this.props.textStyle,
          }}>
          {this.props.value}
        </Text>
      </TouchableOpacity>
    );
  }
}
