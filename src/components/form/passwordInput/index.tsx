import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import * as Iconfont from '@/common/iconfont/Iconfont';
import {
  placeholderTextColor,
  ComponentStyle,
  InputStyle,
} from '@/components/form/FormStyle';
import * as ScreenUtil from '@/common/utils/ScreenUtil';

export default class extends React.Component<
  {style?: any; [propName: string]: any},
  {error: string}
> {
  constructor(props: {style?: any; [propName: string]: any}) {
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
        <Iconfont.PasswordFilled />
        <View style={InputStyle.container}>
          <TextInput
            placeholder="请输入密码"
            placeholderTextColor={placeholderTextColor}
            clearButtonMode="always"
            style={InputStyle.textInput}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity>
          <Iconfont.EyeOpen />
        </TouchableOpacity>
      </View>
    );
  }
}
