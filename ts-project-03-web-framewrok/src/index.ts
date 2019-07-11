import { User } from './models/User';

const user = User.buildUser({ id: 1, name: 'Sean' });

user.on('save', () => {
  console.log('user changed');
});

user.save();
