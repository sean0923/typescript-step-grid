interface UserProps {
	name?: string;
	age?: number;
}

type Callback = () => void;

export class User {
	events: { [key: string]: Callback[] } = {};

	constructor(private data: UserProps) {}

	get(propName: string): string | number {
		return this.data[propName];
	}

	set(propKeyValPair: UserProps): void {
		Object.assign(this.data, propKeyValPair);
	}

	on(eventName: string, callback: Callback): void {}
}
