import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import * as Iconfont from '@/common/iconfont/Iconfont';
import Theme from '@/common/theme';
import FormItem, {
  FormItemProps,
  FormItemState,
} from '@/components/form/FormItem';
import {scaleSize} from '@/common/utils/ScreenUtil';
import Log from '@/common/log';

interface PasswordProps extends FormItemProps {
  style?: any;
  placeholder?: string;
  [propName: string]: any;
}

interface PasswordState extends FormItemState {
  secureTextEntry: boolean;
}

export default class extends FormItem<PasswordProps, PasswordState> {
  constructor(props: PasswordProps) {
    super(props);
    this.state = {value: '', secureTextEntry: true};
  }

  render() {
    Log.info('render PasswordInput');
    return (
      <View
        style={{
          ...{
            flexGrow: 3,
            flexDirection: 'row',
            height: scaleSize(48),
          },
          ...this.props.style,
        }}>
        <Iconfont.PasswordFilled />
        <View
          style={{
            flex: 1,
            height: scaleSize(48),
            justifyContent: 'center',
          }}>
          <TextInput
            placeholder={this.props.placeholder}
            placeholderTextColor={Theme.Color.Font.Font1}
            clearButtonMode="always"
            style={Theme.FontStyles.Font3}
            onChangeText={value => {
              this.setState({value: value});
            }}
            secureTextEntry={this.state.secureTextEntry}
            maxLength={16}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            this.setState({secureTextEntry: !this.state.secureTextEntry});
          }}>
          {this.state.secureTextEntry ? (
            <Iconfont.EyeClose />
          ) : (
            <Iconfont.EyeOpen />
          )}
        </TouchableOpacity>
      </View>
    );
  }
}
