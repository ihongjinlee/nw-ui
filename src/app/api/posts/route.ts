import { getPosts } from '@/service/posts';
import { NextResponse } from 'next/server';
import { withSessionUser } from '@/util/session';

export async function GET() {
  return withSessionUser(async () =>
    getPosts() //
      .then((data) => NextResponse.json(data))
  );
}
