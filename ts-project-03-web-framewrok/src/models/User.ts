interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

export class User {
	// events: { [key: string]: Callback[] } = {};

	constructor(private data: UserProps) {}

	get(propName: string): string | number {
		return this.data[propName];
	}

	set(propKeyValPair: UserProps): void {
		Object.assign(this.data, propKeyValPair);
	}

	// on(eventName: string, callback: Callback): void {
	// 	const tempCallbacks = this.events[eventName] || [];
	// 	tempCallbacks.push(callback);
	// 	this.events[eventName] = tempCallbacks;
	// }

	// trigger(eventName: string): void {
	// 	const callbacks = this.events[eventName];
	// 	if (!callbacks || callbacks.length === 0) {
	// 		return;
	// 	}

	// 	callbacks.forEach((callback) => {
	// 		callback();
	// 	});
	// }

	// fetch() {
	// 	axios
	// 		.get(`${HOST}/users/${this.get('id')}`)
	// 		.then(({ data }) => {
	// 			this.data = data;
	// 			console.log('data: ', data);
	// 		})
	// 		.catch((err) => {
	// 			console.error('err: ', err);
	// 		});
	// }

	// save() {
	// 	const { id } = this.data;
	// 	if (id) {
	// 		// if data is at backend
	// 		axios.put(`${HOST}/users/${this.data.id}`);
	// 	} else {
	// 		axios.post(`${HOST}/users`, this.data);
	// 	}
	// }
}
