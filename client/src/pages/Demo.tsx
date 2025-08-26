import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";

interface DemoSlide {
  id: string;
  type: 'intro' | 'video' | 'callout';
  title?: string;
  content?: string;
  videoUrl?: string;
  duration?: number;
  order: number;
}

interface DemoPresentation {
  id: string;
  title: string;
  slug: string;
  description?: string;
  slides: DemoSlide[];
}

export default function Demo() {
  const params = useParams();
  const [, navigate] = useLocation();
  const slug = params.slug || 'idig-demo';
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Mock data for different demos
  const getDemoPresentation = (slug: string): DemoPresentation => {
    switch (slug) {
      case 'idig-lens':
        return {
          id: '2',
          title: 'iDIG Lens Demo',
          slug: 'idig-lens',
          description: 'Highlight, save, and explore insights',
          slides: [
            {
              id: '1',
              type: 'intro',
              title: 'iDIG Lens',
              content: 'Highlight and save text from any webpage to build your personal knowledge base. Transform casual browsing into deep learning by capturing insights as you discover them.',
              order: 1
            },
            {
              id: '2',
              type: 'video',
              title: 'iDIG Lens in Action',
              videoUrl: '/public-objects/iDIG Demo.mp4',
              order: 2
            }
          ]
        };
      case 'idig-feeds':
        return {
          id: '3',
          title: 'iDIG Feeds',
          slug: 'idig-feeds',
          description: 'Turn searches into discovery engines',
          slides: [
            {
              id: '1',
              type: 'intro',
              title: 'iDIG Feeds',
              content: 'Convert your search queries into intelligent discovery feeds. Track topics of interest and receive curated content that deepens your understanding over time.',
              order: 1
            }
          ]
        };
      case 'idig-matching':
        return {
          id: '4',
          title: 'iDIG Matching',
          slug: 'idig-matching',
          description: 'AI-powered skill and experience matching',
          slides: [
            {
              id: '1',
              type: 'intro',
              title: 'iDIG Matching',
              content: 'Intelligent matching system that connects your skills, interests, and learning goals with relevant opportunities, people, and resources across the web.',
              order: 1
            }
          ]
        };
      case 'idig-scenes':
        return {
          id: '5',
          title: 'iDIG Scenes',
          slug: 'idig-scenes',
          description: 'Curate rich experiences around ideas',
          slides: [
            {
              id: '1',
              type: 'intro',
              title: 'iDIG Scenes',
              content: 'Create immersive, contextual environments around your ideas. Organize related content, conversations, and insights into rich, explorable scenes.',
              order: 1
            }
          ]
        };
      default: // idig-demo
        return {
          id: '1',
          title: 'iDIG Demo',
          slug: 'idig-demo',
          description: 'Interactive demonstration of iDIG capabilities',
          slides: [
            {
              id: '1',
              type: 'intro',
              title: 'iDIG (Deep Inquiry Generator)',
              content: 'iDIG (Deep Inquiry Generator) is a chrome extension in development. The following presentation is for demonstration purposes only.\n\nI will add more text later.',
              order: 1
            },
            {
              id: '2', 
              type: 'video',
              title: 'iDIG Movable Menu',
              videoUrl: '/objects/uploads/idig-movable-menu.mp4', // Will be updated with actual path
              order: 2
            }
          ]
        };
    }
  };

  const mockPresentation = getDemoPresentation(slug);

  const { data: presentation } = useQuery({
    queryKey: ['/api/presentations', slug],
    queryFn: () => Promise.resolve(mockPresentation), // Will be replaced with actual API
    enabled: !!slug,
  });

  const handleNext = () => {
    if (presentation && currentSlide < presentation.slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowRight':
      case ' ':
        e.preventDefault();
        handleNext();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        handlePrevious();
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;
      case 'Escape':
        if (isFullscreen) {
          setIsFullscreen(false);
        }
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isFullscreen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  if (!presentation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Loading presentation...</h1>
        </div>
      </div>
    );
  }

  const currentSlideData = presentation.slides[currentSlide];
  const isLastSlide = currentSlide === presentation.slides.length - 1;
  const isFirstSlide = currentSlide === 0;

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50' : 'min-h-screen'} bg-black text-white flex flex-col`}>
      {/* Header Controls */}
      {!isFullscreen && (
        <div className="bg-gray-900 p-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Back to iDIG
          </button>
          <h1 className="text-xl font-medium">{presentation.title}</h1>
          <button
            onClick={toggleFullscreen}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
          >
            Fullscreen
          </button>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center relative">
        {currentSlideData.type === 'intro' && (
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              {currentSlideData.title}
            </h2>
            <div className="text-xl md:text-2xl text-gray-300 leading-relaxed space-y-6">
              {currentSlideData.content?.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}

        {currentSlideData.type === 'video' && (
          <div className="w-full h-full flex items-center justify-center">
            <video
              className="max-w-full max-h-full"
              controls
              autoPlay={isPlaying}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={currentSlideData.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {currentSlideData.type === 'callout' && (
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-light mb-8">
              {currentSlideData.title}
            </h2>
            <div className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              {currentSlideData.content}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Controls */}
      <div className="p-6 flex items-center justify-between bg-gray-900/50">
        <button
          onClick={handlePrevious}
          disabled={isFirstSlide}
          className={`px-6 py-2 rounded-lg transition-colors ${
            isFirstSlide 
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          Previous
        </button>

        <div className="flex items-center space-x-4">
          <span className="text-gray-300">
            {currentSlide + 1} / {presentation.slides.length}
          </span>
          <div className="flex space-x-1">
            {presentation.slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={isLastSlide ? () => navigate('/') : handleNext}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors text-white"
        >
          {isLastSlide ? 'Finish' : 'Next'}
        </button>
      </div>

      {/* Keyboard shortcuts hint */}
      {isFullscreen && (
        <div className="absolute top-4 left-4 text-sm text-gray-400 bg-black/50 p-3 rounded-lg">
          <div>← → Navigate slides</div>
          <div>Space: Next slide</div>
          <div>F: Fullscreen</div>
          <div>Esc: Exit fullscreen</div>
        </div>
      )}
    </div>
  );
}