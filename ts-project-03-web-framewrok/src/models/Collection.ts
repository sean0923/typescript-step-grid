import axios, { AxiosResponse } from 'axios';

import { Eventing } from './Eventing';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (props: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((resp: AxiosResponse) => {
      this.models = resp.data.map((props: K) => {
        return this.deserialize(props);
      });

      this.trigger('change');
    });
  }
}
