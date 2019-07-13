import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const rootElement = document.getElementById('root');

if (rootElement) {
	// const userForm = new UserForm(rootElement, User.buildUser({ name: 'Sean', age: 30 }));
	// userForm.render();
	const userEdit = new UserEdit(rootElement, User.buildUser({ name: 'Sean', age: 30 }));
	userEdit.render();
	console.log('userEdit: ', userEdit);
} else {
	throw new Error('root element is required');
}
