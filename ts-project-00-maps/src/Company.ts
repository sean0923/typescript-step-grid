import faker from 'faker';

export class Company {
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
}
