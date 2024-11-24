import { redirect } from 'next/navigation';
import getLink from '../lib/getLink';

export default async function AliasPage({
  params,
}: {
  params: { alias: string };
}) {
  const url = await getLink(params.alias);

  if (!url) {
    return <h2>Link cannot be found</h2>;
  }

  redirect(url);
}
