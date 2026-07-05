import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionUserId, sanitizeUser } from '@/lib/session';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const userId = await getSessionUserId();
    if (!userId) {
      return NextResponse.json({ user: null });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return NextResponse.json({ user: null });
    }

    return NextResponse.json({ user: sanitizeUser(user) });
  } catch (error) {
    console.error('Session lookup error:', error);
    return NextResponse.json({ user: null });
  }
}
