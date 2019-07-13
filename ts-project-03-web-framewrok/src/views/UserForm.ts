import { View } from './View';

export class UserForm extends View {
  eventsMap(): { [key: string]: (e?: Event) => void } {
    return {
      'click:.set-name': this.setName,
      'click:.set-random-age': this.setRandomAge,
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
}
