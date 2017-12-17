export let CreatableResource = (resource: any, type: string) => ({
  paths: {
    [`/${resource.path}`]: { // pattern
      post: {
        "parameters": [
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
          201: {
            description: resource.description
              || `The ${type} instance was created.`,
            schema: {
              $ref: `#/${type}`,
            },
          },
        },
        "x-controller-name": resource.controller,
        "x-operation-name": "create",
      },
    },
  },
});