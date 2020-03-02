import HomeScreen from '@/screens/home';
import LoginScreen from '@/screens/login';
import * as ForgetPassword from '@/screens/forgetPassword';
import * as Register from '@/screens/register';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Theme from '@/common/theme';

const RouteConfigs = {
  Home: {
    screen: createBottomTabNavigator(
      {
        Home1: HomeScreen,
        Home2: HomeScreen,
        Home3: HomeScreen,
        Home4: HomeScreen,
      },
      {
        tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        },
      },
    ),
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: LoginScreen,
  ForgetPassword: {
    screen: createStackNavigator({
      Step1: ForgetPassword.Step1,
      Step2: ForgetPassword.Step2,
      Step3: ForgetPassword.Step3,
    }),
    navigationOptions: {
      headerStyle: {backgroundColor: Theme.Color.Background.Background3},
      headerTintColor: Theme.Color.Font.Font3,
    },
  },
  Register: {
    screen: createStackNavigator({
      Step1: Register.Step1,
      Step2: Register.Step2,
    }),
    navigationOptions: {
      headerStyle: {backgroundColor: Theme.Color.Background.Background3},
      headerTintColor: Theme.Color.Font.Font3,
    },
  },
};

const NavigatorConfig = {
  initialRouteName: 'Login',
};

export default createStackNavigator(RouteConfigs, NavigatorConfig);
