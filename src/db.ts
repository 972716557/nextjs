import { JSONFilePreset } from "lowdb/node";
const defaultData = { photos: [] };
const db = await JSONFilePreset("db.json", defaultData);
export default db;
