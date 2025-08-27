import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

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

            {/* Subscription Options */}
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8 text-center">Choose Your Subscription</h2>
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Monthly Newsletter */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-medium mb-4">Monthly Newsletter</h3>
                    <p className="text-gray-600 mb-6">
                      Receive The Resonant Builders Monthly with curated insights, community spotlights, and iDIG updates delivered once per month.
                    </p>
                    <div className="text-sm text-gray-500 mb-6">
                      <strong>What you'll get:</strong>
                      <ul className="list-disc list-inside mt-2 text-left space-y-1">
                        <li>Monthly curated content and insights</li>
                        <li>Community builder spotlights</li>
                        <li>Early access to iDIG features</li>
                        <li>Recommended resources and reading</li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link href="/monthly-subscription">
                      <Button className="apple-button px-8 py-3 font-medium" data-testid="button-monthly-subscribe">
                        Subscribe to Monthly Newsletter
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Blog Updates */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-medium mb-4">Blog Post Notifications</h3>
                    <p className="text-gray-600 mb-6">
                      Get notified whenever we publish new blog posts with deep explorations into resonant tool building and design philosophy.
                    </p>
                    <div className="text-sm text-gray-500 mb-6">
                      <strong>What you'll get:</strong>
                      <ul className="list-disc list-inside mt-2 text-left space-y-1">
                        <li>Immediate notification of new blog posts</li>
                        <li>In-depth technical and philosophical content</li>
                        <li>Case studies and implementation guides</li>
                        <li>Community discussions and insights</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Blog Signup Form */}
                  <div className="text-center">
                    <Link href="/blog-subscription">
                      <Button className="apple-button px-8 py-3 font-medium" data-testid="button-blog-subscribe">
                        Subscribe to Blog Updates
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Both Subscriptions Option */}
              <div className="mt-8 text-center">
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <h3 className="text-xl font-medium mb-3">Want Both?</h3>
                  <p className="text-gray-600 mb-4">
                    You can subscribe to both the monthly newsletter and blog notifications to stay fully connected with the resonant builders community.
                  </p>
                  <p className="text-sm text-gray-500">
                    Simply sign up for each option above. You can manage your preferences or unsubscribe from either at any time.
                  </p>
                </div>
              </div>
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