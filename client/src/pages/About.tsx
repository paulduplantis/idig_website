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
  <p>
    <strong>iDIG (Signal-Driven Discovery &amp; Matching)</strong> is an applied research and development framework focused on reducing noise and improving judgment within information-heavy workflows. The work explores how AI models can be harnessed to surface meaningful signals—such as relevance, recency, and contextual alignment—without overwhelming users or replacing human decision-making.
  </p>

  <p>
    The framework is being developed across two complementary builds. The <strong>iDIG browser extension</strong> functions as a lightweight, in-context signal layer that operates directly on web pages and documents. Through highlighting, filtering, and microlinking, it makes themes, relationships, and patterns visible as people read and research—preserving context while reducing cognitive load.
  </p>

  <p>
    In parallel, the core <strong>iDIG discovery and matching framework</strong> models how people, roles, and opportunities align over time. This work focuses on signal-driven matching—treating alignment as a dynamic state shaped by signal strength, recency, and domain relevance rather than static keywords or scores. AI models are used instrumentally to extract, structure, and tune signals, supporting clearer evaluation and better downstream decisions.
  </p>

  <p>
    Together, these efforts represent a practical exploration of AI-assisted workflow design—one centered on signal reduction, transparency, and human judgment. iDIG is not positioned as a finished product, but as an evolving framework demonstrating how AI can be applied thoughtfully to real-world discovery, research, and decision-support problems.
  </p>
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
