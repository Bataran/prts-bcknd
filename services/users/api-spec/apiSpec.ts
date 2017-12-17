import { userApiSpec } from "../api-spec";
import * as OpenApiSpec from "@loopback/openapi-spec";
import * as _ from "lodash";


// Import API fragments here

export let ApiSpec = OpenApiSpec.createEmptyApiSpec();
ApiSpec.info = {
  title: "User API",
  version: "1.0",
};
ApiSpec.swagger = "2.0";
ApiSpec.basePath = "/";

_.merge(ApiSpec, userApiSpec);