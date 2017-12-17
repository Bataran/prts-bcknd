import { ControllerSpec } from "@loopback/rest";
import { SearchableResource, CreatableResource } from './templates';
import { ResourceDefinition } from './resourceDefinition';
import * as BaseDefinition from './definitions/BaseDefinition.json'
import * as UserDefinition from './definitions/User.json'
import * as _ from 'lodash';

export const userApiSpec: ControllerSpec = { paths: [] };

const userGetResource = SearchableResource({
  controller: "UserController",
  path: "users",
}, "User");

const userCreateResource = CreatableResource({
  controller: "UserController",
  path: "users",
}, "User");
// Rinse and repeat for PUT, PATCH, DELETE, etc...

// Merge all of the objects together.
// This will mix the product definition into the "definitions" property of the
// OpenAPI spec, and the resources will be mixed into the "paths" property.
_.merge(userApiSpec, ResourceDefinition(BaseDefinition, UserDefinition), userGetResource, userCreateResource);
