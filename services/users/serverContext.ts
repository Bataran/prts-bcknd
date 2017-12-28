import { Server, ControllerClass } from "@loopback/core";
import { Class, Repository } from "@loopback/repository";
import { Context } from "@loopback/context/dist/src/context";

export interface IServerContext {
  bindController: (controller: ControllerClass) => void;
  bindComponent: (component: Class<any>) => void;
  bindRepository: (repository: Class<Repository<any>>) => void;
  bindPort: (port: number) => void;
  start: () => Promise<void>;
  stop: () => Promise<void>;
}

export class ServerContext<T extends Server & Context> implements IServerContext {
  constructor(private server: T) { }

  bindController(controller: ControllerClass): void {
    const contrKey = `controllers.${controller.name}`;
    this.server.bind(contrKey).toClass(controller);
  }

  bindComponent(component: Class<any>): void {
    const compKey = `components.${component.name}`;
    this.server.bind(compKey).toClass(component);
  }

  bindRepository(repository: Class<Repository<any>>): void {
    const repoKey = `repositories.${repository.name}`;
    this.server.bind(repoKey).toClass(repository);
  }

  bindPort(port: number): void {
    this.server.bind("rest.port").to(port);
  }

  async start(): Promise<void> {
    await this.server.start();
  }

  async stop(): Promise<void> {
    await this.server.stop()
  }
}
