import { AxiosPromise } from 'axios';

type Callback = () => void;

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

export class Model {}
