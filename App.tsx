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
import stores from '@/models';
import navigator from '@/navigation';

const AppContainer = createAppContainer(navigator);

const App = () => {
  return (
    <Provider {...stores}>
      <AppContainer />
    </Provider>
  );
};

export default App;
