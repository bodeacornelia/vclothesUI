import { merge } from 'lodash';

export class User {
  id: number;
  email: string;
  phone: string;
  name: string;

  constructor(data) {
    this.init(data);
  }

  init(data) {
    console.log('This ', this, data);
    merge(this, data);
  }
}