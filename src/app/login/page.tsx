'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import DarkModeToggle from '@/components/DarkModeToggle';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        router.push('/dashboard');
      } else {
        setError(result.message);
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    { icon: 'fa-shield-halved', title: 'Bank-Grade Security', desc: '256-bit encryption' },
    { icon: 'fa-bolt', title: 'Instant Transfers', desc: 'Real-time processing' },
    { icon: 'fa-globe', title: 'Global Reach', desc: '200+ countries' },
    { icon: 'fa-mobile-screen', title: 'Mobile First', desc: 'iOS & Android' },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] flex">
      {/* Dark Mode Toggle - Floating button */}
      <DarkModeToggle />

      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0c4a6e] flex-col items-center justify-center p-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#0ea5e9] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#0284c7] rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-md">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="bg-[#1e293b]/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <Image 
                src="/images/photos/lwjkWDHt3aKtY1uBWVMpmJ3FxeVfe3AqrYZy2G4k.png" 
                alt="Global Nexus Inc" 
                width={200}
                height={50}
                className="h-12 w-auto"
              />
            </div>
          </div>
          
          {/* Welcome Text */}
          <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
          <h2 className="text-xl font-semibold text-[#0ea5e9] mb-4">Global Nexus Inc</h2>
          <p className="text-gray-400 mb-10">
            Swift and secure money transfers worldwide. Experience banking reimagined.
          </p>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-[#1e293b]/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 text-left hover:border-[#0ea5e9]/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#0ea5e9]/20 rounded-lg flex items-center justify-center">
                    <i className={`fa-solid ${feature.icon} text-[#0ea5e9]`}></i>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{feature.title}</p>
                    <p className="text-gray-400 text-xs">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex flex-col bg-[#0f172a]">
        {/* Settings Icon */}
        <div className="absolute top-6 right-6">
          <button className="w-10 h-10 bg-[#1e293b] rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
            <i className="fa-solid fa-gear"></i>
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden mb-8 flex justify-center">
              <Image 
                src="/images/photos/lwjkWDHt3aKtY1uBWVMpmJ3FxeVfe3AqrYZy2G4k.png" 
                alt="Global Nexus Inc" 
                width={180}
                height={45}
                className="h-10 w-auto"
              />
            </div>

            {/* Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Sign In</h2>
              <p className="text-gray-400">Access your Global Nexus Inc account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address or Username
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3.5 bg-[#1e293b] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <Link href="#" className="text-sm text-[#0ea5e9] hover:text-[#38bdf8] font-medium">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <i className="fa-solid fa-lock"></i>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-12 pr-12 py-3.5 bg-[#1e293b] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent transition-all"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  className="h-4 w-4 bg-[#1e293b] border-gray-600 rounded text-[#0ea5e9] focus:ring-[#0ea5e9]"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-400">
                  Keep me signed in
                </label>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-900/30 border border-red-700/50 rounded-xl text-red-400 text-sm">
                  <i className="fa-solid fa-circle-exclamation mr-2"></i>
                  {error}
                </div>
              )}

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold rounded-xl transition-all flex items-center justify-center disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                    Signing In...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-right-to-bracket mr-2"></i>
                    Sign In to Account
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-700"></div>
                <span className="px-4 text-sm text-gray-500">New to Global Nexus Inc?</span>
                <div className="flex-1 border-t border-gray-700"></div>
              </div>

              {/* Create Account Button */}
              <Link
                href="/register"
                className="w-full py-4 bg-[#1e293b] hover:bg-[#334155] text-white font-semibold rounded-xl transition-all flex items-center justify-center border border-gray-700"
              >
                <i className="fa-solid fa-user-plus mr-2"></i>
                Create New Account
              </Link>
            </form>

            {/* Footer Links */}
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white flex items-center">
                <i className="fa-solid fa-shield-halved mr-1.5"></i>
                Security
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white flex items-center">
                <i className="fa-solid fa-headset mr-1.5"></i>
                Support
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white flex items-center">
                <i className="fa-solid fa-file-lines mr-1.5"></i>
                Terms
              </Link>
            </div>

            {/* Privacy Notice */}
            <p className="mt-4 text-center text-xs text-gray-500">
              By signing in, you agree to our Terms of Service and Privacy Policy. Your data is protected with bank-grade security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
