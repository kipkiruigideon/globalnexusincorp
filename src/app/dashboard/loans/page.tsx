'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoansPage() {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTerm, setLoanTerm] = useState('12');

  const loanTypes = [
    { id: 'personal', icon: 'fa-user', label: 'Personal Loan', rate: '8.99%', desc: 'For any personal expenses' },
    { id: 'business', icon: 'fa-briefcase', label: 'Business Loan', rate: '6.99%', desc: 'Grow your business' },
    { id: 'home', icon: 'fa-house', label: 'Home Loan', rate: '5.49%', desc: 'Finance your dream home' },
  ];

  return (
    <div className="p-4 lg:p-6">
      {/* Mobile Header */}
      <div className="lg:hidden mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <Link href="/dashboard" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <i className="fa-solid fa-arrow-left text-gray-600 dark:text-gray-300"></i>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Loans</h1>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Loans</h1>
        <p className="text-gray-500 dark:text-gray-400">Get access to quick and affordable loans</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Loan Types Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {loanTypes.map((loan) => (
            <div key={loan.id} className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-[#0ea5e9] transition-colors cursor-pointer group">
              <div className="w-14 h-14 bg-sky-100 dark:bg-sky-900/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <i className={`fa-solid ${loan.icon} text-[#0ea5e9] text-xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{loan.label}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{loan.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 dark:text-gray-500">Starting at</span>
                <span className="text-lg font-bold text-[#0ea5e9]">{loan.rate}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Loan Calculator */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Loan Calculator</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Loan Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                  <input
                    type="number"
                    placeholder="10,000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full pl-10 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-lg font-semibold placeholder-gray-400 focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Loan Term (Months)</label>
                <select
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  className="w-full px-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-semibold focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all"
                >
                  <option value="6">6 months</option>
                  <option value="12">12 months</option>
                  <option value="24">24 months</option>
                  <option value="36">36 months</option>
                  <option value="48">48 months</option>
                  <option value="60">60 months</option>
                </select>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] rounded-2xl p-6 text-white">
              <p className="text-white/80 text-sm mb-2">Estimated Monthly Payment</p>
              <p className="text-4xl font-bold mb-4">$0.00</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/70">Interest Rate</span>
                  <span className="font-semibold">8.99% APR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Total Interest</span>
                  <span className="font-semibold">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Total Payment</span>
                  <span className="font-semibold">$0.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <button className="w-full mt-6 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white rounded-2xl font-bold text-lg shadow-lg shadow-sky-500/25 hover:shadow-xl transition-all">
            <i className="fa-solid fa-landmark mr-2"></i>
            Apply for Loan
          </button>
        </div>
      </div>
    </div>
  );
}
