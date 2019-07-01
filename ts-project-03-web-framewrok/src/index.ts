import { User } from './models/User';

const user = new User({ name: 'Sean', age: 29 });

user.save();
