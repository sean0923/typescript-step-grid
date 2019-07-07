import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { AxiosResponse } from 'axios';

const HOST = 'http://localhost:3000/users';

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

  get on() {
    return this.eventing.on;
  }

  get trigger() {
    return this.eventing.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(userProp: UserProps): void {
    this.attributes.set(userProp);
    this.eventing.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without id');
    }

    this.sync.fetch(id).then((resp: AxiosResponse) => {
      this.set(resp.data);
    });
  }

  save(): void {
    const userProp = this.attributes.getAll();

    this.sync.save(userProp).then((resp: AxiosResponse) => {
			console.log('?');
      this.trigger('save');
    });
  }
}
