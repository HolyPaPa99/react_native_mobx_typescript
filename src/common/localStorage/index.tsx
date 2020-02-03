import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import StorageModel from '@/common/localStorage/model/StorageModel';

const key: string = '@storage';

export function getStorage() {
  return AsyncStorage.getItem(key).then(storage=>JSON.parse(storage as string));
}

export function setStorage(storage: StorageModel): void {
  AsyncStorage.setItem(key, JSON.stringify(storage));
}

export function mergeStorage(storage: StorageModel): void {
  AsyncStorage.mergeItem(key, JSON.stringify(storage));
}

export function withLocalStorage(WrappedComponent: React.ComponentType) {
  getStorage().then(storage => {
    console.log(storage)
    if (!storage) {
      setStorage(new StorageModel());
    }
  });
  return class extends React.Component {
    render() {
      return <WrappedComponent />;
    }
  };
}
