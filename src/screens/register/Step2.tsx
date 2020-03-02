import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {injectIntl} from 'react-intl';
import Success from '@/components/success';
import Button from '@/components/button';
import {scaleSize} from '@/common/utils/ScreenUtil';
import Log from '@/common/log';

class Step2 extends React.Component<
  {[propName: string]: any} & NavigationStackScreenProps,
  {}
> {
  static navigationOptions = {
    headerShown:false
  };
  render() {
    Log.info('render forget password step1');
    const {formatMessage} = this.props.intl;
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <Success infoText="注册成功，马上登录体验吧！" />
        <Button
          type="primary"
          value={'现在登录'}
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={{marginHorizontal: scaleSize(40),marginTop:scaleSize(58)}}
        />
      </SafeAreaView>
    );
  }
}

export default injectIntl(Step2);
