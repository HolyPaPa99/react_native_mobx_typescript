import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {injectIntl} from 'react-intl';
import Success from '@/components/success';
import Button from '@/components/button';
import {scaleSize} from '@/common/utils/ScreenUtil';
import Log from '@/common/log';
import Theme from '@/common/theme';

class Step3 extends React.Component<
  {[propName: string]: any} & NavigationStackScreenProps,
  {}
> {
  static navigationOptions = {
    //headerStyle: {backgroundColor: Theme.Color.Background.Background3},
    //headerTintColor: Theme.Color.Font.Font3,
    //headerBackTitleStyle: {display: 'none'},
    //headerBackButtonStyle:{display:'none'}
    headerShown:false
  };
  render() {
    Log.info('render forget password step1');
    const {formatMessage} = this.props.intl;
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <Success infoText="密码重置成功，请重新登录！" />
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

export default injectIntl(Step3);
