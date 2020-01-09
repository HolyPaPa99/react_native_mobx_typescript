import {observable, computed, action} from 'mobx';

class Todo {
  @observable name: string;

  @action
  setName(name: string) {
    this.name = name;
  }

  constructor(name: string) {
    this.name = name;
  }
}

const todoStore = new Todo('hello');
export default todoStore;
