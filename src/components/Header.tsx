'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className="fixed w-full top-0 z-50">
      <nav className="relative bg-gradient-to-r from-white via-primary-50 to-white dark:from-gray-900 dark:via-primary-900 dark:to-gray-900 backdrop-blur-xl border-b border-primary-200/50 dark:border-primary-700/30 shadow-lg shadow-primary-500/5">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -top-5 right-1/4 w-16 h-16 bg-teal-200/20 dark:bg-teal-800/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with glow effect */}
            <div className="flex items-center group">
              <Link href="/" className="relative">
                <div className="absolute inset-0 bg-primary-400/20 rounded-xl blur-lg group-hover:bg-primary-400/30 transition-all duration-300"></div>
                <Image
                  src="/images/photos/lwjkWDHt3aKtY1uBWVMpmJ3FxeVfe3AqrYZy2G4k.png"
                  alt="Global Nexus Inc"
                  width={160}
                  height={40}
                  className="relative h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation with modern styling */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link href="/" className="relative px-4 py-2 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400 group">
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-primary-50 dark:bg-primary-900/30 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              </Link>
              <Link href="/about" className="relative px-4 py-2 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400 group">
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-primary-50 dark:bg-primary-900/30 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              </Link>

              {/* Services Dropdown */}
              <div className="relative group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className="relative px-4 py-2 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400 flex items-center">
                  <span className="relative z-10">Services</span>
                  <i className="fa-solid fa-chevron-down ml-1 text-xs group-hover:rotate-180 transition-transform duration-300"></i>
                  <div className="absolute inset-0 bg-primary-50 dark:bg-primary-900/30 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </button>
                <div className={`absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 z-50 ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                  <div className="p-2">
                    <Link href="/services" className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-xl transition-all duration-300">
                      <i className="fa-solid fa-user mr-3 text-primary-500"></i>
                      Personal Banking
                    </Link>
                    <Link href="/services" className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-xl transition-all duration-300">
                      <i className="fa-solid fa-briefcase mr-3 text-blue-500"></i>
                      Business Banking
                    </Link>
                    <Link href="/services" className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-xl transition-all duration-300">
                      <i className="fa-solid fa-handshake mr-3 text-green-500"></i>
                      Loans &amp; Credit
                    </Link>
                    <Link href="/services" className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-xl transition-all duration-300">
                      <i className="fa-solid fa-credit-card mr-3 text-purple-500"></i>
                      Cards
                    </Link>
                    <Link href="/grants" className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-xl transition-all duration-300">
                      <i className="fa-solid fa-hand-holding-dollar mr-3 text-orange-500"></i>
                      Grants &amp; Aid
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="relative px-4 py-2 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400 group">
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-primary-50 dark:bg-primary-900/30 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              </Link>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Dark Mode Toggle with animation */}
              <button
                onClick={toggleDarkMode}
                className="relative p-3 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-600 dark:text-gray-300 hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
              >
                {darkMode ? (
                  <i className="fa-solid fa-sun text-lg group-hover:rotate-180 transition-transform duration-500"></i>
                ) : (
                  <i className="fa-solid fa-moon text-lg group-hover:rotate-12 transition-transform duration-300"></i>
                )}
              </button>

              {/* Login Button */}
              <Link href="/login" className="relative px-4 py-2.5 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-all duration-300 group">
                <span className="relative z-10">Login</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </Link>

              {/* Open Account Button */}
              <Link href="/register" className="relative px-6 py-2.5 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 hover:from-primary-700 hover:via-primary-600 hover:to-primary-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/40 hover:-translate-y-0.5 group overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <i className="fa-solid fa-sparkles mr-2 group-hover:animate-spin"></i>
                  Open Account
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative p-3 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-600 dark:text-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              {!mobileMenuOpen ? (
                <i className="fa-solid fa-bars text-lg transition-transform duration-300"></i>
              ) : (
                <i className="fa-solid fa-times text-lg transition-transform duration-300"></i>
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-white via-primary-50 to-white dark:from-gray-900 dark:via-primary-900 dark:to-gray-900 backdrop-blur-xl border-t border-primary-200/70 dark:border-primary-700/50 shadow-2xl shadow-primary-500/20">
            {/* Mobile menu background pattern */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-teal-200/20 dark:bg-teal-800/20 rounded-full blur-xl"></div>
            </div>

            <div className="relative px-6 py-6 space-y-2">
              <Link href="/" className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-300 rounded-2xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30 hover:shadow-lg hover:translate-x-2 group">
                <i className="fa-solid fa-home mr-4 text-primary-500 group-hover:scale-110 transition-transform duration-300"></i>
                <span>Home</span>
                <i className="fa-solid fa-chevron-right ml-auto text-xs opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
              </Link>
              <Link href="/about" className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-300 rounded-2xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30 hover:shadow-lg hover:translate-x-2 group">
                <i className="fa-solid fa-info-circle mr-4 text-teal-500 group-hover:scale-110 transition-transform duration-300"></i>
                <span>About</span>
                <i className="fa-solid fa-chevron-right ml-auto text-xs opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
              </Link>

              {/* Services Submenu */}
              <div className="space-y-2">
                <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center w-full px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-300 rounded-2xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30 hover:shadow-lg hover:translate-x-2 group">
                  <i className="fa-solid fa-cogs mr-4 text-purple-500 group-hover:scale-110 transition-transform duration-300"></i>
                  <span>Services</span>
                  <i className={`fa-solid fa-chevron-down ml-auto text-xs transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {servicesOpen && (
                  <div className="ml-8 space-y-1">
                    <Link href="/services" className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30">
                      <i className="fa-solid fa-user mr-3 text-primary-400"></i>
                      Personal Banking
                    </Link>
                    <Link href="/services" className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30">
                      <i className="fa-solid fa-briefcase mr-3 text-blue-400"></i>
                      Business Banking
                    </Link>
                    <Link href="/services" className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30">
                      <i className="fa-solid fa-handshake mr-3 text-green-400"></i>
                      Loans &amp; Credit
                    </Link>
                    <Link href="/services" className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30">
                      <i className="fa-solid fa-credit-card mr-3 text-purple-400"></i>
                      Cards
                    </Link>
                    <Link href="/grants" className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30">
                      <i className="fa-solid fa-hand-holding-dollar mr-3 text-orange-400"></i>
                      Grants &amp; Aid
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/contact" className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-300 rounded-2xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30 hover:shadow-lg hover:translate-x-2 group">
                <i className="fa-solid fa-envelope mr-4 text-orange-500 group-hover:scale-110 transition-transform duration-300"></i>
                <span>Contact</span>
                <i className="fa-solid fa-chevron-right ml-auto text-xs opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
              </Link>

              <Link href="#" className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-300 rounded-2xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30 hover:shadow-lg hover:translate-x-2 group">
                <i className="fa-solid fa-mobile-alt mr-4 text-indigo-500 group-hover:scale-110 transition-transform duration-300"></i>
                <span>Mobile App</span>
                <i className="fa-solid fa-chevron-right ml-auto text-xs opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
              </Link>

              {/* Mobile Dark Mode Toggle */}
              <div className="pt-4 mt-4 border-t border-primary-700/50">
                <button onClick={toggleDarkMode} className="flex items-center w-full px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-300 rounded-2xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30 hover:shadow-lg hover:translate-x-2 group">
                  <div className="flex items-center justify-center w-8 h-8 mr-4 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-blue-500 dark:to-purple-600 group-hover:scale-110 transition-transform duration-300">
                    {darkMode ? (
                      <i className="fa-solid fa-sun text-white text-sm group-hover:rotate-180 transition-transform duration-500"></i>
                    ) : (
                      <i className="fa-solid fa-moon text-white text-sm group-hover:rotate-12 transition-transform duration-300"></i>
                    )}
                  </div>
                  <span>{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
                  <i className="fa-solid fa-chevron-right ml-auto text-xs opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
