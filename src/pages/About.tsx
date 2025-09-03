import Navigation from "@/components/Navigation";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
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
                    i<em>DIG</em> (Deep Inquiry Generator) is a framework and community in development designed to amplify human curiosity through the use of tools to encourage deep and contextual insights into the information we engage with.
                  </p>
                  
                  <p>
                    My name is Paul Duplantis. I am not a programmer or coder. I've spent my life as a marketer, consultant, recruiter, and a lifelong learner, but I've carried a vision which is to create tools that make discovery more meaningful, private, and human than what has evolved. Upon the arrival of generative AI, I decided to build a framework from scratch with only the assistance of GenAI tools to test this vision.
                  </p>
                  
                  <p>
                    The idea all along was to get the framework to a fully functioning demo then collaborate to scale the framework from there.
                  </p>
                  
                  <p>
                    Check out my <Link href="/blog/introduction-to-idig" className="text-blue-500 hover:text-blue-600 transition-colors font-medium">introductory blog</Link> for a better idea of the plan. Feel free to <Link href="/contact" className="text-blue-500 hover:text-blue-600 transition-colors font-medium">contact me</Link> with questions, ideas for collaboration, feedback, or would like to share what you are building that speak to these ideas as I am looking for tech to feature in my monthly newsletter, <Link href="/newsletter" className="text-blue-500 hover:text-blue-600 transition-colors font-medium">The Resonant Builders Monthly</Link>.
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <NewsletterSignup />
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
