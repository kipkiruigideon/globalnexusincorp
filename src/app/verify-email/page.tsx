'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import DarkModeToggle from '@/components/DarkModeToggle';

export default function VerifyEmailPage() {
  const router = useRouter();
  const { user, isLoading, verifyEmail, resendCode, logout } = useAuth();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [info, setInfo] = useState('A verification code has been sent to your email address.');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    if (isLoading) return;
    if (!user) {
      router.push('/login');
    } else if (user.emailVerified) {
      router.push('/dashboard');
    }
  }, [user, isLoading, router]);

  const features = [
    { icon: 'fa-shield-halved', title: 'Secure Verification', desc: 'Email protection' },
    { icon: 'fa-bolt', title: 'Quick Process', desc: 'Fast verification' },
    { icon: 'fa-envelope', title: 'Email Delivery', desc: 'Instant codes' },
    { icon: 'fa-circle-check', title: 'Account Access', desc: 'Full activation' },
  ];

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!/^\d{6}$/.test(code)) {
      setError('Please enter the 6-digit code');
      return;
    }
    setIsVerifying(true);
    const result = await verifyEmail(code);
    setIsVerifying(false);
    if (result.success) {
      router.push('/dashboard');
    } else {
      setError(result.message);
    }
  };

  const handleResend = async () => {
    setError('');
    setInfo('');
    setIsResending(true);
    const result = await resendCode();
    setIsResending(false);
    if (result.success) {
      setInfo('A new verification code has been sent to your email address.');
    } else {
      setError(result.message);
    }
  };

  const handleSignOut = async () => {
    await logout();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex">
      {/* Dark Mode Toggle - Floating button */}
      <DarkModeToggle />

      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-[45%] flex-col justify-center items-center p-12 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0c4a6e] relative overflow-hidden">
        {/* Animated floating circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[560px] h-[560px] bg-[#0ea5e9]/[0.05] border border-white/10 rounded-full animate-float-center-1"></div>
          <div className="absolute top-1/2 left-1/2 w-[420px] h-[420px] bg-[#0ea5e9]/[0.06] border border-white/10 rounded-full animate-float-center-2"></div>
          <div className="absolute top-1/2 left-1/2 w-[280px] h-[280px] bg-white/[0.06] border border-white/10 rounded-full animate-float-center-3"></div>
        </div>

        {/* Logo */}
        <div className="mb-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 relative z-10 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3">
            <Image
              src="/images/photos/lwjkWDHt3aKtY1uBWVMpmJ3FxeVfe3AqrYZy2G4k.png"
              alt="Global Nexus"
              width={180}
              height={45}
              className="h-10 w-auto"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-white text-center mb-2 relative z-10">
          Email Verification
        </h1>
        <h2 className="text-lg text-white/80 font-medium text-center mb-4 relative z-10">
          Secure Your Account
        </h2>
        <p className="text-gray-400 text-center max-w-md mb-10 relative z-10">
          We&apos;ve sent a verification code to your email address. Please check your inbox and enter the code to continue.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md relative z-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:bg-white/10 hover:scale-105 hover:border-[#0ea5e9]/30 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9]">
                <i className={`fa-solid ${feature.icon}`}></i>
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">{feature.title}</h3>
                <p className="text-gray-400 text-xs">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - Verification */}
      <div className="flex-1 flex flex-col p-6 pt-16 lg:px-10 lg:py-8 overflow-y-auto">
        <div className="w-full max-w-md mx-auto">
          {/* Info banner */}
          {info && (
            <div className="mb-6 p-4 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 rounded-xl text-[#38bdf8] text-sm flex items-start gap-2">
              <i className="fa-solid fa-circle-info mt-0.5"></i>
              <span>{info}</span>
            </div>
          )}

          <div className="bg-[#1e293b]/40 border border-gray-700/50 rounded-2xl p-6">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9]">
                <i className="fa-solid fa-envelope-open-text text-xl"></i>
              </div>
            </div>

            <h2 className="text-xl font-bold text-white text-center mb-1">Enter Verification Code</h2>
            <p className="text-sm text-gray-400 text-center mb-6">We&apos;ve sent a 6-digit code to your email</p>

            <form onSubmit={handleVerify}>
              <label className="block text-sm font-medium text-gray-300 mb-2 text-center">
                Verification Code
              </label>
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                className="w-full px-4 py-3 bg-[#0f172a] border border-gray-600 rounded-xl text-white text-center text-2xl tracking-[0.5em] placeholder-gray-600 focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                placeholder="XXXXXX"
                required
              />

              {error && (
                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                  <i className="fa-solid fa-circle-exclamation mr-2"></i>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isVerifying}
                className="group relative w-full mt-5 px-6 py-3 bg-[#0284c7] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-lg shadow-[#0ea5e9]/25 hover:shadow-xl hover:shadow-[#0ea5e9]/40 disabled:opacity-50 flex items-center justify-center"
              >
                <span className="absolute inset-0 bg-[#0ea5e9] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                <span className="relative z-10 flex items-center">
                  {isVerifying ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                      Verifying...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-circle-check mr-2"></i>
                      Verify Email
                    </>
                  )}
                </span>
              </button>
            </form>

            {/* Tips */}
            <div className="mt-6 p-4 bg-[#0f172a]/60 border border-gray-700/50 rounded-xl">
              <p className="text-sm font-medium text-white mb-2">
                <i className="fa-solid fa-circle-info text-[#0ea5e9] mr-2"></i>
                Didn&apos;t get the code?
              </p>
              <ul className="space-y-1.5 text-xs text-gray-400">
                <li><i className="fa-solid fa-circle-dot text-gray-500 mr-2"></i>Check your spam folder</li>
                <li><i className="fa-solid fa-circle-dot text-gray-500 mr-2"></i>Code expires after 60 minutes</li>
                <li><i className="fa-solid fa-circle-dot text-gray-500 mr-2"></i>Verify your email address</li>
              </ul>
            </div>
          </div>

          {/* Resend */}
          <button
            onClick={handleResend}
            disabled={isResending}
            className="w-full mt-4 px-6 py-3 bg-[#1e293b] hover:bg-[#334155] text-white font-medium rounded-xl border border-gray-700 transition-colors disabled:opacity-50 flex items-center justify-center"
          >
            {isResending ? (
              <>
                <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                Sending...
              </>
            ) : (
              <>
                <i className="fa-solid fa-rotate-right mr-2"></i>
                Resend Verification Code
              </>
            )}
          </button>

          {/* Sign Out */}
          <button
            onClick={handleSignOut}
            className="w-full mt-3 px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-medium rounded-xl border border-red-500/30 transition-colors flex items-center justify-center"
          >
            <i className="fa-solid fa-right-from-bracket mr-2"></i>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
