export const getLeadsSwagger = {
    "hapi-swagger": {
      responses: {
        200: {
          description: "Got leads successfully.",
        },
        404: {
          description: "Active leads not found.",
        },
        500: {
          description: "Server error.",
        },
      },
    },
  };