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
export const leadsUpdateSwagger = {
    "hapi-swagger": {
        responses: {
            200: {
                description: "Lead has been updated.",
            },
            404: {
                description: "Leads not found.",
            },
            409: {
                description: "Already updated a Lead.",
            },
            500: {
                description: "Failed.",
            },
        },
    }
};