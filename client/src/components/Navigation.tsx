import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubscribeDropdownOpen, setIsSubscribeDropdownOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSubscribeDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "The Resonant Builder" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="bg-white border-b border-gray-200 relative">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-medium">
i<em>DIG</em>
              <span className="logo-io">.io</span>
            </span>
          </Link>

          {/* Centered Tagline - Hidden on mobile portrait only */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden sm:block">
            <span className="text-lg font-medium">
              <span className="apple-blue">Resonant</span>
              <span className="charcoal"> Tools for </span>
              <span className="apple-blue">Curious</span>
              <span className="charcoal"> Minds</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Subscribe Dropdown */}
            <div className="relative">
              <Button 
                onClick={() => setIsSubscribeDropdownOpen(!isSubscribeDropdownOpen)}
                className="apple-button px-4 py-2 text-sm font-medium flex items-center gap-1" 
                data-testid="button-subscribe"
              >
                Subscribe
                <ChevronDown className="w-4 h-4" />
              </Button>
              
              {/* Subscribe Dropdown Menu */}
              {isSubscribeDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link 
                    href="/newsletter" 
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-500 transition-colors duration-200"
                    onClick={() => setIsSubscribeDropdownOpen(false)}
                  >
                    Newsletter
                  </Link>
                  <Link 
                    href="/blog" 
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-500 transition-colors duration-200"
                    onClick={() => setIsSubscribeDropdownOpen(false)}
                  >
                    Blog
                  </Link>
                </div>
              )}
            </div>
            
            {/* Hamburger Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              data-testid="button-menu-toggle"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Dropdown Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full right-6 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`px-4 py-3 transition-colors duration-200 hover:bg-gray-50 ${
                    isActive(link.href) 
                      ? "text-blue-500 bg-blue-50" 
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
