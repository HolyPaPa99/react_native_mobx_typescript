import React from 'react';
import HomeScreen from '@/screens/home';
import LoginScreen from '@/screens/login';
import * as ForgetPassword from '@/screens/forgetPassword';
import * as Register from '@/screens/register';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {injectIntl} from 'react-intl';
import {FormNavigationOption} from './defaultNavigationOptions';
import Log from '@/common/log';

const Stack = createStackNavigator();

const ForgetPasswordNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Step1"
      component={ForgetPassword.Step1}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Step2"
      component={ForgetPassword.Step2}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Step3"
      component={ForgetPassword.Step3}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const RegisterNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Step1"
      component={Register.Step1}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Step2"
      component={Register.Step2}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
class NavigationApp extends React.Component<any> {
  render() {
    const {formatMessage} = this.props.intl;
    Log.info('render NavigationApp');
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgetPassword"
            component={ForgetPasswordNavigator}
            options={{
              ...FormNavigationOption,
              title: formatMessage({id: 'intl.screen.forgetpassword.title'}),
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterNavigator}
            options={{
              ...FormNavigationOption,
              title: formatMessage({id: 'intl.screen.register.title'}),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default injectIntl(NavigationApp);
