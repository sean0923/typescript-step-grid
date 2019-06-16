import faker from 'faker';

import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lng: number;
    lat: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lng: Number(faker.address.longitude()),
      lat: Number(faker.address.latitude()),
    };
  }

  getContent(): string {
    return `
      user name: ${this.name}
    `;
  }
}
