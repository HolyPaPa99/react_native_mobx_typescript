import React from 'react';
import {View, Text} from 'react-native';
import * as Iconfont from '@/common/iconfont/Iconfont';
import {scaleSize} from '@/common/utils/ScreenUtil';
import Log from '@/common/log';
import Theme from '@/common/theme';

export default class extends React.Component<{
  style?: any;
  infoText?: string;
  [propName: string]: any;
}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    Log.info('render Success');
    return (
      <View
        style={{
          ...{
            paddingVertical: scaleSize(56),
            backgroundColor: Theme.Color.Background.Background1,
            alignItems: 'center',
            justifyContent: 'center',
          },
          ...this.props.style,
        }}>
        <Iconfont.Success
          size={scaleSize(105)}
          style={{height: 'auto'}}
          color={Theme.Color.Status.Success}
        />
        <Text style={Theme.FontStyles.Font7}>Success</Text>
        <Text style={Theme.FontStyles.Font8}>{this.props.infoText}</Text>
      </View>
    );
  }
}
