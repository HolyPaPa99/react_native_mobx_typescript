import HomeScreen from '@/screens/home';
import LoginScreen from '@/screens/login';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const RouteConfigs = {
  Home: {
    screen: createBottomTabNavigator({
      Home1: HomeScreen,
      Login1: LoginScreen,
      Home2: HomeScreen,
      Login2: LoginScreen,
    }),
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: LoginScreen,
};

const NavigatorConfig = {
  initialRouteName: 'Login',
};

export default createStackNavigator(RouteConfigs, NavigatorConfig);
