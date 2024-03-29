/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import 'react-native-gesture-handler';
import NavigationApp from '@/common/navigation';
import {withIntl} from '@/common/intl';
import {withMobx} from '@/common/mobx';
import {withLocalStorage} from '@/common/localStorage';

@withMobx
@withLocalStorage
@withIntl
class App extends React.Component<{}> {
  render() {
    return <NavigationApp />; 
  }
}

export default App;
