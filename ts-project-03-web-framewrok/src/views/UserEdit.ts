import { User, UserProps } from '../models/User';

import { View } from './View';
import { UserShow } from './UserShow';
import { UserForm } from './UserForm';

export class UserEdit extends View<User, UserProps> {
	componentsMap: () => { [key: string]: string } = () => {
		return {
			userShow: '.user-show',
			userForm: '.user-form',
		};
	};

	onRender: () => void = () => {
		new UserShow(this.components.userShow, this.model).render();
		new UserForm(this.components.userForm, this.model).render();
	};

	template: () => string = () => {
		return `
      <div class="user-show"></div>
      <div class="user-form"></div>
    `;
	};
}
