'use client';

import { useState } from 'react';

export default function CardsPage() {
  const [showApplyModal, setShowApplyModal] = useState(false);

  return (
    <div className="p-4 lg:p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[#0ea5e9] rounded-xl flex items-center justify-center">
            <i className="fa-solid fa-credit-card text-white text-xl"></i>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Virtual Cards</h1>
            <p className="text-gray-400 text-sm">Secure virtual cards for online payments and subscriptions</p>
          </div>
        </div>
        <button 
          onClick={() => setShowApplyModal(true)}
          className="px-4 py-2 bg-[#0ea5e9] text-white rounded-lg font-medium hover:bg-[#0284c7] transition-colors flex items-center space-x-2"
        >
          <i className="fa-solid fa-plus"></i>
          <span>Apply for Card</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#1e293b] rounded-xl p-4 flex items-center space-x-4">
          <div className="w-12 h-12 bg-[#0ea5e9] rounded-xl flex items-center justify-center">
            <i className="fa-solid fa-credit-card text-white"></i>
          </div>
          <div>
            <p className="text-gray-400 text-sm">ACTIVE CARDS</p>
            <p className="text-2xl font-bold text-white">0</p>
          </div>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-4 flex items-center space-x-4">
          <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
            <i className="fa-solid fa-hourglass-half text-white"></i>
          </div>
          <div>
            <p className="text-gray-400 text-sm">PENDING APPLICATIONS</p>
            <p className="text-2xl font-bold text-white">0</p>
          </div>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-4 flex items-center space-x-4">
          <div className="w-12 h-12 bg-[#0ea5e9] rounded-xl flex items-center justify-center">
            <i className="fa-solid fa-credit-card text-white"></i>
          </div>
          <div>
            <p className="text-gray-400 text-sm">TOTAL BALANCE</p>
            <p className="text-2xl font-bold text-white">$0.00</p>
          </div>
        </div>
      </div>

      {/* Virtual Cards Made Easy Section */}
      <div className="bg-[#1e293b] rounded-xl p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white mb-2">Virtual Cards Made Easy</h2>
            <p className="text-gray-400 mb-6">
              Create virtual cards for secure online payments, subscription management, and more. Enhanced security and spending control.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#0ea5e9]/20 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-shield-halved text-[#0ea5e9]"></i>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Secure</p>
                  <p className="text-gray-400 text-xs">Protected payments</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#0ea5e9]/20 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-globe text-[#0ea5e9]"></i>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Global</p>
                  <p className="text-gray-400 text-xs">Worldwide acceptance</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#0ea5e9]/20 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-sliders text-[#0ea5e9]"></i>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Control</p>
                  <p className="text-gray-400 text-xs">Spending limits</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#0ea5e9]/20 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-bolt text-[#0ea5e9]"></i>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Instant</p>
                  <p className="text-gray-400 text-xs">Quick issuance</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card Preview */}
          <div className="mt-6 lg:mt-0 lg:ml-8">
            <div className="w-56 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <span className="text-white text-sm font-medium">Virtual Card</span>
                <i className="fa-solid fa-wifi text-gray-400"></i>
              </div>
              <p className="text-gray-400 text-lg tracking-widest mb-4">•••• •••• •••• 1234</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-xs">VALID THRU</p>
                  <p className="text-white text-sm">12/25</p>
                </div>
                <i className="fa-solid fa-credit-card text-gray-400 text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Your Cards Section */}
      <div className="bg-[#1e293b] rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Your Cards</h2>
          <button className="text-[#0ea5e9] hover:text-[#0284c7] font-medium flex items-center space-x-1">
            <i className="fa-solid fa-plus text-sm"></i>
            <span>New Card</span>
          </button>
        </div>
        
        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-16 h-16 bg-[#0ea5e9] rounded-2xl flex items-center justify-center mb-4">
            <i className="fa-solid fa-credit-card text-white text-2xl"></i>
          </div>
          <p className="text-gray-400 text-center">No cards yet. Apply for your first virtual card to get started.</p>
        </div>
      </div>

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1e293b] rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Apply for Virtual Card</h3>
              <button 
                onClick={() => setShowApplyModal(false)}
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Card Name</label>
                <input 
                  type="text" 
                  placeholder="e.g., Shopping Card"
                  className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0ea5e9]"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Initial Funding Amount</label>
                <input 
                  type="text" 
                  placeholder="$0.00"
                  className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0ea5e9]"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Spending Limit</label>
                <select className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#0ea5e9]">
                  <option>No Limit</option>
                  <option>$500/month</option>
                  <option>$1,000/month</option>
                  <option>$5,000/month</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-3">
              <button 
                onClick={() => setShowApplyModal(false)}
                className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-xl font-medium hover:bg-gray-600"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-3 bg-[#0ea5e9] text-white rounded-xl font-medium hover:bg-[#0284c7]">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
