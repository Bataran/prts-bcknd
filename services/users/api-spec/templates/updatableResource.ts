export let UpdatableResource = (resource: any, type: string) => ({
  paths: {
    [`/${resource.path}/{id}`]: { // pattern
      put: {
        "parameters": [
          {
            in: "path",
            name: "id",
            required: true,
            type: "string",
          },
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              $ref: `#/${type}`,
            },
          },
        ],
        "responses": {
          200: {
            description: resource.description
              || `The ${type} instance was updated.`,
            schema: {
              $ref: `#/${type}`,
            },
          },
        },
        "x-controller-name": resource.controller,
        "x-operation-name": "update",
      },
    },
  },
});