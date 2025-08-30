import Navigation from "@/components/Navigation";
import { Link, useParams } from "wouter";
import { useState } from "react";

interface BlogPostData {
  id: string;
  title: string;
  content: string[];
  category: string;
  date: string;
  author: string;
}

const blogPosts: Record<string, BlogPostData> = {
  "introduction-to-idig": {
    id: "introduction-to-idig",
    title: "Introduction to iDIG",
    category: "Introduction",
    date: "August 30, 2025",
    author: "Paul Duplantis",
    content: [
      "I have to admit, I don't know what iDIG will become or if it will become anything of note for that matter. All I know is I needed to build it. Maybe just to prove to myself I could but also to possibly start a conversation around what role the individual has in the information they create, consume, and share. Should they be in the driver seat or merely the passengers? Should they be in control of their experiences or should these experiences become available to the highest bidder?",
      "I have lived long enough to watch the birth of the web founded on the principles of openness and collaboration evolve into a siloed web of influence we see today. Certainly much good has come from it but it would be hard to argue that people are in control.",
      "But what if they were in control and the resulting experiences were centered on providing agency and privacy? What if every element they engaged with was intended to spark curiosity and understanding of a subject to provide context and clarity in service of the quality of interactions rather than just the quantity of them.",
      "To me iDIG is an experiment to explore the possibilities of this intention to service quality over quantity. What I am launching today is what I am calling Phase I. This is in an Alpha test phase and is a very rough sketch of an idea I have been carrying for over 20 years.",
      "The rise of GenAI allowed me to manifest these ideas into reality as I am neither a coder nor a software developer. Not to say blood, sweat, and tears were not shed over the last year, as iDIG was built from scratch. I can say from experience that GenAI does not magically build solutions for you, especially at this level.",
      "But moving forward I don't see iDIG as a traditional company to own these ideas but more of a path to explore. Or if I do find traction, the only path I could see moving forward to maintain quality of experiences in scaling this framework would be to set up a worker co-op to provide resonant ownership of the framework to every person involved in the growth of it.",
      "But at the very least, maybe this effort inspires potential collaborators to work with me on seeing where this path will lead or maybe it inspires somebody to build something on their own to provide agency and privacy to people. It doesn't matter to me. I just want to be part of the conversation.",
      "In service of this conversation, I am also launching the iDIG blog which will feature ideas and updates on the iDIG framework journey as well as The Resonant Builders Monthly which will be a monthly newsletter to feature recent blog posts but more importantly feature what other builders are up to in service of building a web more in tune with people being in control of their experiences.",
      "I am also wrapping up a book on this journey titled We the Resonant Builders. Coming soon!",
      "I argue what is possible when more people start to build for the health of the connection more than the wealth extracted from it. This is the conversation I want to start.",
      "With iDIG, I personally want to explore new methodologies to surface opportunities for resonant alignment between people and information. I have been recently researching quantum social sciences theory and how this might help define what I call the iDIG attractor that is in development. I just think we are ready to evolve beyond traditional filtering for the way we discover information. I will be writing more about this in my next blog post!",
      "Again, I really don't know what iDIG is. I almost don't want to define it. Maybe it's part hobby and part obsession. All I know is I have built the foundation of it and am ready to explore where it can go. More importantly what I might uncover from what other people are building that could help mold this into something more than what I can imagine and possibly inspire others to build what they have not imagined.",
      "But the end goal is to build tools for people to harness their own potential and purpose, not in service of what is built but what resides within them. Tools to help people align resonantly with opportunities, resources for social services, news, or what interests them.",
      "This tool is not special. People are or can be special. This tool is to illuminate this potential, not influence it."
    ]
  }
};

export default function BlogPost() {
  const params = useParams();
  const [showShareOptions, setShowShareOptions] = useState(false);
  const postId = params.id;
  const post = postId ? blogPosts[postId] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-20">
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h1 className="text-4xl font-light mb-6">Blog Post Not Found</h1>
              <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
              <Link href="/blog" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors font-medium">
                Back to Blog
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </section>
        </main>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const shareText = `Check out this blog post: ${post.title}`;

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedText = encodeURIComponent(shareText);
    
    let shareLink = '';
    switch (platform) {
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        setShowShareOptions(false);
        return;
    }
    
    if (shareLink) {
      window.open(shareLink, '_blank', 'width=600,height=400');
      setShowShareOptions(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            {/* Back to Blog Link */}
            <div className="mb-8">
              <Link href="/blog" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors font-medium">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>

            {/* Blog Post Header */}
            <div className="bg-white rounded-2xl px-12 pt-6 pb-12 shadow-lg border border-gray-200 mb-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="mb-4">
                    <span className="text-sm text-blue-500 font-medium">{post.category}</span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-sm text-gray-500">By {post.author}</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-light mb-6">
                    {post.title.includes('iDIG') ? (
                      post.title.split('iDIG').map((part, index) => (
                        <span key={index}>
                          {part}
                          {index < post.title.split('iDIG').length - 1 && (
                            <>i<em>DIG</em></>
                          )}
                        </span>
                      ))
                    ) : post.title}
                  </h1>
                </div>
                
                {/* Share Button */}
                <div className="relative">
                  <button
                    onClick={() => setShowShareOptions(!showShareOptions)}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-gray-600 hover:text-gray-700"
                    data-testid="button-share"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    Share
                  </button>
                  
                  {/* Share Dropdown */}
                  {showShareOptions && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                      <button
                        onClick={() => handleShare('twitter')}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-3"
                        data-testid="button-share-twitter"
                      >
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                        Share on Twitter
                      </button>
                      <button
                        onClick={() => handleShare('facebook')}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-3"
                        data-testid="button-share-facebook"
                      >
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Share on Facebook
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-3"
                        data-testid="button-share-linkedin"
                      >
                        <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        Share on LinkedIn
                      </button>
                      <button
                        onClick={() => handleShare('copy')}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-3"
                        data-testid="button-share-copy"
                      >
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy Link
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Demo Link */}
              <div className="mb-8 text-center">
                <Link href="/#demo-section" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors font-medium">
                  Watch the i<em>DIG</em> Demo
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Blog Post Content */}
              <div className="prose prose-lg max-w-none">
                {post.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {paragraph.includes('iDIG') ? (
                      paragraph.split(/(\biDIG\b)/g).map((part, partIndex) => (
                        part === 'iDIG' ? <span key={partIndex}>i<em>DIG</em></span> : part
                      ))
                    ) : paragraph}
                  </p>
                ))}
              </div>

              {/* Author Bio */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-medium text-blue-600">PD</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{post.author}</h3>
                    <p className="text-gray-600 text-sm">
                      Creator of i<em>DIG</em> and advocate for resonant tool building. Exploring the intersection of human curiosity and technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="text-xl font-medium mb-4">
              <span className="logo-i">i</span>
              <span className="logo-dig ml-1">DIG</span>
              <span className="logo-io">.io</span>
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