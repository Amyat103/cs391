import { MongoClient, Db, Collection } from 'mongodb';

const MONGO_URI = process.env.NEXT_PUBLIC_MONGO_URI as string;
if (!MONGO_URI) {
  throw new Error('MONGO_URI environment variable is undefined');
}

const DB_NAME = 'mp-5';
export const LINKS_COLLECTION = 'links';

let client: MongoClient | null = null;
let db: Db | null = null;

async function connect(): Promise<Db> {
  try {
    if (!client) {
      client = new MongoClient(MONGO_URI);
      await client.connect();
    }
    return client.db(DB_NAME);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export default async function getCollection(
  collectionName: string
): Promise<Collection> {
  if (!db) {
    db = await connect();
  }
  return db.collection(collectionName);
}