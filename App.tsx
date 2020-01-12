/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import navigator from '@/navigation';
import withIntl from '@/common/intl/withIntl';
import withMobx from '@/common/mobx/withMobx';

const AppContainer = createAppContainer(navigator);

@withIntl
@withMobx
class App extends React.Component<{}> {
  render() {
    return <AppContainer />;
  }
}

export default App;
