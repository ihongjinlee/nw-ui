'use client';

import useSWR from 'swr';
import { BeatLoader } from 'react-spinners';
import { User } from '@/model/user';
import DeveloperListCard from './DeveloperListCard';

export default function DeveloperList() {
  const { data: users, isLoading: loading } = useSWR<User[]>('/api/users');

  return (
    <section className='flex justify-center'>
      {loading && (
        <div className='text-center mt-32'>
          <BeatLoader color='gray' />
        </div>
      )}
      {users && (
        <ul className='mt-24 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {users.map((user) => (
            <li key={user.username} className='mb-4'>
              <DeveloperListCard user={user} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
