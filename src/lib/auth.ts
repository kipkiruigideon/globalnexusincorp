// Client-safe user type returned by the /api/auth route handlers.
// Server-side authentication logic lives in the API routes and src/lib/session.ts.

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  middleName?: string | null;
  username?: string | null;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country?: string | null;
  accountType: string;
  employmentStatus: string;
  annualIncome: string;
  balance: number;
  accountNumber: string;
  createdAt: string;
}

