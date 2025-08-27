import Navigation from "@/components/Navigation";
import { Link } from "wouter";

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-2xl px-12 pt-6 pb-12 shadow-lg border border-gray-200 mb-16">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-light mb-6">The Resonant Builders Blog</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                  Insights, reflections, and deep explorations into building tools that serve human curiosity and foster meaningful digital experiences.
                </p>
              </div>
            </div>

            {/* Featured Posts */}
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8 text-center">Featured Posts</h2>
              <div className="grid gap-8">
                
                {/* Featured Post 1 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="mb-4">
                    <span className="text-sm text-blue-500 font-medium">Philosophy</span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-sm text-gray-500">Coming Soon</span>
                  </div>
                  <h3 className="text-2xl font-medium mb-4">The Ethics of Attention: Building Tools That Respect Human Agency</h3>
                  <p className="text-gray-600 mb-4">
                    Exploring how we can design digital tools that enhance rather than exploit human attention, 
                    focusing on user agency and meaningful interaction over engagement metrics.
                  </p>
                  <div className="text-sm text-gray-500">
                    A deep dive into attention ethics, privacy-first design, and creating technology that serves rather than manipulates.
                  </div>
                </div>

                {/* Featured Post 2 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="mb-4">
                    <span className="text-sm text-blue-500 font-medium">Technology</span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-sm text-gray-500">Coming Soon</span>
                  </div>
                  <h3 className="text-2xl font-medium mb-4">Local-First Architecture: Why Data Sovereignty Matters</h3>
                  <p className="text-gray-600 mb-4">
                    Technical exploration of building applications that prioritize user data ownership 
                    and work seamlessly offline while respecting privacy boundaries.
                  </p>
                  <div className="text-sm text-gray-500">
                    Architecture patterns, implementation strategies, and the future of user-controlled data.
                  </div>
                </div>

                {/* Featured Post 3 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="mb-4">
                    <span className="text-sm text-blue-500 font-medium">Community</span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-sm text-gray-500">Coming Soon</span>
                  </div>
                  <h3 className="text-2xl font-medium mb-4">Building Communities of Practice Around Resonant Tools</h3>
                  <p className="text-gray-600 mb-4">
                    How builders can create sustainable communities focused on knowledge sharing, 
                    collaborative learning, and collective tool development.
                  </p>
                  <div className="text-sm text-gray-500">
                    Community building strategies, open source collaboration, and fostering meaningful connections.
                  </div>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl px-12 pt-6 pb-12 shadow-lg border border-gray-200 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-light mb-4">Explore by Category</h2>
                <p className="text-gray-600">Discover content organized around key themes and topics.</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <h3 className="font-medium mb-2">Philosophy</h3>
                  <p className="text-sm text-gray-600">Ethics, values, and principles behind resonant tool building</p>
                </div>
                <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <h3 className="font-medium mb-2">Technology</h3>
                  <p className="text-sm text-gray-600">Technical approaches, architectures, and implementation insights</p>
                </div>
                <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <h3 className="font-medium mb-2">Community</h3>
                  <p className="text-sm text-gray-600">Building connections and collaborative practices</p>
                </div>
                <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <h3 className="font-medium mb-2">Case Studies</h3>
                  <p className="text-sm text-gray-600">Real-world examples and lessons learned</p>
                </div>
                <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <h3 className="font-medium mb-2">Tools</h3>
                  <p className="text-sm text-gray-600">Reviews, tutorials, and deep dives into specific tools</p>
                </div>
                <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <h3 className="font-medium mb-2">Future</h3>
                  <p className="text-sm text-gray-600">Emerging trends and the future of human-centered technology</p>
                </div>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-white rounded-2xl px-12 pt-6 pb-12 shadow-lg border border-gray-200 text-center">
              <h2 className="text-3xl font-light mb-4">Stay Connected</h2>
              <p className="text-gray-600 mb-6">
                Get notified when we publish new blog posts and exclusive insights from the resonant building community.
              </p>
              <Link href="/newsletter" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors font-medium">
                Subscribe to The Resonant Builders Monthly
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
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