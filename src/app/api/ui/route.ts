import { getUIList } from '@/service/posts';
import { NextResponse } from 'next/server';
import { withSessionUser } from '@/util/session';

export async function GET() {
  return withSessionUser(async () =>
    getUIList() //
      .then((data) => NextResponse.json(data))
  );
}
