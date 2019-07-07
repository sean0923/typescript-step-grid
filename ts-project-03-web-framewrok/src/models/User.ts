import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

const HOST = 'http://localhost:3000';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public eventing = new Eventing();
  public sync = new Sync(HOST);
  public attributes;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}
