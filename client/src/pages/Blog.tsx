import Navigation from "@/components/Navigation";
import { Link, useLocation } from "wouter";
import BlogSignup from "@/components/BlogSignup";
import SEO from "@/components/SEO";

export default function Blog() {
  const [, navigate] = useLocation();

  const handleBlogPostClick = () => {
    navigate("/blog/introduction-to-idig");
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="The Resonant Builder - iDIG Insights & Research"
        description="Explore insights, reflections, and deep explorations into building tools that serve human curiosity. Read about digital research, web annotation, and meaningful technology."
        keywords="iDIG blog, resonant builders, web research blog, annotation tools, digital curiosity, technology insights"
        url="https://www.i-dig.io/blog"
      />
      <Navigation />
      
      <main className="pt-10">
        <section className="pb-8">
          <div className="max-w-4xl mx-auto px-6">
            <BlogSignup />

            {/* Introduction to iDIG Blog Post */}
            <div className="mt-8 mb-10">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 h-96 flex flex-col">
                <div className="mb-6">
                  <span className="text-sm text-blue-500 font-medium">Introduction</span>
                  <span className="text-gray-400 mx-2">•</span>
                  <span className="text-sm text-gray-500">August 30, 2025</span>
                  <span className="text-gray-400 mx-2">•</span>
                  <span className="text-sm text-gray-500">By The Resonant Builder</span>
                </div>
                <h3 
                  onClick={handleBlogPostClick}
                  className="text-3xl font-medium mb-6 hover:text-blue-600 transition-colors cursor-pointer"
                  data-testid="link-blog-post-title"
                >
                  Introduction to i<em>DIG</em>
                </h3>
                <div className="text-gray-700 leading-relaxed space-y-4 flex-1 overflow-hidden">
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
                  
                  <p>With i<em>DIG</em>, I personally want to explore new methodologies to surface opportunities for resonant alignment between people and information. For example, I am currently researching quantum social sciences theory and how this might help define what I call the i<em>DIG</em> attractor that is in development. I just think we are ready to evolve beyond traditional filtering for the way we discover information. I will be writing more about this in my next blog post!</p>
                  
                  <p>Something else I want to explore is how people pay for access. As socially conscious as I am I do realize there is no way to scale tech like this without having some way to pay for it. But, what I won't do is trap the user in difficult to cancel monthly subscriptions, or collect data to target ads against their attention. To answer this, I have built in a token usage system into the framework to look at charging per use and will always make it easy to cancel if monthly is the option chosen.</p>
                  
                  <p>I am also working on incorporating an ad model I call Tunable Ads where the user will be able to filter products and services independently as well as when they are baked into native content. I had written an essay a few years back on this as this is one of my biggest gripes about the evolution of the web in how noisy it has become with ads. I argue it is not advertising if you are interested, so why not build tools to support this?</p>
                  
                  <p>Eventually, I would love to get i<em>DIG</em> to a place where the user interface is highly customizable to allow people to tune the framework and AI summaries to how they see the world. Or to allow communities to customize the framework for their needs. I believe mental health should be the next collective moonshot and see i<em>DIG</em> as a potential tool to privately align social workers more resonantly with people in need to provide access to initial conversations outside institutional barriers.</p>
                  
                  <p>Of course, I don't plan on tackling all of this overnight. It is a journey that I needed to build a foundation to start and build off of. Hopefully with collaborators and community members but at this stage, I really don't know what i<em>DIG</em> is. I almost don't want to define it. Maybe it's part hobby and part obsession. All I know is I have built the foundation and am ready to explore where it can go.</p>
                  
                  <p>But the end goal is to build tools for people to harness their own potential and purpose, not in service of what is built but what resides within them. Tools to help people align resonantly with opportunities, resources for social services, news, products, services or what interests them.</p>
                  
                  <p>This tool is not special. People are special or can be special. This tool is to illuminate this potential, not influence it.</p>
                  
                  <p>As far as how I want to promote i<em>DIG</em>, my preference is to grow the framework and the community organically one resonant exchange at a time. Please consider sharing if these ideas resonant with you and/or you know someone who could add to the conversation.</p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-200">
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

            {/* Admin Link */}
            <div className="mt-4 text-center">
              <Link href="/admin" className="inline-flex items-center text-gray-400 hover:text-gray-600 transition-colors font-medium text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Admin Panel
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
