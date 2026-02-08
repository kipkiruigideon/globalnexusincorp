'use client';

import { useState } from 'react';

export default function InternationalTransferPage() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const transferMethods = [
    {
      id: 'wire',
      name: 'Wire Transfer',
      description: 'Transfer funds directly to international bank accounts.',
      icon: 'fa-solid fa-building-columns',
      color: 'bg-[#0ea5e9]'
    },
    {
      id: 'crypto',
      name: 'Cryptocurrency',
      description: 'Send funds to your cryptocurrency wallet.',
      icon: 'fa-brands fa-bitcoin',
      color: 'bg-amber-500'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      description: 'Transfer funds to your PayPal account.',
      icon: 'fa-brands fa-paypal',
      color: 'bg-[#0ea5e9]'
    },
    {
      id: 'wise',
      name: 'Wise Transfer',
      description: 'Transfer with lower fees using Wise.',
      icon: 'fa-solid fa-bolt',
      color: 'bg-green-500'
    },
    {
      id: 'cashapp',
      name: 'Cash App',
      description: 'Quick transfers to your Cash App account.',
      icon: 'fa-solid fa-dollar-sign',
      color: 'bg-green-500'
    },
    {
      id: 'more',
      name: 'More Options',
      description: 'Zelle, Venmo, Revolut, and more.',
      icon: 'fa-solid fa-ellipsis',
      color: 'bg-gray-500'
    }
  ];

  return (
    <div className="p-4 lg:p-6">
      {/* Page Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-[#0ea5e9] rounded-xl flex items-center justify-center">
          <i className="fa-solid fa-globe text-white text-xl"></i>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">International Transfer</h1>
          <p className="text-gray-400 text-sm">Send money worldwide with multiple payment methods</p>
        </div>
      </div>

      {/* Select Transfer Method */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-white mb-4">Select Transfer Method</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {transferMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`bg-[#1e293b] rounded-xl p-4 flex items-start space-x-4 hover:bg-[#1e293b]/80 transition-colors text-left ${
                selectedMethod === method.id ? 'ring-2 ring-[#0ea5e9]' : ''
              }`}
            >
              <div className={`w-10 h-10 ${method.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <i className={`${method.icon} text-white`}></i>
              </div>
              <div>
                <h3 className="text-white font-semibold">{method.name}</h3>
                <p className="text-gray-400 text-sm">{method.description}</p>
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
          <h3 className="text-white font-semibold">Secure Transaction</h3>
          <p className="text-gray-400 text-sm">All transfers are encrypted and processed securely. Never share your PIN with anyone.</p>
        </div>
      </div>
    </div>
  );
}
