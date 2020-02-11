import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {injectIntl} from 'react-intl';

import {scaleSize} from '@/common/utils/ScreenUtil';
import {inject} from 'mobx-react';

@inject('userStore')
class LanguageSwitch extends React.Component<any> {
  render() {
    const {formatMessage} = this.props.intl;
    return (
      <View style={{paddingVertical:scaleSize(5)}}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            this.props.userStore.setLanguage('en');
          }}>
          <Text
            style={{
              fontSize: scaleSize(16),
              color: '#5EA2EC',
              lineHeight: scaleSize(26),
              textAlign: 'center',
            }}>
            {formatMessage({id: 'intl.user.language.en'})}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            this.props.userStore.setLanguage('zh');
          }}>
          <Text
            style={{
              fontSize: scaleSize(16),
              color: '#5EA2EC',
              lineHeight: scaleSize(26),
              textAlign: 'center',
            }}>
            {formatMessage({id: 'intl.user.language.zh'})}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default injectIntl(LanguageSwitch);
