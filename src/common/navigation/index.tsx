import React from 'react';
import HomeScreen from '@/screens/home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {injectIntl} from 'react-intl';
import Login from './navigators/loginNavigator';
import Log from '@/common/log';

const Stack = createStackNavigator();

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
            component={Login}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default injectIntl(NavigationApp);
