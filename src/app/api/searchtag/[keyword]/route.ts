import { searchPostsTag } from '@/service/posts';
import { withSessionUser } from '@/util/session';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { keyword: string };
};

export async function GET(_: NextRequest, context: Context) {
  return withSessionUser(async () =>
    searchPostsTag(decodeURIComponent(context.params.keyword)) //
      .then((data) => NextResponse.json(data))
  );
}
