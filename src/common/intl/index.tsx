import React from 'react';
import {IntlProvider} from 'react-intl';
import message from './lang/index';
import {getStorage} from '@/common/localStorage';
import StorageModel from '@/common/localStorage/model/StorageModel';

export function withIntl(WrappedComponent: React.ComponentType) {
  return class extends React.Component<{}, {language: string}> {
    constructor(props: any) {
      super(props);
      this.state = {language: 'en'};
      getStorage().then((storage: StorageModel) => {
        console.log('current language:' + storage.language);
        this.setState({language: storage.language});
      });
    }

    render() {
      return (
        <IntlProvider
          locale={this.state.language}
          messages={message[this.state.language]}>
          <WrappedComponent {...this.props} />
        </IntlProvider>
      );
    }
  };
}
