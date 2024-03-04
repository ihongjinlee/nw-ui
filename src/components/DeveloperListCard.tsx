import { User } from '@/model/user';
import Avatar from '@/components/Avatar';
import Link from 'next/link';

type Props = {
  user: User;
};

export default function DeveloperListCard({ user }: Props) {
  const { image, username, name, team, loginGoogle } = user;

  return (
    <Link href={`/user/${user.username}`}>
      <article className='rounded-lg shadow-md border border-gray-200 dark:border-gray-600 m-3 p-8'>
        <div className='flex justify-center'>
          <Avatar image={image} size='xlarge' />
          <div>{loginGoogle}</div>
        </div>

        <h1 className='text-lg font-bold text-gray-700  dark:text-gray-200 text-center mt-4'>
          {`[${team.toUpperCase()}] ${name}`}
        </h1>

        <h2 className='text-sm text-gray-700 dark:text-gray-400 text-center'>
          {username}
        </h2>

        <h3 className='text-sm text-gray-700 dark:text-gray-600 text-center'>
          {user.loginGoogle && `login google`}
        </h3>
      </article>
    </Link>
  );
}
