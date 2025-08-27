import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  content: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "A Curiosity Engine in Development",
    content: "iDIG.io is a curiosity engine in development to empower people to explore, connect, and create resonantly without surrendering their privacy or agency. Data is stored locally or in private data stores for people to remain the sovereign curator of their own discoveries."
  },
  {
    id: 2,
    title: "Building a Resonant Community", 
    content: "iDIG is also a model to inspire a community of resonant builders to build within iDIG or on their own for the health of the connection as much as the wealth generated from it."
  }
  // Additional slides can be added here in the future
];

export default function SlidePresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  // Auto-advance slides every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 20000); // 20 seconds

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="relative bg-white rounded-2xl px-12 md:px-16 pt-6 md:pt-8 pb-12 md:pb-16 mb-16 shadow-2xl border border-gray-100">
      {/* Navigation Arrows */}
      <div className="flex items-center justify-between absolute top-1/2 left-4 right-4 transform -translate-y-1/2">
        <button 
          onClick={goToPrevious}
          className={`p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 ${
            slides.length <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
          }`}
          disabled={slides.length <= 1}
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button 
          onClick={goToNext}
          className={`p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 ${
            slides.length <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
          }`}
          disabled={slides.length <= 1}
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
      
      {/* Slide Content */}
      <div className="mx-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 charcoal">
            {slide.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {slide.content}
          </p>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
        {/* Show placeholder indicators for future slides */}
        {slides.length < 3 && [...Array(3 - slides.length)].map((_, index) => (
          <div 
            key={`placeholder-${index}`}
            className="w-2 h-2 rounded-full bg-gray-200 opacity-50"
          />
        ))}
      </div>
    </div>
  );
}
