'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TransactionsPage() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'incoming', label: 'Incoming' },
    { id: 'outgoing', label: 'Outgoing' },
    { id: 'pending', label: 'Pending' },
  ];

  return (
    <div className="p-4 lg:p-6">
      {/* Mobile Header */}
      <div className="lg:hidden mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Link href="/dashboard" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <i className="fa-solid fa-arrow-left text-gray-600 dark:text-gray-300"></i>
            </Link>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Transactions</h1>
          </div>
          <button className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <i className="fa-solid fa-filter text-gray-600 dark:text-gray-300"></i>
          </button>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Transaction History</h1>
        <p className="text-gray-500 dark:text-gray-400">View and manage your transaction history</p>
      </div>

      {/* Search & Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 lg:p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
        {/* Search Bar */}
        <div className="relative mb-4">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                filter === f.id
                  ? 'bg-[#0ea5e9] text-white shadow-lg shadow-sky-500/25'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Transactions List */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6">
            <i className="fa-solid fa-receipt text-gray-400 dark:text-gray-500 text-4xl"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No transactions found</h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-6">
            Your transaction history will appear here once you start making transfers.
          </p>
          <Link 
            href="/dashboard/deposits"
            className="px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white rounded-xl font-semibold shadow-lg shadow-sky-500/25 hover:shadow-xl transition-all"
          >
            <i className="fa-solid fa-plus mr-2"></i>
            Make Your First Deposit
          </Link>
        </div>
      </div>
    </div>
  );
}
