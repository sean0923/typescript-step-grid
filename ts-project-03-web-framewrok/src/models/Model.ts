import { AxiosPromise, AxiosResponse } from 'axios';

type Callback = () => void;
type HasId = {
  id?: number;
};

interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
  set(propKeyValPair: T): void;
}

interface ModelEventing {
  events: { [key: string]: Callback[] };
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

interface ModelSync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private eventing: ModelEventing,
    private sync: ModelSync<T>
  ) {}

  get on() {
    return this.eventing.on;
  }

  get trigger() {
    return this.eventing.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(userProp: T): void {
    this.attributes.set(userProp);
    this.eventing.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without id');
    }

    this.sync.fetch(id).then((resp: AxiosResponse) => {
      this.set(resp.data);
    });
  }

  save(): void {
    const userProp = this.attributes.getAll();

    this.sync.save(userProp).then((resp: AxiosResponse) => {
      console.log('?');
      this.trigger('save');
    });
  }
}
