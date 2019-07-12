import { User } from './models/User';

const collection = User.buildUserCollection();

collection.fetch();

collection.on('change', () => {
  console.log('collection.models: ', collection.models);
});

const func: () => string = () => {
  return '1';
};
