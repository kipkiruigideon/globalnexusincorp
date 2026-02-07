'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function InternationalTransferPage() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');

  return (
    <div className="p-4 lg:p-6">
      {/* Mobile Header */}
      <div className="lg:hidden mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <Link href="/dashboard" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <i className="fa-solid fa-arrow-left text-gray-600 dark:text-gray-300"></i>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">International Transfer</h1>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">International Transfer</h1>
        <p className="text-gray-500 dark:text-gray-400">Send money internationally with competitive rates</p>
      </div>

      <div className="max-w-xl mx-auto">
        {/* Exchange Rate Banner */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-6 mb-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm mb-1">Exchange Rate</p>
              <p className="text-2xl font-bold">1 USD = 0.92 EUR</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <i className="fa-solid fa-globe text-white text-xl"></i>
            </div>
          </div>
        </div>

        {/* Transfer Form */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="space-y-5">
            {/* From */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">You Send</label>
              <div className="flex space-x-3">
                <input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 px-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xl font-semibold placeholder-gray-400 focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all"
                />
                <select 
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="px-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-semibold focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>
            </div>

            {/* Exchange Icon */}
            <div className="flex justify-center">
              <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-arrows-up-down text-gray-400"></i>
              </div>
            </div>

            {/* To */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Recipient Gets</label>
              <div className="flex space-x-3">
                <input
                  type="number"
                  placeholder="0.00"
                  disabled
                  className="flex-1 px-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white text-xl font-semibold placeholder-gray-400 outline-none"
                />
                <select className="px-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-semibold focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all">
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="CAD">CAD</option>
                  <option value="AUD">AUD</option>
                </select>
              </div>
            </div>

            {/* Recipient Details */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Recipient&apos;s Country</label>
              <select className="w-full px-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all">
                <option value="">Select Country</option>
                <option value="uk">United Kingdom</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
              </select>
            </div>

            {/* Fee Notice */}
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Transfer Fee</span>
                <span className="font-semibold text-gray-900 dark:text-white">$4.99</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-gray-500 dark:text-gray-400">Delivery Time</span>
                <span className="font-semibold text-gray-900 dark:text-white">1-2 Business Days</span>
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-2xl font-bold text-lg shadow-lg shadow-purple-500/25 hover:shadow-xl transition-all">
              <i className="fa-solid fa-globe mr-2"></i>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
