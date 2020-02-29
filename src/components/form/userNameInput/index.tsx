import React from 'react';
import {View, TextInput} from 'react-native';
import * as Iconfont from '@/common/iconfont/Iconfont';
import {scaleSize} from '@/common/utils/ScreenUtil';
import FormItem, {
  FormItemProps,
  FormItemState,
} from '@/components/form/FormItem';
import Log from '@/common/log';
import Theme from '@/common/theme';

interface UserNameInputProps extends FormItemProps {
  style?: any;
  defaultValue?: string;
  placeholder?: string;
  [propName: string]: any;
}

interface UserNameInputState extends FormItemState {}

export default class extends FormItem<UserNameInputProps, UserNameInputState> {
  constructor(props: UserNameInputProps) {
    super(props);
    this.state = {value: props.defaultValue || ''};
  }
  render() {
    Log.info('render UserNameInput');
    return (
      <View
        style={{
          ...{
            flexDirection: 'row',
            height: scaleSize(48),
          },
          ...this.props.style,
        }}>
        <Iconfont.User />
        <View
          style={{
            flex: 1,
            height: scaleSize(48),
            justifyContent: 'center',
            paddingRight: scaleSize(10),
          }}>
          <TextInput
            placeholder={this.props.placeholder}
            placeholderTextColor={Theme.Color.Font.Font1}
            style={{
              ...Theme.FontStyles.Font3,
            }}
            defaultValue={this.props.defaultValue}
            clearButtonMode="always"
            onChangeText={(text: any) => {
              this.setState({value: text});
            }}
          />
        </View>
      </View>
    );
  }
}
