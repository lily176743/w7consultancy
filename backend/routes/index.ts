import { Server } from "@hapi/hapi";

import config from "../config";

import { leadsRoute } from "./leads";

const prefix = `/api/${config.apiVersion}`;

const setRoutes = async (server: Server) => {
    server.realm.modifiers.route.prefix = `/api/${config.apiVersion}/leads`;
    server.route(leadsRoute);
}

export default setRoutes;