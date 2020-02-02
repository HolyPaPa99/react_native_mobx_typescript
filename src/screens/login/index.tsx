import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';

import Statement from './Statement';
import {
  Form,
  SelectCountry,
  PhoneInput,
  PasswordInput,
  Button,
} from '@/components/form';
import {scaleSize} from '@/common/utils/ScreenUtil';
class LoginScreen extends React.Component<NavigationStackScreenProps, {}> {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
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
                height: scaleSize(80),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: scaleSize(28), color: '#5EA2EC'}}>
                登录
              </Text>
            </View>
            <Form>
              <SelectCountry />
              <PhoneInput areaCode="+86" />
              <PasswordInput
                validator={value => {
                  if (true) {
                    throw new Error('请输入手机号码');
                  }
                  return true;
                }}
              />
            </Form>
            <Button value="下一步" />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default LoginScreen;
