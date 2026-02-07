'use client';

import Link from 'next/link';

interface MobileFixedButtonsProps {
  position: 'top' | 'bottom';
}

export default function MobileFixedButtons({ position }: MobileFixedButtonsProps) {
  if (position === 'top') return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden">
      <Link 
        href="/login" 
        className="flex-1 px-6 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl text-primary-600 dark:text-primary-400 font-semibold shadow-lg border border-primary-200 dark:border-primary-700 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors text-center"
      >
        <i className="fa-solid fa-sign-in-alt mr-2"></i>
        Login
      </Link>
      <Link 
        href="/register" 
        className="flex-1 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-lg transition-colors text-center"
      >
        <i className="fa-solid fa-user-plus mr-2"></i>
        Register
      </Link>
    </div>
  );
}
