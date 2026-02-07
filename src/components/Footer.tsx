import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 group mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center">
                  <i className="fas fa-landmark text-white text-xl"></i>
                </div>
              </div>
              <div>
                <span className="text-xl font-bold">Global Nexus</span>
                <span className="block text-xs text-gray-400">Federal Credit Union</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Building financial strength together with personalized banking solutions for every member. Your trusted partner in financial growth.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary/20 border border-white/10 rounded-lg flex items-center justify-center transition-all group">
                <i className="fab fa-twitter text-gray-400 group-hover:text-primary transition-colors"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary/20 border border-white/10 rounded-lg flex items-center justify-center transition-all group">
                <i className="fab fa-facebook-f text-gray-400 group-hover:text-primary transition-colors"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary/20 border border-white/10 rounded-lg flex items-center justify-center transition-all group">
                <i className="fab fa-linkedin-in text-gray-400 group-hover:text-primary transition-colors"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary/20 border border-white/10 rounded-lg flex items-center justify-center transition-all group">
                <i className="fab fa-instagram text-gray-400 group-hover:text-primary transition-colors"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <div className="w-1 h-6 bg-primary rounded-full mr-3"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors inline-flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors inline-flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/grants" className="text-gray-400 hover:text-primary transition-colors inline-flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  Grants & Aid
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors inline-flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <div className="w-1 h-6 bg-primary rounded-full mr-3"></div>
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors inline-flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  Personal Banking
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors inline-flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  Business Banking
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors inline-flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  Loans & Credit
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors inline-flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  Credit Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Member Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <div className="w-1 h-6 bg-primary rounded-full mr-3"></div>
              Member Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/login" className="text-gray-400 hover:text-primary transition-colors inline-flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  Online Banking
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors inline-flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  Mobile App
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors inline-flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  ATM Locations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors inline-flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  Security Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 text-sm text-gray-400">
              <span>© 2025 Global Nexus Inc. All rights reserved.</span>
              <div className="hidden lg:flex items-center space-x-4">
                <span className="flex items-center space-x-2">
                  <i className="fas fa-shield-alt text-primary"></i>
                  <span>FDIC Insured</span>
                </span>
                <span className="flex items-center space-x-2">
                  <i className="fas fa-lock text-primary"></i>
                  <span>256-bit SSL</span>
                </span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">Accessibility</Link>
            </div>
          </div>
          
          {/* Mobile badges */}
          <div className="flex lg:hidden justify-center items-center gap-6 mt-4 pt-4 border-t border-white/5">
            <span className="flex items-center space-x-2 text-sm text-gray-400">
              <i className="fas fa-shield-alt text-primary"></i>
              <span>FDIC Insured</span>
            </span>
            <span className="flex items-center space-x-2 text-sm text-gray-400">
              <i className="fas fa-lock text-primary"></i>
              <span>256-bit SSL</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
