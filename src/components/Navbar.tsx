'use client';

import packageJson from '../../package.json';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Avatar from './Avatar';
import DarkModeToggleButton from './DarkModeToggleButton';
import { FormEvent, useState } from 'react';

const menu = [
  {
    href: 'ui',
    name: 'UI 목록',
  },
  {
    href: 'year',
    name: '연도별 작업',
  },
  {
    href: 'user',
    name: '참여 개발자',
  },
];

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;

  const [keyword, setKeyword] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleKeyUp = (e: any) => {
    const key = e.code;

    switch (key) {
      case 'Enter':
      case 'NumpadEnter':
        if (keyword === '') {
          return;
        }

        if (pathName !== '/search') {
          router.push(`/search/${keyword}`);
        }

        break;
    }
  };

  return (
    <div className='flex justify-between items-center h-[90px] px-4 py-1 text-gray-900 dark:text-gray-300'>
      <div className='flex items-end'>
        <h1 className='text-2xl'>
          <Link href={`/`}>NW UI</Link>
        </h1>
        <h2 className='text-sm text-center text-gray-500 ml-2 hover:text-gray-400'>
          <Link href={`/update`}>ver{packageJson.version}</Link>
        </h2>
      </div>
      <nav>
        <ul className='flex gap-6 items-center'>
          {session &&
            menu.map(({ href, name }) => (
              <li
                key={href}
                className={`${
                  pathName?.split('/')[1] === href
                    ? 'text-lg font-bold dark:text-yellow-400'
                    : ''
                }`}
              >
                <Link href={`/${href}`}>{name}</Link>
              </li>
            ))}
        </ul>
      </nav>
      <nav>
        <ul className='flex gap-8 items-center'>
          {user && (
            <li>
              <form className='' onSubmit={onSubmit}>
                <input
                  className='w-[250px] text-sm p-2 outline-none border border-gray-400 dark:bg-gray-800'
                  type='text'
                  autoFocus
                  placeholder='검색어를 입력해 주세요. 예)정복'
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  onKeyUp={handleKeyUp}
                />
              </form>
            </li>
          )}
          {user && (
            <li>
              <Link href={`/user/${user.username}`}>
                <Avatar image={user.image} size='medium' />
              </Link>
            </li>
          )}
          <li>
            <DarkModeToggleButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}
