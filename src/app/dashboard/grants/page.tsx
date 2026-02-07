'use client';

import Link from 'next/link';

export default function GrantsPage() {
  const grants = [
    {
      id: 1,
      title: 'Small Business Grant',
      amount: '$10,000',
      deadline: 'Mar 31, 2024',
      status: 'Open',
      color: 'bg-green-500',
    },
    {
      id: 2,
      title: 'Education Grant',
      amount: '$5,000',
      deadline: 'Apr 15, 2024',
      status: 'Open',
      color: 'bg-blue-500',
    },
    {
      id: 3,
      title: 'Community Development Grant',
      amount: '$25,000',
      deadline: 'May 1, 2024',
      status: 'Open',
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="p-4 lg:p-6">
      {/* Mobile Header */}
      <div className="lg:hidden mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <Link href="/dashboard" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <i className="fa-solid fa-arrow-left text-gray-600 dark:text-gray-300"></i>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Grants</h1>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Available Grants</h1>
        <p className="text-gray-500 dark:text-gray-400">Explore grant opportunities and apply</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Banner */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 mb-6 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Grant Programs</h3>
              <p className="text-white/80">Access funding opportunities for personal and business growth</p>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <i className="fa-solid fa-hand-holding-dollar text-white text-3xl"></i>
            </div>
          </div>
        </div>

        {/* Grant List */}
        <div className="space-y-4 mb-6">
          {grants.map((grant) => (
            <div key={grant.id} className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-[#0ea5e9] transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${grant.color} rounded-2xl flex items-center justify-center`}>
                    <i className="fa-solid fa-hand-holding-dollar text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{grant.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Deadline: {grant.deadline}</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-semibold">
                  {grant.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Grant Amount</p>
                  <p className="text-2xl font-bold text-[#0ea5e9]">{grant.amount}</p>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white rounded-xl font-semibold shadow-lg shadow-sky-500/25 hover:shadow-xl transition-all">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* My Applications */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">My Applications</h3>
          
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <i className="fa-solid fa-folder-open text-gray-400 dark:text-gray-500 text-2xl"></i>
            </div>
            <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">No Applications Yet</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Your grant applications will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
