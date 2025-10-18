import Navigation from "@/components/Navigation";
import BlogSignup from "@/components/BlogSignup";
import SEO from "@/components/SEO";
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
    description: 'Universal bookmarking, highlighting, microlinking and web reader. Take snapshots of full pages, generate customized AI summaries, share microlinks to serve as breadcrumbs for discovery. Tag and filter content stored on local devices.',
    features: ['Status: Chrome extension in alpha testing.'],
    videoUrl: 'https://f004.backblazeb2.com/file/idigdemo/idig_demo_final.mp4'
  },
  'idig-feeds': {
    id: 'idig-feeds',
    title: 'i<em>DIG</em> Feeds Demo',
    description: 'Bring information into iDIG Lens through imports, RSS Feeds, and API calls.\n\nOrganize ingested content into filterable cards for tunable discovery. Use cases include ingesting news, statistical data, resumes, job descriptions, contact info, affiliate products/services, research documents, etc.\n\nDiscover and organize insights across diverse information streams, applying tags, search, highlights, and microlinks for deeper navigation.\n\nAll information remains in local or private storage, ensuring sovereignty over what is discovered and shared.',
    features: ['Status: In early development (with Desktop & Web App)']
  },
  'idig-matching': {
    id: 'idig-matching',
    title: 'i<em>DIG</em> Matching Demo',
    description: 'Match and mashup information from cards in Lens from iDIG Feeds to surface relationships that may otherwise remain hidden. Use cases include matching resumes to job descriptions, social worker profiles to individuals in need, or data to emerging trends.\n\nAccelerate decision-making by surfacing the strongest alignments across diverse inputs. Reduce noise by tuning matches to their specific context and goals.\n\nAll matches remain stored in local or private environments, protecting sensitive information.',
    features: ['Status: Next in development after iDIG Feeds']
  },
  'idig-attractor': {
    id: 'idig-attractor',
    title: 'i<em>DIG</em> Attractor Demo',
    description: 'Currently in alpha development as an experiment in shaping the flow of discovery. Filter and refine feeds through both AI summaries and adaptive UI layouts that surface resonance across diverse inputs.\n\nUse cases include aligning resumes with job descriptions, connecting social worker profiles to needs, tuning research and news flows, or discovering books, movies, and sports that resonate.\n\nThe design draws on ideas from Quantum Social Sciences, exploring how entangled patterns might guide collective insight.\n\nAll attractor settings remain in local or private storage, ensuring sovereignty over what is discovered and shared.',
    features: ['Status: Next in development after iDIG Matching']
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
      <SEO 
        title="iDIG - Resonant Tools for Curious Minds"
        description="Discover iDIG, an innovative web highlighter and annotation tool designed to foster curiosity, enhance research, and build meaningful digital experiences. Join The Resonant Builders community."
        keywords="web highlighter, annotation tool, research tool, digital curiosity, web research, knowledge management, browser extension, iDIG"
        url="https://www.i-dig.io/"
      />
      <Navigation />

      {/* Hero Section */}
      <main className="pt-10">
        <section className="min-h-screen flex flex-col justify-center">
          {/* Consistent container wrapper for all content */}
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">

            {/* About iDIG Card */}
            <div className="bg-white rounded-2xl px-6 sm:px-12 pt-6 pb-12 shadow-lg border border-gray-200 mb-8">
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

            {/* Demo Player */}
            <div className="mb-8" data-testid="demo-section">

              {/* Main Demo Player */}
              <div className="bg-white rounded-2xl px-6 sm:px-12 pt-6 pb-12 shadow-lg border border-gray-200 mb-8 min-h-[28rem]">
                <div className="text-center h-full flex flex-col">
                  <div className="mb-2">
                    <h4 className="text-4xl md:text-5xl font-light mb-4">
                      {selectedDemo === 'idig-lens' && <>i<em>DIG</em> Lens</>}
                      {selectedDemo === 'idig-feeds' && <>i<em>DIG</em> Feeds</>}
                      {selectedDemo === 'idig-matching' && <>i<em>DIG</em> Matching</>}
                      {selectedDemo === 'idig-attractor' && <>i<em>DIG</em> Attractor</>}
                      {selectedDemo === 'idig-scenes' && <>i<em>DIG</em> Scenes</>}
                      {selectedDemo === 'idig-demo' && <>i<em>DIG</em></>}
                    </h4>
                    {selectedDemo !== 'idig-feeds' && selectedDemo !== 'idig-matching' && selectedDemo !== 'idig-attractor' && (
                     <img 
                        src="/images/image_1756278431066.png" 
                        alt="i<em>DIG</em> Interface"
                        className="w-full max-w-2xl h-auto rounded-lg shadow-lg mx-auto"
                      />
                    )}
                  </div>

                  <div className="text-gray-600 mb-4 max-w-2xl mx-auto">
                    {selectedDemo === 'idig-feeds' ? (
                      <div className="space-y-4">
                        <p>Bring information into iDIG Lens through imports, RSS Feeds, and API calls.</p>
                        <p>Organize ingested content into filterable cards for tunable discovery.</p>
                        <p>Use cases include ingesting news, statistical data, resumes, job descriptions, contact info, affiliate products/services, research documents, etc.</p>
                        <p>Discover and organize insights across diverse information streams, applying tags, search, highlights, and microlinks for deeper navigation.</p>
                        <p>All information remains in local or private storage, ensuring sovereignty over what is discovered and shared.</p>
                      </div>
                    ) : selectedDemo === 'idig-matching' ? (
                      <div className="space-y-4">
                        <p>Match and mashup information from cards in Lens from iDIG Feeds to surface relationships that may otherwise remain hidden.</p>
                        <p>Use cases include matching resumes to job descriptions, social worker profiles to individuals in need, or data to emerging trends.</p>
                        <p>Accelerate decision-making by surfacing the strongest alignments across diverse inputs. Reduce noise by tuning matches to their specific context and goals.</p>
                        <p>All matches remain stored in local or private environments, protecting sensitive information.</p>
                      </div>
                    ) : selectedDemo === 'idig-attractor' ? (
                      <div className="space-y-4">
                        <p>Currently in alpha development as an experiment in shaping the flow of discovery. Filter and refine feeds through both AI summaries and adaptive UI layouts that surface resonance across diverse inputs.</p>
                        <p>Use cases include aligning resumes with job descriptions, connecting social worker profiles to needs, tuning research and news flows, or discovering books, movies, and sports that resonate.</p>
                        <p>The design draws on ideas from Quantum Social Sciences, exploring how entangled patterns might guide collective insight.</p>
                        <p>All attractor settings remain in local or private storage, ensuring sovereignty over what is discovered and shared.</p>
                      </div>
                    ) : selectedDemo === 'idig-scenes' ? (
                      <div className="space-y-4">
                        <p>Create immersive, contextual environments around your ideas. Organize related content, conversations, and insights into rich, explorable scenes.</p>
                      </div>
                    ) : selectedDemo === 'idig-lens' ? (
                      <p>Universal bookmarking, highlighting, microlinking and web reader. Take snapshots of full pages, generate customized AI summaries, share microlinks to serve as breadcrumbs for discovery. Tag and filter content stored on local devices.</p>
                    ) : (
                      <p>Interactive demonstration of i<em>DIG</em> capabilities including the movable menu system and core features.</p>
                    )}
                  </div>

                  {currentDemo.features && (
                    <div className="text-sm text-gray-500 space-y-1 max-w-2xl mx-auto">
                      {currentDemo.features.map((feature, idx) => (
                        <div key={idx}>{feature}</div>
                      ))}
                    </div>
                  )}

                  {currentDemo.videoUrl && (
                    <div className="mt-6 flex-grow flex items-center justify-center">
                      <video
                        src={currentDemo.videoUrl}
                        controls
                        className="w-full max-w-3xl rounded-lg shadow-lg"
                        playsInline
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </div>
              </div>

              {/* Demo Selection Cards - Desktop */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
                {/* iDIG Lens Card */}
                <div 
                  onClick={() => setSelectedDemo('idig-lens')}
                  className={`bg-white rounded-xl p-4 border-2 transition-all duration-200 cursor-pointer ${
                    selectedDemo === 'idig-lens' 
                      ? 'border-indigo-500 shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm font-semibold text-gray-900">
                      i<em>DIG</em> Lens
                    </h4>
                    {selectedDemo === 'idig-lens' && (
                      <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    Universal bookmarking & web reader
                  </p>
                  <div className="mt-3 flex items-center text-xs font-medium text-indigo-600">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>Select</span>
                  </div>
                </div>

                {/* iDIG Feeds Card */}
                <div 
                  onClick={() => setSelectedDemo('idig-feeds')}
                  className={`bg-white rounded-xl p-4 border-2 transition-all duration-200 cursor-pointer ${
                    selectedDemo === 'idig-feeds' 
                      ? 'border-indigo-500 shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm font-semibold text-gray-900">
                      i<em>DIG</em> Feeds
                    </h4>
                    {selectedDemo === 'idig-feeds' && (
                      <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    Organize content streams
                  </p>
                  <div className="mt-3 flex items-center text-xs font-medium text-indigo-600">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>Select</span>
                  </div>
                </div>

                {/* iDIG Matching Card */}
                <div 
                  onClick={() => setSelectedDemo('idig-matching')}
                  className={`bg-white rounded-xl p-4 border-2 transition-all duration-200 cursor-pointer ${
                    selectedDemo === 'idig-matching' 
                      ? 'border-indigo-500 shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm font-semibold text-gray-900">
                      i<em>DIG</em> Matching
                    </h4>
                    {selectedDemo === 'idig-matching' && (
                      <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    Surface hidden relationships
                  </p>
                  <div className="mt-3 flex items-center text-xs font-medium text-indigo-600">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>Select</span>
                  </div>
                </div>

                {/* iDIG Attractor Card */}
                <div 
                  onClick={() => setSelectedDemo('idig-attractor')}
                  className={`bg-white rounded-xl p-4 border-2 transition-all duration-200 cursor-pointer ${
                    selectedDemo === 'idig-attractor' 
                      ? 'border-indigo-500 shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm font-semibold text-gray-900">
                      i<em>DIG</em> Attractor
                    </h4>
                    {selectedDemo === 'idig-attractor' && (
                      <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    Shape discovery flows
                  </p>
                  <div className="mt-3 flex items-center text-xs font-medium text-indigo-600">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>Select</span>
                  </div>
                </div>

                {/* iDIG Scenes Card */}
                <div 
                  onClick={() => setSelectedDemo('idig-scenes')}
                  className={`bg-white rounded-xl p-4 border-2 transition-all duration-200 cursor-pointer ${
                    selectedDemo === 'idig-scenes' 
                      ? 'border-indigo-500 shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm font-semibold text-gray-900">
                      i<em>DIG</em> Scenes
                    </h4>
                    {selectedDemo === 'idig-scenes' && (
                      <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    Curate rich experiences around ideas
                  </p>
                  <div className="mt-3 flex items-center text-xs font-medium text-indigo-600">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>Select</span>
                  </div>
                </div>
              </div>

              {/* Demo Selection Cards - Mobile Carousel */}
              <div className="md:hidden flex items-center gap-2">
                {/* Left Arrow */}
                <button 
                  onClick={() => {
                    const carousel = document.getElementById('mobile-demo-carousel');
                    if (carousel) {
                      carousel.scrollBy({ left: -140, behavior: 'smooth' });
                    }
                  }}
                  className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Carousel Container */}
                <div 
                  id="mobile-demo-carousel"
                  className="flex-1 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <div className="flex gap-3 pb-2">
                    {/* iDIG Lens Card */}
                    <div 
                      onClick={() => setSelectedDemo('idig-lens')}
                      className={`flex-shrink-0 w-32 bg-white rounded-xl p-3 border-2 transition-all duration-200 cursor-pointer snap-center ${
                        selectedDemo === 'idig-lens' 
                          ? 'border-indigo-500 shadow-lg' 
                          : 'border-gray-200 hover:border-gray-300 shadow-sm'
                      }`}
                    >
                      <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-xs font-semibold text-gray-900 leading-tight">
                            i<em>DIG</em> Lens
                          </h4>
                          {selectedDemo === 'idig-lens' && (
                            <svg className="w-4 h-4 text-indigo-500 flex-shrink-0 ml-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                          Universal bookmarking
                        </p>
                        <div className="mt-auto flex items-center text-xs font-medium text-indigo-600">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          <span>Select</span>
                        </div>
                      </div>
                    </div>

                    {/* iDIG Feeds Card */}
                    <div 
                      onClick={() => setSelectedDemo('idig-feeds')}
                      className={`flex-shrink-0 w-32 bg-white rounded-xl p-3 border-2 transition-all duration-200 cursor-pointer snap-center ${
                        selectedDemo === 'idig-feeds' 
                          ? 'border-indigo-500 shadow-lg' 
                          : 'border-gray-200 hover:border-gray-300 shadow-sm'
                      }`}
                    >
                      <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-xs font-semibold text-gray-900 leading-tight">
                            i<em>DIG</em> Feeds
                          </h4>
                          {selectedDemo === 'idig-feeds' && (
                            <svg className="w-4 h-4 text-indigo-500 flex-shrink-0 ml-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                          Organize streams
                        </p>
                        <div className="mt-auto flex items-center text-xs font-medium text-indigo-600">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          <span>Select</span>
                        </div>
                      </div>
                    </div>

                    {/* iDIG Matching Card */}
                    <div 
                      onClick={() => setSelectedDemo('idig-matching')}
                      className={`flex-shrink-0 w-32 bg-white rounded-xl p-3 border-2 transition-all duration-200 cursor-pointer snap-center ${
                        selectedDemo === 'idig-matching' 
                          ? 'border-indigo-500 shadow-lg' 
                          : 'border-gray-200 hover:border-gray-300 shadow-sm'
                      }`}
                    >
                      <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-xs font-semibold text-gray-900 leading-tight">
                            i<em>DIG</em> Matching
                          </h4>
                          {selectedDemo === 'idig-matching' && (
                            <svg className="w-4 h-4 text-indigo-500 flex-shrink-0 ml-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                          Surface relationships
                        </p>
                        <div className="mt-auto flex items-center text-xs font-medium text-indigo-600">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          <span>Select</span>
                        </div>
                      </div>
                    </div>

                    {/* iDIG Attractor Card */}
                    <div 
                      onClick={() => setSelectedDemo('idig-attractor')}
                      className={`flex-shrink-0 w-32 bg-white rounded-xl p-3 border-2 transition-all duration-200 cursor-pointer snap-center ${
                        selectedDemo === 'idig-attractor' 
                          ? 'border-indigo-500 shadow-lg' 
                          : 'border-gray-200 hover:border-gray-300 shadow-sm'
                      }`}
                    >
                      <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-xs font-semibold text-gray-900 leading-tight">
                            i<em>DIG</em> Attractor
                          </h4>
                          {selectedDemo === 'idig-attractor' && (
                            <svg className="w-4 h-4 text-indigo-500 flex-shrink-0 ml-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                          Shape flows
                        </p>
                        <div className="mt-auto flex items-center text-xs font-medium text-indigo-600">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          <span>Select</span>
                        </div>
                      </div>
                    </div>

                    {/* iDIG Scenes Card */}
                    <div 
                      onClick={() => setSelectedDemo('idig-scenes')}
                      className={`flex-shrink-0 w-32 bg-white rounded-xl p-3 border-2 transition-all duration-200 cursor-pointer snap-center ${
                        selectedDemo === 'idig-scenes' 
                          ? 'border-indigo-500 shadow-lg' 
                          : 'border-gray-200 hover:border-gray-300 shadow-sm'
                      }`}
                    >
                      <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-xs font-semibold text-gray-900 leading-tight">
                            i<em>DIG</em> Scenes
                          </h4>
                          {selectedDemo === 'idig-scenes' && (
                            <svg className="w-4 h-4 text-indigo-500 flex-shrink-0 ml-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 line-clamp-2">
                          Curate rich experiences around ideas
                        </p>
                        <div className="flex items-center text-xs font-medium text-indigo-600">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          <span>Select</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Arrow */}
                <button 
                  onClick={() => {
                    const carousel = document.getElementById('mobile-demo-carousel');
                    if (carousel) {
                      carousel.scrollBy({ left: 140, behavior: 'smooth' });
                    }
                  }}
                  className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* About Preview Section - Now with consistent container */}
        <section className="pt-8 pb-20">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">

            <div className="space-y-12 mb-16">
              <div className="bg-white rounded-2xl px-6 sm:px-12 pt-6 pb-12 shadow-lg border border-gray-200">
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

              <div className="bg-white rounded-2xl px-6 sm:px-12 pt-6 pb-12 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-medium mb-4">The i<em>DIG</em> Vision</h3>
                <div className="text-gray-600 leading-relaxed space-y-3">
                  <p>To work toward building resonance in the connection by creating tools to align opportunities, resources, and information with those deep within communities.</p>
                  <p>To inspire builders to create their own frameworks or collaborate with i<em>DIG</em> to add more resonance into the connection.</p>
                  <p>To build tools for positive social and community impact.</p>
                  <p>To build tools to encourage deep inquiry and purposeful engagement.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Blog Preview Section - Now with consistent container */}
        <section className="pb-16">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-2xl px-6 sm:px-12 pt-6 pb-12 shadow-lg border border-gray-200">
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
                <BlogSignup />
              </div>
            </div>
          </div>
        </section>

        {/* Book Preview Section - Now with consistent container */}
        <section className="pb-20">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-2xl px-6 sm:px-12 pt-6 pb-12 shadow-lg border border-gray-200">
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
