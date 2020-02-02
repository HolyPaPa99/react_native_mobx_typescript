import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import * as Iconfont from '@/common/iconfont/Iconfont';
import Label from '@/components/form/label';
import {ComponentStyle} from '@/components/form/FormStyle';
import {scaleSize} from '@/common/utils/ScreenUtil';

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
            flexGrow: 2,
            flexDirection: 'row',
          },
          ...ComponentStyle.container,
          ...this.props.style,
        }}>
        <Label name="国家/地区" />
        <TouchableOpacity style={{flex: 2, flexDirection: 'row'}}>
          <Label name="中国" style={{flex: 1}} />
          <Iconfont.RightIndicator />
        </TouchableOpacity>
      </View>
    );
  }
}
