import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import * as Iconfont from '@/common/iconfont/Iconfont';
import Label from '@/components/form/label';
import FormItem, {
  FormItemProps,
  FormItemState,
} from '@/components/form/FormItem';
import {scaleSize} from '@/common/utils/ScreenUtil'
import Log from '@/common/log';
import Theme from '@/common/theme';

interface PickerProps extends FormItemProps {
  style?: any;
  label: string;
  text: string;
  value?: string;
  [propName: string]: any;
}
interface PickerState extends FormItemState {}

export default class extends FormItem<PickerProps, PickerState> {
  constructor(props: PickerProps) {
    super(props);
    this.state = {value: this.props.value || ''};
  }
  render() {
    Log.info('render SelectCountry');
    return (
      <View
        style={{
          ...{
            flexGrow: 2,
            flexDirection: 'row',
            height:scaleSize(48),
          },
          ...this.props.style,
        }}>
        <Label text={this.props.label} />
        <TouchableOpacity style={{flex: 2, flexDirection: 'row'}}>
          <Label
            text={this.props.text}
            style={{flex: 1}}
            textStyle={{color: Theme.Color.Font.Font2}}
          />
          <Iconfont.RightIndicator color={Theme.Color.Font.Font1} />
        </TouchableOpacity>
      </View>
    );
  }
}
