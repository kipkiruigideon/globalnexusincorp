export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-300 text-sm font-medium mb-4">
              Legal Information
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-400 mt-4">Last updated: January 2024</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mr-3 text-sm font-bold">1</span>
                Information We Collect
              </h2>
              <div className="pl-11">
                <p className="text-gray-600 mb-4">
                  We collect information you provide directly to us, such as when you create an account, make a transaction, or contact us for support. This includes:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Financial information (account numbers, transaction history)</li>
                  <li>Identity verification documents</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mr-3 text-sm font-bold">2</span>
                How We Use Your Information
              </h2>
              <div className="pl-11">
                <p className="text-gray-600 mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and security alerts</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Detect, investigate, and prevent fraudulent transactions</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mr-3 text-sm font-bold">3</span>
                Information Sharing
              </h2>
              <div className="pl-11">
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>With your consent or at your direction</li>
                  <li>With service providers who perform services on our behalf</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect the rights and safety of our users and the public</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mr-3 text-sm font-bold">4</span>
                Data Security
              </h2>
              <div className="pl-11">
                <p className="text-gray-600 mb-4">
                  We implement industry-standard security measures to protect your personal information, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>256-bit SSL encryption for all data transmissions</li>
                  <li>Multi-factor authentication options</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Employee training on data protection practices</li>
                  <li>Secure data centers with 24/7 monitoring</li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mr-3 text-sm font-bold">5</span>
                Cookies and Tracking
              </h2>
              <div className="pl-11">
                <p className="text-gray-600 mb-4">
                  We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Essential cookies for site functionality</li>
                  <li>Analytics cookies to improve our services</li>
                  <li>Preference cookies to remember your settings</li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mr-3 text-sm font-bold">6</span>
                Your Rights
              </h2>
              <div className="pl-11">
                <p className="text-gray-600 mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Request deletion of your data (subject to legal requirements)</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your data in a portable format</li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mr-3 text-sm font-bold">7</span>
                Children&apos;s Privacy
              </h2>
              <div className="pl-11">
                <p className="text-gray-600">
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mr-3 text-sm font-bold">8</span>
                Third-Party Links
              </h2>
              <div className="pl-11">
                <p className="text-gray-600">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mr-3 text-sm font-bold">9</span>
                Changes to This Policy
              </h2>
              <div className="pl-11">
                <p className="text-gray-600">
                  We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mr-3 text-sm font-bold">10</span>
                Contact Us
              </h2>
              <div className="pl-11">
                <p className="text-gray-600 mb-4">
                  If you have any questions about this privacy policy or our privacy practices, please contact us:
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-600"><strong>Email:</strong> privacy@globalnexusincorp.com</p>
                  <p className="text-gray-600"><strong>Phone:</strong> 1-800-BANKING</p>
                  <p className="text-gray-600"><strong>Address:</strong> 123 Banking Street, Financial District, New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
