'use server';
import getCollection, { LINKS_COLLECTION } from './db';

export default async function getLink(alias: string) {
  const collection = await getCollection(LINKS_COLLECTION);

  const link = await collection.findOne({ alias });

  if (!link) {
    return null;
  }

  return link.url;
}
