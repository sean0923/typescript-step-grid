import { User, UserProps } from './models/User';
import { UserEdit } from './views/UserEdit';
import { Collection } from './models/Collection';
import { UserShow } from './views/UserShow';
import { UserList } from './views/UserList';

const rootElement = document.getElementById('root');

const userCollection = new Collection<User, UserProps>(
	'http://localhost:3000/users',
	User.buildUser
);

if (rootElement) {
	const userList = new UserList(rootElement, userCollection);
	userList.render();
}

// if (rootElement) {
// 	// const userForm = new UserForm(rootElement, User.buildUser({ name: 'Sean', age: 30 }));
// 	// userForm.render();
// 	const userEdit = new UserEdit(rootElement, User.buildUser({ name: 'Sean', age: 30 }));
// 	userEdit.render();
// 	console.log('userEdit: ', userEdit);
// } else {
// 	throw new Error('root element is required');
// }
