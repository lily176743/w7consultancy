export const leadsRegisterSwagger = {
    "hapi-swagger": {
      responses: {
        201: {
          description: "Leads created successfully.",
        },
        400: {
          description: "Input Fields Required.",
        },
        409: {
          description: "Leads already exists.",
        },
      },
    },
  };