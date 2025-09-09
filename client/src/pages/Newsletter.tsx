import Navigation from "@/components/Navigation";
import { Link } from "wouter";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Newsletter() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-10">
        <section className="pt-0 pb-8">
          <div className="max-w-4xl mx-auto px-6">
            <NewsletterSignup />

            {/* Newsletter Preview */}
            <div className="mb-10">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 h-96 flex flex-col">
                <div className="mb-6">
                  <span className="text-sm text-blue-500 font-medium">Monthly Newsletter</span>
                  <span className="text-gray-400 mx-2">•</span>
                  <span className="text-sm text-gray-500">Issue #1 Coming Soon</span>
                  <span className="text-gray-400 mx-2">•</span>
                  <span className="text-sm text-gray-500">By Paul Duplantis</span>
                </div>
                <h3 
                  className="text-3xl font-medium mb-6 hover:text-blue-600 transition-colors cursor-pointer"
                  data-testid="link-newsletter-issue-title"
                  onClick={() => window.location.href = '/newsletter/issue-1'}
                >
                  The Resonant Builders Monthly - Issue #1
                </h3>
                <div className="text-gray-700 leading-relaxed space-y-4 flex-1 overflow-hidden">
                  <p>Welcome to The Resonant Builders Monthly, a newsletter dedicated to exploring how we can build tools that serve human curiosity and foster meaningful digital experiences.</p>
                  
                  <p>Each month, we'll feature insights from builders who are creating tools with intention - tools that prioritize user agency, privacy, and genuine value over engagement metrics and data extraction.</p>
                  
                  <p>In our inaugural issue, we'll explore the principles behind resonant tool building, share stories from early community members, and provide a deep dive into the i<em>DIG</em> framework development process.</p>
                  
                  <p>You'll also discover other projects and builders in our community who are working to create a web more aligned with human flourishing than corporate extraction.</p>
                  
                  <p>This isn't just another tech newsletter - it's a conversation starter about what becomes possible when we build for the health of connections rather than the wealth extracted from them.</p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <button 
                    onClick={() => window.location.href = '/newsletter/issue-1'}
                    className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors font-medium"
                    data-testid="button-read-full-newsletter"
                  >
                    Read Full Newsletter
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-white rounded-2xl px-12 pt-6 pb-12 shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-light mb-4">Subscribe to the Monthly Newsletter</h2>
                <p className="text-gray-600 mb-6">
                  Receive The Resonant Builders Monthly with curated insights, community spotlights, and updates from the resonant building community.
                </p>
              </div>
              
              <NewsletterSignup />
            </div>

            {/* Blog Subscription Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 mb-2">
                Looking for blog post notifications instead?
              </p>
              <Link href="/blog" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors font-medium text-sm">
                Subscribe to Blog Updates
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="text-xl font-medium mb-4 text-blue-400">
              i<em>DIG</em>.io
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