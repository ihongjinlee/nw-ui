import { getUsers } from '@/service/user';
import { withSessionUser } from '@/util/session';
import { NextResponse } from 'next/server';

export async function GET() {
  return withSessionUser(async () =>
    getUsers() //
      .then((data) => NextResponse.json(data))
  );
}
