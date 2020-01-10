/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'mobx-react';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import stores from '@/models';
import {RouteConfigs, NavigatorConfig} from '@/navigation/myNavigator';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const navigator = createStackNavigator(RouteConfigs, NavigatorConfig);
const AppContainer = createAppContainer(navigator);

const App = () => {
  return (
    <Provider {...stores}>
      <AppContainer />
    </Provider>
  );
};

export default App;
