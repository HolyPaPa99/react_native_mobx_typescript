import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {injectIntl} from 'react-intl';

import {scaleSize} from '@/common/utils/ScreenUtil';
import {inject} from 'mobx-react';
import {mergeStorage} from '@/common/localStorage';
import Theme from '@/common/theme';

@inject('userStore')
class LanguageSwitch extends React.Component<any> {
  render() {
    const {formatMessage} = this.props.intl;
    return (
      <View
        style={{
          paddingVertical: scaleSize(5),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: scaleSize(100),
          }}
          onPress={() => {
            this.props.userStore.setLanguage('en');
            mergeStorage({language: 'en'});
          }}>
          <Text
            style={{
              fontSize: scaleSize(16),
              color: Theme.Color.Font.Font4,
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
            width: scaleSize(100),
          }}
          onPress={() => {
            this.props.userStore.setLanguage('zh');
            mergeStorage({language: 'zh'});
          }}>
          <Text
            style={{
              fontSize: scaleSize(16),
              color: Theme.Color.Font.Font4,
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
