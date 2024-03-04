import { getPostsLength } from '@/service/posts';
import { withSessionUser } from '@/util/session';
import { NextResponse } from 'next/server';

export async function GET() {
  return withSessionUser(async () =>
    getPostsLength() //
      .then((data) => NextResponse.json(data))
  );
}
