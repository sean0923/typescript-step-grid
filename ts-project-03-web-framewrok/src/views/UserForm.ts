export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onMouseEnter,
    };
  }

  onButtonClick(): void {
    console.log('button clicked');
  }

  onMouseEnter(): void {
    console.log('MouseEnter');
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input />
        <button>Submit</button>
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
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
