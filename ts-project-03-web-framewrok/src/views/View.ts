// import { User } from '../models/User';
import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
	components: { [key: string]: Element } = {};

	constructor(public parent: Element, public model: T) {
		this.reRenderWhenChangeTrigger();
	}

	abstract template(): string;

	eventsMap = (): { [key: string]: () => void } => {
		return {};
	};

	componentsMap = (): { [key: string]: string } => {
		return {};
	};

	reRenderWhenChangeTrigger = () => {
		this.model.on('change', () => {
			this.render();
		});
	};

	bindEvents(fragment: DocumentFragment): void {
		const eventsMap = this.eventsMap();
		Object.keys(eventsMap).forEach((eventKey) => {
			const [ event, selector ] = eventKey.split(':');
			const callback = eventsMap[eventKey];

			fragment.querySelectorAll(selector).forEach((node) => {
				node.addEventListener(event, callback);
			});
		});
	}

	mapComponents(fragment: DocumentFragment): void {
		Object.keys(this.componentsMap()).forEach((key) => {
			const className = this.componentsMap()[key];
			const node = fragment.querySelector(className);

			if (node) {
				this.components[key] = node;
			}
		});
	}

	onRender = (): void => {};

	render(): void {
		this.parent.innerHTML = '';

		const templateElement = document.createElement('template');
		templateElement.innerHTML = this.template();

		this.mapComponents(templateElement.content);
		this.bindEvents(templateElement.content);

		this.onRender();
		this.parent.append(templateElement.content);
	}
}
