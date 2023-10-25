import dotenv from "dotenv";

dotenv.config();
export default {
  mongoURI: process.env.DATABASE,
  jwtSecret: process.env.JWTSECRET,
  apiVersion: process.env.APIVERSION,
};
