import { Application } from "@loopback/core";
import { RestComponent, RestServer } from "@loopback/rest";
import { UserController } from './controller';
import { ApiSpec } from './api-spec';
import { UserRepository } from './repository';
import { ServerContext } from './serverContext';

const config = require('./config/config.json');

export class UsersMicroservice extends Application {
  constructor() {
    super();
    this.component(RestComponent);
    this.server(RestServer, 'rest.v1');
  }

  async start() {
    try {
      const server = await this.getServer('rest.v1') as RestServer;
      server.api(ApiSpec);

      const serverContext = new ServerContext(server);
      serverContext.bindPort(config.port);
      serverContext.bindController(UserController);
      serverContext.bindRepository(UserRepository);

      await serverContext.start();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}