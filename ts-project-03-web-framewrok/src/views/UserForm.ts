import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
	eventsMap(): { [key: string]: (e?: Event) => void } {
		return {
			'click:.set-name': this.setName,
			'click:.set-random-age': this.setRandomAge,
			'click:.save-user': this.saveUser,
		};
	}

	setName: () => void = () => {
		const inputNode = this.parent.querySelector('input');

		if (inputNode) {
			const inputValue = inputNode.value;
			this.model.set({ name: inputValue });
		}
	};

	setRandomAge: () => void = () => {
		this.model.setRandomAge();
	};

	saveUser: () => void = () => {
		this.model.save();
	};

	template(): string {
		return `
      <div>
        <div>name: ${this.model.get('name')}</div>
        <div>age: ${this.model.get('age')}</div>
        <input />
        <button class="set-name">set name</button>
        <button class="set-random-age">set random age</button>
        <button class="save-user">save user</button>
      </div>
    `;
	}
}
