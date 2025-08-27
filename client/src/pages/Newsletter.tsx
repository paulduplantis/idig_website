import Navigation from "@/components/Navigation";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Newsletter() {
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
                  Join our community of builders creating tools that amplify human curiosity and foster meaningful engagement with digital content.
                </p>
                
                <div className="max-w-2xl mx-auto text-left mb-8">
                  <h2 className="text-2xl font-medium mb-4">What You'll Discover</h2>
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

            {/* Previous Issues Preview */}
            <div className="bg-white rounded-2xl px-12 pt-6 pb-12 shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-light mb-4">Previous Issues</h2>
                <p className="text-gray-600">Explore past newsletters and discover insights from the resonant building community.</p>
              </div>
              
              <div className="text-center">
                <p className="text-gray-500 mb-6">Coming Soon</p>
                <p className="text-sm text-gray-400">
                  Our first issue will be published once we have enough subscribers to build a thriving community of resonant builders.
                </p>
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