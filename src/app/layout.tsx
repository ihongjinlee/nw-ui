import './globals.css';
import { Open_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import AuthContext from '@/context/AuthContext';
import SWRConfigContext from '@/context/SWRConfigContext';
import RecoilContext from '@/context/RecoilContext';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'NW UI',
  description: 'NW UI 관리 페이지',
  // metadataBase: new URL('https://'),
  // openGraph: {
  //   images: '/images/.png',
  // },
  // twitter: {
  //   images: '/images/.png',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`dark`}>
      <body className={`${openSans.className} flex flex-col overflow-y-hidden`}>
        <AuthContext>
          <RecoilContext>
            <header className='z-10 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'>
              <Navbar />
            </header>
            <main className='grow bg-white dark:bg-gray-800'>
              <SWRConfigContext>{children}</SWRConfigContext>
            </main>
          </RecoilContext>
        </AuthContext>
        <div id='portal' />
      </body>
    </html>
  );
}
