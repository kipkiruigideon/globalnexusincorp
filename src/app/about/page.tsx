import Link from 'next/link';

export const metadata = {
  title: 'About Us | Global Nexus Inc',
  description: 'Learn about Global Nexus Inc - your trusted banking partner since 1985. Discover our mission, values, and commitment to your financial success.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-300 text-sm font-medium mb-4">
              Our Story
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Global Nexus Inc</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted banking partner committed to your financial success since our founding
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-emerald-600 font-semibold">Our Purpose</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg mb-6">
                At Global Nexus Inc, we&apos;re dedicated to empowering individuals, families, and businesses to achieve their financial goals through innovative banking solutions, personalized service, and unwavering commitment to excellence.
              </p>
              <p className="text-gray-600 text-lg">
                We believe that banking should be simple, secure, and accessible to everyone, which is why we continuously invest in technology and training to deliver the best possible experience for our customers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl h-80"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold">Our Impact</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">By the Numbers</h2>
            <p className="text-gray-600 mt-4">Our growth reflects the trust our customers place in us</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-emerald-600 mb-2">50K+</div>
              <div className="text-gray-600">Active Customers</div>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-emerald-600 mb-2">$2.5B</div>
              <div className="text-gray-600">Assets Under Management</div>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-emerald-600 mb-2">25</div>
              <div className="text-gray-600">Branch Locations</div>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-emerald-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold">What We Stand For</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Our Core Values</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              These values guide everything we do and shape our commitment to our customers and community
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust & Security</h3>
              <p className="text-gray-600">Your financial security is our top priority with industry-leading protection measures.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">We embrace cutting-edge technology to deliver modern banking solutions.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Care</h3>
              <p className="text-gray-600">Personalized service and support whenever you need it, however you prefer.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">Supporting local communities and contributing to economic growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold">Our History</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Our Journey</h2>
            <p className="text-gray-600 mt-4">From humble beginnings to becoming a trusted financial institution</p>
          </div>
          <div className="space-y-12">
            {/* 1985 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4 text-center md:text-right">
                <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-semibold">
                  1985 • Founded
                </div>
              </div>
              <div className="hidden md:block w-px h-24 bg-emerald-300"></div>
              <div className="md:w-3/4 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Beginning</h3>
                <p className="text-gray-600">Global Nexus Inc was founded with a simple mission: to provide honest, reliable banking services to our local community.</p>
              </div>
            </div>
            {/* 2005 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4 text-center md:text-right">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold">
                  2005 • Digital Era
                </div>
              </div>
              <div className="hidden md:block w-px h-24 bg-blue-300"></div>
              <div className="md:w-3/4 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Online Banking Launch</h3>
                <p className="text-gray-600">We embraced the digital revolution, launching our first online banking platform to serve customers 24/7.</p>
              </div>
            </div>
            {/* 2015 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4 text-center md:text-right">
                <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold">
                  2015 • Mobile First
                </div>
              </div>
              <div className="hidden md:block w-px h-24 bg-purple-300"></div>
              <div className="md:w-3/4 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Banking Revolution</h3>
                <p className="text-gray-600">Launched our award-winning mobile app, making banking accessible anywhere, anytime.</p>
              </div>
            </div>
            {/* Today */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4 text-center md:text-right">
                <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-700 font-semibold">
                  Today • Innovation
                </div>
              </div>
              <div className="hidden md:block w-px h-24 bg-amber-300"></div>
              <div className="md:w-3/4 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Leading the Future</h3>
                <p className="text-gray-600">Continuing to innovate with AI-powered services, advanced security, and sustainable banking practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Join Our Family?</h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Experience the difference of banking with a trusted partner who puts your financial success first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg">
              Open an Account
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
