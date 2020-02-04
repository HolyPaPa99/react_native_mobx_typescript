import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {injectIntl} from 'react-intl';

import Statement from './Statement';
import {
  Form,
  SelectCountry,
  PhoneInput,
  PasswordInput,
  Button,
} from '@/components/form';
import {scaleSize} from '@/common/utils/ScreenUtil';
import {PhoneValidator} from '@/components/form/FormValidator';
class LoginScreen extends React.Component<
  {[propName: string]: any} & NavigationStackScreenProps,
  {}
> {
  formRef: any;
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    const {formatMessage} = this.props.intl;
    return (
      <SafeAreaView style={{backgroundColor: '#5EA2EC', flex: 1}}>
        <Statement />
        <View
          style={{
            flex: 1,
            paddingHorizontal: scaleSize(40),
            paddingBottom: scaleSize(60),
          }}>
          <View
            style={{
              flex: 1,
              borderRadius: scaleSize(10),
              backgroundColor: '#fff',
              paddingHorizontal: scaleSize(27),
            }}>
            <View
              style={{
                paddingTop:scaleSize(40),
                paddingBottom:scaleSize(20),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: scaleSize(28), color: '#5EA2EC'}}>
                登录
              </Text>
            </View>
            <Form ref={(ref: any) => (this.formRef = ref)}>
              <SelectCountry name="areaCode" />
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
              value="下一步"
              onPress={() => {
                if (this.formRef instanceof Form) {
                  this.formRef.validateForm();
                  console.log(this.formRef.getFormValues());
                }
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default injectIntl(LoginScreen);
