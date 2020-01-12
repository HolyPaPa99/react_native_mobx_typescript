import React from 'react';
import {IntlProvider} from 'react-intl';
import en from './lang/en_US';

function withIntl(WrappedComponent: React.ComponentType) {
  return class extends React.Component {
    render() {
      return (
        <IntlProvider locale={'en'} messages={en}>
          <WrappedComponent {...this.props} />
        </IntlProvider>
      );
    }
  };
}
export default withIntl;
