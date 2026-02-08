'use client';

import { useState } from 'react';

export default function SwapPage() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BTC');
  const [amount, setAmount] = useState('');

  return (
    <div className="p-4 lg:p-6">
      {/* Page Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-[#0ea5e9] rounded-xl flex items-center justify-center">
          <i className="fa-solid fa-arrows-rotate text-white text-xl"></i>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Currency Swap</h1>
          <p className="text-gray-400 text-sm">Convert between USD and Bitcoin</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Balances */}
        <div className="space-y-6">
          {/* Current Balances */}
          <div className="bg-[#1e293b] rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-4">Current Balances</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-[#0f172a] rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#0ea5e9] rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-dollar-sign text-white text-sm"></i>
                  </div>
                  <span className="text-gray-300">USD Balance</span>
                </div>
                <span className="text-white font-semibold">$0.00</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-[#0f172a] rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                    <i className="fa-brands fa-bitcoin text-white text-sm"></i>
                  </div>
                  <span className="text-gray-300">Bitcoin Balance</span>
                </div>
                <span className="text-white font-semibold">0.00000000 BTC</span>
              </div>
            </div>
          </div>

          {/* Exchange Rate Card */}
          <div className="bg-[#1e293b] rounded-xl p-6">
            <p className="text-gray-400 text-sm text-center mb-2">Current Exchange Rate</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                <i className="fa-brands fa-bitcoin text-white text-xs"></i>
              </div>
              <span className="text-white font-semibold">1 BTC = $70,351.00 USD</span>
            </div>
          </div>
        </div>

        {/* Right Column - Swap Form */}
        <div className="bg-[#1e293b] rounded-xl p-6">
          {/* From Currency */}
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2">From Currency</label>
            <select 
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#0ea5e9]"
            >
              <option value="USD">USD ($0.00)</option>
              <option value="BTC">BTC (0.00000000)</option>
            </select>
          </div>

          {/* To Currency */}
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2">To Currency</label>
            <select 
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#0ea5e9]"
            >
              <option value="BTC">BTC</option>
              <option value="USD">USD</option>
            </select>
            <p className="text-gray-500 text-xs mt-1">Destination currency is automatically selected</p>
          </div>

          {/* Amount */}
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2">Amount</label>
            <div className="relative">
              <input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0ea5e9] pr-16"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">{fromCurrency}</span>
            </div>
            <p className="text-gray-500 text-xs mt-1">Enter the amount you want to swap</p>
          </div>

          {/* Estimated Conversion */}
          <div className="mb-6">
            <label className="block text-gray-400 text-sm mb-2">Estimated Conversion</label>
            <div className="bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3">
              <span className="text-gray-500">Enter an amount to see conversion</span>
            </div>
          </div>

          {/* Swap Button */}
          <button className="w-full py-3 bg-[#0ea5e9] text-white rounded-xl font-semibold hover:bg-[#0284c7] transition-colors flex items-center justify-center space-x-2">
            <i className="fa-solid fa-arrows-rotate"></i>
            <span>Swap Currencies</span>
          </button>
        </div>
      </div>
    </div>
  );
}
