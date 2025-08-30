import Navigation from "@/components/Navigation";
import { Link, useLocation } from "wouter";
import BlogSignup from "@/components/BlogSignup";

export default function Blog() {
  const [, navigate] = useLocation();

  const handleBlogPostClick = () => {
    navigate("/blog/introduction-to-idig");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-2xl px-12 pt-6 pb-12 shadow-lg border border-gray-200 mb-16">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-light mb-6">The Resonant Builders Blog</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                  Insights, reflections, and deep explorations into building tools that serve human curiosity and foster meaningful digital experiences.
                </p>
                <Link href="/#demo-section" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors font-medium mb-4">
                  Watch the i<em>DIG</em> Demo
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Introduction to iDIG Blog Post */}
            <div className="mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 h-96 overflow-hidden">
                <div className="mb-6">
                  <span className="text-sm text-blue-500 font-medium">Introduction</span>
                  <span className="text-gray-400 mx-2">•</span>
                  <span className="text-sm text-gray-500">August 30, 2025</span>
                </div>
                <h3 
                  onClick={handleBlogPostClick}
                  className="text-3xl font-medium mb-6 hover:text-blue-600 transition-colors cursor-pointer"
                  data-testid="link-blog-post-title"
                >
                  Introduction to i<em>DIG</em>
                </h3>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>I have to admit, I don't know what i<em>DIG</em> will become or if it will become anything of note for that matter. All I know is I needed to build it. Maybe just to prove to myself I could but also to possibly start a conversation around what role the individual has in the information they create, consume, and share. Should they be in the driver seat or merely the passengers? Should they be in control of their experiences or should these experiences become available to the highest bidder?</p>
                  
                  <p>I have lived long enough to watch the birth of the web founded on the principles of openness and collaboration evolve into a siloed web of influence we see today. Certainly much good has come from it but it would be hard to argue that people are in control.</p>
                  
                  <p>But what if they were in control and the resulting experiences were centered on providing agency and privacy? What if every element they engaged with was intended to spark curiosity and understanding of a subject to provide context and clarity in service of the quality of interactions rather than just the quantity of them.</p>
                  
                  <p>To me i<em>DIG</em> is an experiment to explore the possibilities of this intention to service quality over quantity. What I am launching today is what I am calling Phase I. This is in an Alpha test phase and is a very rough sketch of an idea I have been carrying for over 20 years.</p>
                  
                  <p>The rise of GenAI allowed me to manifest these ideas into reality as I am neither a coder nor a software developer. Not to say blood, sweat, and tears were not shed over the last year, as i<em>DIG</em> was built from scratch. I can say from experience that GenAI does not magically build solutions for you, especially at this level.</p>
                  
                  <p>But moving forward I don't see i<em>DIG</em> as a traditional company to own these ideas but more of a path to explore. Or if I do find traction, the only path I could see moving forward to maintain quality of experiences in scaling this framework would be to set up a worker co-op to provide resonant ownership of the framework to every person involved in the growth of it.</p>
                  
                  <p>But at the very least, maybe this effort inspires potential collaborators to work with me on seeing where this path will lead or maybe it inspires somebody to build something on their own to provide agency and privacy to people. It doesn't matter to me. I just want to be part of the conversation.</p>
                  
                  <p>In service of this conversation, I am also launching the i<em>DIG</em> blog which will feature ideas and updates on the i<em>DIG</em> framework journey as well as The Resonant Builders Monthly which will be a monthly newsletter to feature recent blog posts but more importantly feature what other builders are up to in service of building a web more in tune with people being in control of their experiences.</p>
                  
                  <p>I am also wrapping up a book on this journey titled We the Resonant Builders. Coming soon!</p>
                  
                  <p>I argue what is possible when more people start to build for the health of the connection more than the wealth extracted from it. This is the conversation I want to start.</p>
                  
                  <p>With i<em>DIG</em>, I personally want to explore new methodologies to surface opportunities for resonant alignment between people and information. I have been recently researching quantum social sciences theory and how this might help define what I call the i<em>DIG</em> attractor that is in development. I just think we are ready to evolve beyond traditional filtering for the way we discover information. I will be writing more about this in my next blog post!</p>
                  
                  <p>Again, I really don't know what i<em>DIG</em> is. I almost don't want to define it. Maybe it's part hobby and part obsession. All I know is I have built the foundation of it and am ready to explore where it can go. More importantly what I might uncover from what other people are building that could help mold this into something more than what I can imagine and possibly inspire others to build what they have not imagined.</p>
                  
                  <p>But the end goal is to build tools for people to harness their own potential and purpose, not in service of what is built but what resides within them. Tools to help people align resonantly with opportunities, resources for social services, news, or what interests them.</p>
                  
                  <p>This tool is not special. People are or can be special. This tool is to illuminate this potential, not influence it.</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button 
                    onClick={handleBlogPostClick}
                    className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors font-medium"
                    data-testid="button-read-full-post"
                  >
                    Read Full Post
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
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

            {/* Blog Subscription */}
            <div className="bg-white rounded-2xl px-12 pt-6 pb-12 shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-light mb-4">Get Blog Updates</h2>
                <p className="text-gray-600 mb-6">
                  Subscribe to receive notifications when we publish new blog posts and insights from the resonant building community.
                </p>
              </div>
              
              <BlogSignup />
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-2">
                  Looking for our monthly newsletter instead?
                </p>
                <Link href="/newsletter" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors font-medium text-sm">
                  Subscribe to The Resonant Builders Monthly
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