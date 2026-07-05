import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionUserId, sanitizeUser } from '@/lib/session';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Fields the client is allowed to update on the authenticated user.
const ALLOWED_FIELDS = [
  'firstName',
  'lastName',
  'middleName',
  'phone',
  'address',
  'city',
  'state',
  'zipCode',
  'country',
  'accountType',
  'currency',
  'profilePicture',
  'balance',
] as const;

export async function PATCH(req: NextRequest) {
  try {
    const userId = await getSessionUserId();
    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'Not authenticated' },
        { status: 401 }
      );
    }

    const data = (await req.json()) ?? {};
    const updateData: Record<string, unknown> = {};

    for (const key of ALLOWED_FIELDS) {
      if (key in data && data[key] !== undefined) {
        updateData[key] = data[key];
      }
    }

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { success: false, message: 'No valid fields to update' },
        { status: 400 }
      );
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: updateData,
    });

    return NextResponse.json({ success: true, user: sanitizeUser(user) });
  } catch (error) {
    console.error('Update error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
