import dotenv from "dotenv";
import { cleanEnv, port, str, testOnly } from "envalid";

dotenv.config();

export const env = cleanEnv(process.env, {
  PORT: port({ devDefault: testOnly(3000) }),
  MONGO_URI: str()
})