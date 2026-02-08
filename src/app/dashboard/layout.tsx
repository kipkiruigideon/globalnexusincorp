'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import PageLoading from '@/components/PageLoading';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [pageKey, setPageKey] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Trigger loading animation on route change
  useEffect(() => {
    setPageKey(prev => prev + 1);
  }, [pathname]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const isActiveRoute = (route: string) => pathname === route;

  const mainLinks = [
    { href: '/dashboard', icon: 'fa-house', label: 'Dashboard' },
    { href: '/dashboard/transactions', icon: 'fa-chart-line', label: 'Transactions' },
    { href: '/dashboard/cards', icon: 'fa-credit-card', label: 'Cards' },
  ];

  const transferLinks = [
    { href: '/dashboard/local-transfer', icon: 'fa-paper-plane', label: 'Local Transfer' },
    { href: '/dashboard/international', icon: 'fa-globe', label: 'International' },
    { href: '/dashboard/deposits', icon: 'fa-plus', label: 'Deposit' },
    { href: '/dashboard/swap', icon: 'fa-arrows-rotate', label: 'Currency Swap' },
  ];

  const serviceLinks = [
    { href: '/dashboard/loans', icon: 'fa-landmark', label: 'Loans' },
    { href: '/dashboard/tax-refund', icon: 'fa-receipt', label: 'Tax Refund' },
    { href: '/dashboard/grants', icon: 'fa-hand-holding-dollar', label: 'Grants' },
  ];

  const accountLinks = [
    { href: '/dashboard/settings', icon: 'fa-gear', label: 'Settings' },
    { href: '/dashboard/support', icon: 'fa-headset', label: 'Support' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Page Loading Animation */}
      <PageLoading key={pageKey} />
      
      <div className="flex h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden lg:flex w-72 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-700/50 flex-col shadow-xl">
          {/* Logo Section */}
          <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
            <Link href="/dashboard" className="flex items-center space-x-3">
              <Image 
                src="/images/photos/lwjkWDHt3aKtY1uBWVMpmJ3FxeVfe3AqrYZy2G4k.png" 
                alt="Global Nexus Inc" 
                width={180}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Language Selector Placeholder */}
          <div className="px-6 py-3 text-center text-xs text-gray-500 dark:text-gray-400">
            <select className="bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5 text-sm">
              <option>Select Language</option>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto custom-scrollbar">
            {/* Main Section */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4 px-4">Main</h3>
              <div className="space-y-2">
                {mainLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group flex items-center px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-200 ${
                      isActiveRoute(link.href)
                        ? 'bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white shadow-lg shadow-sky-500/25'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-sky-50 dark:hover:bg-gray-800 hover:text-[#0ea5e9] dark:hover:text-[#0ea5e9]'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-4 transition-colors ${
                      isActiveRoute(link.href) ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-800 group-hover:bg-sky-100 dark:group-hover:bg-gray-700'
                    }`}>
                      <i className={`fa-solid ${link.icon} ${isActiveRoute(link.href) ? 'text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-[#0ea5e9]'} transition-colors`}></i>
                    </div>
                    <span className="font-semibold">{link.label}</span>
                    {isActiveRoute(link.href) && (
                      <div className="ml-auto w-2 h-2 bg-white dark:bg-gray-300 rounded-full"></div>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Transfers Section */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4 px-4">Transfers</h3>
              <div className="space-y-2">
                {transferLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group flex items-center px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-200 ${
                      isActiveRoute(link.href)
                        ? 'bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white shadow-lg shadow-sky-500/25'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-sky-50 dark:hover:bg-gray-800 hover:text-[#0ea5e9] dark:hover:text-[#0ea5e9]'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-4 transition-colors ${
                      isActiveRoute(link.href) ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-800 group-hover:bg-sky-100 dark:group-hover:bg-gray-700'
                    }`}>
                      <i className={`fa-solid ${link.icon} ${isActiveRoute(link.href) ? 'text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-[#0ea5e9]'} transition-colors`}></i>
                    </div>
                    <span className="font-semibold">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Section */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4 px-4">Services</h3>
              <div className="space-y-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group flex items-center px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-200 ${
                      isActiveRoute(link.href)
                        ? 'bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white shadow-lg shadow-sky-500/25'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-sky-50 dark:hover:bg-gray-800 hover:text-[#0ea5e9] dark:hover:text-[#0ea5e9]'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-4 transition-colors ${
                      isActiveRoute(link.href) ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-800 group-hover:bg-sky-100 dark:group-hover:bg-gray-700'
                    }`}>
                      <i className={`fa-solid ${link.icon} ${isActiveRoute(link.href) ? 'text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-[#0ea5e9]'} transition-colors`}></i>
                    </div>
                    <span className="font-semibold">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Account Section */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4 px-4">Account</h3>
              <div className="space-y-2">
                {accountLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group flex items-center px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-200 ${
                      isActiveRoute(link.href)
                        ? 'bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white shadow-lg shadow-sky-500/25'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-sky-50 dark:hover:bg-gray-800 hover:text-[#0ea5e9] dark:hover:text-[#0ea5e9]'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-4 transition-colors ${
                      isActiveRoute(link.href) ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-800 group-hover:bg-sky-100 dark:group-hover:bg-gray-700'
                    }`}>
                      <i className={`fa-solid ${link.icon} ${isActiveRoute(link.href) ? 'text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-[#0ea5e9]'} transition-colors`}></i>
                    </div>
                    <span className="font-semibold">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* User Profile Section */}
          <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200/50 dark:border-gray-700/50">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-[#0ea5e9] flex items-center justify-center text-white font-semibold">
                  P
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-600"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900 dark:text-white truncate">Pascale</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">user@example.com</p>
              </div>
              <button className="w-8 h-8 rounded-xl bg-red-50 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/50 text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors flex items-center justify-center">
                <i className="fa-solid fa-right-from-bracket text-sm"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Desktop Header */}
          <header className="hidden lg:flex bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 px-6 py-4 shadow-sm relative z-50">
            <div className="flex items-center justify-between w-full">
              {/* Page Title */}
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Welcome back, Pascale</p>
              </div>

              {/* Header Actions */}
              <div className="flex items-center space-x-4">
                {/* Dark Mode Toggle */}
                <button 
                  onClick={toggleDarkMode}
                  className="w-11 h-11 bg-gray-50 hover:bg-sky-50 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-2xl flex items-center justify-center transition-colors group"
                >
                  {darkMode ? (
                    <i className="fa-solid fa-sun text-yellow-500 group-hover:text-yellow-400 transition-colors"></i>
                  ) : (
                    <i className="fa-solid fa-moon text-gray-600 group-hover:text-[#0ea5e9] dark:text-gray-300 transition-colors"></i>
                  )}
                </button>

                {/* Notifications */}
                <div className="relative">
                  <button 
                    onClick={() => setNotificationOpen(!notificationOpen)}
                    className="relative w-11 h-11 bg-gray-50 hover:bg-sky-50 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-2xl flex items-center justify-center transition-colors group"
                  >
                    <i className="fa-solid fa-bell text-gray-600 group-hover:text-[#0ea5e9] dark:text-gray-300 dark:group-hover:text-[#0ea5e9] transition-colors"></i>
                  </button>

                  {notificationOpen && (
                    <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 z-[99999]">
                      <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Notifications</h3>
                      </div>
                      <div className="p-6 text-center">
                        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3">
                          <i className="fa-solid fa-bell-slash text-gray-400 dark:text-gray-500 text-xl"></i>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">No notifications yet</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">We&apos;ll notify you when something happens</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* User Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center space-x-3 p-2 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-full bg-[#0ea5e9] flex items-center justify-center text-white font-semibold border-2 border-sky-100">
                      P
                    </div>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Pascale</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">user@example.com</p>
                    </div>
                    <i className="fa-solid fa-chevron-down text-gray-400 dark:text-gray-500 text-sm group-hover:text-[#0ea5e9] dark:group-hover:text-[#0ea5e9] transition-colors"></i>
                  </button>

                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 z-[99998]">
                      <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                        <div className="flex items-center space-x-3">
                          <div className="h-10 w-10 rounded-full bg-[#0ea5e9] flex items-center justify-center text-white font-semibold border-2 border-sky-100">
                            P
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900 dark:text-white">Pascale</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">user@example.com</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2">
                        <Link href="/dashboard/settings" className="flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                          <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-sky-100 dark:group-hover:bg-sky-900/30 transition-colors">
                            <i className="fa-solid fa-user text-gray-500 dark:text-gray-400 group-hover:text-[#0ea5e9] dark:group-hover:text-[#0ea5e9] transition-colors text-sm"></i>
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">Profile Settings</span>
                        </Link>
                        <Link href="/dashboard/support" className="flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                          <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-sky-100 dark:group-hover:bg-sky-900/30 transition-colors">
                            <i className="fa-solid fa-headset text-gray-500 dark:text-gray-400 group-hover:text-[#0ea5e9] dark:group-hover:text-[#0ea5e9] transition-colors text-sm"></i>
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">Help & Support</span>
                        </Link>
                        <div className="border-t border-gray-100 dark:border-gray-700 my-2"></div>
                        <Link href="/login" className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors group">
                          <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                            <i className="fa-solid fa-right-from-bracket text-red-500 dark:text-red-400 text-sm"></i>
                          </div>
                          <span className="text-sm font-medium text-red-600 dark:text-red-400">Sign Out</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 bg-gray-50 dark:bg-gray-900 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
