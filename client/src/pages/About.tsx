import Navigation from "@/components/Navigation";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-10">
        <section className="pt-0 pb-8">
          <div className="max-w-4xl mx-auto px-6">
            {/* About iDIG Card */}
            <div className="bg-white rounded-2xl px-12 pt-6 pb-12 shadow-lg border border-gray-200 mb-10">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-light mb-6">About i<em>DIG</em></h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  i<em>DIG</em> (Deep Inquiry Generator) is a framework and community in development designed to amplify human curiosity through the use of tools to encourage deep and contextual insights into the information we engage with. 
                </p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <NewsletterSignup />
          </div>
        </section>
      </main>
    </div>
  );
}
