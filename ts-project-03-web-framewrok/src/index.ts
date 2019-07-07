import { User } from './models/User';

const user = new User({ id: 1, age: 20 });
// const user = new User({});

user.on('save', () => {
  console.log('user: ', user);
});

user.save();
