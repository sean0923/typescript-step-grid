import { User } from './models/User';

const user = new User({ name: 'Sean', age: 29 });

user.on('click', () => {
	console.log('yoyo');
	console.log('yoyo');
	console.log('yoyo');
});

user.trigger('click');
