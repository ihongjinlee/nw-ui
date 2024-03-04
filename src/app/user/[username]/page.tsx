import UserPosts from '@/components/UserPosts';
import UserProfile from '@/components/UserProfile';
import { getUserForProfile } from '@/service/user';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import PageContext from '@/context/PageContext';

type Props = { params: { username: string } };

const getUser = cache(async (username: string) => getUserForProfile(username));

export default async function UserPage({ params: { username } }: Props) {
  const user = await getUser(username);

  if (!user) {
    notFound();
  }

  return (
    <PageContext>
      <UserProfile user={user} />
      <UserPosts user={user} />
    </PageContext>
  );
}

export async function generateMetadata({
  params: { username },
}: Props): Promise<Metadata> {
  const user = await getUser(username);
  return {
    title: `NW--UI | ${user?.name}`,
    description: `${user?.name}의 UI`,
  };
}
