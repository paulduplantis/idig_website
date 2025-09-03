import Navigation from "@/components/Navigation";
import BlogSignup from "@/components/BlogSignup";
import { Link } from "wouter";

export default function BlogSubscription() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-2xl px-12 pt-6 pb-12 shadow-lg border border-gray-200 mb-16">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-light mb-6">Blog Post Notifications</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                  Get notified immediately when we publish new blog posts with deep explorations into resonant tool building and design philosophy.
                </p>
                
                <div className="max-w-2xl mx-auto text-left mb-8">
                  <h2 className="text-2xl font-medium mb-4">What You'll Receive</h2>
                  <div className="grid md:grid-cols-2 gap-6 text-gray-600">
                    <div>
                      <h3 className="font-medium mb-2">Immediate Notifications</h3>
                      <p className="text-sm">Get notified as soon as we publish new blog posts.</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">In-Depth Content</h3>
                      <p className="text-sm">Technical and philosophical deep dives into tool building.</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Case Studies</h3>
                      <p className="text-sm">Real-world implementation guides and lessons learned.</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Community Discussions</h3>
                      <p className="text-sm">Insights from the resonant builders community.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Signup */}
            <div className="mb-16">
              <BlogSignup />
            </div>

            {/* Success Notice */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-200 mb-16">
              <div className="text-center">
                <h2 className="text-2xl font-medium mb-4 text-green-800">Thank You for Subscribing!</h2>
                <p className="text-green-700 mb-4">
                  You'll receive notifications whenever we publish new blog posts. 
                  In the meantime, explore our existing content.
                </p>
                <div className="flex justify-center gap-4">
                  <Link href="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors font-medium">
                    Read Our Blog
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link href="/about" className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors font-medium">
                    Learn About i<em>DIG</em>
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
                <h2 className="text-3xl font-light mb-4">Prefer Monthly Summaries?</h2>
                <p className="text-gray-600 mb-6">
                  Our monthly newsletter provides curated insights and community spotlights delivered once per month.
                </p>
                <Link href="/monthly-subscription" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors font-medium">
                  Subscribe to Monthly Newsletter
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
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="text-xl font-medium mb-4 text-blue-400">
              iDIG.io
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