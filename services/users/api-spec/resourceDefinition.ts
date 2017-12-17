import { DefinitionsObject } from '@loopback/openapi-spec';
import * as _ from 'lodash';

export const ResourceDefinition = (baseDefinition: any, type: any): DefinitionsObject => ({
  definitions: {
    [`${type.name}`]: _.merge(type, baseDefinition)
  },
});