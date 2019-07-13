import { User } from '../models/User';

export abstract class View {
  constructor(public parent: Element, public model: User) {
    this.reRenderWhenChangeTrigger();
  }

  abstract eventsMap(): { [key: string]: (e?: Event) => void };
  abstract template(): string;

  reRenderWhenChangeTrigger = () => {
    this.model.on('change', () => {
      this.render();
    });
  };

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    Object.keys(eventsMap).forEach((eventKey) => {
      const [event, selector] = eventKey.split(':');
      const callback = eventsMap[eventKey];

      fragment.querySelectorAll(selector).forEach((node) => {
        node.addEventListener(event, callback);
      });
    });
  }

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
