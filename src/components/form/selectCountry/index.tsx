import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import * as Iconfont from '@/common/iconfont/Iconfont';
import Label from '@/components/form/label';
import {ComponentStyle} from '@/components/form/FormStyle';
import FormItem, {
  FormItemProps,
  FormItemState,
} from '@/components/form/FormItem';
import Log from '@/common/log';

interface SelectCountryProps extends FormItemProps {
  style?: any;
  [propName: string]: any;
}
interface SelectCountryState extends FormItemState {}

export default class extends FormItem<SelectCountryProps, SelectCountryState> {
  constructor(props: SelectCountryProps) {
    super(props);
    this.state = {value: ''};
  }
  render() {
    Log.info('render SelectCountry');
    return (
      <View
        style={{
          ...{
            flexGrow: 2,
            flexDirection: 'row',
          },
          ...ComponentStyle.container,
          ...this.props.style,
        }}>
        <Label text="国家/地区" />
        <TouchableOpacity style={{flex: 2, flexDirection: 'row'}}>
          <Label text="中国" style={{flex: 1}} />
          <Iconfont.RightIndicator />
        </TouchableOpacity>
      </View>
    );
  }
}
