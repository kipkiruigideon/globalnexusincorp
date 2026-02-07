import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-300 text-sm font-medium">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                Your Digital Banking Partner
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Global Nexus Inc
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                We do banking differently. We believe that people come first, and that everyone deserves a great experience every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-500/30">
                  Open Account Today
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/login" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20">
                  Login to Banking
                </Link>
              </div>
              {/* Stats */}
              <div className="flex gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-emerald-400">50K+</div>
                  <div className="text-gray-400">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400">$2.5B+</div>
                  <div className="text-gray-400">Assets Managed</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-emerald-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-teal-500/30 rounded-full blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <div>
                      <div className="text-sm text-gray-400">Total Balance</div>
                      <div className="text-2xl font-bold">$124,562.00</div>
                    </div>
                    <div className="w-12 h-12 bg-emerald-500/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/10 rounded-xl">
                      <div className="text-sm text-gray-400">Savings</div>
                      <div className="text-lg font-semibold">$45,280</div>
                    </div>
                    <div className="p-4 bg-white/10 rounded-xl">
                      <div className="text-sm text-gray-400">Checking</div>
                      <div className="text-lg font-semibold">$79,282</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rates Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold">Global Nexus Inc Rates</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Member Care</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Discover competitive rates designed to help your money grow faster
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* High Yield Savings */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium mb-4">
                FEATURED
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-1">3.75%</div>
              <div className="text-sm text-gray-500 mb-2">APY*</div>
              <div className="text-lg font-semibold text-gray-700">HIGH YIELD SAVINGS</div>
              <div className="text-sm text-gray-500">High Yield Savings Rate</div>
            </div>
            {/* Certificate */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mb-4">
                SAVINGS
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-1">3.65%</div>
              <div className="text-sm text-gray-500 mb-2">APY*</div>
              <div className="text-lg font-semibold text-gray-700">18 MONTH CERTIFICATE</div>
              <div className="text-sm text-gray-500">Certificate Rates</div>
            </div>
            {/* Credit Cards */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-4">
                CREDIT
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-1">4.00%</div>
              <div className="text-sm text-gray-500 mb-2">APR*</div>
              <div className="text-lg font-semibold text-gray-700">CREDIT CARDS</div>
              <div className="text-sm text-gray-500">Credit Card Rates</div>
            </div>
            {/* Loans */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium mb-4">
                MORTGAGE
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-1">15.49%</div>
              <div className="text-sm text-gray-500 mb-2">APR*</div>
              <div className="text-lg font-semibold text-gray-700">LOANS</div>
              <div className="text-sm text-gray-500">Standard Loan Rates</div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            *Annual Percentage Yield. Rates subject to change. Terms and conditions apply.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold">Our Services</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">How Can We Help You Today?</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Comprehensive banking solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Deposit Accounts */}
            <Link href="/services" className="group p-8 rounded-2xl bg-gray-50 hover:bg-emerald-50 transition-all cursor-pointer border border-transparent hover:border-emerald-200">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deposit Accounts</h3>
              <p className="text-gray-600">Secure your money with our high-yield savings and checking accounts designed for growth.</p>
            </Link>
            {/* Credit Cards */}
            <Link href="/services" className="group p-8 rounded-2xl bg-gray-50 hover:bg-emerald-50 transition-all cursor-pointer border border-transparent hover:border-emerald-200">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Credit Cards</h3>
              <p className="text-gray-600">Find the perfect credit card for your lifestyle and spending habits with competitive rates.</p>
            </Link>
            {/* Loans */}
            <Link href="/services" className="group p-8 rounded-2xl bg-gray-50 hover:bg-emerald-50 transition-all cursor-pointer border border-transparent hover:border-emerald-200">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Loans</h3>
              <p className="text-gray-600">Get competitive rates on personal, auto, and home loans tailored to your financial goals.</p>
            </Link>
            {/* Business Banking */}
            <Link href="/services" className="group p-8 rounded-2xl bg-gray-50 hover:bg-emerald-50 transition-all cursor-pointer border border-transparent hover:border-emerald-200">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Banking</h3>
              <p className="text-gray-600">Comprehensive banking solutions designed to help your business thrive and grow.</p>
            </Link>
            {/* Wealth & Retire */}
            <Link href="/services" className="group p-8 rounded-2xl bg-gray-50 hover:bg-emerald-50 transition-all cursor-pointer border border-transparent hover:border-emerald-200">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wealth & Retire</h3>
              <p className="text-gray-600">Plan for your future with our expert investment and retirement planning services.</p>
            </Link>
            {/* About */}
            <Link href="/about" className="group p-8 rounded-2xl bg-gray-50 hover:bg-emerald-50 transition-all cursor-pointer border border-transparent hover:border-emerald-200">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">About Global Nexus Inc</h3>
              <p className="text-gray-600">Learn more about our commitment to exceptional banking services and community support.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                Limited Time Offer
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Get $200* With a Checking Account Built for You
              </h2>
              <p className="text-emerald-100 text-lg">
                For a limited time, get $200 when you open any new account, and what helps you reach your financial goals. You can open a new account online or in person at any of our locations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No minimum balance required
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Free online and mobile banking
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 customer support
                </li>
              </ul>
              <Link href="/register" className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg">
                Open Account Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-2">$200</div>
                  <div className="text-xl text-emerald-200">Welcome Bonus</div>
                  <div className="mt-4 text-sm text-emerald-100">*Terms and conditions apply</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Strength Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-emerald-600 font-semibold">Member-Focused Banking</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">Building Strength Together</h2>
              <p className="text-gray-600 text-lg mb-8">
                Global Nexus Inc is a full-service credit union built on the foundation of providing our members with every step of their financial journey. We&apos;re committed to helping our members achieve their financial goals through personalized service and competitive rates.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Competitive Rates</h3>
                  <p className="text-sm text-gray-600">Better rates on savings, loans, and credit cards</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Member-Focused</h3>
                  <p className="text-sm text-gray-600">We&apos;re owned by our members, not shareholders</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Community Committed</h3>
                  <p className="text-sm text-gray-600">Supporting local communities and causes</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl h-48"></div>
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-32"></div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-32"></div>
                <div className="bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl h-48"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold">Testimonials</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Hear From Our Customers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">&quot;I am impressed with the customer service and speed of payout.&quot;</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-emerald-600 font-semibold">SM</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Morris</div>
                  <div className="text-sm text-gray-500">Verified Customer</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">&quot;Excellent service and competitive rates. Highly recommended!&quot;</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">JD</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">John Davis</div>
                  <div className="text-sm text-gray-500">Business Owner</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">&quot;The mobile app is fantastic and customer support is top-notch.&quot;</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">EJ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Emily Johnson</div>
                  <div className="text-sm text-gray-500">Personal Banking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Banking Hours</h3>
              <p className="text-gray-600">Mon-Fri: 9AM-5PM</p>
              <p className="text-gray-600">Sat: 9AM-1PM</p>
              <p className="text-gray-600">Sun: Closed</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone Banking</h3>
              <p className="text-gray-600">Available 24/7</p>
              <p className="text-gray-600">Call: 1-800-BANKING</p>
              <p className="text-gray-600">International: +1-555-0123</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600">Response within 24hrs</p>
              <p className="text-gray-600 break-all">support@globalnexusincorp.com</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Banking Street</p>
              <p className="text-gray-600">Financial District</p>
              <p className="text-gray-600">New York, NY 10001</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
