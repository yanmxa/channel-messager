import mysql from "mysql2";
import { config } from "./config";

// export const db = mysql.createConnection(config.db);
export const pool = mysql.createPool(config.db)