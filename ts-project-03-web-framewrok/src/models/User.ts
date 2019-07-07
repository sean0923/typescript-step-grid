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
  public eventing: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(HOST);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}
