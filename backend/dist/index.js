"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi = __importStar(require("@hapi/hapi"));
const vision_1 = __importDefault(require("@hapi/vision"));
const inert_1 = __importDefault(require("@hapi/inert"));
const hapi_swagger_1 = __importDefault(require("hapi-swagger"));
const hapi_auth_jwt2_1 = __importDefault(require("hapi-auth-jwt2"));
const config_1 = __importDefault(require("./config"));
const dbConnect_1 = __importDefault(require("./lib/dbConnect"));
const routes_1 = __importDefault(require("./routes"));
const validateUser = (decoded, request, h) => __awaiter(void 0, void 0, void 0, function* () {
    // Perform validation of the decoded JWT token
    // Return an error if validation fails, or return a user object if validation succeeds
    // throw Boom.unauthorized("Invalid credentials");.
    return { isValid: true, userId: decoded.userId };
    // return "OK";
});
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, dbConnect_1.default)();
    const server = new hapi.Server({
        port: 5000,
        routes: { cors: { origin: ["*"] } },
        host: "0.0.0.0",
    });
    yield server.register(inert_1.default);
    yield server.register(vision_1.default);
    yield server.register({
        plugin: hapi_swagger_1.default,
        options: {
            info: {
                title: "My API",
                version: "1.0.0",
            },
            securityDefinitions: {
                jwt: {
                    type: "apiKey",
                    name: "Authorization",
                    in: "header",
                },
            },
        },
    });
    yield server.register(hapi_auth_jwt2_1.default);
    yield server.auth.strategy("jwt", "jwt", {
        key: config_1.default.jwtSecret,
        validate: validateUser,
        verifyOptions: { algorithms: ["HS256"] },
    });
    // server.auth.default("jwt");
    yield (0, routes_1.default)(server);
    yield server.start();
    console.log(`🚀 Server running on ${server.info.uri} 🚀`);
    return server;
});
init();
exports.default = init;
//# sourceMappingURL=index.js.map