'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SwapPage() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState('');

  return (
    <div className="p-4 lg:p-6">
      {/* Mobile Header */}
      <div className="lg:hidden mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <Link href="/dashboard" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <i className="fa-solid fa-arrow-left text-gray-600 dark:text-gray-300"></i>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Currency Swap</h1>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Currency Swap</h1>
        <p className="text-gray-500 dark:text-gray-400">Exchange currencies at competitive rates</p>
      </div>

      <div className="max-w-xl mx-auto">
        {/* Swap Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
          {/* From Currency */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">From</label>
            <div className="flex space-x-3">
              <input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 px-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xl font-semibold placeholder-gray-400 focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all"
              />
              <select 
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="px-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-semibold focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all min-w-[100px]"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="BTC">BTC</option>
              </select>
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center my-4">
            <button 
              onClick={() => {
                const temp = fromCurrency;
                setFromCurrency(toCurrency);
                setToCurrency(temp);
              }}
              className="w-12 h-12 bg-[#0ea5e9] rounded-full flex items-center justify-center shadow-lg shadow-sky-500/25 hover:shadow-xl transition-all hover:scale-105"
            >
              <i className="fa-solid fa-arrows-rotate text-white"></i>
            </button>
          </div>

          {/* To Currency */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">To</label>
            <div className="flex space-x-3">
              <input
                type="number"
                placeholder="0.00"
                disabled
                className="flex-1 px-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white text-xl font-semibold placeholder-gray-400 outline-none"
              />
              <select 
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="px-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-semibold focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all min-w-[100px]"
              >
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="BTC">BTC</option>
              </select>
            </div>
          </div>

          {/* Rate Info */}
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl mb-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-500 dark:text-gray-400">Exchange Rate</span>
              <span className="font-semibold text-gray-900 dark:text-white">1 {fromCurrency} = 0.92 {toCurrency}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Fee</span>
              <span className="font-semibold text-green-500">Free</span>
            </div>
          </div>

          {/* Swap Button */}
          <button className="w-full py-4 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white rounded-2xl font-bold text-lg shadow-lg shadow-sky-500/25 hover:shadow-xl transition-all">
            <i className="fa-solid fa-arrows-rotate mr-2"></i>
            Swap Currency
          </button>
        </div>
      </div>
    </div>
  );
}
