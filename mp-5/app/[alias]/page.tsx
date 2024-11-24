import { redirect } from 'next/navigation';
import getLink from '../lib/getLink';

interface PageProps {
  alias: string;
}

export default async function AliasPage({ params }: { params: PageProps }) {
  const url = await getLink(params.alias);

  if (!url) {
    return <h2>Link cannot be found</h2>;
  }

  redirect(url);
}
