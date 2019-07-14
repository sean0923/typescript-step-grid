import { User, UserProps } from '../models/User';
import { Collection } from '../models/Collection';

export class UserList {
	constructor(public parent: Element, public collection: Collection<User, UserProps>) {
		collection.fetch();
		collection.on('change', () => {
			this.render();
		});
	}

	template: () => string = () => {
		const templates = this.collection.models.map((user: User) => {
			return `
        <h2>${user.get('name')}</h2>
        <div>${user.get('age')}</div>
        <br />
      `;
		});
		return templates.join('');
	};

	render: () => void = () => {
		this.parent.innerHTML = '';
		const templateElement = document.createElement('template');
		templateElement.innerHTML = this.template();
		this.parent.append(templateElement.content);
	};
}
