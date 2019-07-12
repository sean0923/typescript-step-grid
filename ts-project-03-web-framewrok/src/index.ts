import { User } from './models/User';
import { UserForm } from './views/UserForm';

const rootElement = document.getElementById('root');
const userForm = new UserForm(rootElement, User.buildUser({'name': 'Sean', age: 30});

userForm.render();
