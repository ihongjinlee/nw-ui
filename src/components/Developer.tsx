'use client';

import useSWR from 'swr';
import Avatar from '@/components/Avatar';
import { SimpleUser } from '@/model/user';
import Link from 'next/link';
import { BeatLoader } from 'react-spinners';

export default function Developers() {
  const { data: users, isLoading: loading } =
    useSWR<SimpleUser[]>('/api/users');

  return (
    <section className='flex justify-center items-center p-4'>
      {loading && <BeatLoader size={6} className='mt-2' color='gray' />}

      {users && users.length > 0 && (
        <ul className='grid gap-2 grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10'>
          {users?.map(({ image, username }) => (
            <li key={username}>
              <Link href={`/user/${username}`}>
                <Avatar image={image} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
