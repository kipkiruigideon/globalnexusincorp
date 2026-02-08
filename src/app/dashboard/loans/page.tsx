'use client';

import { useState } from 'react';

export default function LoansPage() {
  const [showApplyModal, setShowApplyModal] = useState(false);

  const whyChooseFeatures = [
    { icon: 'fa-solid fa-clock', title: 'Quick Approval', desc: 'Get a decision within hours and funds within days' },
    { icon: 'fa-solid fa-percent', title: 'Competitive Rates', desc: 'Low interest rates tailored to your credit profile' },
    { icon: 'fa-solid fa-file-lines', title: 'Simple Process', desc: 'Straightforward application with minimal paperwork' },
    { icon: 'fa-solid fa-shield-halved', title: 'Secure & Confidential', desc: 'Your information is protected with bank-level security' },
  ];

  const loanTypes = [
    { icon: 'fa-solid fa-house', name: 'Personal Home Loans', desc: 'Finance your dream home with competitive rates' },
    { icon: 'fa-solid fa-car', name: 'Automobile Loans', desc: 'Get on the road with flexible auto financing' },
    { icon: 'fa-solid fa-briefcase', name: 'Business Loans', desc: 'Grow your business with tailored financing solutions' },
    { icon: 'fa-solid fa-users', name: 'Joint Mortgage', desc: 'Share responsibility with a co-borrower' },
    { icon: 'fa-solid fa-credit-card', name: 'Secured Overdraft', desc: 'Access funds when needed with asset backing' },
    { icon: 'fa-solid fa-heart-pulse', name: 'Health Finance', desc: 'Cover medical expenses with flexible payment options' },
  ];

  const howItWorks = [
    { step: 1, title: 'Apply Online', desc: 'Complete our simple online application form with your details and loan requirements' },
    { step: 2, title: 'Quick Review', desc: 'Our team reviews your application and may contact you for additional information' },
    { step: 3, title: 'Approval & Disbursement', desc: 'Once approved, the loan amount will be transferred to your account' },
  ];

  return (
    <div className="p-4 lg:p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Loan Services</h1>
        <button 
          onClick={() => setShowApplyModal(true)}
          className="px-4 py-2 bg-[#0ea5e9] text-white rounded-lg font-medium hover:bg-[#0284c7] transition-colors flex items-center space-x-2"
        >
          <i className="fa-solid fa-plus"></i>
          <span>Apply for Loan</span>
        </button>
      </div>

      {/* Why Choose Our Loan Services */}
      <div className="bg-[#1e293b] rounded-xl p-6 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-[#0ea5e9] rounded-lg flex items-center justify-center">
            <i className="fa-solid fa-check text-white"></i>
          </div>
          <h2 className="text-lg font-bold text-white">Why Choose Our Loan Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {whyChooseFeatures.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-[#0f172a] rounded-xl">
              <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className={`${feature.icon} text-amber-500 text-sm`}></i>
              </div>
              <div>
                <h3 className="text-white font-semibold">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Loan Types */}
      <div className="bg-[#1e293b] rounded-xl p-6 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-[#0ea5e9] rounded-lg flex items-center justify-center">
            <i className="fa-solid fa-wallet text-white"></i>
          </div>
          <h2 className="text-lg font-bold text-white">Available Loan Types</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {loanTypes.map((loan, index) => (
            <div key={index} className="p-4 bg-[#0f172a] rounded-xl hover:bg-[#0f172a]/70 transition-colors cursor-pointer">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-[#0ea5e9]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className={`${loan.icon} text-[#0ea5e9] text-sm`}></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">{loan.name}</h3>
                  <p className="text-gray-400 text-xs mt-1">{loan.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-[#1e293b] rounded-xl p-6 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <i className="fa-solid fa-circle-info text-white"></i>
          </div>
          <h2 className="text-lg font-bold text-white">How It Works</h2>
        </div>
        
        <div className="space-y-4">
          {howItWorks.map((item) => (
            <div key={item.step} className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#0ea5e9] rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                {item.step}
              </div>
              <div>
                <h3 className="text-white font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ready to get started CTA */}
      <div className="bg-[#1e293b] rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold text-white mb-2">Ready to get started?</h2>
        <p className="text-gray-400 mb-6">Apply now and get a decision on your loan application quickly</p>
        <button 
          onClick={() => setShowApplyModal(true)}
          className="px-6 py-3 bg-[#0ea5e9] text-white rounded-xl font-semibold hover:bg-[#0284c7] transition-colors inline-flex items-center space-x-2"
        >
          <i className="fa-solid fa-pen-to-square"></i>
          <span>Apply for a Loan</span>
        </button>
      </div>

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1e293b] rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Apply for Loan</h3>
              <button 
                onClick={() => setShowApplyModal(false)}
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Loan Type</label>
                <select className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#0ea5e9]">
                  <option value="">Select Loan Type</option>
                  {loanTypes.map((loan, index) => (
                    <option key={index} value={loan.name}>{loan.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Loan Amount</label>
                <input 
                  type="text" 
                  placeholder="$0.00"
                  className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0ea5e9]"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Loan Purpose</label>
                <textarea 
                  placeholder="Describe why you need this loan..."
                  rows={3}
                  className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0ea5e9] resize-none"
                />
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
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
