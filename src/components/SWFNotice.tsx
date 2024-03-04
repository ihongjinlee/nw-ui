'use client';

import useSWR from 'swr';
import { BeatLoader } from 'react-spinners';
import SWFLength from './SWFLength';

export default function SWFNotice() {
  const { data: length, isLoading: loading } = useSWR('/api/postslength');

  return (
    <section>
      {loading ? (
        <BeatLoader className='text-center' size={6} color='gray' />
      ) : null}
      {length > 0 && (
        <SWFLength length={length} description='개의 UI' href='/year' />
      )}
    </section>
  );
}
