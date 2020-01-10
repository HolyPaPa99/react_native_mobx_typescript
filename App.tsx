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
import stores from './src/models';
import Hello from './src/screens/hello';
import AppContainer from './src/navigation'

const App = () => {
  return (
    <Provider {...stores}>
      <AppContainer />
    </Provider>
  );
};

export default App;
