import HomeScreen from '@/screens/home';
import LoginScreen from '@/screens/login';
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
};

const NavigatorConfig = {
  initialRouteName: 'Login',
};

export default createStackNavigator(RouteConfigs, NavigatorConfig);
