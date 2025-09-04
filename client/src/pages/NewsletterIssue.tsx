import Navigation from "@/components/Navigation";
import { Link } from "wouter";

export default function NewsletterIssue() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-10">
        <section className="pt-0 pb-8">
          <div className="max-w-4xl mx-auto px-6">
            
            {/* Back Navigation */}
            <div className="mb-6">
              <Link href="/newsletter" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Newsletter
              </Link>
            </div>

            {/* Newsletter Header */}
            <div className="bg-white rounded-2xl px-12 pt-8 pb-12 shadow-lg border border-gray-200">
              <article className="prose prose-lg max-w-none">
                <div className="text-center mb-8">
                  <div className="mb-4">
                    <span className="text-sm text-blue-500 font-medium">The Resonant Builders Monthly</span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-sm text-gray-500">Issue #1</span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-sm text-gray-500">September 2025</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-light mb-6">Resonant Builders Monthly</h1>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Exploring tools that amplify human curiosity and foster meaningful digital experiences.
                  </p>
                </div>

                {/* Newsletter Content */}
                <div className="text-gray-700 leading-relaxed space-y-6 text-left">
                  <div className="text-center mb-8">
                    <p className="text-lg text-gray-600">
                      Building tools that bring more resonance and less noise—together, with voices from every community.
                    </p>
                  </div>
                  
                  <h2 className="text-2xl font-medium mb-4">A Letter from the Editor</h2>
                  
                  <p>Welcome to the inaugural issue of Resonant Builders Monthly. It is my hope that this and future issues open a dialogue with a community of builders who believe technology should inspire human curiosity more than influence it.</p>
                  
                  <p>This first issue is a bit sparse and only a rough sketch.</p>
                  
                  <p>This newsletter exists because I believe we are at a pivotal moment for building tools that increase human agency, privacy, and health in the connection—at a time when these tools are needed the most.</p>
                  
                  <p>Context and user control are missing in the noisy world we live in, where feeds and platforms often decide for us what matters, limit how we discover, track us, hold our data hostage, and hit us with noisy popups and ad networks.</p>
                  
                  <p>What's missing are tools that help people shape their own pathways, rediscover relevance, and bring resonance back into how we explore ideas and connect with one another.</p>
                  
                  <p>Resonant Builders Monthly is a conversation starter—an invitation to imagine and build tools that bring more resonance and less noise into the social order, whether personal, commercial, professional, or political.</p>
                  
                  <p>Most importantly, it is a vehicle for listening—drawing in voices from communities and all facets of life so that this dialogue reflects not just builders, but the people these tools are meant to serve.</p>
                  
                  <p>Resonant builders are not only those writing code—they are the boots on the ground in workplaces, schools, governments, churches, neighborhoods, and every community where connection matters. Your experiences, challenges, and insights are what will shape these tools for resonance, ensuring they serve real needs in real lives.</p>
                  
                  <p>This newsletter is meant to be a resonance generator—a space where ideas and people can find each other. Coders, designers, and builders of all kinds may discover resonance with community members who carry lived experience and needs worth building around.</p>
                  
                  <p>These connections begin as conversations, not contracts, with the shared goal of exploring what resonance might look like in practice. I will be looking to spotlight ideas that emerge from these conversations in future issues for us all to learn from and possibly act on.</p>
                  
                  <p>If you feel called to share, explore, or build, I invite you to reach out. Your voice and ideas may help shape the next generation of tools for resonance.</p>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                    <p className="text-gray-600 italic">
                      — Paul Duplantis, Founder of i<em>DIG</em>
                    </p>
                  </div>
                  
                  <h2 className="text-2xl font-medium mb-4 mt-12">FROM THE i<em>DIG</em> BLOG</h2>
                  
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="text-xl font-medium mb-3">
                      <Link href="/blog/introduction-to-idig" className="text-blue-600 hover:text-blue-700 transition-colors">
                        i<em>DIG</em> Blog - #1 - Introduction to i<em>DIG</em>
                      </Link>
                    </h3>
                    <div className="text-gray-700 space-y-4">
                      <p>I have to admit, I don't know what i<em>DIG</em> will become or if it will become anything of note for that matter. All I know is I needed to build it. Maybe just to prove to myself I could but also to possibly start a conversation around what role the individual has in the information they create, consume, and share.</p>
                      <p>I have lived long enough to watch the birth of the web founded on the principles of openness and collaboration evolve into a siloed web of influence we see today. Certainly much good has come from it but it would be hard to argue that people are in control.</p>
                      <p>But what if they were in control and the resulting experiences were centered on providing agency and privacy? What if every element they engaged with was intended to spark curiosity and understanding of a subject to provide context and clarity in service of the quality of interactions rather than just the quantity of them.</p>
                      <Link href="/blog/introduction-to-idig" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium text-sm">
                        Read Full Post
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-medium mb-4 mt-12">ILLUMINATION</h2>
                  
                  <h3 className="text-xl font-medium mb-3">What Makes a Tool "Resonant"?</h3>
                  
                  <p>What is resonance in the first place? When it comes to human connection, resonance can be understood as a deep, positive emotional alignment with others—one that makes people feel seen, heard, and valued.</p>
                  
                  <p>The word implies qualities such as emotional intelligence, self-awareness, mindfulness, empathy, compassion, authenticity, vision, and hope.</p>
                  
                  <p>A resonant communication tool, then, is not designed to manipulate outcomes, but to create the conditions where these traits naturally emerge in an exchange. Yet how can such traits thrive when people lack agency in the discovery process—and cannot trust that what they create, consume, and share won't be used to influence their decisions for the benefit of outside interests?</p>
                  
                  <p>Another word that helps capture the arc of resonance is understanding. To deeply understand a situation, a news article, a point made in a book, or the words of a politician is to carry weight in your decision-making. Understanding informs healthy choices for oneself, one's family, and one's community.</p>
                  
                  <p>Think of reading a page of text: you read not just to recognize the words, but to grasp meaning—whether for entertainment, information, or both. Yet in most communication tools on the market, context is often stripped away. How important is context when a historical anecdote is offered without depth, when a quote is detached from its source, or when a statistic is shown without background? Without context, discovery collapses into noise.</p>
                  
                  <p>The i<em>DIG</em> framework is only one example of an attempt to apply these principles by placing people back in control of their discovery process. Every interaction aimed to spark curiosity and provide context—not to maximize clicks or time-on-page, but to foster resonance, clarity, and understanding while maintaining controls over the data engaged with.</p>
                  
                  <p>What else is being built to foster resonance in the connection?</p>
                  
                  <h2 className="text-2xl font-medium mb-4 mt-12">COMMUNITY SPOTLIGHT</h2>
                  
                  <p>In the following issues, Resonant Builders Monthly will spotlight resonant technologies and the community and commercial needs they can address.</p>
                  
                  <p>The goal is to highlight builders working with similar intent—from privacy-first frameworks to learning tools that favor depth over speed and quality over quantity.</p>
                  
                  <p>Below, I have shared a featured use case centered around potential i<em>DIG</em> solutions. I am curious what also is in the market currently speaking to this type of tech. If this exists, I would like to promote it for others to engage with. As long as the tech follows the i<em>DIG</em> principles, I would love to share.</p>
                  
                  <p>Contact <a href="mailto:paul@i-dig.io" className="text-blue-600 hover:text-blue-700 transition-colors">paul@i-dig.io</a> to share.</p>
                  
                  <h2 className="text-2xl font-medium mb-4 mt-12">FEATURED USE CASE</h2>
                  
                  <h3 className="text-xl font-medium mb-3">Discovering Resonant Movies with the i<em>DIG</em> Lens</h3>
                  
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-4">
                    <p className="text-sm text-gray-600 italic">
                      *The i<em>DIG</em> Lens is currently in development as a Chrome extension which is currently entering Alpha Testing. All use cases are potential in nature as the extension continues to be built out. In the case of the following use case, all of what is covered is operating except for the related AI movie summaries feature.
                    </p>
                  </div>
                  
                  <p>This month we're kicking off our first use case by looking at something familiar – movies. Instead of relying on random recommendations, the i<em>DIG</em> Lens helps you find films that truly resonate with your unique taste—and turns the process into a journey you can share with others.</p>
                  
                  <h4 className="text-lg font-medium mb-2 mt-6">Step 1: Highlight What You Love</h4>
                  <p>Start with a movie you already enjoy. As you read about it—on a Wikipedia page or a film site—use different colored highlights to discover the moments that matter most to you. Maybe it's a surprising twist, a powerful character arc, or a scene that stirs deep emotion.</p>
                  
                  <h4 className="text-lg font-medium mb-2 mt-6">Step 2: Create a Breadcrumb</h4>
                  <p>Turn those highlights into a breadcrumb—a microlinked note capturing what stood out. This breadcrumb becomes part of your personal i<em>DIG</em> path, a trail of the themes and stories resonating with you.</p>
                  
                  <h4 className="text-lg font-medium mb-2 mt-6">Step 3: Let the i<em>DIG</em> Lens do the work</h4>
                  <p>The Lens analyzes your highlights and breadcrumbs to understand what resonates with you, then suggests movies with similar themes, emotional depth, or storytelling approaches—all while keeping your data private and giving you full control over the discovery process.</p>
                </div>
              </article>
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