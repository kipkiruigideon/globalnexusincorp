'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { User } from '@/lib/auth';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  register: (data: RegisterData) => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<void>;
  updateUser: (data: Partial<User>) => void;
  refreshUser: () => Promise<void>;
  verifyEmail: (code: string) => Promise<{ success: boolean; message: string }>;
  resendCode: () => Promise<{ success: boolean; message: string }>;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  username?: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country?: string;
  accountType: string;
  currency: string;
  transactionPin: string;
  profilePicture?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshUser = useCallback(async () => {
    try {
      const res = await fetch('/api/auth/me', { cache: 'no-store' });
      const data = await res.json();
      setUser(data.user ?? null);
    } catch {
      setUser(null);
    }
  }, []);

  // Check for an existing session on mount
  useEffect(() => {
    (async () => {
      await refreshUser();
      setIsLoading(false);
    })();
  }, [refreshUser]);

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success && data.user) {
        setUser(data.user);
      }
      return { success: !!data.success, message: data.message ?? '' };
    } catch {
      return { success: false, message: 'An error occurred. Please try again.' };
    }
  };

  const register = async (payload: RegisterData) => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success && data.user) {
        setUser(data.user);
      }
      return { success: !!data.success, message: data.message ?? '' };
    } catch {
      return { success: false, message: 'An error occurred. Please try again.' };
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {
      // Ignore network errors on logout; clear local state regardless.
    }
    setUser(null);
  };

  const updateUser = (data: Partial<User>) => {
    // Optimistically update local state, then persist to the server.
    setUser((prev) => (prev ? { ...prev, ...data } : prev));
    fetch('/api/auth/update', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).catch(() => {
      // Ignore; a subsequent refreshUser() will reconcile server state.
    });
  };

  const verifyEmail = async (code: string) => {
    try {
      const res = await fetch('/api/auth/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      if (data.success && data.user) {
        setUser(data.user);
      }
      return { success: !!data.success, message: data.message ?? '' };
    } catch {
      return { success: false, message: 'An error occurred. Please try again.' };
    }
  };

  const resendCode = async () => {
    try {
      const res = await fetch('/api/auth/resend-code', { method: 'POST' });
      const data = await res.json();
      return { success: !!data.success, message: data.message ?? '' };
    } catch {
      return { success: false, message: 'An error occurred. Please try again.' };
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout, updateUser, refreshUser, verifyEmail, resendCode }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

