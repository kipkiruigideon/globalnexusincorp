'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Initialize dark mode from localStorage or system preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="fixed w-full top-0 z-50">
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
        {/* Animated background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
          <div className="absolute top-0 left-1/4 w-1 h-1 bg-primary/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary/20 rounded-full animate-pulse delay-75"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary/20 rounded-full animate-pulse delay-150"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                    <i className="fas fa-landmark text-white text-xl"></i>
                  </div>
                </div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Global Nexus</span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Federal Credit Union</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link href="/" className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors group">
                <span className="relative z-10">Home</span>
                <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-colors"></span>
              </Link>
              <Link href="/about" className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors group">
                <span className="relative z-10">About</span>
                <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-colors"></span>
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors group flex items-center">
                  <span className="relative z-10">Services</span>
                  <i className={`fas fa-chevron-down ml-2 text-xs transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}></i>
                  <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-colors"></span>
                </button>
                
                {servicesOpen && (
                  <div className="absolute top-full left-0 w-64 pt-2">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                      <Link href="/services" className="block px-4 py-3 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <i className="fas fa-piggy-bank text-primary"></i>
                          </div>
                          <div>
                            <span className="block text-gray-800 dark:text-white font-medium">Savings</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">High-yield savings accounts</span>
                          </div>
                        </div>
                      </Link>
                      <Link href="/services" className="block px-4 py-3 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <i className="fas fa-credit-card text-primary"></i>
                          </div>
                          <div>
                            <span className="block text-gray-800 dark:text-white font-medium">Credit Cards</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">Rewards & cashback cards</span>
                          </div>
                        </div>
                      </Link>
                      <Link href="/services" className="block px-4 py-3 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <i className="fas fa-home text-primary"></i>
                          </div>
                          <div>
                            <span className="block text-gray-800 dark:text-white font-medium">Mortgages</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">Home loans & refinancing</span>
                          </div>
                        </div>
                      </Link>
                      <Link href="/services" className="block px-4 py-3 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <i className="fas fa-car text-primary"></i>
                          </div>
                          <div>
                            <span className="block text-gray-800 dark:text-white font-medium">Auto Loans</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">New & used vehicle financing</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/grants" className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors group">
                <span className="relative z-10">Grants</span>
                <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-colors"></span>
              </Link>
              <Link href="/contact" className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors group">
                <span className="relative z-10">Contact</span>
                <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-colors"></span>
              </Link>
            </div>

            {/* Right side items */}
            <div className="flex items-center space-x-4">
              {/* Dark mode toggle */}
              <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                {darkMode ? (
                  <i className="fas fa-sun text-yellow-500"></i>
                ) : (
                  <i className="fas fa-moon text-gray-600"></i>
                )}
              </button>

              {/* Auth buttons - Desktop */}
              <div className="hidden lg:flex items-center space-x-3">
                <Link href="/login" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Login
                </Link>
                <Link href="/register" className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative block px-6 py-2.5 bg-gradient-to-r from-primary to-primary-dark rounded-lg text-white font-medium transition-transform group-hover:scale-105">
                    Get Started
                  </span>
                </Link>
              </div>

              {/* Mobile menu button */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                {isMenuOpen ? (
                  <i className="fas fa-times text-gray-600 dark:text-gray-300 text-xl"></i>
                ) : (
                  <i className="fas fa-bars text-gray-600 dark:text-gray-300 text-xl"></i>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100 dark:border-gray-800">
              <div className="flex flex-col space-y-2">
                <Link href="/" className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-primary/5 rounded-lg transition-colors">
                  Home
                </Link>
                <Link href="/about" className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-primary/5 rounded-lg transition-colors">
                  About
                </Link>
                
                {/* Mobile Services Submenu */}
                <div>
                  <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="w-full px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-primary/5 rounded-lg transition-colors flex items-center justify-between">
                    <span>Services</span>
                    <i className={`fas fa-chevron-down text-xs transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 space-y-1 mt-1">
                      <Link href="/services" className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                        <i className="fas fa-piggy-bank mr-2"></i> Savings
                      </Link>
                      <Link href="/services" className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                        <i className="fas fa-credit-card mr-2"></i> Credit Cards
                      </Link>
                      <Link href="/services" className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                        <i className="fas fa-home mr-2"></i> Mortgages
                      </Link>
                      <Link href="/services" className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                        <i className="fas fa-car mr-2"></i> Auto Loans
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/grants" className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-primary/5 rounded-lg transition-colors">
                  Grants
                </Link>
                <Link href="/contact" className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-primary/5 rounded-lg transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
