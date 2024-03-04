import { withSessionUser } from '@/util/session';
import { addTagLabel, deleteTagLabel } from '@/service/posts';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  return withSessionUser(async (user) => {
    const { id, taglabel } = await req.json();

    if (!id || taglabel == null) {
      return new Response('Bad Request', { status: 400 });
    }

    return addTagLabel(id, user.id, taglabel) //
      .then((res) => NextResponse.json(res))
      .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
  });
}

export async function PUT(req: NextRequest) {
  return withSessionUser(async () => {
    const { id, taglabel } = await req.json();

    if (!id || taglabel == null) {
      return new Response('Bad Request', { status: 400 });
    }

    return deleteTagLabel(id, taglabel) //
      .then((res) => NextResponse.json(res))
      .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
  });
}
