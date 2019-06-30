import { User } from './models/User';

const user = new User({ name: 'Sean', age: 29 });

user.set({ name: 'Yo' });

const name = user.get('name');
console.log('name: ', name);
const age = user.get('age');
console.log('age: ', age);
