import React from 'react';
import {IntlProvider} from 'react-intl';
import message from './lang/index';
import {inject, observer} from 'mobx-react';

export function withIntl(WrappedComponent: React.ComponentType) {
  return inject('userStore')(
    observer(
      class extends React.Component<any> {
        constructor(props: any) {
          super(props);
          this.state = {language: props.userStore.language};
        }
        render() {
          console.log('render withIntl');
          return (
            <IntlProvider
              locale={this.props.userStore.language}
              messages={message[this.props.userStore.language]}>
              <WrappedComponent />
            </IntlProvider>
          );
        }
      },
    ),
  );
}
