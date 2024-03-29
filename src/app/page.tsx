import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import PageContext from '@/context/PageContext';
import SWFNotice from '@/components/SWFNotice';
import Developers from '@/components/Developer';

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect('/auth/signin');
  }

  return (
    <PageContext>
      <div className='mt-10'>
        <SWFNotice />
      </div>
      <div className='mt-10'>
        <Developers />
      </div>
    </PageContext>
  );
}
