'use client';

import { User } from '@/model/user';
import Avatar from './Avatar';
import { useSession, signOut } from 'next-auth/react';

type Props = {
  user: User;
};

export default function UserProfile({ user }: Props) {
  const { image, username, name, team } = user;

  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <section className='w-full flex flex-col md:flex-row items-center justify-center py-8 border-b border-neutral-300 dark:border-neutral-700'>
      <Avatar image={image} size='xlarge' />
      <div className='md:ml-10 text-center'>
        <div className='flex flex-col items-center md:flex-row'>
          <h1 className='text-2xl md:mr-8 my-2 md:mb-0 dark:text-gray-300 '>
            {name} / {team.toLocaleUpperCase()}팀
          </h1>
        </div>
        <p className='text-xl md:text-start dark:text-gray-500'>{username}</p>
        {session && user.username === session.user.username ? (
          <button
            className='text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-2'
            onClick={handleSignOut}
          >
            로그아웃
          </button>
        ) : null}
      </div>
    </section>
  );
}
