import Navigation from "@/components/Navigation";
import { Link } from "wouter";

export default function NewsletterIssue() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-10">
        <section className="pt-0 pb-8">
          <div className="max-w-4xl mx-auto px-6">
            
            {/* Back Navigation */}
            <div className="mb-6">
              <Link href="/newsletter" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Newsletter
              </Link>
            </div>

            {/* Newsletter Header */}
            <div className="bg-white rounded-2xl px-12 pt-8 pb-12 shadow-lg border border-gray-200">
              <article className="prose prose-lg max-w-none">
                <div className="text-center mb-8">
                  <div className="mb-4">
                    <span className="text-sm text-blue-500 font-medium">The Resonant Builders Monthly</span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-sm text-gray-500">Issue #1</span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-sm text-gray-500">September 2025</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-light mb-6">Welcome to The Resonant Builders Monthly</h1>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Exploring tools that amplify human curiosity and foster meaningful digital experiences.
                  </p>
                </div>

                {/* Newsletter Content */}
                <div className="text-gray-700 leading-relaxed space-y-6 text-left">
                  <h2 className="text-2xl font-medium mb-4">A Letter from the Editor</h2>
                  
                  <p>Welcome to the inaugural issue of The Resonant Builders Monthly. I'm thrilled you've joined this community of builders who believe technology should serve human curiosity rather than exploit it.</p>
                  
                  <p>This newsletter exists because I believe we're at a critical moment in the evolution of digital tools. We can choose to build for engagement metrics and data extraction, or we can choose to build for human agency, privacy, and genuine value. This choice will define the next chapter of our digital lives.</p>
                  
                  <h2 className="text-2xl font-medium mb-4 mt-8">What Makes a Tool "Resonant"?</h2>
                  
                  <p>A resonant tool is one that amplifies rather than replaces human capability. It respects user agency, protects privacy, and creates genuine value without manipulation. These tools don't seek to capture attention - they seek to enhance understanding.</p>
                  
                  <p>The i<em>DIG</em> framework embodies these principles by putting users in control of their information discovery process. Every interaction is designed to spark curiosity and provide context, not to maximize engagement time.</p>
                  
                  <h2 className="text-2xl font-medium mb-4 mt-8">Community Spotlight</h2>
                  
                  <p>This month, we're highlighting builders who are creating tools with similar intentions. From privacy-first social platforms to educational tools that prioritize deep learning over quick consumption, our community is proving that another way is possible.</p>
                  
                  <p>If you're building something that aligns with these values, we'd love to feature your work. Reach out and share your story with the community.</p>
                  
                  <h2 className="text-2xl font-medium mb-4 mt-8">Looking Ahead</h2>
                  
                  <p>Next month, we'll dive deeper into the technical philosophy behind resonant tool design, share implementation strategies, and feature more builders from our growing community.</p>
                  
                  <p>Until then, keep building with intention. The web needs more tools that serve human flourishing.</p>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                    <p className="text-gray-600 italic">
                      Paul Duplantis<br/>
                      Founder, i<em>DIG</em>
                    </p>
                  </div>
                </div>
              </article>
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