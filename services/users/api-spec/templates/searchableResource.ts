export let SearchableResource = (resource: any, type: string) => ({
  paths: {
    [`/${resource.path}`]: {
      get: {
        "parameters": [{
          in: "query",
          name: "filter",
          type: "string",
        }],
        "responses": {
          200: {
            description: resource.description ||
              `Result set of type ${type} returned.`,
            schema: {
              $ref: `#/definitions/${type}`,
              type: "array",
            },
          },
        },
        "x-controller-name": resource.controller,
        "x-operation-name": "search",
      },
    },
    [`/${resource.path}/{id}`]: {
      get: {
        "parameters": [
          {
            in: "path",
            name: "id",
            required: true,
            type: "string",
          },
        ],
        "responses": {
          200: {
            description: resource.description ||
              `Result of type ${type} returned.`,
            schema: {
              $ref: `#/definitions/${type}`,
            },
          },
        },
        "x-controller-name": resource.controller,
        "x-operation-name": "getDetails",
      },
    },
  },
});