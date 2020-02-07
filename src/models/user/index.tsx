import {observable, action} from 'mobx';
import {getStorage} from '@/common/localStorage/index';
import StorageModel from '@/common/localStorage/model/StorageModel';

class User {
  @observable language: string = 'en';

  @action setLanguage(language: string) {
    this.language = language;
  }
  constructor() {
    getStorage().then((storage: StorageModel) => {
      if (storage && storage.language) {
        this.setLanguage(storage.language);
      }
    });
  }
}

const userStore = new User();

export default userStore;
