'use client';
import { useState } from 'react';
import createLink from '../lib/createLink';

export default function URLForm() {
  const [displayLink, setDisplayLink] = useState('');
  const [url, setUrl] = useState('');
  const [alias, setAlias] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    console.log('Checking URL', url);
    new URL(url);
    console.log('URL valid');

    console.log('Calling createLink');
    const result = await createLink(alias, url);
    console.log('createLink result', result);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    if (result) {
      setError(false);
      setDisplayLink(`${baseUrl}/${alias}`);
    } else {
      setError(true);
      setDisplayLink('Error frontend form, not result');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-300px flex flex-col gap-4'>
        <div className='h-50px border flex items-center justify-center'>
          {displayLink}
        </div>

        <input
          className='h-50px border p-2'
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          placeholder='alias'
        />

        <input
          type='url'
          className='h-50px border p-2'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder='url'
        />

        {error && (
          <div className='text-red-500'>
            Alias Already Exist or URL not found, Try again
          </div>
        )}

        <button onClick={handleSubmit} className='h-70px bg-sky-500 text-white'>
          Shorten
        </button>
      </div>
    </div>
  );
}
