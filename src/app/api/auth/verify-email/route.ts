import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionUserId, sanitizeUser } from '@/lib/session';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const userId = await getSessionUserId();
    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'Not authenticated' },
        { status: 401 }
      );
    }

    const { code } = (await req.json()) ?? {};
    if (!code) {
      return NextResponse.json(
        { success: false, message: 'Please enter the verification code' },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Account not found' },
        { status: 404 }
      );
    }

    if (user.emailVerified) {
      return NextResponse.json({ success: true, message: 'Email already verified', user: sanitizeUser(user) });
    }

    if (!user.verificationCode || !user.verificationExpiresAt) {
      return NextResponse.json(
        { success: false, message: 'No pending verification. Please resend the code.' },
        { status: 400 }
      );
    }

    if (new Date() > user.verificationExpiresAt) {
      return NextResponse.json(
        { success: false, message: 'Verification code has expired. Please resend a new code.' },
        { status: 400 }
      );
    }

    if (String(code).trim() !== user.verificationCode) {
      return NextResponse.json(
        { success: false, message: 'Invalid verification code' },
        { status: 400 }
      );
    }

    const updated = await prisma.user.update({
      where: { id: userId },
      data: { emailVerified: true, verificationCode: null, verificationExpiresAt: null },
    });

    return NextResponse.json({
      success: true,
      message: 'Email verified successfully',
      user: sanitizeUser(updated),
    });
  } catch (error) {
    console.error('Verify email error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
