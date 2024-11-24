'use client';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import getLink from '../lib/getLink';

export default function AliasPage() {
  const { alias } = useParams();

  useEffect(() => {
    const fetchAndRedirect = async () => {
      const url = await getLink(alias as string);
      if (!url) {
        return <h2>Link error try again</h2>;
      }
      window.location.href = url;
    };

    fetchAndRedirect();
  }, [alias]);

  return <h2>Linking</h2>;
}
