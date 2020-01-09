/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'mobx-react';
import stores from './src/models';
import Hello from './src/screens/hello';

const App = () => {
  return (
    <Provider {...stores}>
      <Hello />
    </Provider>
  );
};

export default App;
