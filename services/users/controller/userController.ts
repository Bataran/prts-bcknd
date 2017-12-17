import { api } from "@loopback/rest";
import { inject } from '@loopback/core';
import { userApiSpec } from "../api-spec";
import { UserRepository } from '../repository';

@api(userApiSpec)
export class UserController {

  constructor( @inject('repositories.UserRepository') public repository: UserRepository) { }

  public async search(): Promise<any> {
    return await this.repository.find();
  }

  public async getDetails(id: string): Promise<any> {
    return await this.repository.findById(id);
  }

  public async create(data: any) {
    try {
      return await this.repository.create(data);
    } catch (error) {
      return error;
    }
  }
};