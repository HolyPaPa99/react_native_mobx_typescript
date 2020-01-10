import HomeScreen from '@/screens/home';
import LoginScreen from '@/screens/login';

export const RouteConfigs = {
  Home: {
    screen: HomeScreen,
  },
  Login: {
    screen: LoginScreen,
  },
};

export const NavigatorConfig = {
  initialRouteName: 'Login',
};
