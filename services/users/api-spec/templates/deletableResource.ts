export let DeletableResource = (resource: any, type: string) => ({
  paths: {
    [`/${resource.path}/{id}`]: { // pattern
      delete: {
        "parameters": [
          {
            in: "path",
            name: "id",
            required: true,
            type: "string",
          }
        ],
        "responses": {
          200: {
            description: resource.description
              || `The ${type} instance was deleted.`,
            schema: {
              $ref: `#/${type}`,
            },
          },
        },
        "x-controller-name": resource.controller,
        "x-operation-name": "delete",
      },
    },
  },
});