"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leadsUpdateSwagger = exports.leadsRegisterSwagger = exports.getLeadsSwagger = void 0;
exports.getLeadsSwagger = {
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
exports.leadsRegisterSwagger = {
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
exports.leadsUpdateSwagger = {
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
//# sourceMappingURL=leads.js.map