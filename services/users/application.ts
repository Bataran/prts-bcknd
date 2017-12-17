import { Application } from "@loopback/core";
import { RestComponent, RestServer } from "@loopback/rest";
import { UserController } from './controller';
import { ApiSpec } from './api-spec';
import { UserRepository } from './repository';
import { RepositoryMixin } from '@loopback/repository';
const config = require('./config/config.json');

export class UsersMicroservice extends RepositoryMixin(Application) {
  constructor() {
    super({
      components: [RestComponent],
      controllers: [UserController],
      repositories: [UserRepository]
    });
  }

  async start() {
    try {
      const server = await this.getServer(RestServer);
      server.api(ApiSpec);
      server.bind("rest.port").to(config.port);
      await super.start();
    } catch (error) {
      console.error(error);
    }
  }
}