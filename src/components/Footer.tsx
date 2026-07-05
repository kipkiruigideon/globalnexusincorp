import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 dark:from-gray-900 dark:via-primary-900 dark:to-gray-900 text-white py-16 mb-20 lg:mb-0 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-20 left-1/3 w-36 h-36 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-10 right-1/4 w-4 h-4 bg-white/10 rotate-45 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-primary-300/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-teal-400/40 rotate-45 animate-bounce" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="group mb-6">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-lg group-hover:bg-white/30 transition-all duration-300"></div>
                <Image
                  src="/images/photos/lwjkWDHt3aKtY1uBWVMpmJ3FxeVfe3AqrYZy2G4k.png"
                  alt="Global Nexus Inc"
                  width={160}
                  height={40}
                  className="relative h-10 w-auto"
                />
              </div>
            </div>
            <p className="text-primary-100 mb-6 text-sm leading-relaxed">
              Building financial strength together with personalized banking solutions for every member. Your trusted partner in financial growth.
            </p>

            {/* Enhanced Social Links */}
            <div className="flex space-x-3">
              <a href="#" className="group relative w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 hover:from-blue-600 hover:to-blue-700 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                <i className="fa-brands fa-facebook-f text-sm group-hover:scale-110 transition-transform duration-300"></i>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="#" className="group relative w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 hover:from-sky-500 hover:to-sky-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                <i className="fa-brands fa-twitter text-sm group-hover:scale-110 transition-transform duration-300"></i>
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="#" className="group relative w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 hover:from-blue-700 hover:to-blue-800 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                <i className="fa-brands fa-linkedin-in text-sm group-hover:scale-110 transition-transform duration-300"></i>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="#" className="group relative w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 hover:from-pink-600 hover:to-pink-700 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                <i className="fa-brands fa-instagram text-sm group-hover:scale-110 transition-transform duration-300"></i>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-white flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-primary-400 to-primary-600 rounded-full mr-3"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="group flex items-center text-primary-100 hover:text-white transition-all duration-300 text-sm">
                  <i className="fa-solid fa-chevron-right text-xs mr-3 text-primary-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="group flex items-center text-primary-100 hover:text-white transition-all duration-300 text-sm">
                  <i className="fa-solid fa-chevron-right text-xs mr-3 text-primary-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/grants" className="group flex items-center text-primary-100 hover:text-white transition-all duration-300 text-sm">
                  <i className="fa-solid fa-chevron-right text-xs mr-3 text-primary-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Grants &amp; Aid</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group flex items-center text-primary-100 hover:text-white transition-all duration-300 text-sm">
                  <i className="fa-solid fa-chevron-right text-xs mr-3 text-primary-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-white flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-teal-400 to-teal-600 rounded-full mr-3"></div>
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="group flex items-center text-primary-100 hover:text-white transition-all duration-300 text-sm">
                  <i className="fa-solid fa-chevron-right text-xs mr-3 text-teal-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Personal Banking</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="group flex items-center text-primary-100 hover:text-white transition-all duration-300 text-sm">
                  <i className="fa-solid fa-chevron-right text-xs mr-3 text-teal-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Business Banking</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="group flex items-center text-primary-100 hover:text-white transition-all duration-300 text-sm">
                  <i className="fa-solid fa-chevron-right text-xs mr-3 text-teal-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Loans &amp; Credit</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="group flex items-center text-primary-100 hover:text-white transition-all duration-300 text-sm">
                  <i className="fa-solid fa-chevron-right text-xs mr-3 text-teal-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Cards</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Member Services */}
          <div>
            <h4 className="font-bold mb-6 text-white flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full mr-3"></div>
              Member Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/login" className="group flex items-center text-primary-100 hover:text-white transition-all duration-300 text-sm">
                  <i className="fa-solid fa-chevron-right text-xs mr-3 text-purple-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Online Banking</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="group flex items-center text-primary-100 hover:text-white transition-all duration-300 text-sm">
                  <i className="fa-solid fa-chevron-right text-xs mr-3 text-purple-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Mobile App</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group flex items-center text-primary-100 hover:text-white transition-all duration-300 text-sm">
                  <i className="fa-solid fa-chevron-right text-xs mr-3 text-purple-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">ATM Locations</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="group flex items-center text-primary-100 hover:text-white transition-all duration-300 text-sm">
                  <i className="fa-solid fa-chevron-right text-xs mr-3 text-purple-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Security Center</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-700/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-primary-100 text-sm">
                © 2026 Global Nexus Inc. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-primary-200 text-xs">
                <i className="fa-solid fa-shield-alt text-green-400"></i>
                <span>FDIC Insured</span>
                <span className="text-primary-400">•</span>
                <i className="fa-solid fa-lock text-blue-400"></i>
                <span>256-bit SSL</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6">
              <Link href="/privacy" className="text-primary-100 hover:text-white text-sm transition-colors duration-300 hover:underline">Privacy Policy</Link>
              <Link href="/terms" className="text-primary-100 hover:text-white text-sm transition-colors duration-300 hover:underline">Terms of Service</Link>
              <Link href="/contact" className="text-primary-100 hover:text-white text-sm transition-colors duration-300 hover:underline">Accessibility</Link>
              <Link href="/" className="text-primary-100 hover:text-white text-sm transition-colors duration-300 hover:underline">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
