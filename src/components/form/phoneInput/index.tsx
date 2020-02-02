import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import * as Iconfont from '@/common/iconfont/Iconfont';
import {
  InputStyle,
  placeholderTextColor,
  ComponentStyle,
} from '@/components/form/FormStyle';
import Label from '@/components/form/label';

export default class extends React.Component<
  {
    style?: any;
    defaultValue?: string;
    areaCode?: string;
    [propName: string]: any;
  },
  {error: string}
> {
  constructor(props: {
    style?: any;
    defaultValue?: string;
    areaCode?: string;
    [propName: string]: any;
  }) {
    super(props);
    this.state = {error: ''};
  }
  render() {
    return (
      <View
        style={{
          ...{
            flexGrow: 3,
            flexDirection: 'row',
          },
          ...ComponentStyle.container,
          ...this.props.style,
        }}>
        <Iconfont.Phone />
        <Label name={this.props.areaCode} style={{paddingHorizontal: 0}} />
        <View style={InputStyle.container}>
          <TextInput
            placeholder="请输入手机号码"
            placeholderTextColor={placeholderTextColor}
            style={InputStyle.textInput}
            defaultValue={this.props.defaultValue}
            clearButtonMode="always"
          />
        </View>
      </View>
    );
  }
}
