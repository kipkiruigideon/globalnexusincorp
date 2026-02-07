'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [activeWallet, setActiveWallet] = useState<'fiat' | 'crypto'>('fiat');

  const quickActions = [
    { icon: 'fa-plus', label: 'Top Up', color: 'bg-[#0ea5e9]', href: '/dashboard/deposits' },
    { icon: 'fa-paper-plane', label: 'Send', color: 'bg-purple-500', href: '/dashboard/local-transfer' },
    { icon: 'fa-qrcode', label: 'Receive', color: 'bg-green-500', href: '/dashboard/deposits' },
    { icon: 'fa-ellipsis', label: 'More', color: 'bg-orange-500', href: '/dashboard/services' },
  ];

  const financialServices = [
    { icon: 'fa-building-columns', label: 'Local Transfer', href: '/dashboard/local-transfer', color: 'text-[#0ea5e9]', bg: 'bg-sky-50 dark:bg-sky-900/30' },
    { icon: 'fa-globe', label: 'International', href: '/dashboard/international', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/30' },
    { icon: 'fa-credit-card', label: 'Cards', href: '/dashboard/cards', color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/30' },
    { icon: 'fa-landmark', label: 'Loans', href: '/dashboard/loans', color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/30' },
    { icon: 'fa-receipt', label: 'Tax Refund', href: '/dashboard/tax-refund', color: 'text-pink-500', bg: 'bg-pink-50 dark:bg-pink-900/30' },
    { icon: 'fa-hand-holding-dollar', label: 'Grants', href: '/dashboard/grants', color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-900/30' },
  ];

  const recentContacts = [
    { name: 'John D.', initial: 'J', color: 'bg-[#0ea5e9]' },
    { name: 'Sarah M.', initial: 'S', color: 'bg-purple-500' },
    { name: 'Alex K.', initial: 'A', color: 'bg-green-500' },
    { name: 'Maria L.', initial: 'M', color: 'bg-orange-500' },
    { name: 'Add', initial: '+', color: 'bg-gray-200 dark:bg-gray-700', isAdd: true },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden">
        {/* Gradient Header */}
        <div className="bg-gradient-to-br from-[#0ea5e9] via-[#0284c7] to-[#0369a1] text-white px-4 pt-6 pb-32 relative overflow-hidden">
          {/* Background Patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
          </div>

          {/* Mobile Top Bar */}
          <div className="flex items-center justify-between mb-8 relative z-10">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-semibold border border-white/30">
                P
              </div>
              <div>
                <p className="text-white/70 text-xs">Welcome back</p>
                <h3 className="text-white font-bold text-base">Pascale</h3>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="relative p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                <i className="fa-solid fa-bell text-white"></i>
              </button>
              <button className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                <i className="fa-solid fa-gear text-white"></i>
              </button>
            </div>
          </div>

          {/* Wallet Toggle */}
          <div className="flex justify-center mb-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-1 flex border border-white/20">
              <button 
                onClick={() => setActiveWallet('fiat')}
                className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  activeWallet === 'fiat' 
                    ? 'bg-white text-[#0ea5e9] shadow-lg' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <i className="fa-solid fa-wallet mr-2"></i>
                Fiat
              </button>
              <button 
                onClick={() => setActiveWallet('crypto')}
                className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  activeWallet === 'crypto' 
                    ? 'bg-white text-[#0ea5e9] shadow-lg' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <i className="fa-brands fa-bitcoin mr-2"></i>
                Crypto
              </button>
            </div>
          </div>
        </div>

        {/* Wallet Card - Overlapping */}
        <div className="px-4 -mt-24 relative z-20 mb-6">
          {activeWallet === 'fiat' ? (
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-700/50">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0ea5e9]/20 flex items-center justify-center">
                    <i className="fa-solid fa-dollar-sign text-[#0ea5e9] text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium">Fiat Wallet</p>
                    <p className="text-white font-bold">USD Balance</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">
                    Active
                  </span>
                </div>
              </div>
              <div className="space-y-1 mb-6">
                <p className="text-gray-400 text-xs font-medium">Available Balance</p>
                <p className="text-3xl font-bold text-white tracking-tight">$0.00</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-400">
                  <span>Account: </span>
                  <span className="font-mono">****</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-[#0ea5e9]"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 rounded-3xl p-6 shadow-2xl border border-purple-700/50">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                    <i className="fa-brands fa-bitcoin text-orange-400 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-purple-300 text-xs font-medium">Crypto Wallet</p>
                    <p className="text-white font-bold">BTC Balance</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">
                    Active
                  </span>
                </div>
              </div>
              <div className="space-y-1 mb-6">
                <p className="text-purple-300 text-xs font-medium">Available Balance</p>
                <p className="text-3xl font-bold text-white tracking-tight">0.00 BTC</p>
                <p className="text-sm text-purple-300">≈ $0.00 USD</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-purple-300">
                  <span>Network: </span>
                  <span className="font-mono">Bitcoin</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions - Mobile */}
        <div className="px-4 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-4 gap-3">
              {quickActions.map((action, index) => (
                <Link key={index} href={action.href} className="flex flex-col items-center group">
                  <div className={`w-14 h-14 ${action.color} rounded-2xl flex items-center justify-center mb-2 shadow-lg group-hover:scale-105 transition-transform`}>
                    <i className={`fa-solid ${action.icon} text-white text-lg`}></i>
                  </div>
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 group-hover:text-[#0ea5e9]">{action.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop & Mobile Content */}
      <div className="lg:p-6 p-4">
        {/* Desktop Wallet Cards */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 mb-8">
          {/* Fiat Wallet */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-700/50 hover:shadow-sky-500/10 transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0ea5e9]/20 flex items-center justify-center">
                  <i className="fa-solid fa-dollar-sign text-[#0ea5e9] text-xl"></i>
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-medium">Fiat Wallet</p>
                  <p className="text-white font-bold">USD Balance</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">
                Active
              </span>
            </div>
            <div className="space-y-1 mb-6">
              <p className="text-gray-400 text-xs font-medium">Available Balance</p>
              <p className="text-3xl font-bold text-white tracking-tight">$0.00</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-400">
                <span>Account: </span>
                <span className="font-mono">****</span>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-[#0ea5e9] text-white rounded-xl text-sm font-semibold hover:bg-[#0284c7] transition-colors">
                  <i className="fa-solid fa-plus mr-1.5"></i>Add
                </button>
                <button className="px-4 py-2 bg-gray-700 text-white rounded-xl text-sm font-semibold hover:bg-gray-600 transition-colors">
                  <i className="fa-solid fa-paper-plane mr-1.5"></i>Send
                </button>
              </div>
            </div>
          </div>

          {/* Crypto Wallet */}
          <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 rounded-3xl p-6 shadow-2xl border border-purple-700/50 hover:shadow-purple-500/10 transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                  <i className="fa-brands fa-bitcoin text-orange-400 text-xl"></i>
                </div>
                <div>
                  <p className="text-purple-300 text-xs font-medium">Crypto Wallet</p>
                  <p className="text-white font-bold">BTC Balance</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">
                Active
              </span>
            </div>
            <div className="space-y-1 mb-6">
              <p className="text-purple-300 text-xs font-medium">Available Balance</p>
              <p className="text-3xl font-bold text-white tracking-tight">0.00 BTC</p>
              <p className="text-sm text-purple-300">≈ $0.00 USD</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs text-purple-300">
                <span>Network: </span>
                <span className="font-mono">Bitcoin</span>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-purple-500 text-white rounded-xl text-sm font-semibold hover:bg-purple-400 transition-colors">
                  <i className="fa-solid fa-plus mr-1.5"></i>Buy
                </button>
                <button className="px-4 py-2 bg-purple-700 text-white rounded-xl text-sm font-semibold hover:bg-purple-600 transition-colors">
                  <i className="fa-solid fa-arrows-rotate mr-1.5"></i>Swap
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Transfer Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Quick Transfer</h3>
            <Link href="/dashboard/local-transfer" className="text-sm text-[#0ea5e9] hover:text-[#0284c7] font-semibold flex items-center">
              View All
              <i className="fa-solid fa-chevron-right ml-1 text-xs"></i>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4 overflow-x-auto pb-2 scrollbar-hide">
            {recentContacts.map((contact, index) => (
              <button 
                key={index} 
                className={`flex flex-col items-center min-w-fit group ${contact.isAdd ? 'opacity-70 hover:opacity-100' : ''}`}
              >
                <div className={`w-14 h-14 rounded-full ${contact.color} flex items-center justify-center text-white font-bold text-lg mb-2 group-hover:scale-105 transition-transform ${!contact.isAdd ? 'ring-2 ring-offset-2 ring-transparent group-hover:ring-[#0ea5e9]' : 'border-2 border-dashed border-gray-400 dark:border-gray-500 bg-transparent'}`}>
                  {contact.isAdd ? (
                    <i className="fa-solid fa-plus text-gray-400 dark:text-gray-500"></i>
                  ) : (
                    contact.initial
                  )}
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">{contact.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Financial Services Grid */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Financial Services</h3>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {financialServices.map((service, index) => (
              <Link 
                key={index} 
                href={service.href}
                className="flex flex-col items-center p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
              >
                <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}>
                  <i className={`fa-solid ${service.icon} ${service.color} text-xl`}></i>
                </div>
                <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 text-center group-hover:text-[#0ea5e9]">{service.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mt-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent Transactions</h3>
            <Link href="/dashboard/transactions" className="text-sm text-[#0ea5e9] hover:text-[#0284c7] font-semibold flex items-center">
              View All
              <i className="fa-solid fa-chevron-right ml-1 text-xs"></i>
            </Link>
          </div>
          
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <i className="fa-solid fa-receipt text-gray-400 dark:text-gray-500 text-3xl"></i>
            </div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">No transactions yet</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              Your transaction history will appear here once you start making transfers.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-2 py-2 z-50">
        <div className="flex justify-around items-center">
          <Link href="/dashboard" className="flex flex-col items-center py-2 px-3 text-[#0ea5e9]">
            <i className="fa-solid fa-house text-lg mb-1"></i>
            <span className="text-xs font-semibold">Home</span>
          </Link>
          <Link href="/dashboard/transactions" className="flex flex-col items-center py-2 px-3 text-gray-400 hover:text-[#0ea5e9]">
            <i className="fa-solid fa-chart-line text-lg mb-1"></i>
            <span className="text-xs font-medium">History</span>
          </Link>
          <Link href="/dashboard/deposits" className="flex flex-col items-center py-2 px-3 -mt-6">
            <div className="w-14 h-14 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] rounded-full flex items-center justify-center shadow-lg shadow-sky-500/30">
              <i className="fa-solid fa-plus text-white text-xl"></i>
            </div>
          </Link>
          <Link href="/dashboard/cards" className="flex flex-col items-center py-2 px-3 text-gray-400 hover:text-[#0ea5e9]">
            <i className="fa-solid fa-credit-card text-lg mb-1"></i>
            <span className="text-xs font-medium">Cards</span>
          </Link>
          <Link href="/dashboard/settings" className="flex flex-col items-center py-2 px-3 text-gray-400 hover:text-[#0ea5e9]">
            <i className="fa-solid fa-user text-lg mb-1"></i>
            <span className="text-xs font-medium">Profile</span>
          </Link>
        </div>
      </div>

      {/* Padding for mobile bottom nav */}
      <div className="lg:hidden h-20"></div>
    </>
  );
}
