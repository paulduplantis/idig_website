import Navigation from "@/components/Navigation";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 light-gray-bg">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-light mb-6">About iDIG</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Building tools that help curious minds engage more deeply with the content they discover online.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h2 className="text-2xl font-medium mb-4">Our Principles</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We believe the web should be a place for deep engagement, not surface-level consumption. 
                  iDIG provides resonant tools that help you create meaningful connections with content, 
                  fostering understanding and insight.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our browser extension and web platform enable users to capture, organize, and reflect on 
                  the content they discover, creating a personal knowledge base that grows with their curiosity.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h2 className="text-2xl font-medium mb-4">The Vision</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A web where every curious mind has access to tools that amplify their ability to learn, 
                  connect, and create. Where technology serves human curiosity rather than exploiting it.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We envision a future where digital tools enhance our capacity for deep thinking, 
                  meaningful learning, and authentic connection with the world around us.
                </p>
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
