import Navigation from "@/components/Navigation";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-light mb-6">About iDIG</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Building tools that help curious minds engage more deeply with the content they discover online.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h2 className="text-2xl font-medium mb-4">iDIG Principles</h2>
                <ul className="text-gray-600 leading-relaxed space-y-3">
                  <li>• Local storage or private storage for what is consumed, created or shared</li>
                  <li>• No cookies to track or share activity</li>
                  <li>• No 3rd party ad networks</li>
                  <li>• No passive popups</li>
                  <li>• User Interface to encourage resonant and deep discovery through the use of highlighting, microlinks, filtering, and resonant sharing</li>
                  <li>• AI summaries controlled by the user</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h2 className="text-2xl font-medium mb-4">The iDIG Vision</h2>
                <div className="text-gray-600 leading-relaxed space-y-3">
                  <p>To work toward building resonance in the connection by creating tools to align opportunities, resources, and information with those deep within communities.</p>
                  <p>To inspire builders to create their own frameworks or collaborate with iDIG to add more resonance into the connection.</p>
                  <p>To build tools for positive social and community impact.</p>
                  <p>To build tools to encourage deep inquiry and purposeful engagement.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md mb-16">
              <h2 className="text-2xl font-medium mb-4">How iDIG Works</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="font-medium mb-2">Discover</h3>
                  <p className="text-gray-600 text-sm">
                    Browse the web naturally while iDIG quietly helps you identify meaningful content.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="font-medium mb-2">Engage</h3>
                  <p className="text-gray-600 text-sm">
                    Use our tools to capture insights, make connections, and deepen your understanding.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="font-medium mb-2">Grow</h3>
                  <p className="text-gray-600 text-sm">
                    Watch your knowledge and understanding expand as you build meaningful connections.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md mb-16">
              <h2 className="text-2xl font-medium mb-4">The Story Behind iDIG</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Born from a frustration with the superficial nature of modern web consumption, 
                iDIG emerged as a response to the question: "How can we make the internet a place 
                for deeper engagement rather than endless scrolling?"
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our founder, after years of research in human-computer interaction and cognitive science, 
                recognized that the tools we use shape how we think. Current web tools optimize for 
                engagement time rather than engagement depth.
              </p>
              <p className="text-gray-600 leading-relaxed">
                iDIG is our attempt to create technology that aligns with human flourishing—tools that 
                help us think better, learn more effectively, and connect more meaningfully with the 
                vast repository of human knowledge available online.
              </p>
            </div>

            {/* Newsletter Signup */}
            <NewsletterSignup />
          </div>
        </section>
      </main>
    </div>
  );
}
