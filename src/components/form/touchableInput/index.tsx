import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {scaleSize} from '@/common/utils/ScreenUtil';
import Label from '@/components/form/label';
import FormItem, {
  FormItemProps,
  FormItemState,
} from '@/components/form/FormItem';
import Log from '@/common/log';
import Theme from '@/common/theme';

interface TouchableInputProps extends FormItemProps {
  style?: any;
  label?: string;
  placeholder?: string;
  touchableText?: string;
  defaultValue?: string;
  interval?: number;
  onPress?: () => void;
  [propName: string]: any;
}

interface TouchableInputState extends FormItemState {
  isTouched: boolean;
  count: number;
}

export default class extends FormItem<
  TouchableInputProps,
  TouchableInputState
> {
  constructor(props: TouchableInputProps) {
    super(props);
    this.state = {
      value: props.defaultValue || '',
      isTouched: false,
      count: props.interval || 0,
    };
    this.startCounting = this.startCounting.bind(this);
  }
  startCounting() {
    if (this.state.count > 0) {
      this.setState({count: this.state.count - 1});
      setTimeout(this.startCounting, 1000);
    } else {
      this.setState({
        isTouched: false,
        count: this.props.interval || 0,
      });
    }
  }

  render() {
    Log.info('render verifyCodeInput');
    return (
      <View
        style={{
          ...{
            flexDirection: 'row',
            height: scaleSize(48),
          },
          ...this.props.style,
        }}>
        <Label
          text={this.props.label}
          textStyle={{color: Theme.Color.Font.Font1}}
        />
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
            style={Theme.FontStyles.Font3}
            defaultValue={this.props.defaultValue}
            clearButtonMode="always"
            onChangeText={(text: any) => {
              this.setState({value: text});
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: scaleSize(48),
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: scaleSize(15),
          }}
          disabled={this.state.isTouched}
          onPress={() => {
            this.setState({isTouched: true});
            if (this.props.onPress) {
              this.props.onPress.call([]);
            }
            this.startCounting();
          }}>
          <View
            style={{
              width: 1,
              height: scaleSize(16),
              marginRight: scaleSize(10),
              backgroundColor: this.state.isTouched
                ? Theme.Color.Background.Background4
                : Theme.Color.Background.Background3,
            }}></View>
          <Text
            style={{
              display: this.state.isTouched ? 'flex' : 'none',
              width: scaleSize(32),
              ...Theme.FontStyles.Font2,
            }}>
            {this.state.count}
          </Text>
          <Text
            style={
              this.state.isTouched
                ? Theme.FontStyles.Font2
                : Theme.FontStyles.Font4
            }>
            {this.props.touchableText}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
