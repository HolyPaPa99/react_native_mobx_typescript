import HomeScreen from '@/screens/home';
import LoginScreen from '@/screens/login';
import ForgetPassword from '@/screens/login/ForgetPassword';
import Register from '@/screens/login/Register';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

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
  ForgetPassword: ForgetPassword,
  Register: Register,
};

const NavigatorConfig = {
  initialRouteName: 'Login',
};

export default createStackNavigator(RouteConfigs, NavigatorConfig);
