import * as _ from 'lodash';
import { BaseDefinition } from './baseDefinition';
import { ModelDefinitionSyntax } from '@loopback/repository';

export const UserDefinition: ModelDefinitionSyntax = {
  name: 'user',
  properties: {
    email: {
      type: 'string',
      required: true
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    }
  }
};

_.merge(UserDefinition, BaseDefinition);