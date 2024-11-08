import {MongoClient, Db, Collection} from "mongodb";

// Retrieve the MongoDB URI from environment variables.
// The `as string` assertion ensures TypeScript treats MONGO_URI as a string.
const MONGO_URI = process.env.MONGO_URI as string;

// Check if the MONGO_URI is defined. If not, throw an error to prevent further execution.
// This is important to ensure we don’t try to connect without a valid URI.
if (!MONGO_URI) {
    throw new Error("MONGO_URI environment variable is undefined");
}

// Define the database name
const DB_NAME = "cs-391-jeff-dis-7";

// Define a constant for the posts collection name.
export const POSTS_COLLECTION = "posts-collection";

// Define two variables to hold the MongoDB client and database instances.
// They are initially set to null and will be initialized later.
let client: MongoClient | null=null;
let db: Db | null=null;

// This function returns a `Db` object, representing the MongoDB database.
async function connect(): Promise<Db> {
    // If `client` is not yet initialized, create a new MongoClient instance
    // and connect to MongoDB using the provided URI.
    if (!client) {
        client = new MongoClient(MONGO_URI);
        await client.connect();
    }
    // Return the database instance for the specified database name.
    return client.db(DB_NAME);
}

// Default export function to retrieve a specific collection from the database.
// `collectionName` is passed as a parameter, allowing us to fetch any collection by name.
export default async function getCollection(collectionName: string): Promise<Collection> {
    // If `db` is not yet initialized, call `connect` to establish the connection.
    if (!db) {
        db = await connect();
    }
    // Return the requested collection from the database.
    return db.collection(collectionName);
}
