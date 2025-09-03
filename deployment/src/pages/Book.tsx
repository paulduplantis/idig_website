import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface Chapter {
  number: number;
  title: string;
  description: string;
  available: boolean;
}

const chapters: Chapter[] = [
  { number: 1, title: "The Foundation of Resonance", description: "Understanding the principles that make tools truly resonate with users.", available: true },
  { number: 2, title: "Curiosity-Driven Design", description: "Designing interfaces that nurture and amplify human curiosity.", available: true },
  { number: 3, title: "Building for Depth", description: "Creating experiences that encourage deep engagement over surface-level interaction.", available: true },
  { number: 4, title: "The Architecture of Understanding", description: "Structuring information and interactions to support comprehension.", available: true },
  { number: 5, title: "Meaningful Connections", description: "Facilitating connections between ideas, content, and understanding.", available: true },
  { number: 6, title: "Tools for Reflection", description: "Designing features that encourage reflection and deeper thinking.", available: true },
  { number: 7, title: "The Psychology of Engagement", description: "Understanding how minds engage with digital tools and content.", available: false },
  { number: 8, title: "Information Architecture for Insight", description: "Organizing information to support discovery and understanding.", available: false },
  { number: 9, title: "Designing for Serendipity", description: "Creating systems that enable unexpected but meaningful discoveries.", available: false },
  { number: 10, title: "The Art of Digital Annotation", description: "Helping users interact meaningfully with text and media.", available: false },
  { number: 11, title: "Building Personal Knowledge Systems", description: "Tools that help individuals create their own learning ecosystems.", available: false },
  { number: 12, title: "Collaborative Understanding", description: "Facilitating shared knowledge building and group insight.", available: false },
  { number: 13, title: "The Ethics of Attention", description: "Responsible design in an attention-scarce world.", available: false },
  { number: 14, title: "Measuring True Engagement", description: "Metrics that matter for deep interaction and learning.", available: false },
  { number: 15, title: "The Future of Reading", description: "How digital tools can enhance rather than replace traditional reading.", available: false },
  { number: 16, title: "Contextual Intelligence", description: "Building systems that understand and respond to user context.", available: false },
  { number: 17, title: "The Social Dimension of Learning", description: "How community enhances individual understanding.", available: false },
  { number: 18, title: "Adaptive Interfaces", description: "Creating tools that grow and change with their users.", available: false },
  { number: 19, title: "The Philosophy of Digital Tools", description: "Examining the deeper questions about technology and human flourishing.", available: false },
  { number: 20, title: "Prototyping for Resonance", description: "Methods for testing and refining tools for deep engagement.", available: false },
  { number: 21, title: "The Economics of Attention", description: "Building sustainable models for attention-respectful tools.", available: false },
  { number: 22, title: "Cross-Platform Thinking", description: "Creating coherent experiences across different devices and contexts.", available: false },
  { number: 23, title: "The Role of AI in Understanding", description: "How artificial intelligence can support rather than replace human insight.", available: false },
  { number: 24, title: "Building for Accessibility", description: "Ensuring resonant tools work for everyone.", available: false },
  { number: 25, title: "The Long Game", description: "Building tools and systems that remain valuable over time.", available: false },
  { number: 26, title: "A Resonant Future", description: "Imagining a world where technology truly serves human curiosity.", available: false },
];

export default function Book() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-light mb-6">We the Resonant Builders</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                A comprehensive guide to creating tools and systems that resonate with human curiosity 
                and foster meaningful engagement with digital content.
              </p>
              <div className="text-gray-500 text-sm">
                26 chapters • Available in PDF, ePub, and Kindle formats
              </div>
            </div>

            {/* Chapter Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {chapters.map((chapter) => (
                <div
                  key={chapter.number}
                  className={`rounded-xl p-6 shadow-md transition-all duration-200 ${
                    chapter.available
                      ? "bg-white hover:shadow-lg group cursor-pointer"
                      : "bg-gray-50 opacity-60"
                  }`}
                >
                  {chapter.available ? (
                    <Link href={`/book/chapter/${chapter.number}`} className="block">
                      <div className="text-blue-500 text-sm font-medium mb-2">
                        Chapter {chapter.number}
                      </div>
                      <h3 className="text-lg font-medium mb-3 group-hover:text-blue-500 transition-colors">
                        {chapter.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {chapter.description}
                      </p>
                    </Link>
                  ) : (
                    <>
                      <div className="text-gray-400 text-sm font-medium mb-2">
                        Chapter {chapter.number}
                      </div>
                      <h3 className="text-lg font-medium mb-3 text-gray-600">
                        {chapter.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">
                        {chapter.description}
                      </p>
                      <div className="text-xs text-gray-400 font-medium">
                        Coming Soon
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* About the Book */}
            <div className="light-gray-bg rounded-2xl p-8 mb-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-medium mb-6 text-center">About the Book</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-medium mb-3">What You'll Learn</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Principles of designing for deep engagement</li>
                      <li>• How to build tools that respect human attention</li>
                      <li>• Methods for fostering curiosity and insight</li>
                      <li>• The psychology behind meaningful digital interactions</li>
                      <li>• Practical frameworks for resonant design</li>
                      <li>• Case studies from successful implementations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-3">Who It's For</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• UX designers seeking deeper impact</li>
                      <li>• Product managers building meaningful tools</li>
                      <li>• Developers interested in human-centered design</li>
                      <li>• Educators exploring digital learning</li>
                      <li>• Anyone passionate about technology's role in human flourishing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div className="text-center">
              <Button className="apple-button bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 text-lg font-medium shadow-lg mb-4">
                Download Complete Book
              </Button>
              <p className="text-gray-500">
                Available in PDF, ePub, and Kindle formats • Free for early supporters
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
