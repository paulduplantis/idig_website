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

            {/* Demo Player */}
            <div className="mb-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium mb-4 charcoal">Experience iDIG</h3>
                <p className="text-gray-600">
                  Explore how iDIG transforms your interaction with web content
                </p>
              </div>
              
              {/* Main Demo Player */}
              <div className="bg-gray-100 rounded-2xl p-12 shadow-lg mb-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-medium mb-4 charcoal">iDIG Demo</h4>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Interactive demonstration of iDIG capabilities including the movable menu system and core features.
                  </p>
                  <Link href="/demo/idig-demo">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-medium">
                      Start Demo
                    </button>
                  </Link>
                </div>
              </div>

              {/* Demo Selector Carousel */}
              <div className="flex items-center gap-4">
                {/* Left Arrow */}
                <button 
                  onClick={() => {
                    const carousel = document.getElementById('demo-carousel');
                    if (carousel) {
                      carousel.scrollBy({ left: -280, behavior: 'smooth' });
                    }
                  }}
                  className="flex-shrink-0 w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 apple-button"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Carousel Container */}
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide flex-1" id="demo-carousel">
                {/* iDIG Lens Card */}
                <Link href="/demo/idig-lens">
                  <div className="relative flex-shrink-0 w-64 cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 apple-button border-2 border-blue-500">
                
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-90"></div>
                  <div className="relative p-6 h-32 flex flex-col justify-between text-white">
                    <div>
                      <h5 className="text-lg font-semibold mb-2">iDIG Lens</h5>
                      <p className="text-xs opacity-90 line-clamp-2">
                        Highlight, save, and explore insights
                      </p>
                    </div>
                    <div className="flex items-center text-xs font-medium">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1" />
                      </svg>
                      <span>Active</span>
                    </div>
                  </div>
                  </div>
                </Link>

                {/* iDIG Feeds Card */}
                <Link href="/demo/idig-feeds">
                  <div className="relative flex-shrink-0 w-64 cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 apple-button border-2 border-transparent hover:border-green-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-90"></div>
                  <div className="relative p-6 h-32 flex flex-col justify-between text-white">
                    <div>
                      <h5 className="text-lg font-semibold mb-2">iDIG Feeds</h5>
                      <p className="text-xs opacity-90 line-clamp-2">
                        Turn searches into discovery engines
                      </p>
                    </div>
                    <div className="flex items-center text-xs font-medium">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                      <span>Select</span>
                    </div>
                  </div>
                  </div>
                </Link>

                {/* iDIG Matching Card */}
                <Link href="/demo/idig-matching">
                  <div className="relative flex-shrink-0 w-64 cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 apple-button border-2 border-transparent hover:border-orange-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-90"></div>
                  <div className="relative p-6 h-32 flex flex-col justify-between text-white">
                    <div>
                      <h5 className="text-lg font-semibold mb-2">iDIG Matching</h5>
                      <p className="text-xs opacity-90 line-clamp-2">
                        AI-powered skill and experience matching
                      </p>
                    </div>
                    <div className="flex items-center text-xs font-medium">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      <span>Select</span>
                    </div>
                  </div>
                  </div>
                </Link>

                {/* iDIG Scenes Card */}
                <Link href="/demo/idig-scenes">
                  <div className="relative flex-shrink-0 w-64 cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 apple-button border-2 border-transparent hover:border-indigo-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-700 opacity-90"></div>
                  <div className="relative p-6 h-32 flex flex-col justify-between text-white">
                    <div>
                      <h5 className="text-lg font-semibold mb-2">iDIG Scenes</h5>
                      <p className="text-xs opacity-90 line-clamp-2">
                        Curate rich experiences around ideas
                      </p>
                    </div>
                    <div className="flex items-center text-xs font-medium">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <span>Select</span>
                    </div>
                  </div>
                  </div>
                </Link>
                </div>

                {/* Right Arrow */}
                <button 
                  onClick={() => {
                    const carousel = document.getElementById('demo-carousel');
                    if (carousel) {
                      carousel.scrollBy({ left: 280, behavior: 'smooth' });
                    }
                  }}
                  className="flex-shrink-0 w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 apple-button"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
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
                iDIG (Deep Inquiry Generator) is a framework and community in development designed to amplify human curiosity through the use of tools to encourage deep and contextual insights into the information we engage with. 
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
                A book inviting resonant builders to create tools and systems to encourage human curiosity and foster meaningful engagement.
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
