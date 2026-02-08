'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GrantsPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="p-4 lg:p-6">
      {/* Page Header */}
      <h1 className="text-2xl font-bold text-white mb-6">Grant Applications</h1>

      {/* Select Application Type */}
      <div className="bg-[#1e293b] rounded-xl p-6">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-white mb-2">Select Application Type</h2>
          <p className="text-gray-400">
            Please select the type of application you would like to submit. Different documentation is required for individual and company applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Apply as Individual */}
          <div 
            className={`bg-[#0f172a] rounded-xl p-6 border-2 transition-colors cursor-pointer ${
              selectedType === 'individual' ? 'border-[#0ea5e9]' : 'border-transparent hover:border-gray-600'
            }`}
            onClick={() => setSelectedType('individual')}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0ea5e9] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-user text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Apply as Individual</h3>
              <p className="text-gray-400 text-sm mb-6">
                For individual applicants seeking funding for programs, equipment, research or community outreach.
              </p>
              <button className="w-full py-3 bg-[#0ea5e9] text-white rounded-xl font-semibold hover:bg-[#0284c7] transition-colors">
                Continue
              </button>
            </div>
          </div>

          {/* Apply as Company */}
          <div 
            className={`bg-[#0f172a] rounded-xl p-6 border-2 transition-colors cursor-pointer ${
              selectedType === 'company' ? 'border-[#0ea5e9]' : 'border-transparent hover:border-gray-600'
            }`}
            onClick={() => setSelectedType('company')}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e293b] rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gray-600">
                <i className="fa-solid fa-building text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Apply as Company</h3>
              <p className="text-gray-400 text-sm mb-6">
                For registered organizations with an EIN, established history and defined mission.
              </p>
              <button className="w-full py-3 bg-[#1e293b] text-white rounded-xl font-semibold border border-gray-600 hover:bg-[#334155] transition-colors">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
