'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LocalTransferPage() {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [note, setNote] = useState('');

  return (
    <div className="p-4 lg:p-6">
      {/* Mobile Header */}
      <div className="lg:hidden mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <Link href="/dashboard" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <i className="fa-solid fa-arrow-left text-gray-600 dark:text-gray-300"></i>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Local Transfer</h1>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Local Transfer</h1>
        <p className="text-gray-500 dark:text-gray-400">Send money to local bank accounts instantly</p>
      </div>

      <div className="max-w-xl mx-auto">
        {/* Balance Card */}
        <div className="bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] rounded-3xl p-6 mb-6 text-white">
          <p className="text-white/80 text-sm mb-1">Available Balance</p>
          <p className="text-3xl font-bold">$0.00</p>
        </div>

        {/* Transfer Form */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="space-y-5">
            {/* Amount */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                <input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xl font-semibold placeholder-gray-400 focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Recipient */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Recipient Account</label>
              <input
                type="text"
                placeholder="Enter account number"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="w-full px-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Bank */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Bank</label>
              <select className="w-full px-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all appearance-none">
                <option value="">Select Bank</option>
                <option value="chase">Chase Bank</option>
                <option value="bofa">Bank of America</option>
                <option value="wells">Wells Fargo</option>
                <option value="citi">Citibank</option>
              </select>
            </div>

            {/* Note */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Note (Optional)</label>
              <textarea
                placeholder="Add a note..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                className="w-full px-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button className="w-full py-4 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white rounded-2xl font-bold text-lg shadow-lg shadow-sky-500/25 hover:shadow-xl transition-all">
              <i className="fa-solid fa-paper-plane mr-2"></i>
              Send Money
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
