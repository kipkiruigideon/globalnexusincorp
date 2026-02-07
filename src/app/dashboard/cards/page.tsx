'use client';

import Link from 'next/link';

export default function CardsPage() {
  return (
    <div className="p-4 lg:p-6">
      {/* Mobile Header */}
      <div className="lg:hidden mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <Link href="/dashboard" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <i className="fa-solid fa-arrow-left text-gray-600 dark:text-gray-300"></i>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">My Cards</h1>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">My Cards</h1>
        <p className="text-gray-500 dark:text-gray-400">Manage your virtual and physical cards</p>
      </div>

      {/* Cards Section */}
      <div className="grid gap-6 lg:grid-cols-2 mb-6">
        {/* Virtual Card */}
        <div className="bg-gradient-to-br from-[#0ea5e9] via-[#0284c7] to-[#0369a1] rounded-3xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-credit-card text-white text-xl"></i>
                <span className="text-white font-semibold">Virtual Card</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">
                Active
              </span>
            </div>
            
            <div className="mb-6">
              <p className="text-white/70 text-sm mb-1">Card Number</p>
              <p className="text-white text-xl font-mono tracking-wider">•••• •••• •••• ••••</p>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/70 text-xs">Card Holder</p>
                <p className="text-white font-semibold">PASCALE</p>
              </div>
              <div>
                <p className="text-white/70 text-xs">Expires</p>
                <p className="text-white font-semibold">--/--</p>
              </div>
              <div className="text-right">
                <i className="fa-brands fa-cc-visa text-white text-3xl"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Request Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center min-h-[240px]">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <i className="fa-solid fa-plus text-gray-400 dark:text-gray-500 text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Request Physical Card</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-4">Get a physical debit card delivered to your address</p>
          <button className="px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white rounded-xl font-semibold shadow-lg shadow-sky-500/25 hover:shadow-xl transition-all">
            Request Card
          </button>
        </div>
      </div>

      {/* Card Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Card Actions</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 hover:bg-sky-50 dark:hover:bg-gray-700 transition-colors group">
            <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <i className="fa-solid fa-eye text-[#0ea5e9] text-lg"></i>
            </div>
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">View Details</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 hover:bg-sky-50 dark:hover:bg-gray-700 transition-colors group">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <i className="fa-solid fa-lock text-green-500 text-lg"></i>
            </div>
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Freeze Card</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 hover:bg-sky-50 dark:hover:bg-gray-700 transition-colors group">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <i className="fa-solid fa-sliders text-purple-500 text-lg"></i>
            </div>
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Set Limits</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 hover:bg-sky-50 dark:hover:bg-gray-700 transition-colors group">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <i className="fa-solid fa-ban text-red-500 text-lg"></i>
            </div>
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Block Card</span>
          </button>
        </div>
      </div>
    </div>
  );
}
