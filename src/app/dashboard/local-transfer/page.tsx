'use client';

import { useState } from 'react';

export default function LocalTransferPage() {
  const [showNewBeneficiaryModal, setShowNewBeneficiaryModal] = useState(false);

  return (
    <div className="p-4 lg:p-6">
      {/* Page Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-[#0ea5e9] rounded-xl flex items-center justify-center">
          <i className="fa-solid fa-paper-plane text-white text-xl"></i>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Local Transfer</h1>
          <p className="text-gray-400 text-sm">Send money to any local bank account securely and instantly</p>
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] rounded-xl p-6 mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-24 h-24 bg-white/10 rounded-full translate-y-1/2"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-paper-plane text-white"></i>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Local Transfer</h2>
                <p className="text-white/80 text-sm">Send money instantly</p>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-white/80">
              <i className="fa-solid fa-shield-halved"></i>
              <span className="text-sm">Secure</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center space-x-1 text-white/70 text-xs mb-1">
                <i className="fa-regular fa-clock"></i>
                <span>Time</span>
              </div>
              <p className="text-white font-semibold">Instant</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center space-x-1 text-white/70 text-xs mb-1">
                <i className="fa-solid fa-percent"></i>
                <span>Fee</span>
              </div>
              <p className="text-white font-semibold">Free</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center space-x-1 text-white/70 text-xs mb-1">
                <i className="fa-solid fa-building-columns"></i>
                <span>Banks</span>
              </div>
              <p className="text-white font-semibold">All Local</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Transfer Section */}
      <div className="bg-[#1e293b] rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Quick Transfer</h2>
          <button className="text-[#0ea5e9] hover:text-[#0284c7] font-medium flex items-center space-x-1">
            <i className="fa-solid fa-arrows-rotate text-sm"></i>
            <span>Refresh</span>
          </button>
        </div>
        
        {/* Beneficiaries */}
        <div className="flex items-start space-x-6">
          {/* Add New Button */}
          <button 
            onClick={() => setShowNewBeneficiaryModal(true)}
            className="flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full border-2 border-dashed border-gray-600 flex items-center justify-center mb-2 hover:border-[#0ea5e9] hover:text-[#0ea5e9] transition-colors">
              <i className="fa-solid fa-plus text-gray-400"></i>
            </div>
            <span className="text-gray-400 text-sm">Add New</span>
          </button>
          
          {/* Empty State */}
          <div className="flex-1 flex flex-col items-center justify-center py-4">
            <i className="fa-solid fa-users text-gray-600 text-3xl mb-3"></i>
            <p className="text-gray-400 font-medium">No saved beneficiaries yet</p>
            <p className="text-gray-500 text-sm">Add one to get started</p>
          </div>
        </div>
      </div>

      {/* New Beneficiary Modal */}
      {showNewBeneficiaryModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1e293b] rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Add New Beneficiary</h3>
              <button 
                onClick={() => setShowNewBeneficiaryModal(false)}
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Account Name</label>
                <input 
                  type="text" 
                  placeholder="Enter account holder name"
                  className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0ea5e9]"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Account Number</label>
                <input 
                  type="text" 
                  placeholder="Enter account number"
                  className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0ea5e9]"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Bank</label>
                <select className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#0ea5e9]">
                  <option value="">Select Bank</option>
                  <option value="chase">Chase Bank</option>
                  <option value="bofa">Bank of America</option>
                  <option value="wells">Wells Fargo</option>
                  <option value="citi">Citibank</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-3">
              <button 
                onClick={() => setShowNewBeneficiaryModal(false)}
                className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-xl font-medium hover:bg-gray-600"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-3 bg-[#0ea5e9] text-white rounded-xl font-medium hover:bg-[#0284c7]">
                Save Beneficiary
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
