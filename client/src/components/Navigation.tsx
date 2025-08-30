import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/newsletter", label: "The Resonant Builders Monthly" },
    { href: "/blog", label: "The Resonant Builders Blog" },
    { href: "/book", label: "We the Resonant Builders" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-medium">
              <span className="logo-i">i</span><span className="logo-dig" style={{fontStyle: 'italic'}}>DIG</span>
              <span className="logo-io">.io</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {/* Subscribe Button */}
            <Link href="/newsletter">
              <Button className="apple-button px-4 py-2 text-sm font-medium" data-testid="button-subscribe">
                Subscribe
              </Button>
            </Link>
            
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
          <div className="absolute top-full right-6 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
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
