import React from 'react';
import {Provider} from 'mobx-react';
import stores from '@/models';
import Log from '@/common/log'

export function withMobx(WrappedComponent: React.ComponentType) {
  return class extends React.Component {
    render() {
      Log.info('render withMobx');
      return (
        <Provider {...stores}>
          <WrappedComponent />
        </Provider>
      );
    }
  };
}
