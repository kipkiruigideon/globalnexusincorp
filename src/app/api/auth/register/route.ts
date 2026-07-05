import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { createSession, sanitizeUser } from '@/lib/session';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function generateAccountNumber(): string {
  const prefix = '4521';
  const random = Math.floor(Math.random() * 10000000000)
    .toString()
    .padStart(10, '0');
  return prefix + random;
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const {
      email,
      password,
      firstName,
      lastName,
      middleName,
      username,
      phone,
      address,
      city,
      state,
      zipCode,
      country,
      accountType,
      currency,
      transactionPin,
      profilePicture,
    } = data ?? {};

    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    if (String(password).length < 6) {
      return NextResponse.json(
        { success: false, message: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    const normalizedEmail = String(email).toLowerCase();

    const existing = await prisma.user.findFirst({
      where: {
        OR: [
          { email: normalizedEmail },
          ...(username ? [{ username: String(username) }] : []),
        ],
      },
    });

    if (existing) {
      if (existing.email === normalizedEmail) {
        return NextResponse.json(
          { success: false, message: 'An account with this email already exists' },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { success: false, message: 'This username is already taken' },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(String(password), 10);
    const transactionPinHash = transactionPin
      ? await bcrypt.hash(String(transactionPin), 10)
      : null;

    const user = await prisma.user.create({
      data: {
        email: normalizedEmail,
        passwordHash,
        firstName: String(firstName),
        lastName: String(lastName),
        middleName: middleName ? String(middleName) : null,
        username: username ? String(username) : null,
        phone: phone ? String(phone) : '',
        address: address ? String(address) : '',
        city: city ? String(city) : '',
        state: state ? String(state) : '',
        zipCode: zipCode ? String(zipCode) : '',
        country: country ? String(country) : null,
        accountType: accountType ? String(accountType) : 'checking',
        currency: currency ? String(currency) : 'USD',
        transactionPinHash,
        profilePicture: profilePicture ? String(profilePicture) : null,
        accountNumber: generateAccountNumber(),
      },
    });

    await createSession(user.id);

    return NextResponse.json({
      success: true,
      message: 'Account created successfully',
      user: sanitizeUser(user),
    });
  } catch (error) {
    console.error('Register error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
