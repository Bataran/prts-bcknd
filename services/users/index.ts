import { UsersMicroservice } from './application';

(async function start() {
  const app = new UsersMicroservice();

  await app.start();

  console.log("User service started at port 3001");
})();