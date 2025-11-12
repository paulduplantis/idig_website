import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="About iDIG - Deep Inquiry Generator for Curious Minds"
        description="Learn about iDIG's mission to amplify human curiosity through innovative web tools. Discover how our Deep Inquiry Generator framework fosters meaningful digital exploration and research."
        keywords="about iDIG, deep inquiry generator, curiosity tools, web research, digital exploration, annotation framework"
        url="https://www.i-dig.io/about"
      />
      <Navigation />
      
      <main className="pt-10">
        <section className="pt-0 pb-8">
          <div className="max-w-4xl mx-auto px-6">
            {/* About iDIG Card */}
            <div className="bg-white rounded-2xl px-12 pt-6 pb-12 shadow-lg border border-gray-200 mb-10">
              <div className="text-left max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-light mb-8 text-center">About i<em>DIG</em></h1>
                
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>iDIG (Deep Inquiry Generator) is a research and discovery framework built to help people explore information through context, connection, and resonance. Designed for professionals, researchers, and curious minds alike, iDIG goes beyond conventional search by revealing the underlying relationships between ideas, people, and knowledge.</p> 
                  <p>iDIG functions as a lens placed over web pages, APIs, RSS feeds, and uploaded materials — transforming raw information into interactive fields of inquiry. Through multi-color search highlights, users can visualize how themes and connections emerge within and across sources. Microlinks extend those highlights into breadcrumbs — small, shareable anchors that preserve context and open new pathways of exploration. An advanced filtering system allows users to tune their focus across records, domains, and timeframes, refining their view of complex subjects with precision.</p>
                 <p>The next phase of development centers on the Attractor — a resonance-based system inspired by quantum theory and Hilbert space mathematics, where ideas exist not as isolated points but as states within a shared field of potential. Within this quantum framework, iDIG models how meaning evolves, entangles, and coheres across sources, allowing users to perceive relationships that linear search cannot capture.</p>
                 <p>More than a research tool, iDIG is a framework for inquiry itself — one that treats curiosity as a living field of discovery, where observation, interaction, and reflection give rise to deeper understanding.</p>   
                </div>
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
