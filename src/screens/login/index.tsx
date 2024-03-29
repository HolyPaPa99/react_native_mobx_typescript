import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {injectIntl} from 'react-intl';
import {inject} from 'mobx-react';

import Statement from './Statement';
import {Form, Picker, PhoneInput, PasswordInput} from '@/components/form';
import Button from '@/components/button';
import {scaleSize} from '@/common/utils/ScreenUtil';
import * as Validator from '@/components/form/FormValidator';
import Log from '@/common/log';
import LanguageSwitch from '@/components/languageSwitch';
import TextNavigator from '@/components/navigator/TextNavigator';
import Theme from '@/common/theme';

@inject('userStore')
class LoginScreen extends React.Component<any, {}> {
  formRef: any;

  render() {
    Log.info('render login screen');
    const {formatMessage} = this.props.intl;
    const {navigation} = this.props;
    return (
      <ImageBackground
        source={Theme.Image.LoginBackground}
        style={{width: '100%', height: '100%'}}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{flex: 1}}>
          <Statement />
          <View
            style={{
              flex: 1,
              paddingHorizontal: scaleSize(40),
              paddingBottom: scaleSize(40),
            }}>
            <View
              style={{
                flex: 1,
                borderRadius: scaleSize(10),
                backgroundColor: Theme.Color.Background.Background1,
                paddingHorizontal: scaleSize(27),
              }}>
              <View style={{flex: 1}}>
                <View
                  style={{
                    height: scaleSize(105),
                    paddingTop: scaleSize(40),
                    paddingBottom: scaleSize(20),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: scaleSize(28),
                      color: Theme.Color.Font.Font4,
                    }}>
                    {formatMessage({id: 'intl.screen.login.title'})}
                  </Text>
                </View>
                <Form ref={(ref: any) => (this.formRef = ref)}>
                  <Picker
                    name="areaCode"
                    label={formatMessage({id: 'intl.screen.login.country'})}
                    text="中国"
                    style={{
                      borderWidth: 0.5,
                      borderColor: Theme.Color.Border.Border1,
                      borderRadius: 5,
                      marginBottom: scaleSize(5),
                    }}
                  />
                  <PhoneInput
                    areaCode="+86"
                    name="phone"
                    placeholder={formatMessage({
                      id: 'intl.input.phone.placeholder',
                    })}
                    validator={Validator.PhoneValidator}
                    style={{
                      borderWidth: 0.5,
                      borderColor: Theme.Color.Border.Border1,
                      borderRadius: 5,
                      marginBottom: scaleSize(5),
                    }}
                  />
                  <PasswordInput
                    name="password"
                    placeholder={formatMessage({
                      id: 'intl.input.password.placeholder',
                    })}
                    validator={Validator.PasswordValidator}
                    style={{
                      borderWidth: 0.5,
                      borderColor: Theme.Color.Border.Border1,
                      borderRadius: 5,
                      marginBottom: scaleSize(5),
                    }}
                  />
                </Form>
                <Button
                  type="primary"
                  value={formatMessage({id: 'intl.button.next'})}
                  onPress={() => {
                    if (this.formRef instanceof Form) {
                      this.formRef.validateForm();
                      Log.info(this.formRef.getFormValues());
                    }
                  }}
                />
                <LanguageSwitch />
              </View>
              <TextNavigator
                navigators={[
                  {
                    text: formatMessage({
                      id: 'intl.screen.login.forgetPassword',
                    }),
                    onPress: () => {
                      console.log('忘记密码');
                      navigation.navigate('ForgetPassword.Step1');
                    },
                  },
                  {
                    text: formatMessage({
                      id: 'intl.screen.login.registerAccount',
                    }),
                    onPress: () => {
                      console.log('注册账号');
                      navigation.navigate('Register.Step1');
                    },
                  },
                ]}
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
export default injectIntl(LoginScreen);
