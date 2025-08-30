import Navigation from "@/components/Navigation";
import SlidePresentation from "@/components/SlidePresentation";
import NewsletterSignup from "@/components/NewsletterSignup";
import BlogSignup from "@/components/BlogSignup";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";

interface DemoContent {
  id: string;
  title: string;
  description: string;
  features?: string[];
  videoUrl?: string;
}

const demoContents: Record<string, DemoContent> = {
  'idig-demo': {
    id: 'idig-demo',
    title: 'i<em>DIG</em> Demo',
    description: 'Interactive demonstration of i<em>DIG</em> capabilities including the movable menu system and core features.'
  },
  'idig-lens': {
    id: 'idig-lens',
    title: 'i<em>DIG</em> Lens Demo',
    description: 'Highlight and save text from any webpage to build your personal knowledge base. Transform casual browsing into deep learning by capturing insights as you discover them.',
    features: ['Highlight text across any webpage', 'Save insights to personal knowledge base', 'Build connections between ideas', 'Export and organize discoveries'],
    videoUrl: 'https://f004.backblazeb2.com/file/idigdemo/idig_demo_final.mp4'
  },
  'idig-feeds': {
    id: 'idig-feeds',
    title: 'i<em>DIG</em> Feeds Demo',
    description: 'Convert your search queries into intelligent discovery feeds. Track topics of interest and receive curated content that deepens your understanding over time.',
    features: ['Turn searches into smart feeds', 'Track topics automatically', 'Curated content delivery', 'Deep learning pathways']
  },
  'idig-matching': {
    id: 'idig-matching',
    title: 'i<em>DIG</em> Matching Demo',
    description: 'Intelligent matching system that connects your skills, interests, and learning goals with relevant opportunities, people, and resources across the web.',
    features: ['AI-powered skill matching', 'Connect with opportunities', 'Find relevant resources', 'Network with like-minded people']
  },
  'idig-scenes': {
    id: 'idig-scenes',
    title: 'i<em>DIG</em> Scenes Demo',
    description: 'Create immersive, contextual environments around your ideas. Organize related content, conversations, and insights into rich, explorable scenes.',
    features: ['Create idea environments', 'Organize related content', 'Build contextual scenes', 'Explore connections visually']
  }
};

export default function Home() {
  const [selectedDemo, setSelectedDemo] = useState<string>('idig-lens');
  const currentDemo = demoContents[selectedDemo];

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
                <span className="logo-i" style={{fontStyle: 'normal'}}>i</span>
                <span className="logo-dig ml-2"><em>DIG</em></span>
              
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

            {/* iDIG Solutions Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-6">i<em>DIG</em> Solutions</h2>
            </div>

            {/* Demo Player */}
            <div className="mb-8" data-testid="demo-section">
              
              {/* Main Demo Player */}
              <div className="bg-white rounded-2xl px-12 pt-6 pb-12 shadow-lg border border-gray-200 mb-8">
                <div className="text-center">
                  <div className="mb-6">
                    <h4 className="text-2xl font-medium mb-4 charcoal">{currentDemo.title.replace(' Demo', '')}</h4>
                    <img 
                      src="/attached_assets/image_1756278431066.png" 
                      alt="i<em>DIG</em> Interface"
                      className="w-full max-w-2xl h-auto rounded-lg shadow-lg mx-auto"
                    />
                  </div>

                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    {currentDemo.description}
                  </p>
                  {currentDemo.features && (
                    <div className="mb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600 text-sm max-w-2xl mx-auto">
                        {currentDemo.features.map((feature, index) => (
                          <div key={index} className="flex items-center justify-center">
                            <svg className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <Link href={`/demo/${currentDemo.id}`}>
                    <Button className="apple-button px-8 py-3 font-medium">
                      {currentDemo.videoUrl ? 'View Full Demo' : 'Start Demo'}
                    </Button>
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
                <div 
                  onClick={() => setSelectedDemo('idig-lens')}
                  className={`flex-shrink-0 w-64 cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 apple-button border-2 bg-white ${
                    selectedDemo === 'idig-lens' ? 'border-blue-500' : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="p-6 h-32 flex flex-col justify-between">
                    <div>
                      <h5 className="text-lg font-semibold mb-2 text-gray-800">i<em>DIG</em> Lens</h5>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        Highlight, save, and explore insights
                      </p>
                    </div>
                    <div className="flex items-center text-xs font-medium text-blue-600">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1" />
                      </svg>
                      <span>Active</span>
                    </div>
                  </div>
                </div>

                {/* iDIG Feeds Card */}
                <div 
                  onClick={() => setSelectedDemo('idig-feeds')}
                  className={`flex-shrink-0 w-64 cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 apple-button border-2 bg-white ${
                    selectedDemo === 'idig-feeds' ? 'border-green-500' : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <div className="p-6 h-32 flex flex-col justify-between">
                    <div>
                      <h5 className="text-lg font-semibold mb-2 text-gray-800">i<em>DIG</em> Feeds</h5>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        Turn searches into discovery engines
                      </p>
                    </div>
                    <div className="flex items-center text-xs font-medium text-green-600">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                      <span>Select</span>
                    </div>
                  </div>
                </div>

                {/* iDIG Matching Card */}
                <div 
                  onClick={() => setSelectedDemo('idig-matching')}
                  className={`flex-shrink-0 w-64 cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 apple-button border-2 bg-white ${
                    selectedDemo === 'idig-matching' ? 'border-orange-500' : 'border-gray-200 hover:border-orange-300'
                  }`}
                >
                  <div className="p-6 h-32 flex flex-col justify-between">
                    <div>
                      <h5 className="text-lg font-semibold mb-2 text-gray-800">i<em>DIG</em> Matching</h5>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        AI-powered skill and experience matching
                      </p>
                    </div>
                    <div className="flex items-center text-xs font-medium text-orange-600">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      <span>Select</span>
                    </div>
                  </div>
                </div>

                {/* iDIG Scenes Card */}
                <div 
                  onClick={() => setSelectedDemo('idig-scenes')}
                  className={`flex-shrink-0 w-64 cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 apple-button border-2 bg-white ${
                    selectedDemo === 'idig-scenes' ? 'border-indigo-500' : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="p-6 h-32 flex flex-col justify-between">
                    <div>
                      <h5 className="text-lg font-semibold mb-2 text-gray-800">i<em>DIG</em> Scenes</h5>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        Curate rich experiences around ideas
                      </p>
                    </div>
                    <div className="flex items-center text-xs font-medium text-indigo-600">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <span>Select</span>
                    </div>
                  </div>
                </div>
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
        <section className="pt-8 pb-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-2xl px-12 pt-6 pb-12 shadow-lg border border-gray-200 mb-16">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-light mb-6">About i<em>DIG</em></h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                  i<em>DIG</em> (Deep Inquiry Generator) is a framework and community in development designed to amplify human curiosity through the use of tools to encourage deep and contextual insights into the information we engage with. 
                </p>
                <Link href="/about" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors font-medium">
                  More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-medium mb-4">i<em>DIG</em> Principles</h3>
                <ul className="text-gray-600 leading-relaxed space-y-3">
                  <li>• Local storage or private storage for what is consumed, created or shared</li>
                  <li>• No cookies to track or share activity</li>
                  <li>• No 3rd party ad networks</li>
                  <li>• No passive popups</li>
                  <li>• User Interface to encourage resonant and deep discovery through the use of highlighting, microlinks, filtering, and resonant sharing</li>
                  <li>• AI summaries controlled by the user</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-medium mb-4">The i<em>DIG</em> Vision</h3>
                <div className="text-gray-600 leading-relaxed space-y-3">
                  <p>To work toward building resonance in the connection by creating tools to align opportunities, resources, and information with those deep within communities.</p>
                  <p>To inspire builders to create their own frameworks or collaborate with i<em>DIG</em> to add more resonance into the connection.</p>
                  <p>To build tools for positive social and community impact.</p>
                  <p>To build tools to encourage deep inquiry and purposeful engagement.</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <NewsletterSignup />
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-2xl px-12 pt-6 pb-12 shadow-lg border border-gray-200">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-light mb-6">The Resonant Builders Blog</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                  Insights, reflections, and deep explorations into building tools that serve human curiosity and foster meaningful digital experiences.
                </p>
                <Link href="/blog" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors font-medium mb-8">
                  Explore the Blog
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                {/* Blog Subscription */}
                <div className="max-w-md mx-auto">
                  <BlogSignup />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Preview Section */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-2xl px-12 pt-6 pb-12 shadow-lg border border-gray-200">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-light mb-6">We the Resonant Builders</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                  A book inviting resonant builders to create tools and systems to encourage human curiosity and foster meaningful engagement.
                </p>
                <p className="text-lg text-gray-500 mb-6">Coming Soon</p>
                <Link href="/book" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors font-medium">
                  Learn more
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
            <p>&copy; 2024 i<em>DIG</em>.io. All rights reserved. Built for curious minds.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
