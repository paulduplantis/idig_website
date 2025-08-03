import Navigation from "@/components/Navigation";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

interface ChapterContent {
  number: number;
  title: string;
  content: string[];
  keyTakeaways: string[];
  nextChapter?: number;
  prevChapter?: number;
}

const chapterData: Record<number, ChapterContent> = {
  1: {
    number: 1,
    title: "The Foundation of Resonance",
    content: [
      "In the vast landscape of digital tools and platforms, few truly resonate with their users. What distinguishes a tool that merely functions from one that genuinely resonates? The answer lies in understanding the fundamental principles that create meaningful connections between human minds and digital systems.",
      "Resonance, in the context of digital tools, refers to the harmonious alignment between a tool's design, functionality, and the user's deeper needs and aspirations. It's the difference between a hammer that simply drives nails and one that feels perfectly balanced in a craftsperson's hand—extending their capability rather than merely providing function.",
      "The first principle of resonance is authenticity. Tools that resonate don't try to manipulate or trick users into engagement. Instead, they honestly serve the user's genuine interests and goals. This means designing with transparency, respecting user agency, and prioritizing long-term value over short-term metrics.",
      "The second principle is adaptability. Resonant tools grow with their users, learning from interactions and evolving to better serve changing needs. They don't impose rigid workflows but instead provide flexible frameworks that accommodate different thinking styles and approaches.",
      "Understanding these principles is crucial for anyone seeking to build tools that don't just capture attention, but truly serve human flourishing. In the chapters that follow, we'll explore how these principles manifest in practical design decisions and development choices."
    ],
    keyTakeaways: [
      "Resonance comes from alignment between tool design and genuine user needs",
      "Authenticity means serving users honestly, not manipulating engagement",
      "Adaptability allows tools to grow with users over time",
      "Function alone is insufficient—tools must extend human capability"
    ],
    nextChapter: 2
  },
  2: {
    number: 2,
    title: "Curiosity-Driven Design",
    content: [
      "Human curiosity is one of our species' greatest assets, yet most digital tools inadvertently suppress it. Instead of fostering wonder and exploration, they optimize for immediate satisfaction and quick dopamine hits. Curiosity-driven design takes a fundamentally different approach.",
      "At its core, curiosity-driven design recognizes that genuine learning and growth happen not when we're fed answers, but when we're inspired to ask better questions. This means creating interfaces that reveal rather than conceal complexity, that show connections rather than hiding them, that invite exploration rather than providing predetermined paths.",
      "Consider the difference between a search engine that simply returns results and one that also shows the relationships between concepts, the evolution of ideas over time, or the questions that led to current understanding. The latter doesn't just provide information—it provides context that sparks further inquiry.",
      "Curiosity-driven design also means embracing uncertainty and incompleteness. Rather than presenting information as final and authoritative, resonant tools acknowledge the provisional nature of knowledge and invite users to participate in the ongoing process of discovery and understanding.",
      "The goal is not to answer all questions, but to help users develop better questions and more sophisticated ways of thinking about complex topics. This requires a fundamental shift from information delivery to insight facilitation."
    ],
    keyTakeaways: [
      "Most digital tools suppress rather than foster human curiosity",
      "Good design reveals complexity and connections rather than hiding them",
      "Embracing uncertainty and incompleteness invites deeper engagement",
      "The goal is facilitating insight, not just delivering information"
    ],
    nextChapter: 3,
    prevChapter: 1
  },
  3: {
    number: 3,
    title: "Building for Depth",
    content: [
      "In an era of endless scrolling and bite-sized content, building for depth requires swimming against the current of contemporary digital culture. Depth is not just about length of engagement—it's about the quality and meaningfulness of that engagement.",
      "Deep engagement happens when users can immerse themselves fully in content or ideas without constant interruption or distraction. This means designing interfaces that support sustained attention rather than fragmenting it, that provide space for reflection rather than demanding immediate response.",
      "Building for depth also means creating layered experiences. Like a good book that reveals new insights on rereading, resonant tools offer different levels of engagement. Surface-level users can quickly accomplish their goals, while those seeking deeper understanding can dive into additional layers of context, connection, and complexity.",
      "The architecture of deep engagement includes several key elements: progressive disclosure that reveals complexity gradually, contextual depth that shows how pieces fit into larger wholes, and temporal depth that acknowledges the time required for real understanding to develop.",
      "Perhaps most importantly, building for depth means respecting the user's time and attention as precious resources. Every design decision should ask: 'Does this support deeper understanding, or does it merely increase engagement metrics?' The distinction is crucial."
    ],
    keyTakeaways: [
      "Depth is about quality of engagement, not just duration",
      "Sustained attention requires interfaces free from constant interruption",
      "Layered experiences serve both casual and deep users effectively",
      "Progressive disclosure reveals complexity at an appropriate pace"
    ],
    nextChapter: 4,
    prevChapter: 2
  },
  4: {
    number: 4,
    title: "The Architecture of Understanding",
    content: [
      "Understanding is not a binary state—it's a complex, evolving process that unfolds over time through interaction with ideas, concepts, and other minds. The architecture of understanding refers to how we structure information and interactions to support this natural process of comprehension.",
      "Traditional information architecture focuses on organization and findability. While these remain important, the architecture of understanding goes deeper, considering how information connects, how understanding builds upon itself, and how insights emerge from the interplay between different concepts and perspectives.",
      "One key principle is scaffolding—providing the right amount of support at each stage of understanding. Just as physical scaffolding supports construction while being gradually removed, informational scaffolding should provide context and guidance that can be reduced as understanding develops.",
      "Another crucial element is the creation of conceptual bridges—explicit connections between ideas that might otherwise seem unrelated. These bridges help users see patterns, transfer knowledge between domains, and develop more sophisticated mental models.",
      "The architecture of understanding also considers the social dimension of comprehension. Knowledge is not built in isolation, and resonant tools create opportunities for users to learn from each other, to see how different minds approach the same problems, and to contribute to collective understanding."
    ],
    keyTakeaways: [
      "Understanding is a process, not a destination",
      "Information architecture should support the development of comprehension",
      "Scaffolding provides appropriate support that reduces as understanding grows",
      "Conceptual bridges help users see connections between ideas"
    ],
    nextChapter: 5,
    prevChapter: 3
  },
  5: {
    number: 5,
    title: "Meaningful Connections",
    content: [
      "The human mind is fundamentally relational—we understand new concepts by connecting them to what we already know, and we find meaning through relationships between ideas, experiences, and other people. Resonant tools recognize and support this fundamental aspect of human cognition.",
      "Meaningful connections operate at multiple levels. At the data level, tools can surface relationships between pieces of information that might not be immediately obvious. At the conceptual level, they can help users see how ideas from different domains relate to each other. At the personal level, they can connect individual insights to broader patterns of meaning.",
      "Creating meaningful connections requires more than just linking related content. It requires understanding the different types of relationships that exist—causal, analogical, hierarchical, temporal—and presenting them in ways that enhance rather than overwhelm understanding.",
      "The key is to make connections discoverable without making them overwhelming. This might mean using visual techniques to show relationships, providing contextual information about why connections matter, or allowing users to explore connections at their own pace and according to their own interests.",
      "Meaningful connections also extend beyond individual users to communities of practice. When tools help people see how their interests and insights connect with those of others, they create opportunities for collaboration, learning, and collective sense-making that benefit everyone involved."
    ],
    keyTakeaways: [
      "Human understanding is fundamentally relational and connection-based",
      "Connections exist at multiple levels: data, conceptual, and personal",
      "Different types of relationships require different presentation approaches",
      "Discoverability must be balanced with cognitive manageability"
    ],
    nextChapter: 6,
    prevChapter: 4
  },
  6: {
    number: 6,
    title: "Tools for Reflection",
    content: [
      "In our rush to consume and produce information, we often skip one of the most crucial steps in learning and understanding: reflection. Reflection is the process by which experiences become knowledge, insights become wisdom, and information becomes understanding.",
      "Tools for reflection go beyond simple note-taking or journaling features. They create structured opportunities for users to pause, consider, and integrate what they've encountered. This might include prompting questions that encourage deeper thinking, providing space for personal connections and insights, or creating ways to revisit and reconsider previous thoughts.",
      "Effective reflection tools understand that reflection is not a one-time activity but an ongoing process. They support both immediate reflection (What does this mean to me right now?) and longer-term reflection (How has my understanding of this evolved over time?). They help users track the development of their own thinking and see patterns in their learning.",
      "The design of reflection tools must balance structure with freedom. Too much structure can constrain thinking, while too little can leave users uncertain about how to begin. The goal is to provide enough guidance to get started while allowing for organic development of ideas and insights.",
      "Perhaps most importantly, reflection tools must create safe spaces for honest self-examination. This means protecting user privacy, avoiding judgment or evaluation, and focusing on personal growth rather than external validation. The goal is to support authentic thinking, not to create content for others."
    ],
    keyTakeaways: [
      "Reflection transforms experiences into understanding and wisdom",
      "Effective reflection is an ongoing process, not a one-time activity",
      "Design must balance structure with freedom for authentic thinking",
      "Safe spaces for honest self-examination are essential"
    ],
    prevChapter: 5
  }
};

export default function Chapter() {
  const params = useParams();
  const chapterNumber = parseInt(params.chapterNumber || "1");
  const chapter = chapterData[chapterNumber];

  if (!chapter) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-6 py-20">
            <div className="text-center">
              <h1 className="text-2xl font-medium mb-4">Chapter Not Found</h1>
              <p className="text-gray-600 mb-8">
                This chapter is not yet available or doesn't exist.
              </p>
              <Link href="/book">
                <Button className="apple-button bg-blue-500 hover:bg-blue-600 text-white">
                  Back to Book
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <article className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            {/* Chapter Header */}
            <header className="mb-12">
              <Link href="/book" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Book
              </Link>
              
              <div className="text-blue-500 text-sm font-medium mb-2">
                Chapter {chapter.number}
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-4">
                {chapter.title}
              </h1>
            </header>

            {/* Chapter Content */}
            <div className="prose prose-lg max-w-none mb-12">
              {chapter.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="light-gray-bg rounded-2xl p-8 mb-12">
              <h2 className="text-xl font-medium mb-4">Key Takeaways</h2>
              <ul className="space-y-2">
                {chapter.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    {takeaway}
                  </li>
                ))}
              </ul>
            </div>

            {/* Chapter Navigation */}
            <nav className="flex justify-between items-center pt-8 border-t border-gray-200">
              <div>
                {chapter.prevChapter && (
                  <Link href={`/book/chapter/${chapter.prevChapter}`}>
                    <Button variant="outline" className="apple-button">
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Previous Chapter
                    </Button>
                  </Link>
                )}
              </div>
              
              <div>
                {chapter.nextChapter && (
                  <Link href={`/book/chapter/${chapter.nextChapter}`}>
                    <Button className="apple-button bg-blue-500 hover:bg-blue-600 text-white">
                      Next Chapter
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </article>
      </main>
    </div>
  );
}
