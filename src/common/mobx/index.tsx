import React from 'react';
import {Provider} from 'mobx-react';
import stores from '@/models';

export function withMobx(WrappedComponent: React.ComponentType) {
  return class extends React.Component {
    render() {
      return (
        <Provider {...stores}>
          <WrappedComponent />
        </Provider>
      );
    }
  };
}
