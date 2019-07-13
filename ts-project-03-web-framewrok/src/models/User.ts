import { Model } from './Model';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Collection } from './Collection';

const HOST = 'http://localhost:3000/users';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(new Attributes<UserProps>(attrs), new Eventing(), new ApiSync<UserProps>(HOST));
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(HOST, (userProps: UserProps) =>
      User.buildUser(userProps)
    );
  }

  setRandomAge = () => {
    const randomAge = Math.round(Math.random() * 100);
    this.set({ age: randomAge });
  };
}
