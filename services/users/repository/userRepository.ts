import { DefaultCrudRepository, DataSourceType, juggler } from '@loopback/repository';
import { User } from '../model';
import { mongo } from '../datasources';

export class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id> {
  private model: typeof juggler.PersistedModel;

  constructor() {
    super(User, mongo);
    this.model = mongo.createModel<typeof juggler.PersistedModel>('User', User);
  }
}