import { api } from "@loopback/rest";
import { inject } from '@loopback/core';
import { userApiSpec } from "../api-spec";
import { UserRepository } from '../repository';

@api(userApiSpec)
export class UserController {

  constructor( @inject('repositories.UserRepository') public repository: UserRepository) { }

  public async search(): Promise<any> {
    try {
      return await this.repository.find();
    } catch (error) {
      return error;
    }
  }

  public async getDetails(id: string): Promise<any> {
    try {
      return await this.repository.findById(id);
    } catch (error) {
      return error;
    }
  }

  public async create(data: any) {
    try {
      return await this.repository.create(data);
    } catch (error) {
      return error;
    }
  }

  public async update(id: string, data: any) {
    try {
      return await this.repository.updateById(id, data)
    } catch (error) {
      return error;
    }
  }

  public async delete(id: string, data: any) {
    try {
      console.log("id", id);
      return await this.repository.deleteById(id)
    } catch (error) {
      return error;
    }
  }
};