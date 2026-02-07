'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DepositsPage() {
  const [depositMethod, setDepositMethod] = useState<'bank' | 'card' | 'crypto'>('bank');
  const [amount, setAmount] = useState('');

  const methods = [
    { id: 'bank', icon: 'fa-building-columns', label: 'Bank Transfer', desc: 'Free • 1-3 days' },
    { id: 'card', icon: 'fa-credit-card', label: 'Debit Card', desc: '2.5% fee • Instant' },
    { id: 'crypto', icon: 'fa-bitcoin', label: 'Cryptocurrency', desc: 'Network fee • Fast' },
  ];

  return (
    <div className="p-4 lg:p-6">
      {/* Mobile Header */}
      <div className="lg:hidden mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <Link href="/dashboard" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <i className="fa-solid fa-arrow-left text-gray-600 dark:text-gray-300"></i>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Deposit Funds</h1>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Deposit Funds</h1>
        <p className="text-gray-500 dark:text-gray-400">Add money to your account securely</p>
      </div>

      <div className="max-w-xl mx-auto">
        {/* Deposit Methods */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Select Method</h3>
          <div className="space-y-3">
            {methods.map((method) => (
              <button
                key={method.id}
                onClick={() => setDepositMethod(method.id as 'bank' | 'card' | 'crypto')}
                className={`w-full flex items-center p-4 rounded-2xl border-2 transition-all ${
                  depositMethod === method.id
                    ? 'border-[#0ea5e9] bg-sky-50 dark:bg-sky-900/20'
                    : 'border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                  depositMethod === method.id ? 'bg-[#0ea5e9]' : 'bg-gray-100 dark:bg-gray-700'
                }`}>
                  <i className={`fa-solid ${method.icon} ${depositMethod === method.id ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`}></i>
                </div>
                <div className="flex-1 text-left">
                  <p className={`font-semibold ${depositMethod === method.id ? 'text-[#0ea5e9]' : 'text-gray-900 dark:text-white'}`}>
                    {method.label}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{method.desc}</p>
                </div>
                {depositMethod === method.id && (
                  <div className="w-6 h-6 bg-[#0ea5e9] rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-check text-white text-xs"></i>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Amount Input */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Enter Amount</h3>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-2xl font-semibold">$</span>
            <input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full pl-12 pr-4 py-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-3xl font-bold placeholder-gray-400 focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all text-center"
            />
          </div>
          
          {/* Quick Amount Buttons */}
          <div className="flex space-x-3 mt-4">
            {['100', '500', '1000', '5000'].map((val) => (
              <button
                key={val}
                onClick={() => setAmount(val)}
                className="flex-1 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-sky-100 dark:hover:bg-sky-900/30 hover:text-[#0ea5e9] transition-colors"
              >
                ${val}
              </button>
            ))}
          </div>
        </div>

        {/* Bank Transfer Details (shown when bank method selected) */}
        {depositMethod === 'bank' && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Bank Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Bank Name</span>
                <span className="text-gray-900 dark:text-white font-semibold">Global Nexus Bank</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Account Number</span>
                <span className="text-gray-900 dark:text-white font-mono font-semibold">XXXX-XXXX-XXXX</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Routing Number</span>
                <span className="text-gray-900 dark:text-white font-mono font-semibold">XXXXXXX</span>
              </div>
            </div>
          </div>
        )}

        {/* Continue Button */}
        <button className="w-full py-4 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white rounded-2xl font-bold text-lg shadow-lg shadow-sky-500/25 hover:shadow-xl transition-all">
          <i className="fa-solid fa-plus mr-2"></i>
          Deposit Funds
        </button>
      </div>
    </div>
  );
}
