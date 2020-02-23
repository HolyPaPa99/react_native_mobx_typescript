import React from 'react';
import {View, Text} from 'react-native';
import {FormattedMessage} from 'react-intl';
import {ErrorMessageStyle} from '@/components/form/FormStyle';
import Log from '@/common/log';

export default class extends React.Component<
  {
    message?: string;
    [propName: string]: any;
  },
  any
> {
  render() {
    Log.info('render Message');
    return (
      <View style={ErrorMessageStyle.container}>
        <Text style={ErrorMessageStyle.text}>
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
