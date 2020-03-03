import React from 'react';
import LoginScreen from '@/screens/login';
import * as ForgetPassword from '@/screens/login/forgetPassword';
import * as Register from '@/screens/login/register';
import {createStackNavigator} from '@react-navigation/stack';
import {injectIntl} from 'react-intl';
import {FormNavigationOption} from '../defaultNavigationOptions';
import Log from '@/common/log';

const Stack = createStackNavigator();

const Login = injectIntl((props: any) => {
  const {formatMessage} = props.intl;
  Log.info('render login navigator');
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgetPassword.Step1"
        component={ForgetPassword.Step1}
        options={{
          ...FormNavigationOption,
          title: formatMessage({id: 'intl.screen.forgetpassword.title'}),
        }}
      />
      <Stack.Screen
        name="ForgetPassword.Step2"
        component={ForgetPassword.Step2}
        options={{
          ...FormNavigationOption,
          title: formatMessage({id: 'intl.screen.forgetpassword.title'}),
        }}
      />
      <Stack.Screen
        name="ForgetPassword.Step3"
        component={ForgetPassword.Step3}
        options={{
          ...FormNavigationOption,
          title: formatMessage({id: 'intl.screen.forgetpassword.title'}),
          headerLeftContainerStyle: {display: 'none'},
        }}
      />
      <Stack.Screen
        name="Register.Step1"
        component={Register.Step1}
        options={{
          ...FormNavigationOption,
          title: formatMessage({id: 'intl.screen.register.title'}),
        }}
      />
      <Stack.Screen
        name="Register.Step2"
        component={Register.Step2}
        options={{
          ...FormNavigationOption,
          title: formatMessage({id: 'intl.screen.register.title'}),
          headerLeftContainerStyle: {display: 'none'},
        }}
      />
    </Stack.Navigator>
  );
});

export default injectIntl(Login);
