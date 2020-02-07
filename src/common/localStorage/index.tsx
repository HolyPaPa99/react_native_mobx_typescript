import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import StorageModel from '@/common/localStorage/model/StorageModel';
import {inject} from 'mobx-react';
import Log from '@/common/log';

const key: string = '@storage';

export function getStorage() {
  return AsyncStorage.getItem(key).then(storage =>
    JSON.parse(storage as string),
  );
}

export function setStorage(storage: StorageModel): void {
  AsyncStorage.setItem(key, JSON.stringify(storage));
}

export function mergeStorage(storage: StorageModel): void {
  AsyncStorage.mergeItem(key, JSON.stringify(storage));
}

export function withLocalStorage(WrappedComponent: React.ComponentType) {
  return inject('userStore')(
    class extends React.Component {
      constructor(props: any) {
        super(props);
        getStorage().then((storage: StorageModel) => {
          Log.info('current localStorage:' + JSON.stringify(storage));
          if (!storage) {
            setStorage(new StorageModel());
          } else {
            props.userStore.setLanguage(storage.language);
          }
        });
      }
      render() {
        Log.info('render withLocalStorage');
        return <WrappedComponent />;
      }
    },
  );
}
