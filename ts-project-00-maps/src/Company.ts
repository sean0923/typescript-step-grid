import faker from 'faker';

import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lng: number;
    lat: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lng: Number(faker.address.longitude()),
      lat: Number(faker.address.latitude()),
    };
  }

  getContent(): string {
    return `
      <div>
        <h1>company name: ${this.companyName}</h1>
        <h3>catch phrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}
