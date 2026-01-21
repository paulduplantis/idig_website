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
    The framework is currently being developed across two complementary builds, each addressing signal discovery from a different vantage point.
  </p>

  <p>
    The <strong>iDIG browser extension</strong> functions as a lightweight, in-context signal layer. It operates directly on web pages and documents, using highlighting, filtering, and microlinking to make themes, relationships, and patterns visible as people read and research. Rather than extracting users into a separate tool, the extension helps preserve context while reducing cognitive load—turning raw information into structured, navigable signals.
  </p>

  <p>
    In parallel, the core <strong>iDIG discovery and matching framework</strong> models how people, roles, and opportunities align over time. This work focuses on signal-driven matching—treating alignment as a dynamic state shaped by signal strength, recency, and domain relevance rather than static keywords or scores. AI models are used instrumentally to extract, structure, and tune signals, supporting clearer evaluation and better downstream decisions.
  </p>

  <p>
    Together, these efforts represent a practical exploration of AI-assisted workflow design—one centered on signal reduction, transparency, and human judgment. iDIG is not positioned as a finished product, but as an evolving framework that demonstrates how AI can be applied thoughtfully to real-world discovery, research, and decision-support problems.
  </p>

  <hr className="my-8 border-gray-300" />

  <h3 className="text-xl font-semibold text-gray-900">
    A Note from Paul
  </h3>

  <p>
    I am not a traditional software developer by background. My work comes from years of observing how real-world workflows—especially hiring and communication processes—break down under noise, scale, and misaligned signals. At the end of 2022, the emergence of modern AI models gave me a practical way to act on those observations. By learning to <em>vibe and spec code</em>, I began translating system-level ideas into working artifacts—using tools like ChatGPT, Claude Code, Gemini, and Notebook LLM as collaborative instruments rather than black boxes.
  </p>

  <p>
    Today, I am focusing the iDIG signal discovery and matching framework on helping hiring teams better align talent with their actual requirements. This work centers on modeling shared signals across resumes, job descriptions, and external sources—such as skill relevance, recency, contextual experience, and domain alignment—to reduce sourcing noise and improve downstream hiring decisions. iDIG represents an ongoing, hands-on exploration of how AI can be applied thoughtfully to real-world workflows, turning long-standing insights about discovery, matching, and judgment into functional systems.
  </p>

  <p className="pt-4 font-medium text-gray-900">
    — J. Paul Duplantis, Founder, i-DIG.io
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
