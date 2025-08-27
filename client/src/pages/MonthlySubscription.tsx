import Navigation from "@/components/Navigation";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Link } from "wouter";

export default function MonthlySubscription() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-2xl px-12 pt-6 pb-12 shadow-lg border border-gray-200 mb-16">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-light mb-6">The Resonant Builders Monthly</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                  Join our monthly newsletter featuring curated insights, community spotlights, and early access to iDIG features.
                </p>
                
                <div className="max-w-2xl mx-auto text-left mb-8">
                  <h2 className="text-2xl font-medium mb-4">What You'll Receive</h2>
                  <div className="grid md:grid-cols-2 gap-6 text-gray-600">
                    <div>
                      <h3 className="font-medium mb-2">Builder Insights</h3>
                      <p className="text-sm">Deep dives into the principles and practices of resonant tool creation.</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Community Features</h3>
                      <p className="text-sm">Spotlights on builders creating tools that serve human curiosity.</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Design Philosophy</h3>
                      <p className="text-sm">Explorations of user agency, privacy-first design, and meaningful interaction.</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Early Access</h3>
                      <p className="text-sm">First looks at iDIG features and exclusive beta access opportunities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mb-16">
              <NewsletterSignup />
            </div>

            {/* Success Notice */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-200 mb-16">
              <div className="text-center">
                <h2 className="text-2xl font-medium mb-4 text-green-800">Thank You for Subscribing!</h2>
                <p className="text-green-700 mb-4">
                  You'll receive your first issue of The Resonant Builders Monthly soon. 
                  In the meantime, explore our other content.
                </p>
                <div className="flex justify-center gap-4">
                  <Link href="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors font-medium">
                    Read Our Blog
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link href="/about" className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors font-medium">
                    Learn About iDIG
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Alternative Options */}
            <div className="bg-white rounded-2xl px-12 pt-6 pb-12 shadow-lg border border-gray-200">
              <div className="text-center">
                <h2 className="text-3xl font-light mb-4">Want More Frequent Updates?</h2>
                <p className="text-gray-600 mb-6">
                  Consider subscribing to our blog notifications for immediate updates when we publish new content.
                </p>
                <Link href="/blog-subscription" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors font-medium">
                  Subscribe to Blog Updates
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="text-xl font-medium mb-4">
              <span className="logo-i">i</span>
              <span className="logo-dig ml-1">DIG</span>
              <span className="logo-io">.io</span>
            </div>
            <p className="text-gray-400 text-sm">
              Resonant Tools for Curious Minds
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}