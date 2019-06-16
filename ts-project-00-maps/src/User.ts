import faker from 'faker';

export class User {
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
}
