import { Entity, model, ModelDefinitionSyntax } from '@loopback/repository';
import { UserDefinition } from './definitions'

@model(UserDefinition)
export class User extends Entity {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  firstName: string;
  lastName: string;

  constructor(data: Partial<IUser>) {
    super(data);
    Object.assign(this, data);
  }
}

export interface IUser {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  firstName: string;
  lastName: string;
}