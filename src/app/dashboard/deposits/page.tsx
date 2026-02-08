'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DepositsPage() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const depositMethods = [
    { id: 'usdt', name: 'USDT', icon: 'fa-solid fa-square', color: 'bg-teal-500' },
    { id: 'bank', name: 'Bank Transfer', icon: 'fa-solid fa-building-columns', color: 'bg-[#0ea5e9]' },
    { id: 'bitcoin', name: 'Bitcoin', icon: 'fa-brands fa-bitcoin', color: 'bg-amber-500' },
  ];

  return (
    <div className="p-4 lg:p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[#0ea5e9] rounded-xl flex items-center justify-center">
            <i className="fa-solid fa-piggy-bank text-white text-xl"></i>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Deposit Funds</h1>
            <p className="text-gray-400 text-sm">Add money to your account securely</p>
          </div>
        </div>
        <Link 
          href="/dashboard"
          className="px-4 py-2 bg-[#1e293b] border border-gray-700 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center space-x-2"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back to Dashboard</span>
        </Link>
      </div>

      {/* Fund Your Account Banner */}
      <div className="bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] rounded-xl p-8 mb-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white/10 rounded-full translate-y-1/2"></div>
        
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i className="fa-solid fa-piggy-bank text-white text-2xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Fund Your Account</h2>
          <p className="text-white/80">Choose your preferred deposit method and amount</p>
        </div>
      </div>

      {/* Select Deposit Method */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-white mb-4">Select Deposit Method</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {depositMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`bg-[#1e293b] rounded-xl p-4 flex items-center justify-between hover:bg-[#1e293b]/80 transition-colors ${
                selectedMethod === method.id ? 'ring-2 ring-[#0ea5e9]' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${method.color} rounded-lg flex items-center justify-center`}>
                  <i className={`${method.icon} text-white`}></i>
                </div>
                <span className="text-white font-semibold">{method.name}</span>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 ${
                selectedMethod === method.id 
                  ? 'border-[#0ea5e9] bg-[#0ea5e9]' 
                  : 'border-gray-600'
              } flex items-center justify-center`}>
                {selectedMethod === method.id && (
                  <i className="fa-solid fa-check text-white text-xs"></i>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Security Notice */}
      <div className="bg-[#1e293b] rounded-xl p-4 flex items-start space-x-3">
        <div className="w-8 h-8 bg-[#0ea5e9]/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <i className="fa-solid fa-shield-halved text-[#0ea5e9]"></i>
        </div>
        <div>
          <h3 className="text-white font-semibold">Secure Deposit</h3>
          <p className="text-gray-400 text-sm">All deposits are processed through secure payment channels. Your financial information is never stored on our servers.</p>
        </div>
      </div>
    </div>
  );
}
