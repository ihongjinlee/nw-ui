import { getPostsOf } from '@/service/posts';
import { withSessionUser } from '@/util/session';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { username: string };
};

export async function GET(_: NextRequest, context: Context) {
  return withSessionUser(async () =>
    getPostsOf(context.params.username) //
      .then((data) => NextResponse.json(data))
  );
}
