import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { getUpdate } from '@/service/update';
import PageContext from '@/context/PageContext';
import Update from '@/components/Update';

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const update = await getUpdate();

  if (!user) {
    redirect('/auth/signin');
  }

  return (
    <PageContext>
      <div className='mt-20'>
        <Update update={update} />
      </div>
    </PageContext>
  );
}
