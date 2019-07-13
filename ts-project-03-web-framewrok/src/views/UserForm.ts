import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.reRenderWhenChangeTrigger();
  }

  reRenderWhenChangeTrigger = () => {
    this.model.on('change', () => {
      this.render();
    });
  };

  eventsMap(): { [key: string]: (e?: Event) => void } {
    return {
      'click:.set-name': this.setName,
      'click:.set-random-age': this.setRandomAge,
    };
  }

  setName: () => void = () => {
    const inputNode = this.parent.querySelector('input');
    const inputValue = inputNode.value;
    this.model.set({ name: inputValue });
  };

  setRandomAge: () => void = () => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>name: ${this.model.get('name')}</div>
        <div>age: ${this.model.get('age')}</div>
        <input />
        <button class="set-name">set name</button>
        <button class="set-random-age">set random age</button>
      </div>
    `;
  }

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
