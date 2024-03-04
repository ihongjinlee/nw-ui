import { addUser } from '@/service/user';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ user: { email, id, name, image } }) {
      if (!email) {
        return false;
      }

      // if (email.split('@')[1] === '회사도메인.co.kr') { // 특정 도메인만 가입 가능
      addUser({
        id,
        name: name || '',
        image,
        email,
        username: email.split('@')[0],
      });
      return true;
      // }
      // return false;
    },
    async session({ session, token }) {
      const user = session?.user;
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split('@')[0] || '',
          id: token.id as string,
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
};

export default NextAuth(authOptions);
