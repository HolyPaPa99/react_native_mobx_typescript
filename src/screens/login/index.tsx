import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';

import Statement from './Statement';
import Logo from './Logo';
import SelectCountry from '@/components/form/selectCountry';
import PhoneInput from '@/components/form/phoneInput';
import PasswordInput from '@/components/form/passwordInput';
class LoginScreen extends React.Component<NavigationStackScreenProps, {}> {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#5EA2EC', flex: 1}}>
        <Statement />
        <Logo />
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              marginLeft: 40,
              marginRight: 40,
              marginBottom: 60,
              borderBottomStartRadius: 10,
              borderBottomEndRadius: 10,
              backgroundColor: '#fff',
            }}>
            <View
              style={{
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 28, color: '#5EA2EC'}}>登录</Text>
            </View>
            <View
              style={{
                marginTop: 20,
                marginLeft: 27,
                marginRight: 27,
              }}>
              <SelectCountry />
              <PhoneInput />
              <PasswordInput
                style={{
                  borderWidth: 1,
                  borderColor: '#D8D8D8',
                  borderRadius: 5,
                  marginTop: 5,
                }}
              />
            </View>
            <TouchableOpacity
              style={{
                width: 279,
                height: 56,
                backgroundColor: '#5EA2EC',
                borderRadius: 5,
                opacity: 0.8,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 60,
              }}>
              <Text style={{fontSize: 24, color: '#ffffff'}}>下一步</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default LoginScreen;
