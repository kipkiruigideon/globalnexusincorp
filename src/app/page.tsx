'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/metro.jpg"
            alt="City Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            {/* Animated Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6 animate-float">
              <i className="fas fa-sparkles mr-2"></i>
              People First Banking
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              We do banking <span className="text-primary">differently</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              We believe that people come first, and that everyone deserves a great experience every step of the way.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/register" className="group relative inline-flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-xl text-white font-medium transition-transform group-hover:scale-105">
                  Open Account Today
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </span>
              </Link>
              <Link href="/login" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl text-white font-medium transition-all">
                Login to Banking
              </Link>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {/* Routing Number Card */}
            <div className="group bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="fas fa-hashtag text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Routing Number</h3>
                  <p className="text-gray-400">256078514</p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="group bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="fas fa-clock text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Banking Hours</h3>
                  <p className="text-gray-400">Mon-Fri 9AM-5PM</p>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="group bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="fas fa-headset text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold">24/7 Support</h3>
                  <p className="text-gray-400">Always here to help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rates Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold">Global Nexus Inc Rates</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2">Member Care</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* High Yield Savings */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4">
                FEATURED
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">3.75%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">APY*</div>
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">HIGH YIELD SAVINGS</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">High Yield Savings Rate</div>
            </div>

            {/* Certificate */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-medium mb-4">
                SAVINGS
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">3.65%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">APY*</div>
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">18 MONTH CERTIFICATE</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Certificate Rates</div>
            </div>

            {/* Credit Cards */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="inline-flex items-center px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-xs font-medium mb-4">
                CREDIT
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">4.00%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">APR*</div>
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">CREDIT CARDS</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Credit Card Rates</div>
            </div>

            {/* Loans */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="inline-flex items-center px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-xs font-medium mb-4">
                MORTGAGE
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">15.49%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">APR*</div>
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">LOANS</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Standard Loan Rates</div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
            *Annual Percentage Yield. Rates subject to change. Terms and conditions apply.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold">Our Services</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">How Can We Help You Today?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Deposit Accounts */}
            <Link href="/services" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-piggy-bank text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Deposit Accounts</h3>
              <p className="text-gray-400">Secure your money with our high-yield savings and checking accounts designed for growth.</p>
              <div className="mt-4 text-primary group-hover:translate-x-2 transition-transform inline-flex items-center">
                Learn more <i className="fas fa-arrow-right ml-2"></i>
              </div>
            </Link>

            {/* Credit Cards */}
            <Link href="/services" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-credit-card text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Credit Cards</h3>
              <p className="text-gray-400">Find the perfect credit card for your lifestyle with competitive rates and rewards.</p>
              <div className="mt-4 text-primary group-hover:translate-x-2 transition-transform inline-flex items-center">
                Learn more <i className="fas fa-arrow-right ml-2"></i>
              </div>
            </Link>

            {/* Loans */}
            <Link href="/services" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-hand-holding-dollar text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Loans</h3>
              <p className="text-gray-400">Get competitive rates on personal, auto, and home loans tailored to your goals.</p>
              <div className="mt-4 text-primary group-hover:translate-x-2 transition-transform inline-flex items-center">
                Learn more <i className="fas fa-arrow-right ml-2"></i>
              </div>
            </Link>

            {/* Business Banking */}
            <Link href="/services" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-building text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Business Banking</h3>
              <p className="text-gray-400">Comprehensive banking solutions designed to help your business thrive and grow.</p>
              <div className="mt-4 text-primary group-hover:translate-x-2 transition-transform inline-flex items-center">
                Learn more <i className="fas fa-arrow-right ml-2"></i>
              </div>
            </Link>

            {/* Wealth & Retire */}
            <Link href="/services" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-chart-line text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Wealth & Retire</h3>
              <p className="text-gray-400">Plan for your future with our expert investment and retirement planning services.</p>
              <div className="mt-4 text-primary group-hover:translate-x-2 transition-transform inline-flex items-center">
                Learn more <i className="fas fa-arrow-right ml-2"></i>
              </div>
            </Link>

            {/* About */}
            <Link href="/about" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-info-circle text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">About Global Nexus</h3>
              <p className="text-gray-400">Learn about our commitment to exceptional banking services and community support.</p>
              <div className="mt-4 text-primary group-hover:translate-x-2 transition-transform inline-flex items-center">
                Learn more <i className="fas fa-arrow-right ml-2"></i>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-gray-900 relative overflow-hidden">
        {/* Animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                <i className="fas fa-gift mr-2"></i> Limited Time Offer
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold">
                Get $200* With a Checking Account Built for You
              </h2>
              <p className="text-white/80 text-lg">
                For a limited time, get $200 when you open any new account that helps you reach your financial goals. Open online or in person at any location.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  No minimum balance required
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Free online and mobile banking
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  24/7 customer support
                </li>
              </ul>
              <Link href="/register" className="group inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg">
                Open Account Now
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                  <div className="text-center text-white">
                    <div className="text-7xl font-bold mb-2 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">$200</div>
                    <div className="text-2xl text-white/80">Welcome Bonus</div>
                    <div className="mt-4 text-sm text-white/60">*Terms and conditions apply</div>
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="grid grid-cols-2 gap-4 text-left">
                        <div>
                          <i className="fas fa-shield-alt text-primary mb-2"></i>
                          <p className="text-sm text-white/80">FDIC Insured</p>
                        </div>
                        <div>
                          <i className="fas fa-lock text-primary mb-2"></i>
                          <p className="text-sm text-white/80">256-bit Encryption</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Strength Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold">Member-Focused Banking</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">Building Strength Together</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                Global Nexus Inc is a full-service credit union built on the foundation of providing exceptional service at every step of your financial journey. We&apos;re committed to helping our members achieve their goals.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-chart-line text-primary text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Competitive Rates</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Better rates on savings, loans, credit cards</p>
                </div>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-users text-primary text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Member-Focused</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Owned by our members, not shareholders</p>
                </div>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-heart text-primary text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Community</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Supporting local communities</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl h-48 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <i className="fas fa-landmark text-2xl"></i>
                  </div>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-32"></div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-32"></div>
                <div className="bg-gradient-to-br from-primary-dark to-primary rounded-2xl h-48 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 right-4 text-white">
                    <i className="fas fa-handshake text-2xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold">Testimonials</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2">Hear From Our Customers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map((i) => (
                  <i key={i} className="fas fa-star text-yellow-400 mr-1"></i>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 italic">&quot;I am impressed with the customer service and speed of payout.&quot;</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold">SM</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Sarah Morris</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Verified Customer</div>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map((i) => (
                  <i key={i} className="fas fa-star text-yellow-400 mr-1"></i>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 italic">&quot;Excellent service and competitive rates. Highly recommended!&quot;</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">JD</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">John Davis</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Business Owner</div>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map((i) => (
                  <i key={i} className="fas fa-star text-yellow-400 mr-1"></i>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 italic">&quot;The mobile app is fantastic and customer support is top-notch.&quot;</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">EJ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Emily Johnson</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Personal Banking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-primary text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Banking Hours</h3>
              <p className="text-gray-600 dark:text-gray-400">Mon-Fri: 9AM-5PM</p>
              <p className="text-gray-600 dark:text-gray-400">Sat: 9AM-1PM</p>
              <p className="text-gray-600 dark:text-gray-400">Sun: Closed</p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-phone text-primary text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Phone Banking</h3>
              <p className="text-gray-600 dark:text-gray-400">Available 24/7</p>
              <p className="text-gray-600 dark:text-gray-400">1-800-BANKING</p>
              <p className="text-gray-600 dark:text-gray-400">+1-555-0123</p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-envelope text-primary text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email Support</h3>
              <p className="text-gray-600 dark:text-gray-400">Response within 24hrs</p>
              <p className="text-gray-600 dark:text-gray-400 break-all">support@globalnexusincorp.com</p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marker-alt text-primary text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Visit Us</h3>
              <p className="text-gray-600 dark:text-gray-400">123 Banking Street</p>
              <p className="text-gray-600 dark:text-gray-400">Financial District</p>
              <p className="text-gray-600 dark:text-gray-400">New York, NY 10001</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
