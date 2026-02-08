'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const menuItems = [
    { id: 'profile', icon: 'fa-solid fa-user', label: 'Profile Information', active: true },
    { id: 'password', icon: 'fa-solid fa-key', label: 'Password Settings', active: false },
    { id: '2fa', icon: 'fa-solid fa-shield-halved', label: 'Two-Factor Authentication', status: 'On' },
    { id: 'pin', icon: 'fa-solid fa-hashtag', label: 'Transaction PIN', active: false },
  ];

  return (
    <div className="p-4 lg:p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Account Settings</h1>
          <p className="text-gray-400">Manage your profile and security settings</p>
        </div>
        <div className="w-12 h-12 bg-[#0ea5e9] rounded-xl flex items-center justify-center">
          <i className="fa-solid fa-user text-white text-lg"></i>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Profile Card */}
          <div className="bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] rounded-xl p-6 text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-mobile-screen text-white text-3xl"></i>
            </div>
            <h3 className="text-white font-bold text-lg">Pascale Dickson</h3>
            <p className="text-white/80 text-sm">Account #58076435509</p>
          </div>

          {/* Navigation Menu */}
          <div className="bg-[#1e293b] rounded-xl overflow-hidden">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${
                  activeTab === item.id 
                    ? 'bg-[#0ea5e9]/10 border-l-4 border-[#0ea5e9]' 
                    : 'hover:bg-[#0f172a] border-l-4 border-transparent'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <i className={`${item.icon} ${activeTab === item.id ? 'text-[#0ea5e9]' : 'text-gray-400'}`}></i>
                  <span className={activeTab === item.id ? 'text-[#0ea5e9] font-medium' : 'text-gray-300'}>{item.label}</span>
                </div>
                {item.status && (
                  <span className="flex items-center text-green-500 text-sm">
                    <i className="fa-solid fa-check mr-1"></i>
                    {item.status}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Need Assistance */}
          <div className="bg-[#1e293b] rounded-xl p-6 text-center">
            <div className="relative w-14 h-14 mx-auto mb-4">
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-headset text-white text-xl"></i>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full"></div>
            </div>
            <h3 className="text-white font-bold mb-1">Need Assistance?</h3>
            <p className="text-gray-400 text-sm mb-2">Our expert support team is available</p>
            <p className="text-green-500 text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-1"></span>
              24/7 Live Support
            </p>
            
            <div className="flex justify-center space-x-6 mb-4">
              <div className="text-center">
                <div className="flex items-center text-gray-400 text-sm">
                  <i className="fa-solid fa-clock mr-2"></i>
                  <span>Quick Response</span>
                </div>
                <p className="text-gray-500 text-xs">&lt; 5 minutes</p>
              </div>
              <div className="text-center">
                <div className="flex items-center text-gray-400 text-sm">
                  <i className="fa-solid fa-shield-halved mr-2 text-green-500"></i>
                  <span>Secure Chat</span>
                </div>
                <p className="text-gray-500 text-xs">Encrypted</p>
              </div>
            </div>
            
            <button className="w-full py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2">
              <i className="fa-solid fa-comments"></i>
              <span>Start Live Chat</span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </button>
            
            <p className="text-gray-500 text-xs mt-3 flex items-center justify-center">
              <i className="fa-solid fa-phone mr-1"></i>
              Or call us directly for urgent matters
            </p>
          </div>
        </div>

        {/* Right Column - Profile Information */}
        <div className="lg:col-span-2">
          <div className="bg-[#1e293b] rounded-xl p-6">
            {/* Section Header */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-[#0ea5e9] rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-user text-white"></i>
              </div>
              <div>
                <h2 className="text-white font-bold">Profile Information</h2>
                <p className="text-gray-400 text-sm">Your personal information and account details</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">First Name</label>
                  <div className="relative">
                    <i className="fa-solid fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                    <input
                      type="text"
                      defaultValue="Pascale"
                      className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#0ea5e9]"
                      readOnly
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Last Name</label>
                  <div className="relative">
                    <i className="fa-solid fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                    <input
                      type="text"
                      defaultValue="Dickson"
                      className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#0ea5e9]"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Account Number</label>
                <div className="relative">
                  <i className="fa-solid fa-hashtag absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <input
                    type="text"
                    defaultValue="58076435509"
                    className="w-full pl-12 pr-12 py-3 bg-[#0f172a] border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#0ea5e9]"
                    readOnly
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                    <i className="fa-solid fa-copy"></i>
                  </button>
                </div>
                <p className="text-gray-500 text-xs mt-1">Your unique account identifier</p>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                <div className="relative">
                  <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <input
                    type="email"
                    defaultValue="gideonkipkirui47@gmail.com"
                    className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#0ea5e9]"
                    readOnly
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Date of Birth</label>
                <div className="relative">
                  <i className="fa-solid fa-calendar absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <input
                    type="text"
                    placeholder="dd/mm/yyyy"
                    className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0ea5e9]"
                    readOnly
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                <div className="relative">
                  <i className="fa-solid fa-phone absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <input
                    type="tel"
                    defaultValue="+1 (453) 731-4075"
                    className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#0ea5e9]"
                    readOnly
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Address</label>
                <div className="relative">
                  <i className="fa-solid fa-location-dot absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0ea5e9]"
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* Info Notice */}
            <div className="mt-6 bg-[#0f172a] rounded-xl p-4 flex items-start space-x-3">
              <i className="fa-solid fa-circle-info text-amber-500 mt-0.5"></i>
              <div>
                <h4 className="text-white font-semibold">Account Information</h4>
                <p className="text-[#0ea5e9] text-sm">To update your personal information, please contact our customer support team.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
