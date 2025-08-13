import { JSONFilePreset } from "lowdb/node";
interface DefaultData {
  photos: { id: string; src: string }[];
}
const defaultData: DefaultData = { photos: [] };
const db = await JSONFilePreset("db.json", defaultData);
export default db;
