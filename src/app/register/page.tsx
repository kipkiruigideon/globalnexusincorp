'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    firstName: '',
    lastName: '',
    middleName: '',
    username: '',
    // Step 2: Contact Info
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    // Step 3: Account Info
    accountType: 'checking',
    employmentStatus: '',
    annualIncome: '',
    // Step 4: Security
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const steps = [
    { number: 1, title: 'Personal', icon: 'fa-user' },
    { number: 2, title: 'Contact', icon: 'fa-envelope' },
    { number: 3, title: 'Account', icon: 'fa-credit-card' },
    { number: 4, title: 'Security', icon: 'fa-lock' },
  ];

  const features = [
    { icon: 'fa-shield-halved', title: 'Secure Platform', desc: 'Bank-grade security' },
    { icon: 'fa-bolt', title: 'Fast Transfers', desc: 'Instant payments' },
    { icon: 'fa-clock', title: '24/7 Access', desc: 'Always available' },
    { icon: 'fa-globe', title: 'Global Banking', desc: 'Worldwide access' },
  ];

  const handleNext = () => {
    setError('');
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    setError('');
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    // Validate password strength
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    // Validate terms agreement
    if (!formData.agreeTerms) {
      setError('Please agree to the Terms of Service');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const result = await register({
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        middleName: formData.middleName,
        username: formData.username,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        country: formData.country,
        accountType: formData.accountType,
        employmentStatus: formData.employmentStatus,
        annualIncome: formData.annualIncome,
      });
      
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

  return (
    <div className="min-h-screen bg-[#0f172a] flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-[45%] flex-col justify-center items-center p-12 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        {/* Logo */}
        <div className="mb-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
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
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Join Global Nexus Inc
        </h1>
        <h2 className="text-lg text-white/80 font-medium text-center mb-4">
          Create Your Banking Account
        </h2>
        <p className="text-gray-400 text-center max-w-md mb-10">
          Start your financial journey with Global Nexus Inc. Secure, fast, and reliable banking at your fingertips.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors"
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

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-lg">
          {/* Form Card */}
          <div className="bg-[#1e293b] rounded-2xl p-8 shadow-2xl border border-white/5">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Create Account</h2>
              <span className="text-sm text-gray-400">Step {step} of 4</span>
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-gray-700 rounded-full mb-6 overflow-hidden">
              <div 
                className="h-full bg-[#0ea5e9] transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
            </div>

            {/* Step Icons */}
            <div className="flex justify-between mb-8">
              {steps.map((s) => (
                <div key={s.number} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    step >= s.number 
                      ? 'bg-[#0ea5e9] text-white' 
                      : 'bg-gray-700 text-gray-400'
                  }`}>
                    <i className={`fa-solid ${s.icon} text-sm`}></i>
                  </div>
                  <span className={`mt-2 text-xs font-medium ${
                    step >= s.number ? 'text-[#0ea5e9]' : 'text-gray-500'
                  }`}>
                    {s.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Step Icon Display */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#0ea5e9] flex items-center justify-center">
                <i className={`fa-solid ${steps[step - 1].icon} text-2xl text-white`}></i>
              </div>
            </div>

            {/* Step Title */}
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-white">
                {step === 1 && 'Personal Information'}
                {step === 2 && 'Contact Information'}
                {step === 3 && 'Account Details'}
                {step === 4 && 'Security Setup'}
              </h3>
              <p className="text-sm text-gray-400">
                {step === 1 && 'Tell us about yourself'}
                {step === 2 && 'How can we reach you?'}
                {step === 3 && 'Choose your account preferences'}
                {step === 4 && 'Secure your account'}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Info */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                        <i className="fa-solid fa-user"></i>
                      </span>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                        placeholder="John"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                        <i className="fa-solid fa-user"></i>
                      </span>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                        placeholder="Smith"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Middle Name
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                        <i className="fa-solid fa-user"></i>
                      </span>
                      <input
                        type="text"
                        value={formData.middleName}
                        onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                        placeholder="David"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Username <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                        <i className="fa-solid fa-at"></i>
                      </span>
                      <input
                        type="text"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                        placeholder="johnsmith123"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Contact Info */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                        <i className="fa-solid fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                        <i className="fa-solid fa-phone"></i>
                      </span>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                        placeholder="+1 (555) 000-0000"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Address <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                        <i className="fa-solid fa-location-dot"></i>
                      </span>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                        placeholder="123 Main St"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        City <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                          <i className="fa-solid fa-city"></i>
                        </span>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                          placeholder="City"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        State <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                          <i className="fa-solid fa-map"></i>
                        </span>
                        <input
                          type="text"
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                          placeholder="State"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Zip Code <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                          <i className="fa-solid fa-hashtag"></i>
                        </span>
                        <input
                          type="text"
                          value={formData.zipCode}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                          placeholder="00000"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Country <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                          <i className="fa-solid fa-globe"></i>
                        </span>
                        <input
                          type="text"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                          placeholder="United States"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Account Info */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Account Type <span className="text-red-400">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {['checking', 'savings'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, accountType: type })}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            formData.accountType === type
                              ? 'border-[#0ea5e9] bg-[#0ea5e9]/10 text-[#0ea5e9]'
                              : 'border-gray-600 hover:border-gray-500 text-gray-300'
                          }`}
                        >
                          <div className="text-center">
                            <i className={`fa-solid ${type === 'checking' ? 'fa-credit-card' : 'fa-piggy-bank'} text-2xl mb-2`}></i>
                            <p className="font-semibold capitalize">{type}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Employment Status <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                        <i className="fa-solid fa-briefcase"></i>
                      </span>
                      <select
                        value={formData.employmentStatus}
                        onChange={(e) => setFormData({ ...formData, employmentStatus: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors appearance-none"
                        required
                      >
                        <option value="" className="bg-[#0f172a]">Select status</option>
                        <option value="employed" className="bg-[#0f172a]">Employed</option>
                        <option value="self-employed" className="bg-[#0f172a]">Self Employed</option>
                        <option value="unemployed" className="bg-[#0f172a]">Unemployed</option>
                        <option value="student" className="bg-[#0f172a]">Student</option>
                        <option value="retired" className="bg-[#0f172a]">Retired</option>
                      </select>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 pointer-events-none">
                        <i className="fa-solid fa-chevron-down"></i>
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Annual Income <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                        <i className="fa-solid fa-dollar-sign"></i>
                      </span>
                      <select
                        value={formData.annualIncome}
                        onChange={(e) => setFormData({ ...formData, annualIncome: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors appearance-none"
                        required
                      >
                        <option value="" className="bg-[#0f172a]">Select range</option>
                        <option value="0-25000" className="bg-[#0f172a]">$0 - $25,000</option>
                        <option value="25000-50000" className="bg-[#0f172a]">$25,000 - $50,000</option>
                        <option value="50000-100000" className="bg-[#0f172a]">$50,000 - $100,000</option>
                        <option value="100000+" className="bg-[#0f172a]">$100,000+</option>
                      </select>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 pointer-events-none">
                        <i className="fa-solid fa-chevron-down"></i>
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Security */}
              {step === 4 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Password <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                        <i className="fa-solid fa-lock"></i>
                      </span>
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Confirm Password <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                        <i className="fa-solid fa-lock"></i>
                      </span>
                      <input
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 pt-2">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      className="mt-1 h-4 w-4 bg-[#0f172a] border-gray-600 text-[#0ea5e9] focus:ring-[#0ea5e9] rounded"
                      required
                    />
                    <label htmlFor="agreeTerms" className="text-sm text-gray-400">
                      I agree to the{' '}
                      <Link href="/terms" className="text-[#0ea5e9] hover:text-[#38bdf8]">Terms of Service</Link>
                      {' '}and{' '}
                      <Link href="/privacy" className="text-[#0ea5e9] hover:text-[#38bdf8]">Privacy Policy</Link>
                    </label>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                  <i className="fa-solid fa-circle-exclamation mr-2"></i>
                  {error}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-6 flex justify-between items-center">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={isLoading}
                    className="px-5 py-2.5 text-gray-400 hover:text-white font-medium transition-colors disabled:opacity-50 flex items-center"
                  >
                    <i className="fa-solid fa-arrow-left mr-2"></i>
                    Back
                  </button>
                ) : (
                  <div></div>
                )}
                
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2.5 bg-[#0ea5e9] text-white font-medium rounded-lg hover:bg-[#0284c7] transition-colors flex items-center"
                  >
                    Next
                    <i className="fa-solid fa-chevron-right ml-2"></i>
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-6 py-2.5 bg-[#0ea5e9] text-white font-medium rounded-lg hover:bg-[#0284c7] transition-colors disabled:opacity-50 flex items-center"
                  >
                    {isLoading ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                        Creating...
                      </>
                    ) : (
                      <>
                        Create Account
                        <i className="fa-solid fa-check ml-2"></i>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>

            {/* Sign In Link */}
            <p className="mt-6 text-center text-sm text-gray-400">
              Already have an account?{' '}
              <Link href="/login" className="text-[#0ea5e9] hover:text-[#38bdf8] font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
