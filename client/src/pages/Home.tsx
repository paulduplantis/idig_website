import Navigation from "@/components/Navigation";
import SlidePresentation from "@/components/SlidePresentation";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <main className="pt-20">
        <section className="min-h-screen flex flex-col justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            
            {/* Logo and Tagline */}
            <div className="mb-16">
              <h1 className="text-5xl md:text-7xl font-light mb-6">
                <span className="logo-i">i</span>
                <span className="logo-dig ml-2">DIG</span>
              
              </h1>
              <p className="text-xl md:text-2xl font-medium">
                <span className="apple-blue">Resonant</span>
                <span className="charcoal"> Tools for </span>
                <span className="apple-blue">Curious</span>
                <span className="charcoal"> Minds</span>
              </p>
            </div>

            {/* Slide Presentation */}
            <SlidePresentation />

            {/* Demo Selection Cards */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium mb-4 charcoal">Experience iDIG</h3>
                <p className="text-gray-600">
                  Explore how iDIG transforms your interaction with web content
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* iDIG Lens */}
                <div className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 apple-button">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-90"></div>
                  <div className="relative p-8 h-64 flex flex-col justify-between text-white">
                    <div>
                      <h4 className="text-xl font-semibold mb-3">iDIG Lens</h4>
                      <p className="text-sm opacity-90 leading-relaxed">
                        See the web through your own lens — highlight, save, and explore insights with snapshots, breadcrumbs, and microlinks.
                      </p>
                    </div>
                    <div className="flex items-center text-sm font-medium">
                      <span>Watch Demo</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* iDIG Feeds */}
                <div className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 apple-button">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-90"></div>
                  <div className="relative p-8 h-64 flex flex-col justify-between text-white">
                    <div>
                      <h4 className="text-xl font-semibold mb-3">iDIG Feeds</h4>
                      <p className="text-sm opacity-90 leading-relaxed">
                        Turn any search into a discovery engine by curating live job, article, or opportunity feeds powered by Boolean logic.
                      </p>
                    </div>
                    <div className="flex items-center text-sm font-medium">
                      <span>Watch Demo</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* iDIG Matching */}
                <div className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 apple-button">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-90"></div>
                  <div className="relative p-8 h-64 flex flex-col justify-between text-white">
                    <div>
                      <h4 className="text-xl font-semibold mb-3">iDIG Matching</h4>
                      <p className="text-sm opacity-90 leading-relaxed">
                        Instantly align resumes, job descriptions, or people by matching skills, experiences, and insights using AI-powered logic.
                      </p>
                    </div>
                    <div className="flex items-center text-sm font-medium">
                      <span>Watch Demo</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* iDIG Scenes */}
                <div className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 apple-button">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-700 opacity-90"></div>
                  <div className="relative p-8 h-64 flex flex-col justify-between text-white">
                    <div>
                      <h4 className="text-xl font-semibold mb-3">iDIG Scenes</h4>
                      <p className="text-sm opacity-90 leading-relaxed">
                        Curate rich experiences around books, tools, or ideas by weaving together articles, products, and personal commentary.
                      </p>
                    </div>
                    <div className="flex items-center text-sm font-medium">
                      <span>Watch Demo</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-20 light-gray-bg">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-6">About iDIG</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                iDIG (Deep Inquiry Generator) is a framework designed to amplify human curiosity through the use of tools to encourage deep and contextual insights into web content. 
              </p>
              <Link href="/about" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors font-medium">
                More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-medium mb-4">Our Principles</h3>
                <p className="text-gray-600 leading-relaxed">
                  No cookies to track or resell user activity. No passive popups. No data handled outside local or private storage. No outside advertising networks. UI built around user agency.

                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-medium mb-4">The Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  A web where every curious mind has access to tools that amplify their ability to learn, 
                  connect, and create. Where technology serves human curiosity rather than exploiting it.
                </p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <NewsletterSignup />
          </div>
        </section>

        {/* Book Preview Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-6">We the Resonant Builders</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A guide to creating tools and systems that resonate with human curiosity and foster meaningful engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* Featured Chapters */}
              <Link href="/book/chapter/1" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 group block">
                <div className="text-blue-500 text-sm font-medium mb-2">Chapter 1</div>
                <h3 className="text-lg font-medium mb-3 group-hover:text-blue-500 transition-colors">
                  The Foundation of Resonance
                </h3>
                <p className="text-gray-500 text-sm">
                  Understanding the principles that make tools truly resonate with users.
                </p>
              </Link>

              <Link href="/book/chapter/2" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 group block">
                <div className="text-blue-500 text-sm font-medium mb-2">Chapter 2</div>
                <h3 className="text-lg font-medium mb-3 group-hover:text-blue-500 transition-colors">
                  Curiosity-Driven Design
                </h3>
                <p className="text-gray-500 text-sm">
                  Designing interfaces that nurture and amplify human curiosity.
                </p>
              </Link>

              <Link href="/book/chapter/3" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 group block">
                <div className="text-blue-500 text-sm font-medium mb-2">Chapter 3</div>
                <h3 className="text-lg font-medium mb-3 group-hover:text-blue-500 transition-colors">
                  Building for Depth
                </h3>
                <p className="text-gray-500 text-sm">
                  Creating experiences that encourage deep engagement over surface-level interaction.
                </p>
              </Link>
            </div>

            <div className="text-center">
              <Link href="/book">
                <Button className="apple-button bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 text-lg font-medium shadow-lg">
                  View All Chapters
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-xl font-medium mb-4">
                <span className="logo-i">i</span>
                <span className="logo-dig ml-1">DIG</span>
                <span className="logo-io">.io</span>
              </div>
              <p className="text-gray-400 text-sm">
                Resonant Tools for Curious Minds
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div><Link href="#" className="hover:text-white transition-colors">Features</Link></div>
                <div><Link href="#" className="hover:text-white transition-colors">Early Access</Link></div>
                <div><Link href="#" className="hover:text-white transition-colors">Documentation</Link></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div><Link href="/book" className="hover:text-white transition-colors">We the Resonant Builders</Link></div>
                <div><Link href="#" className="hover:text-white transition-colors">Blog</Link></div>
                <div><Link href="#" className="hover:text-white transition-colors">Newsletter</Link></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div><Link href="/about" className="hover:text-white transition-colors">About</Link></div>
                <div><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></div>
                <div><Link href="#" className="hover:text-white transition-colors">Privacy</Link></div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 iDIG.io. All rights reserved. Built for curious minds.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
