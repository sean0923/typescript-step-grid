class Boat {
	color: string = 'red';

	get formattedColor(): string {
		return `formatted ${this.color}`;
	}

	@logError
	pilot(): void {
		throw new Error();
		console.log('swish');
	}
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
	const method = desc.value;

	desc.value = () => {
		try {
			method();
		} catch (err) {
			console.log('boat is too slow');
		}
	};
}

new Boat().pilot();
