import { User } from './models/User';

const user = User.buildUser({ id: 1, name: 'Sean' });

user.fetch();
