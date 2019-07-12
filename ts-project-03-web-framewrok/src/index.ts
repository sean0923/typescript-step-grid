import { UserForm } from './views/UserForm';

const rootElement = document.getElementById('root');
const userForm = new UserForm(rootElement);

userForm.render();
