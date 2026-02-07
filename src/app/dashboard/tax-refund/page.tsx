'use client';

import Link from 'next/link';

export default function TaxRefundPage() {
  return (
    <div className="p-4 lg:p-6">
      {/* Mobile Header */}
      <div className="lg:hidden mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <Link href="/dashboard" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <i className="fa-solid fa-arrow-left text-gray-600 dark:text-gray-300"></i>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Tax Refund</h1>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Tax Refund</h1>
        <p className="text-gray-500 dark:text-gray-400">Get your tax refund directly to your account</p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Banner */}
        <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-6 mb-6 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                <i className="fa-solid fa-receipt text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">Tax Refund 2024</h3>
                <p className="text-white/80 text-sm">Fast • Secure • Direct</p>
              </div>
            </div>
            <p className="text-white/90">Receive your tax refund up to 5 days faster when deposited directly to your Global Nexus account.</p>
          </div>
        </div>

        {/* Status Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Refund Status</h3>
          
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <i className="fa-solid fa-clock text-gray-400 dark:text-gray-500 text-3xl"></i>
            </div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">No Pending Refunds</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              Your tax refund status will appear here once you set up direct deposit.
            </p>
          </div>
        </div>

        {/* Setup Direct Deposit */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Set Up Direct Deposit</h3>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-check text-green-500"></i>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Get Your Refund Faster</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Receive your refund up to 5 days earlier than a paper check</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-shield-halved text-blue-500"></i>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Safe & Secure</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Your refund is deposited directly - no lost or stolen checks</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-money-bill-wave text-purple-500"></i>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Zero Fees</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">No fees for receiving your tax refund</p>
              </div>
            </div>
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-pink-500/25 hover:shadow-xl transition-all">
            <i className="fa-solid fa-plus mr-2"></i>
            Set Up Direct Deposit
          </button>
        </div>
      </div>
    </div>
  );
}
