import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import StorageModel from '@/common/localStorage/model/StorageModel';

const key: string = '@storage';

function* getStorage() {
  let item: string = yield AsyncStorage.getItem(key);
  return item;
}

function setStorage(storage: StorageModel): void {
  AsyncStorage.setItem(key, JSON.stringify(storage));
}

function mergeStorage(storage: StorageModel): void {
  AsyncStorage.mergeItem(key, JSON.stringify(storage));
}

export function withLocalStorage(WrappedComponent: React.ComponentType) {
  let storage = getStorage();
  if (!storage) {
    setStorage(new StorageModel());
  }
  return class extends React.Component {
    render() {
      return <WrappedComponent />;
    }
  };
}
