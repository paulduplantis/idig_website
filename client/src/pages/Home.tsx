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
                <span className="logo-io">.io</span>
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

            {/* Video Demo Placeholder */}
            <div className="bg-gray-100 rounded-2xl p-12 shadow-lg">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-4 charcoal">Watch the Demo</h3>
                <p className="text-gray-600 mb-6">
                  See how iDIG transforms the way you engage with web content
                </p>
                <div className="text-sm text-gray-500">
                  Video demo coming soon
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
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Building tools that help curious minds engage more deeply with the content they discover online.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-medium mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe the web should be a place for deep engagement, not surface-level consumption. 
                  iDIG provides resonant tools that help you create meaningful connections with content, 
                  fostering understanding and insight.
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
