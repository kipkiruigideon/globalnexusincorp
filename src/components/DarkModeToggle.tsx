'use client';

import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true);

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleDarkMode}
        className="dark-mode-toggle relative p-3 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-600 dark:text-gray-300 hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
        title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {darkMode ? (
          <i className="fa-solid fa-sun text-lg group-hover:rotate-180 transition-transform duration-500"></i>
        ) : (
          <i className="fa-solid fa-moon text-lg group-hover:rotate-12 transition-transform duration-300"></i>
        )}
      </button>
    </div>
  );
}
