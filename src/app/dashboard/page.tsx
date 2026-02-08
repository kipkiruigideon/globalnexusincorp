'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DashboardPage() {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [currentCard, setCurrentCard] = useState(0);
  const [showBankAccount, setShowBankAccount] = useState(false);
  const [showSendMoney, setShowSendMoney] = useState(false);
  const [showReceiveModal, setShowReceiveModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('balanceVisible');
    if (stored !== null) setBalanceVisible(stored === 'true');
    
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) setGreeting('Good Morning');
      else if (hour < 18) setGreeting('Good Afternoon');
      else setGreeting('Good Evening');
    };
    updateGreeting();
  }, []);

  const toggleBalance = () => {
    setBalanceVisible(!balanceVisible);
    localStorage.setItem('balanceVisible', (!balanceVisible).toString());
  };

  return (
    <div>
      {/* Mobile Layout */}
      <div className="lg:hidden mb-4">
        {/* Mobile Header with Extended Gradient Background */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white px-4 pt-6 pb-8 rounded-b-3xl">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Image src="/images/photos/643104_1770503526_Screenshot 2026-01-10 124013.png" alt="Profile" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white/20" />
              <div>
                <p className="text-white/80 text-xs">{greeting} 👋</p>
                <p className="text-white font-semibold text-base">Pascale Dickson</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="w-10 h-10 bg-white/10 dark:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200 hover:bg-white/20 dark:hover:bg-white/30">
                <i className="fa-solid fa-bell text-white text-base"></i>
              </button>
            </div>
          </div>

          {/* Swipeable Mobile Wallet Cards */}
          <div className="mb-6">
            <div className="relative overflow-hidden">
              <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentCard * 100}%)` }}>
                {/* Fiat Balance Card */}
                <div className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-[#0ea5e9] via-[#0ea5e9] to-[#0284c7] dark:from-[#0284c7] dark:via-[#0ea5e9] dark:to-[#0369a1] rounded-2xl p-4 text-white shadow-xl dark:shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-3 right-3 w-24 h-24 bg-white rounded-full -translate-y-6 translate-x-6"></div>
                      <div className="absolute bottom-3 left-3 w-20 h-20 bg-white rounded-full translate-y-4 -translate-x-4"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="text-white/60 text-xs uppercase tracking-wide">Global Nexus Inc Bank</p>
                          <p className="text-white/80 text-xs">Pascale Dickson</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/60 text-xs">Fiat Account</p>
                          <p className="text-white/80 text-xs font-mono">58076435509</p>
                        </div>
                      </div>
                      <div className="text-center mb-3">
                        <p className="text-white/80 text-xs mb-1">Available Balance</p>
                        <div className="flex items-center justify-center space-x-2">
                          {balanceVisible ? (
                            <p className="text-3xl font-bold">$0.00</p>
                          ) : (
                            <p className="text-3xl font-bold">$ ******</p>
                          )}
                          <button onClick={toggleBalance} className="text-white/60 hover:text-white">
                            <i className={`fa-solid ${balanceVisible ? 'fa-eye-slash' : 'fa-eye'} text-base`}></i>
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                          <span className="text-white/70">Active</span>
                        </div>
                        <div className="text-white/70">Last updated: Feb 07, 23:16</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Crypto Balance Card */}
                <div className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900 rounded-2xl p-4 text-white shadow-xl dark:shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-3 right-3 w-24 h-24 bg-white rounded-full -translate-y-6 translate-x-6"></div>
                      <div className="absolute bottom-3 left-3 w-20 h-20 bg-white rounded-full translate-y-4 -translate-x-4"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="text-white/60 text-xs uppercase tracking-wide">Bitcoin Wallet</p>
                          <p className="text-white/80 text-xs">Pascale Dickson</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/60 text-xs">Crypto Account</p>
                          <div className="flex items-center space-x-1">
                            <i className="fab fa-bitcoin text-white/80 text-xs"></i>
                            <span className="text-white/80 text-xs">BTC</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mb-3">
                        <p className="text-white/80 text-xs mb-1">Bitcoin Balance</p>
                        <div className="flex items-center justify-center space-x-2">
                          {balanceVisible ? (
                            <p className="text-3xl font-bold">0.000000 BTC</p>
                          ) : (
                            <p className="text-3xl font-bold">••••••• BTC</p>
                          )}
                          <button onClick={toggleBalance} className="text-white/60 hover:text-white">
                            <i className={`fa-solid ${balanceVisible ? 'fa-eye-slash' : 'fa-eye'} text-base`}></i>
                          </button>
                        </div>
                        {balanceVisible && <p className="text-white/60 text-xs mt-1">≈ $0.00</p>}
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                          <span className="text-white/70">1 BTC = $69,012</span>
                        </div>
                        <div className="text-white/70">Live Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Indicators */}
            <div className="flex justify-center space-x-2 mt-3">
              <button onClick={() => setCurrentCard(0)} className={`w-2 h-2 rounded-full transition-colors duration-200 ${currentCard === 0 ? 'bg-white' : 'bg-white/30'}`}></button>
              <button onClick={() => setCurrentCard(1)} className={`w-2 h-2 rounded-full transition-colors duration-200 ${currentCard === 1 ? 'bg-white' : 'bg-white/30'}`}></button>
            </div>
            <div className="text-center mt-2">
              <p className="text-white/50 text-xs"><i className="fa-solid fa-hand-pointer mr-1"></i>Swipe to switch between accounts</p>
            </div>
          </div>

          {/* Mobile Quick Actions */}
          <div className="grid grid-cols-4 gap-3">
            <Link href="/dashboard/deposits" className="flex flex-col items-center justify-center">
              <div className="w-14 h-14 bg-yellow-400 dark:bg-yellow-500 rounded-full flex items-center justify-center shadow-lg dark:shadow-yellow-500/25 mb-1">
                <i className="fa-solid fa-plus text-black dark:text-gray-900 text-lg"></i>
              </div>
              <span className="text-white text-xs font-medium">Top Up</span>
            </Link>
            <button onClick={() => setShowSendMoney(true)} className="flex flex-col items-center justify-center">
              <div className="w-14 h-14 bg-white/20 dark:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg dark:shadow-white/10 mb-1 border border-white/10 dark:border-white/20">
                <i className="fa-solid fa-paper-plane text-white text-lg"></i>
              </div>
              <span className="text-white text-xs font-medium">Send</span>
            </button>
            <button onClick={() => setShowReceiveModal(true)} className="flex flex-col items-center justify-center">
              <div className="w-14 h-14 bg-white/20 dark:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg dark:shadow-white/10 mb-1 border border-white/10 dark:border-white/20">
                <i className="fa-solid fa-arrow-down text-white text-lg"></i>
              </div>
              <span className="text-white text-xs font-medium">Receive</span>
            </button>
            <button onClick={() => setShowMobileMenu(true)} className="flex flex-col items-center justify-center">
              <div className="w-14 h-14 bg-white/20 dark:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg dark:shadow-white/10 mb-1 border border-white/10 dark:border-white/20">
                <i className="fa-solid fa-grid-2 text-white text-lg"></i>
              </div>
              <span className="text-white text-xs font-medium">More</span>
            </button>
          </div>
        </div>

        {/* Mobile Quick Transfer Section */}
        <div className="px-4 mb-4 mt-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Quick Transfer</h3>
            <Link href="/dashboard/beneficiaries" className="text-xs text-[#0ea5e9] dark:text-[#0ea5e9] font-medium flex items-center hover:text-[#0284c7] dark:hover:text-[#38bdf8] transition-colors">
              View All<i className="fa-solid fa-chevron-right ml-1 text-xs"></i>
            </Link>
          </div>
          <div className="flex space-x-3 overflow-x-auto pb-2">
            <Link href="/dashboard/local-transfer" className="flex-shrink-0 flex flex-col items-center justify-center group">
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 flex items-center justify-center mb-1 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 group-hover:border-[#0ea5e9] dark:group-hover:border-[#0ea5e9] transition-all duration-200">
                <i className="fa-solid fa-plus text-gray-400 dark:text-gray-500 text-base group-hover:text-[#0ea5e9] dark:group-hover:text-[#0ea5e9] transition-colors"></i>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 text-center group-hover:text-[#0ea5e9] dark:group-hover:text-[#0ea5e9] transition-colors">Add New</span>
            </Link>
          </div>
        </div>

        {/* Mobile Cards Section */}
        <div className="px-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-base text-gray-900 dark:text-white">Your Active Cards</h3>
          </div>
          <div className="py-8 text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-white/20 dark:border-gray-700/50">
            <div className="w-16 h-16 bg-[#0ea5e9]/10 dark:bg-[#0ea5e9]/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="fa-solid fa-credit-card text-[#0ea5e9] dark:text-[#0ea5e9] text-xl"></i>
            </div>
            <h3 className="text-sm font-semibold text-[#0ea5e9] dark:text-[#0ea5e9] mb-1">No active cards</h3>
            <p className="text-xs text-[#0284c7] dark:text-[#38bdf8] mb-4 max-w-xs mx-auto">Apply for a Mastercard card to get started with secure online payments.</p>
            <Link href="/dashboard/cards/apply" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#0284c7] hover:to-[#0369a1] text-white text-xs font-medium rounded-xl shadow-lg shadow-[#0ea5e9]/25 dark:shadow-[#0ea5e9]/50 transition-all duration-200 transform hover:scale-105">
              <i className="fa-solid fa-plus text-xs mr-2"></i>Apply for Card
            </Link>
          </div>
        </div>

        {/* Mobile Financial Services Overview */}
        <div className="px-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Financial Services</h3>
            <button className="text-xs text-[#0ea5e9] dark:text-[#0ea5e9] font-medium flex items-center hover:text-[#0284c7] dark:hover:text-[#38bdf8] transition-colors">
              View All<i className="fa-solid fa-chevron-right ml-1 text-xs"></i>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {/* Loans */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-white/20 dark:border-gray-700/50 overflow-hidden">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <i className="fa-solid fa-landmark text-blue-600 dark:text-blue-400 text-lg"></i>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Loans</h4>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-gray-500 bg-gray-100 dark:bg-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-1"></div>Available
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Quick approval process</p>
                <Link href="/dashboard/loans" className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105">
                  <i className="fa-solid fa-landmark text-xs mr-2"></i>Apply Now
                </Link>
              </div>
            </div>

            {/* Grants */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-white/20 dark:border-gray-700/50 overflow-hidden">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <i className="fa-solid fa-hand-holding-dollar text-green-600 dark:text-green-400 text-lg"></i>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Grants</h4>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-gray-500 bg-gray-100 dark:bg-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-1"></div>Available
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">No repayment required</p>
                <Link href="/dashboard/grants" className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105">
                  <i className="fa-solid fa-hand-holding-dollar text-xs mr-2"></i>Apply Now
                </Link>
              </div>
            </div>

            {/* Tax Refunds */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-white/20 dark:border-gray-700/50 overflow-hidden">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <i className="fa-solid fa-receipt text-purple-600 dark:text-purple-400 text-lg"></i>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Tax Refunds</h4>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-gray-500 bg-gray-100 dark:bg-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-1"></div>Available
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Fast processing</p>
                <Link href="/dashboard/tax-refund" className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105">
                  <i className="fa-solid fa-receipt text-xs mr-2"></i>Apply Now
                </Link>
              </div>
            </div>

            {/* Virtual Cards */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-white/20 dark:border-gray-700/50 overflow-hidden">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                      <i className="fa-solid fa-credit-card text-orange-600 dark:text-orange-400 text-lg"></i>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Virtual Cards</h4>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-gray-500 bg-gray-100 dark:bg-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-1"></div>Available
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Instant virtual cards</p>
                <Link href="/dashboard/cards" className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105">
                  <i className="fa-solid fa-credit-card text-xs mr-2"></i>Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Activity Feed */}
        <div className="px-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
            <Link href="/dashboard/transactions" className="text-xs text-[#0ea5e9] dark:text-[#0ea5e9] font-medium flex items-center hover:text-[#0284c7] dark:hover:text-[#38bdf8] transition-colors">
              View All<i className="fa-solid fa-chevron-right ml-1 text-xs"></i>
            </Link>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-white/20 dark:border-gray-700/50 overflow-hidden">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-clock text-gray-400 dark:text-gray-500 text-xl"></i>
              </div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">No Recent Activity</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">Your account activity will appear here</p>
            </div>
          </div>
        </div>

        {/* Mobile Support Widget */}
        <div className="px-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Need Help?</h3>
            <Link href="/dashboard/support" className="text-xs text-[#0ea5e9] dark:text-[#0ea5e9] font-medium flex items-center hover:text-[#0284c7] dark:hover:text-[#38bdf8] transition-colors">
              Support Center<i className="fa-solid fa-chevron-right ml-1 text-xs"></i>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Link href="/dashboard/support" className="block">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-white/20 dark:border-gray-700/50 p-3 hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <i className="fa-solid fa-message text-blue-600 dark:text-blue-400 text-sm"></i>
                  </div>
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1">Live Chat</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight">Get instant help from our team</p>
                </div>
              </div>
            </Link>
            <a href="mailto:support@globalnexusincorp.com" className="block">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-white/20 dark:border-gray-700/50 p-3 hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                <div className="text-center">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <i className="fa-solid fa-envelope text-green-600 dark:text-green-400 text-sm"></i>
                  </div>
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1">Email Support</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight">Send us a detailed message</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block py-6 mb-6">
        {/* Desktop Stats Cards */}
        <div className="px-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm dark:shadow-gray-900/25 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-credit-card text-white text-sm"></i>
                </div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Available</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">$20,000,000.00</h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs">Account Limit</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm dark:shadow-gray-900/25 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-arrow-down text-white text-sm"></i>
                </div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">This Month</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">$0.00</h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs">Monthly Deposits</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm dark:shadow-gray-900/25 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-arrow-up text-white text-sm"></i>
                </div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">This Month</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">$0.00</h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs">Monthly Expenses</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm dark:shadow-gray-900/25 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-chart-line text-white text-sm"></i>
                </div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">All Time</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">$0.00</h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs">Total Volume</p>
            </div>
          </div>
        </div>

        {/* Desktop Main Content */}
        <div className="px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Enhanced Desktop Balance Card */}
            <div className="bg-gradient-to-br from-[#0ea5e9] via-[#0ea5e9] to-[#0284c7] dark:from-[#0284c7] dark:via-[#0ea5e9] dark:to-[#0369a1] rounded-2xl p-6 text-white shadow-xl dark:shadow-2xl relative overflow-hidden z-10">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-6 right-6 w-32 h-32 bg-white rounded-full -translate-y-8 translate-x-8"></div>
                <div className="absolute bottom-6 left-6 w-24 h-24 bg-white rounded-full translate-y-6 -translate-x-6"></div>
                <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-white rounded-full -translate-x-10 -translate-y-10"></div>
              </div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                        <i className="fa-solid fa-university text-white text-xs"></i>
                      </div>
                      <p className="text-white/90 text-base font-semibold">Global Nexus Inc Bank</p>
                    </div>
                    <p className="text-white/70 text-xs">Primary Account</p>
                  </div>
                  <div className="text-right bg-white/10 dark:bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                    <p className="text-white/70 dark:text-white/80 text-xs uppercase tracking-wide mb-1">Account Number</p>
                    <p className="text-white font-mono text-sm">58076435509</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-white/70 text-xs mb-1">Account Holder</p>
                    <p className="text-white text-base font-semibold mb-3">Pascale Dickson</p>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-white/80 text-xs">Account Active</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-shield-exclamation text-orange-400 text-xs"></i>
                        <span className="text-white/80 text-xs">Verification Required</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-white/70 text-xs mb-1">Fiat Balance</p>
                    <div className="flex items-center justify-center space-x-2 mb-1">
                      <div className="text-center">
                        {balanceVisible ? (
                          <p className="text-2xl font-bold leading-none">$0.00</p>
                        ) : (
                          <p className="text-2xl font-bold leading-none">$ ••••••</p>
                        )}
                      </div>
                      <button onClick={toggleBalance} className="text-white/60 hover:text-white transition-colors p-1">
                        <i className={`fa-solid ${balanceVisible ? 'fa-eye-slash' : 'fa-eye'} text-sm`}></i>
                      </button>
                    </div>
                    <p className="text-white/60 text-xs">USD Balance</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/70 text-xs mb-1">Bitcoin Balance</p>
                    <div className="mb-1">
                      {balanceVisible ? (
                        <p className="text-lg font-bold leading-none">0.000000 BTC</p>
                      ) : (
                        <p className="text-lg font-bold leading-none">••••••• BTC</p>
                      )}
                      {balanceVisible && <p className="text-white/60 text-xs mt-1">≈ $0.00</p>}
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                      <span className="text-white/60 text-xs">1 BTC = $69,012</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="bg-white/10 dark:bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white/60 dark:text-white/70 text-xs mb-1">Total Portfolio</p>
                    {balanceVisible ? (
                      <p className="text-white text-lg font-bold">$0.00</p>
                    ) : (
                      <p className="text-white text-lg font-bold">$ ••••••</p>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <button onClick={() => setShowSendMoney(true)} className="bg-white/20 dark:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-lg text-white font-semibold hover:bg-white/30 dark:hover:bg-white/40 transition-all duration-200 flex items-center space-x-2">
                      <i className="fa-solid fa-paper-plane text-sm"></i>
                      <span className="text-sm">Send Money</span>
                    </button>
                    <Link href="/dashboard/deposits" className="bg-white dark:bg-gray-100 text-[#0ea5e9] dark:text-[#0284c7] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-all duration-200 flex items-center space-x-2 shadow-lg dark:shadow-gray-900/25">
                      <i className="fa-solid fa-plus text-sm"></i>
                      <span className="text-sm">Add Money</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm dark:shadow-gray-900/25 border border-gray-100 dark:border-gray-700">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Link href="/dashboard/local-transfer" className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mb-2">
                    <i className="fa-solid fa-exchange-alt text-white text-sm"></i>
                  </div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Transfer</span>
                </Link>
                <Link href="/dashboard/international" className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mb-2">
                    <i className="fa-solid fa-file-invoice text-white text-sm"></i>
                  </div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Pay Bills</span>
                </Link>
                <button onClick={() => setShowReceiveModal(true)} className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center mb-2">
                    <i className="fa-solid fa-hand-holding-dollar text-white text-sm"></i>
                  </div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Request</span>
                </button>
                <button onClick={() => setShowBankAccount(true)} className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="w-10 h-10 bg-[#0ea5e9] rounded-lg flex items-center justify-center mb-2">
                    <i className="fa-solid fa-building-columns text-white text-sm"></i>
                  </div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Bank Details</span>
                </button>
              </div>
            </div>

            {/* Desktop Cards Section */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg dark:shadow-gray-900/50 overflow-hidden border border-white/20 dark:border-gray-700/50">
              <div className="px-4 py-2 bg-gradient-to-r from-[#0ea5e9]/10 to-[#0ea5e9]/5 dark:from-gray-900/80 dark:to-gray-800/50 border-b border-[#0ea5e9]/10 dark:border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-[#0ea5e9] rounded-lg flex items-center justify-center mr-2">
                      <i className="fa-solid fa-credit-card text-white text-xs"></i>
                    </div>
                    <h3 className="text-sm font-bold text-[#0ea5e9] dark:text-[#0ea5e9]">Your Active Cards</h3>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="py-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-[#0ea5e9]/10 dark:bg-gray-700/50 rounded-full flex items-center justify-center mb-3">
                    <i className="fa-solid fa-credit-card text-[#0ea5e9] dark:text-[#0ea5e9] text-lg"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-[#0ea5e9] dark:text-[#0ea5e9] mb-1">No active cards</h3>
                  <p className="text-xs text-[#0284c7] dark:text-[#38bdf8] mb-3 max-w-xs">Apply for a Mastercard to get started with secure online payments.</p>
                  <Link href="/dashboard/cards/apply" className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#0284c7] hover:to-[#0369a1] text-white text-xs font-medium rounded-lg shadow-sm transition-all duration-200 transform hover:scale-105">
                    <i className="fa-solid fa-plus text-xs mr-1.5"></i>Apply for Card
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Recent Transactions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm dark:shadow-gray-900/25 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">Recent Transactions</h3>
                <Link href="/dashboard/transactions" className="text-xs text-[#0ea5e9] dark:text-[#0ea5e9] font-medium hover:text-[#0284c7] dark:hover:text-[#38bdf8] transition-colors">View All</Link>
              </div>
              <div className="space-y-3">
                <div className="text-center py-6">
                  <i className="fa-solid fa-receipt text-gray-300 dark:text-gray-600 text-2xl mb-2"></i>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">No recent transactions</p>
                </div>
              </div>
            </div>

            {/* Account Stats */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg dark:shadow-gray-900/50 overflow-hidden border border-white/20 dark:border-gray-700/50">
              <div className="px-4 py-2 bg-gradient-to-r from-slate-50/80 to-slate-100/50 dark:from-slate-800/50 dark:to-slate-700/50 border-b border-slate-100/50 dark:border-slate-600/70">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-slate-500 dark:bg-slate-600 rounded-lg flex items-center justify-center mr-2">
                    <i className="fa-solid fa-chart-line text-white text-xs"></i>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-50">Account Statistics</h3>
                </div>
              </div>
              <div className="p-3 space-y-2">
                <div className="group p-2 bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-gray-700/50 dark:to-gray-800/50 hover:from-[#0ea5e9]/5 hover:to-[#0ea5e9]/10 dark:hover:from-[#0ea5e9]/10 dark:hover:to-[#0ea5e9]/20 rounded-xl border border-gray-100/50 dark:border-gray-600/50 hover:border-[#0ea5e9]/20 dark:hover:border-[#0ea5e9]/30 transition-all duration-300 hover:shadow-md hover:shadow-[#0ea5e9]/10">
                  <div className="flex items-center">
                    <div className="relative">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] rounded-lg flex items-center justify-center shadow-md shadow-[#0ea5e9]/25 dark:shadow-[#0ea5e9]/50 group-hover:scale-110 transition-transform duration-300">
                        <i className="fa-solid fa-gauge-high text-white text-xs"></i>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 ml-3">
                      <div className="flex items-center justify-between mb-0.5">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Transaction Limit</p>
                        <div className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white truncate group-hover:text-[#0284c7] dark:group-hover:text-[#38bdf8] transition-colors duration-300">$20,000,000.00</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-[#0ea5e9] dark:group-hover:text-[#0ea5e9] transition-colors duration-300">Daily limit available</p>
                    </div>
                  </div>
                </div>
                <div className="group p-2 bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-gray-700/50 dark:to-gray-800/50 hover:from-yellow-50/50 hover:to-yellow-100/30 dark:hover:from-yellow-900/30 dark:hover:to-yellow-800/30 rounded-xl border border-gray-100/50 dark:border-gray-600/50 hover:border-yellow-200/50 dark:hover:border-yellow-700/50 transition-all duration-300 hover:shadow-md hover:shadow-yellow-500/10">
                  <div className="flex items-center">
                    <div className="relative">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center shadow-md shadow-yellow-500/25 dark:shadow-yellow-900/50 group-hover:scale-110 transition-transform duration-300">
                        <i className="fa-solid fa-hourglass-half text-white text-xs"></i>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 ml-3">
                      <div className="flex items-center justify-between mb-0.5">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Pending Transactions</p>
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white truncate group-hover:text-yellow-700 dark:group-hover:text-yellow-300 transition-colors duration-300">$0.00</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">Awaiting processing</p>
                    </div>
                  </div>
                </div>
                <div className="group p-2 bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-gray-700/50 dark:to-gray-800/50 hover:from-green-50/50 hover:to-green-100/30 dark:hover:from-green-900/30 dark:hover:to-green-800/30 rounded-xl border border-gray-100/50 dark:border-gray-600/50 hover:border-green-200/50 dark:hover:border-green-700/50 transition-all duration-300 hover:shadow-md hover:shadow-green-500/10">
                  <div className="flex items-center">
                    <div className="relative">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-md shadow-green-500/25 dark:shadow-green-900/50 group-hover:scale-110 transition-transform duration-300">
                        <i className="fa-solid fa-chart-pie text-white text-xs"></i>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 ml-3">
                      <div className="flex items-center justify-between mb-0.5">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Volume</p>
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white truncate group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors duration-300">$0.00</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">All-time transactions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 py-2 bg-gradient-to-r from-gray-50/50 to-white/50 dark:from-gray-700/50 dark:to-gray-800/50 border-t border-gray-100/50 dark:border-gray-600/50">
                <div className="flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
                  <i className="fa-solid fa-clock mr-1 text-[#0ea5e9] text-xs"></i>
                  <span>Updated in real-time</span>
                </div>
              </div>
            </div>

            {/* Help & Support */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg dark:shadow-gray-900/50 overflow-hidden border border-white/20 dark:border-gray-700/50 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/5 via-[#0ea5e9]/10 to-[#0ea5e9]/5 dark:from-gray-900/80 dark:via-gray-800/50 dark:to-gray-700/30"></div>
              <div className="relative p-4">
                <div className="flex items-center justify-center mb-3">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] flex items-center justify-center shadow-lg shadow-[#0ea5e9]/25 dark:shadow-[#0ea5e9]/50">
                      <i className="fa-solid fa-headset text-sm text-white"></i>
                    </div>
                    <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border border-white dark:border-gray-800 flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
                <div className="text-center mb-3">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Need Assistance?</h3>
                  <p className="text-xs text-gray-700 dark:text-gray-300 font-medium mb-1">Our expert support team is available</p>
                  <div className="flex items-center justify-center text-xs text-[#0284c7] dark:text-[#38bdf8] font-semibold">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                    <span>24/7 Live Support</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Link href="/dashboard/support" className="group inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#0284c7] hover:to-[#0369a1] text-white font-bold rounded-xl shadow-lg shadow-[#0ea5e9]/25 dark:shadow-[#0ea5e9]/50 hover:shadow-[#0ea5e9]/40 dark:hover:shadow-[#0ea5e9]/50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:ring-offset-2 dark:focus:ring-offset-gray-800 text-sm">
                    <i className="fa-solid fa-comments text-xs mr-2 group-hover:animate-bounce"></i>
                    <span>Start Live Chat</span>
                    <div className="ml-2 w-1.5 h-1.5 bg-white/80 rounded-full group-hover:bg-white transition-colors duration-300"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bank Account Modal */}
      {showBankAccount && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-slate-900/20 dark:bg-black/40 backdrop-blur-md transition-opacity" onClick={() => setShowBankAccount(false)}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            <div className="inline-block align-bottom bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl px-4 pt-4 pb-4 text-left overflow-hidden shadow-2xl border border-white/20 dark:border-gray-700/50 transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full">
              <div className="absolute top-3 right-3">
                <button onClick={() => setShowBankAccount(false)} className="w-8 h-8 bg-gray-100/80 dark:bg-gray-700/80 hover:bg-gray-200/80 dark:hover:bg-gray-600/80 rounded-xl text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition-all duration-200 flex items-center justify-center">
                  <i className="fa-solid fa-times text-xs"></i>
                </button>
              </div>
              <div className="text-center mb-4">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] mb-3 shadow-lg shadow-[#0ea5e9]/25 dark:shadow-[#0ea5e9]/50">
                  <i className="fa-solid fa-building-columns text-white text-sm"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Bank Account Details</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Global Nexus Inc Banking</p>
              </div>
              <div className="bg-gradient-to-br from-gray-50/80 to-white/80 dark:from-gray-700/80 dark:to-gray-800/80 backdrop-blur-sm p-3 rounded-xl mb-4 border border-gray-100/50 dark:border-gray-600/50">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 bg-[#0ea5e9]/10 dark:bg-[#0ea5e9]/20 rounded-lg flex items-center justify-center mr-2">
                    <i className="fa-solid fa-circle-info text-[#0ea5e9] dark:text-[#0ea5e9] text-xs"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">Account Information</h4>
                </div>
                <div className="space-y-2">
                  <div className="group p-2 hover:bg-white/60 dark:hover:bg-gray-600/60 rounded-lg transition-all duration-200 border border-transparent hover:border-[#0ea5e9]/20 dark:hover:border-[#0ea5e9]/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-2 w-2 bg-[#0ea5e9] rounded-full mr-3"></div>
                        <div>
                          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Account Name</p>
                          <p className="text-xs font-bold text-gray-900 dark:text-white mt-0.5">Pascale Dickson</p>
                        </div>
                      </div>
                      <button onClick={() => navigator.clipboard.writeText('Pascale Dickson')} className="w-7 h-7 bg-[#0ea5e9]/10 dark:bg-[#0ea5e9]/20 hover:bg-[#0ea5e9]/20 dark:hover:bg-[#0ea5e9]/30 rounded-lg text-[#0ea5e9] dark:text-[#0ea5e9] hover:text-[#0284c7] dark:hover:text-[#38bdf8] focus:outline-none transition-all duration-200 flex items-center justify-center group-hover:scale-105">
                        <i className="fa-solid fa-copy text-xs transition-colors duration-300"></i>
                      </button>
                    </div>
                  </div>
                  <div className="group p-2 hover:bg-white/60 dark:hover:bg-gray-600/60 rounded-lg transition-all duration-200 border border-transparent hover:border-[#0ea5e9]/20 dark:hover:border-[#0ea5e9]/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-2 w-2 bg-[#0ea5e9] rounded-full mr-3"></div>
                        <div>
                          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Account Number</p>
                          <p className="text-xs font-bold text-gray-900 dark:text-white mt-0.5 font-mono">58076435509</p>
                        </div>
                      </div>
                      <button onClick={() => navigator.clipboard.writeText('58076435509')} className="w-7 h-7 bg-[#0ea5e9]/10 dark:bg-[#0ea5e9]/20 hover:bg-[#0ea5e9]/20 dark:hover:bg-[#0ea5e9]/30 rounded-lg text-[#0ea5e9] dark:text-[#0ea5e9] hover:text-[#0284c7] dark:hover:text-[#38bdf8] focus:outline-none transition-all duration-200 flex items-center justify-center group-hover:scale-105">
                        <i className="fa-solid fa-copy text-xs transition-colors duration-300"></i>
                      </button>
                    </div>
                  </div>
                  <div className="group p-2 hover:bg-white/60 dark:hover:bg-gray-600/60 rounded-lg transition-all duration-200 border border-transparent hover:border-yellow-100 dark:hover:border-yellow-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-2 w-2 bg-yellow-400 rounded-full mr-3"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Bitcoin Wallet</p>
                          <p className="text-xs font-bold text-gray-900 dark:text-white mt-0.5 font-mono truncate" title="bc1qyq90k5n6al7mg69sargc6yw9v7h33egxd2lx80">bc1qyq90k5n6al7mg69sargc6yw9v7h33egxd2lx80</p>
                        </div>
                      </div>
                      <button onClick={() => navigator.clipboard.writeText('bc1qyq90k5n6al7mg69sargc6yw9v7h33egxd2lx80')} className="w-7 h-7 bg-yellow-50 dark:bg-yellow-900/50 hover:bg-yellow-100 dark:hover:bg-yellow-800/50 rounded-lg text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 focus:outline-none transition-all duration-200 flex items-center justify-center group-hover:scale-105 ml-2">
                        <i className="fa-solid fa-copy text-xs transition-colors duration-300"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start p-3 bg-gradient-to-r from-slate-50 to-slate-100/50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-xl border border-slate-200/50 dark:border-slate-600/70 mb-4">
                <div className="w-6 h-6 bg-slate-500 dark:bg-slate-600 rounded-lg flex items-center justify-center mr-2 flex-shrink-0">
                  <i className="fa-solid fa-shield-halved text-white text-xs"></i>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-slate-50 mb-0.5 text-xs">Security Notice</h5>
                  <p className="text-xs text-slate-800 dark:text-slate-100">Always contact Global Nexus Inc Support before making payments to verify account details.</p>
                </div>
              </div>
              <div className="flex justify-end">
                <button onClick={() => setShowBankAccount(false)} className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 text-gray-700 dark:text-gray-200 font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none shadow-sm text-sm">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Send Money Modal */}
      {showSendMoney && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-slate-900/20 dark:bg-black/40 backdrop-blur-md transition-opacity" onClick={() => setShowSendMoney(false)}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            <div className="inline-block align-bottom bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl px-4 pt-4 pb-4 text-left overflow-hidden shadow-2xl border border-white/20 dark:border-gray-700/50 transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full">
              <div className="absolute top-3 right-3">
                <button onClick={() => setShowSendMoney(false)} className="w-8 h-8 bg-gray-100/80 dark:bg-gray-700/80 hover:bg-gray-200/80 dark:hover:bg-gray-600/80 rounded-xl text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition-all duration-200 flex items-center justify-center">
                  <i className="fa-solid fa-times text-xs"></i>
                </button>
              </div>
              <div className="text-center mb-4">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] mb-3 shadow-lg shadow-[#0ea5e9]/25 dark:shadow-[#0ea5e9]/50 relative">
                  <i className="fa-solid fa-paper-plane text-white text-sm"></i>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Send Money</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Swift & Secure Money Transfer</p>
              </div>
              <div className="space-y-3 mb-4">
                <Link href="/dashboard/local-transfer" className="block group" onClick={() => setShowSendMoney(false)}>
                  <div className="relative p-3 bg-gradient-to-br from-gray-50/80 to-white/80 dark:from-gray-700/80 dark:to-gray-800/80 hover:from-[#0ea5e9]/5 hover:to-[#0ea5e9]/10 dark:hover:from-[#0ea5e9]/10 dark:hover:to-[#0ea5e9]/20 rounded-xl border border-gray-100/50 dark:border-gray-600/50 hover:border-[#0ea5e9]/20 dark:hover:border-[#0ea5e9]/30 transition-all duration-300 hover:shadow-md hover:shadow-[#0ea5e9]/10 transform hover:scale-[1.02]">
                    <div className="flex items-center justify-between relative">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 mr-3">
                          <div className="h-8 w-8 bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md shadow-[#0ea5e9]/25 dark:shadow-[#0ea5e9]/50">
                            <i className="fa-solid fa-users text-white text-xs"></i>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white mb-0.5 group-hover:text-[#0284c7] dark:group-hover:text-[#38bdf8] transition-colors duration-300 text-sm">Local Transfer</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Send money to local accounts instantly</p>
                          <div className="flex items-center">
                            <div className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-md text-xs font-semibold mr-1">
                              <i className="fa-solid fa-bolt mr-1"></i>Instant
                            </div>
                            <div className="px-1.5 py-0.5 bg-[#0ea5e9]/10 dark:bg-[#0ea5e9]/20 text-[#0284c7] dark:text-[#0ea5e9] rounded-md text-xs font-semibold">
                              <i className="fa-solid fa-gift mr-1"></i>0% Fee
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-7 h-7 bg-white/80 dark:bg-gray-700/80 group-hover:bg-[#0ea5e9]/10 dark:group-hover:bg-[#0ea5e9]/20 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm">
                        <i className="fa-solid fa-arrow-right text-gray-500 dark:text-gray-400 group-hover:text-[#0ea5e9] dark:group-hover:text-[#0ea5e9] transition-colors duration-300 text-xs"></i>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="/dashboard/international" className="block group" onClick={() => setShowSendMoney(false)}>
                  <div className="relative p-3 bg-gradient-to-br from-gray-50/80 to-white/80 dark:from-gray-700/80 dark:to-gray-800/80 hover:from-blue-50/80 hover:to-blue-100/50 dark:hover:from-blue-900/30 dark:hover:to-blue-800/30 rounded-xl border border-gray-100/50 dark:border-gray-600/50 hover:border-blue-200/50 dark:hover:border-blue-700/50 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/10 transform hover:scale-[1.02]">
                    <div className="flex items-center justify-between relative">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 mr-3">
                          <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md shadow-blue-500/25 dark:shadow-blue-900/50">
                            <i className="fa-solid fa-globe-americas text-white text-xs"></i>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white mb-0.5 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300 text-sm">International Wire</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Global transfers within 72 hours</p>
                          <div className="flex items-center">
                            <div className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-md text-xs font-semibold mr-1">
                              <i className="fa-solid fa-shield-check mr-1"></i>Secure
                            </div>
                            <div className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-md text-xs font-semibold">
                              <i className="fa-solid fa-clock mr-1"></i>72hrs
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-7 h-7 bg-white/80 dark:bg-gray-700/80 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm">
                        <i className="fa-solid fa-arrow-right text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-xs"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex items-start p-3 bg-gradient-to-r from-gray-50/80 to-white/80 dark:from-gray-700/80 dark:to-gray-800/80 rounded-xl border border-gray-100/50 dark:border-gray-600/50 mb-4">
                <div className="w-6 h-6 bg-gray-500 dark:bg-gray-600 rounded-lg flex items-center justify-center mr-2 flex-shrink-0">
                  <i className="fa-solid fa-info text-white text-xs"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">All transfers are protected by bank-grade encryption and require verification for your security.</p>
                </div>
              </div>
              <div className="flex justify-end">
                <button onClick={() => setShowSendMoney(false)} className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 text-gray-700 dark:text-gray-200 font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none shadow-sm text-sm">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Receive Modal */}
      {showReceiveModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-md transition-opacity" onClick={() => setShowReceiveModal(false)}></div>
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl dark:shadow-gray-900/50 transform transition-all max-w-sm w-full overflow-hidden">
              <div className="bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white px-4 py-4 relative overflow-hidden">
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <i className="fa-brands fa-bitcoin text-white text-sm"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Receive Bitcoin</h3>
                    </div>
                  </div>
                  <button onClick={() => setShowReceiveModal(false)} className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <i className="fa-solid fa-times text-white text-sm"></i>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="text-center mb-4">
                  <div className="w-32 h-32 mx-auto mb-3 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-2 rounded-2xl shadow border border-gray-200 dark:border-gray-600 relative">
                    <Image src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=bc1qyq90k5n6al7mg69sargc6yw9v7h33egxd2lx80&bgcolor=ffffff&color=1f2937" alt="BTC Address QR Code" width={120} height={120} className="w-full h-full rounded-xl" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-6 h-6 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow border border-[#0ea5e9]">
                        <i className="fa-brands fa-bitcoin text-[#0ea5e9] text-xs"></i>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Scan with your Bitcoin wallet</p>
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Bitcoin Address</label>
                  <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-3 group hover:border-[#0ea5e9]/30 dark:hover:border-[#0ea5e9]/50 transition-colors">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-mono text-gray-800 dark:text-gray-200 break-all">bc1qyq90k5n6al7mg69sargc6yw9v7h33egxd2lx80</p>
                      </div>
                      <button onClick={() => navigator.clipboard.writeText('bc1qyq90k5n6al7mg69sargc6yw9v7h33egxd2lx80')} className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] hover:bg-[#0284c7] rounded-lg flex items-center justify-center transition-colors">
                        <i className="fa-solid fa-copy text-white text-xs"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 rounded-r-xl p-3 mb-4">
                  <div className="flex items-start space-x-2">
                    <i className="fa-solid fa-exclamation-triangle text-yellow-600 dark:text-yellow-400 text-sm mt-0.5"></i>
                    <p className="text-xs text-yellow-700 dark:text-yellow-300">Only send <strong>Bitcoin (BTC)</strong> to this address.</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button onClick={() => setShowReceiveModal(false)} className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">Close</button>
                  <button onClick={() => navigator.clipboard.writeText('bc1qyq90k5n6al7mg69sargc6yw9v7h33egxd2lx80')} className="flex-1 px-4 py-2 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white text-sm font-medium rounded-xl hover:from-[#0284c7] hover:to-[#0369a1] transition-all">
                    <i className="fa-solid fa-share text-xs mr-1"></i>Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Modal */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowMobileMenu(false)}></div>
          <div className="fixed inset-x-0 bottom-0 z-50">
            <div className="bg-white dark:bg-gray-900 rounded-t-3xl shadow-2xl dark:shadow-gray-900/50 max-h-[85vh] overflow-hidden">
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              </div>
              <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] rounded-2xl flex items-center justify-center">
                      <i className="fa-solid fa-user text-white text-sm"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Pascale Dickson</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">gideonkipkirui47@gmail.com</p>
                    </div>
                  </div>
                  <button onClick={() => setShowMobileMenu(false)} className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <i className="fa-solid fa-times text-gray-600 dark:text-gray-300 text-sm"></i>
                  </button>
                </div>
              </div>
              <div className="px-6 py-4 max-h-[60vh] overflow-y-auto">
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">Main</h4>
                  <div className="space-y-1">
                    <Link href="/dashboard" className="flex items-center space-x-4 p-3 rounded-2xl bg-[#0ea5e9]/10 dark:bg-slate-700/80 border border-[#0ea5e9]/20 dark:border-slate-600 group" onClick={() => setShowMobileMenu(false)}>
                      <div className="w-10 h-10 bg-[#0ea5e9]/20 dark:bg-[#0ea5e9] rounded-xl flex items-center justify-center group-hover:bg-[#0ea5e9]/30 dark:group-hover:bg-[#0284c7] transition-colors">
                        <i className="fa-solid fa-house text-[#0ea5e9] dark:text-white"></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-[#0ea5e9] dark:text-white">Dashboard</p>
                        <p className="text-xs text-[#0284c7] dark:text-slate-300">Overview & balance</p>
                      </div>
                      <i className="fa-solid fa-chevron-right text-[#0ea5e9] dark:text-slate-400 text-xs"></i>
                    </Link>
                    <Link href="/dashboard/transactions" className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 group transition-colors" onClick={() => setShowMobileMenu(false)}>
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                        <i className="fa-solid fa-chart-line text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">Transactions</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">View transaction history</p>
                      </div>
                      <i className="fa-solid fa-chevron-right text-gray-400 dark:text-gray-500 text-xs"></i>
                    </Link>
                    <Link href="/dashboard/cards" className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 group transition-colors" onClick={() => setShowMobileMenu(false)}>
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors">
                        <i className="fa-solid fa-credit-card text-purple-600 dark:text-purple-400"></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">Cards</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Manage your cards</p>
                      </div>
                      <i className="fa-solid fa-chevron-right text-gray-400 dark:text-gray-500 text-xs"></i>
                    </Link>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">Transfers</h4>
                  <div className="space-y-1">
                    <Link href="/dashboard/local-transfer" className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 group transition-colors" onClick={() => setShowMobileMenu(false)}>
                      <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center group-hover:bg-orange-200 dark:group-hover:bg-orange-800/50 transition-colors">
                        <i className="fa-solid fa-paper-plane text-orange-600 dark:text-orange-400"></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">Local Transfer</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Send to local accounts</p>
                      </div>
                      <i className="fa-solid fa-chevron-right text-gray-400 dark:text-gray-500 text-xs"></i>
                    </Link>
                    <Link href="/dashboard/international" className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 group transition-colors" onClick={() => setShowMobileMenu(false)}>
                      <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors">
                        <i className="fa-solid fa-globe text-indigo-600 dark:text-indigo-400"></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">International</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Global transfers</p>
                      </div>
                      <i className="fa-solid fa-chevron-right text-gray-400 dark:text-gray-500 text-xs"></i>
                    </Link>
                    <Link href="/dashboard/deposits" className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 group transition-colors" onClick={() => setShowMobileMenu(false)}>
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                        <i className="fa-solid fa-plus text-green-600 dark:text-green-400"></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">Deposit</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Add funds to account</p>
                      </div>
                      <i className="fa-solid fa-chevron-right text-gray-400 dark:text-gray-500 text-xs"></i>
                    </Link>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">Services</h4>
                  <div className="space-y-1">
                    <Link href="/dashboard/loans" className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 group transition-colors" onClick={() => setShowMobileMenu(false)}>
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                        <i className="fa-solid fa-landmark text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">Loans</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Apply for loans</p>
                      </div>
                      <i className="fa-solid fa-chevron-right text-gray-400 dark:text-gray-500 text-xs"></i>
                    </Link>
                    <Link href="/dashboard/tax-refund" className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 group transition-colors" onClick={() => setShowMobileMenu(false)}>
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                        <i className="fa-solid fa-receipt text-green-600 dark:text-green-400"></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">Tax Refund</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">IRS refund services</p>
                      </div>
                      <i className="fa-solid fa-chevron-right text-gray-400 dark:text-gray-500 text-xs"></i>
                    </Link>
                    <Link href="/dashboard/grants" className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 group transition-colors" onClick={() => setShowMobileMenu(false)}>
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors">
                        <i className="fa-solid fa-hand-holding-dollar text-purple-600 dark:text-purple-400"></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">Grants</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Apply for grants</p>
                      </div>
                      <i className="fa-solid fa-chevron-right text-gray-400 dark:text-gray-500 text-xs"></i>
                    </Link>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">Account</h4>
                  <div className="space-y-1">
                    <button onClick={() => { setShowMobileMenu(false); setShowBankAccount(true); }} className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 group transition-colors w-full text-left">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                        <i className="fa-solid fa-building-columns text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">Bank Details</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">View account info</p>
                      </div>
                      <i className="fa-solid fa-chevron-right text-gray-400 dark:text-gray-500 text-xs"></i>
                    </button>
                    <Link href="/dashboard/settings" className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 group transition-colors" onClick={() => setShowMobileMenu(false)}>
                      <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors">
                        <i className="fa-solid fa-gear text-teal-600 dark:text-teal-400"></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">Settings</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Manage your account</p>
                      </div>
                      <i className="fa-solid fa-chevron-right text-gray-400 dark:text-gray-500 text-xs"></i>
                    </Link>
                    <Link href="/dashboard/support" className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 group transition-colors" onClick={() => setShowMobileMenu(false)}>
                      <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center group-hover:bg-pink-200 dark:group-hover:bg-pink-800/50 transition-colors">
                        <i className="fa-solid fa-headset text-pink-600 dark:text-pink-400"></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">Support</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Get assistance</p>
                      </div>
                      <i className="fa-solid fa-chevron-right text-gray-400 dark:text-gray-500 text-xs"></i>
                    </Link>
                    <Link href="/login" className="w-full text-left flex items-center space-x-4 p-3 rounded-2xl hover:bg-red-50 dark:hover:bg-red-900/20 group transition-colors">
                      <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-800/50 transition-colors">
                        <i className="fa-solid fa-right-from-bracket text-red-600 dark:text-red-400"></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-red-900 dark:text-red-400">Sign Out</p>
                        <p className="text-xs text-red-600 dark:text-red-500">Logout from account</p>
                      </div>
                      <i className="fa-solid fa-chevron-right text-red-400 dark:text-red-500 text-xs"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-[#0ea5e9]/10 dark:bg-[#0ea5e9]/20 rounded-full flex items-center justify-center mx-auto mb-1">
                      <i className="fa-solid fa-shield-alt text-[#0ea5e9] dark:text-[#0ea5e9] text-xs"></i>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 font-medium">Secure</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-1">
                      <i className="fa-solid fa-clock text-green-600 dark:text-green-400 text-xs"></i>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 font-medium">24/7</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-1">
                      <i className="fa-solid fa-phone text-blue-600 dark:text-blue-400 text-xs"></i>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 font-medium">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
