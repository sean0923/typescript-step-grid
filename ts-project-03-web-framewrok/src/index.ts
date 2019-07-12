import { User } from './models/User';
import { Collection } from './models/Collection';

const rootUrl = 'http://localhost:3000/users';

const collection = new Collection(rootUrl);

collection.fetch();

collection.on('change', () => {
  console.log('collection.models: ', collection.models);
});
