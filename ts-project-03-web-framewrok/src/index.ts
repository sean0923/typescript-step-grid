import { User } from './models/User';

const user = new User({ id: 1, name: 'Sean' });

// user.save();
// user.fetch();

user.on('change', () => {
  console.log('user is changed');
});

console.log('name: ', user.get('name'));

user.set({ name: 'Hong' });
console.log('newName: ', user.get('name'));
