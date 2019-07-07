import { User } from './models/User';

const user = new User({ id: 1 });
// const user = new User({});

user.on('change', () => {
  console.log('user: ', user);
});

user.fetch();
