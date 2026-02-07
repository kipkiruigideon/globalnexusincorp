'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SupportPage() {
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const faqs = [
    { q: 'How do I deposit funds?', a: 'You can deposit funds via bank transfer, debit card, or cryptocurrency from the Deposits page.' },
    { q: 'How long do transfers take?', a: 'Local transfers are usually instant. International transfers take 1-3 business days.' },
    { q: 'Is my money safe?', a: 'Yes, we use bank-level security and encryption to protect your funds and data.' },
    { q: 'How do I get a physical card?', a: 'You can request a physical card from the Cards section in your dashboard.' },
  ];

  return (
    <div className="p-4 lg:p-6">
      {/* Mobile Header */}
      <div className="lg:hidden mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <Link href="/dashboard" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <i className="fa-solid fa-arrow-left text-gray-600 dark:text-gray-300"></i>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Support</h1>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Help & Support</h1>
        <p className="text-gray-500 dark:text-gray-400">Get help with your account</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="w-14 h-14 bg-sky-100 dark:bg-sky-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-comments text-[#0ea5e9] text-xl"></i>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">Live Chat</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Chat with our support team</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-phone text-green-500 text-xl"></i>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">Call Us</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">+1 (800) 123-4567</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-envelope text-purple-500 text-xl"></i>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">Email</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">support@globalnexusincorp.com</p>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h3>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group">
                <summary className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 dark:text-white">{faq.q}</span>
                  <i className="fa-solid fa-chevron-down text-gray-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div className="px-4 py-3 text-gray-600 dark:text-gray-400">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Subject</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all"
              >
                <option value="">Select a topic</option>
                <option value="account">Account Issues</option>
                <option value="transfer">Transfer Problems</option>
                <option value="card">Card Services</option>
                <option value="security">Security Concerns</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your issue or question..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all resize-none"
              />
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white rounded-xl font-bold text-lg shadow-lg shadow-sky-500/25 hover:shadow-xl transition-all">
              <i className="fa-solid fa-paper-plane mr-2"></i>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
