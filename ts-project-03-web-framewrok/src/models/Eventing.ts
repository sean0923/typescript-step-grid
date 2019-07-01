type Callback = () => void;

export class Eventing {
	events: { [key: string]: Callback[] } = {};

	on(eventName: string, callback: Callback): void {
		const tempCallbacks = this.events[eventName] || [];
		tempCallbacks.push(callback);
		this.events[eventName] = tempCallbacks;
	}

	trigger(eventName: string): void {
		const callbacks = this.events[eventName];
		if (!callbacks || callbacks.length === 0) {
			return;
		}

		callbacks.forEach((callback) => {
			callback();
		});
	}
}
