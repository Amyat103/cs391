'use server';
import getCollection, { LINKS_COLLECTION } from './db';

export default async function createLink(alias: string, url: string) {
  console.log('Server: In createLink', { alias, url });

  const link = {
    alias: alias,
    url: url,
  };

  const collection = await getCollection(LINKS_COLLECTION);
  console.log('Server: Got collection');

  const existing = await collection.findOne({ alias });
  if (existing) {
    console.log('Alias exist');

    return null;
  }

  const res = await collection.insertOne(link);
  console.log('createLink backend result', res);

  if (!res.acknowledged) {
    return null;
  }

  return { alias, url, id: res.insertedId.toHexString() };
}
