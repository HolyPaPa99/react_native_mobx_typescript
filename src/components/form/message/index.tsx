import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FormattedMessage} from 'react-intl';

import Theme from '@/common/theme';
import {scaleSize} from '@/common/utils/ScreenUtil';
import Log from '@/common/log';

const defaultStyles = StyleSheet.create({
  container: {
    height: scaleSize(48),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scaleSize(15),
  },
  text: Theme.FontStyles.Font5,
});
export default class extends React.Component<
  {
    message?: string;
    style?: any;
    textStyle?: any;
    [propName: string]: any;
  },
  any
> {
  render() {
    Log.info('render Message');
    return (
      <View style={{...defaultStyles.container, ...this.props.style}}>
        <Text style={{...defaultStyles.text, ...this.props.textStyle}}>
          {this.props.message ? (
            <FormattedMessage id={this.props.message} />
          ) : (
            ''
          )}
        </Text>
      </View>
    );
  }
}
