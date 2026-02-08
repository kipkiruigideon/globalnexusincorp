'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function DepositsPage() {
  const [selectedMethod, setSelectedMethod] = useState<string>('usdt');

  const depositMethods = [
    { id: 'usdt', name: 'USDT', icon: 'fa-solid fa-square', color: 'bg-teal-500' },
    { id: 'bank', name: 'Bank Transfer', icon: 'fa-solid fa-building-columns', color: 'bg-[#0ea5e9]' },
    { id: 'bitcoin', name: 'Bitcoin', icon: 'fa-brands fa-bitcoin', color: 'bg-amber-500' },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="p-4 lg:p-6">
      {/* Select Deposit Method */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-white mb-4">Select Deposit Method</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {depositMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`rounded-xl p-4 flex items-center justify-between transition-colors ${
                selectedMethod === method.id 
                  ? 'bg-[#0ea5e9]' 
                  : 'bg-[#1e293b] hover:bg-[#1e293b]/80'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${selectedMethod === method.id ? 'bg-white/20' : method.color} rounded-lg flex items-center justify-center`}>
                  <i className={`${method.icon} text-white`}></i>
                </div>
                <span className="text-white font-semibold">{method.name}</span>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 ${
                selectedMethod === method.id 
                  ? 'border-white bg-white' 
                  : 'border-gray-600'
              } flex items-center justify-center`}>
                {selectedMethod === method.id && (
                  <i className="fa-solid fa-check text-[#0ea5e9] text-xs"></i>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Payment Details */}
      <div className="bg-[#1e293b] rounded-xl p-6 mb-6">
        <h2 className="text-lg font-bold text-white mb-4">Payment Details</h2>
        
        {selectedMethod === 'usdt' && (
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <label className="block text-gray-400 text-sm mb-2">Wallet Address</label>
              <div className="flex items-center space-x-2">
                <input 
                  type="text" 
                  readOnly 
                  value="0xE68a07175596D02B54b58f5638Eb3D75Cc979F50"
                  className="flex-1 bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-gray-300 font-mono text-sm"
                />
                <button 
                  onClick={() => copyToClipboard('0xE68a07175596D02B54b58f5638Eb3D75Cc979F50')}
                  className="p-3 bg-[#0f172a] border border-gray-700 rounded-xl text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fa-regular fa-copy"></i>
                </button>
              </div>
            </div>
            <div className="ml-6 text-center">
              <div className="w-32 h-32 bg-white rounded-xl p-2">
                <Image 
                  src="/qr-placeholder.png" 
                  alt="QR Code" 
                  width={120} 
                  height={120}
                  className="w-full h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs">
                  QR Code
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-2">Scan to send</p>
            </div>
          </div>
        )}

        {selectedMethod === 'bank' && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Bank Name</label>
              <input 
                type="text" 
                readOnly 
                value="Global Nexus Inc"
                className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-gray-300"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Account Name</label>
              <input 
                type="text" 
                readOnly 
                value="Pascale Dickson"
                className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-gray-300"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Account Number</label>
              <input 
                type="text" 
                readOnly 
                value="58076435509"
                className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-gray-300 font-mono"
              />
            </div>
          </div>
        )}

        {selectedMethod === 'bitcoin' && (
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <label className="block text-gray-400 text-sm mb-2">Wallet Address</label>
              <div className="flex items-center space-x-2">
                <input 
                  type="text" 
                  readOnly 
                  value="bc1qyq90k5n6al7mg69sargc6yw9v7h33egxd2ix80"
                  className="flex-1 bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-gray-300 font-mono text-sm"
                />
                <button 
                  onClick={() => copyToClipboard('bc1qyq90k5n6al7mg69sargc6yw9v7h33egxd2ix80')}
                  className="p-3 bg-[#0f172a] border border-gray-700 rounded-xl text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fa-regular fa-copy"></i>
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2">Send only Bitcoin (BTC) to this address</p>
            </div>
            <div className="ml-6 text-center">
              <div className="w-32 h-32 bg-white rounded-xl p-2">
                <Image 
                  src="/qr-placeholder.png" 
                  alt="QR Code" 
                  width={120} 
                  height={120}
                  className="w-full h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs">
                  QR Code
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-2">Scan to send</p>
            </div>
          </div>
        )}
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
