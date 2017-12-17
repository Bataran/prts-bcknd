import { juggler, DataSourceConstructor } from '@loopback/repository';

export const mongo = new DataSourceConstructor('mongo-users', {
  connector: "mongodb",
  host: "ds127065.mlab.com",
  port: 27065,
  url: false,
  database: "users",
  user: "bataran",
  password: "b4t4r4n",
  name: "users",
});