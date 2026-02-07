'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    // Step 2: Contact Info
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
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

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-[#0c4a6e] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center">
            <Image 
              src="/images/photos/lwjkWDHt3aKtY1uBWVMpmJ3FxeVfe3AqrYZy2G4k.png" 
              alt="Global Nexus Inc" 
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Registration Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {steps.map((s, index) => (
                <div key={s.number} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      step >= s.number 
                        ? 'bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white shadow-lg shadow-sky-500/25' 
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      <i className={`fa-solid ${s.icon}`}></i>
                    </div>
                    <span className={`mt-2 text-xs font-medium ${step >= s.number ? 'text-[#0ea5e9]' : 'text-gray-400'}`}>
                      {s.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-12 sm:w-20 h-1 mx-2 rounded transition-all ${
                      step > s.number ? 'bg-[#0ea5e9]' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 2: Contact Info */}
            {step === 2 && (
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                    placeholder="123 Main St"
                    required
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                      placeholder="City"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                      placeholder="State"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                    <input
                      type="text"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                      placeholder="00000"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Account Info */}
            {step === 3 && (
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Account Details</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    {['checking', 'savings'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, accountType: type })}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          formData.accountType === type
                            ? 'border-[#0ea5e9] bg-sky-50 text-[#0ea5e9]'
                            : 'border-gray-200 hover:border-gray-300'
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Employment Status</label>
                  <select
                    value={formData.employmentStatus}
                    onChange={(e) => setFormData({ ...formData, employmentStatus: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                    required
                  >
                    <option value="">Select status</option>
                    <option value="employed">Employed</option>
                    <option value="self-employed">Self Employed</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="student">Student</option>
                    <option value="retired">Retired</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Annual Income</label>
                  <select
                    value={formData.annualIncome}
                    onChange={(e) => setFormData({ ...formData, annualIncome: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                    required
                  >
                    <option value="">Select range</option>
                    <option value="0-25000">$0 - $25,000</option>
                    <option value="25000-50000">$25,000 - $50,000</option>
                    <option value="50000-100000">$50,000 - $100,000</option>
                    <option value="100000+">$100,000+</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 4: Security */}
            {step === 4 && (
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Create Password</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] transition-colors"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    className="mt-1 h-4 w-4 text-[#0ea5e9] focus:ring-[#0ea5e9] border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="agreeTerms" className="text-sm text-gray-600">
                    I agree to the{' '}
                    <Link href="/terms" className="text-[#0ea5e9] hover:text-[#0284c7]">Terms of Service</Link>
                    {' '}and{' '}
                    <Link href="/privacy" className="text-[#0ea5e9] hover:text-[#0284c7]">Privacy Policy</Link>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
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
                  className="px-8 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-sky-500/25 transition-all"
                >
                  Continue
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-sky-500/25 transition-all"
                >
                  Create Account
                  <i className="fa-solid fa-check ml-2"></i>
                </button>
              )}
            </div>
          </form>

          {/* Sign In Link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-[#0ea5e9] hover:text-[#0284c7] font-medium">
              Sign in
            </Link>
          </p>
        </div>

        {/* Security Note */}
        <div className="mt-6 flex items-center justify-center text-sm text-gray-400">
          <i className="fa-solid fa-lock mr-2"></i>
          Your information is protected with bank-level security
        </div>
      </div>
    </div>
  );
}
