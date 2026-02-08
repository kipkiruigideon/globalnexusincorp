'use client';

import { useState } from 'react';

export default function TransactionsPage() {
  const [showFilter, setShowFilter] = useState(false);

  const columns = ['AMOUNT', 'TYPE', 'STATUS', 'REFERENCE', 'DESCRIPTION', 'DATE', 'ACTION'];

  return (
    <div className="p-4 lg:p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Transactions</h1>
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setShowFilter(!showFilter)}
            className="px-4 py-2 bg-[#1e293b] text-white rounded-lg font-medium hover:bg-[#334155] transition-colors flex items-center space-x-2"
          >
            <i className="fa-solid fa-filter"></i>
            <span>Filter</span>
          </button>
          <button className="px-4 py-2 bg-[#0ea5e9] text-white rounded-lg font-medium hover:bg-[#0284c7] transition-colors flex items-center space-x-2">
            <i className="fa-solid fa-download"></i>
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-[#1e293b] rounded-xl overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-7 gap-4 px-6 py-4 bg-[#0ea5e9]/20 border-b border-gray-700">
          {columns.map((col) => (
            <div key={col} className="text-[#0ea5e9] text-sm font-semibold uppercase tracking-wide">
              {col}
            </div>
          ))}
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-20 h-20 bg-[#0ea5e9]/20 rounded-2xl flex items-center justify-center mb-4">
            <i className="fa-solid fa-receipt text-[#0ea5e9] text-3xl"></i>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No transactions found</h3>
          <p className="text-gray-400">
            Try adjusting your search or filter parameters
          </p>
        </div>

        {/* Table Footer */}
        <div className="px-6 py-4 border-t border-gray-700 text-gray-400 text-sm">
          Showing <span className="text-[#0ea5e9]">0</span> to <span className="text-[#0ea5e9]">0</span> of <span className="text-[#0ea5e9]">0</span> results
        </div>
      </div>
    </div>
  );
}
