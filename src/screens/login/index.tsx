import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {injectIntl} from 'react-intl';
import {inject} from 'mobx-react';

import Statement from './Statement';
import {
  Form,
  Picker,
  PhoneInput,
  PasswordInput,
  Button,
} from '@/components/form';
import {scaleSize} from '@/common/utils/ScreenUtil';
import {PhoneValidator} from '@/components/form/FormValidator';
import Log from '@/common/log';
import LanguageSwitch from '@/components/languageSwitch';
import TextNavigator from '@/components/navigator/TextNavigator';

@inject('userStore')
class LoginScreen extends React.Component<
  {[propName: string]: any} & NavigationStackScreenProps,
  {}
> {
  formRef: any;
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    Log.info('render login screen');
    const {formatMessage} = this.props.intl;
    const {navigation} = this.props;
    return (
      <SafeAreaView style={{backgroundColor: '#5EA2EC', flex: 1}}>
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
              backgroundColor: '#fff',
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
                <Text style={{fontSize: scaleSize(28), color: '#5EA2EC'}}>
                  {formatMessage({id: 'intl.screen.login.title'})}
                </Text>
              </View>
              <Form ref={(ref: any) => (this.formRef = ref)}>
                <Picker
                  name="areaCode"
                  label={formatMessage({id: 'intl.screen.login.country'})}
                  text="中国"
                />
                <PhoneInput
                  areaCode="+86"
                  name="phone"
                  placeholder={formatMessage({
                    id: 'intl.input.phone.placeholder',
                  })}
                  validator={PhoneValidator}
                />
                <PasswordInput
                  name="password"
                  placeholder={formatMessage({
                    id: 'intl.input.password.placeholder',
                  })}
                />
              </Form>
              <Button
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
                  text: formatMessage({id: 'intl.screen.login.forgetPassword'}),
                  onPress: () => {
                    console.log('忘记密码');
                    navigation.navigate('ForgetPassword');
                  },
                },
                {
                  text: formatMessage({
                    id: 'intl.screen.login.registerAccount',
                  }),
                  onPress: () => {
                    console.log('注册账号');
                    navigation.navigate('Register');
                  },
                },
              ]}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default injectIntl(LoginScreen);
