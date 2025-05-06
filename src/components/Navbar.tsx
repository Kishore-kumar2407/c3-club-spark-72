
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Calendar, Code, Users, Info, Contact } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: <Home className="w-4 h-4 mr-1" /> },
    { href: "/event-details", label: "Event", icon: <Calendar className="w-4 h-4 mr-1" /> },
    { href: "/domains", label: "CS Domains", icon: <Code className="w-4 h-4 mr-1" /> },
    { href: "/companies", label: "Companies", icon: <Users className="w-4 h-4 mr-1" /> },
    { href: "/interviews", label: "Interviews", icon: <Info className="w-4 h-4 mr-1" /> },
    { href: "/contact", label: "Join Us", icon: <Contact className="w-4 h-4 mr-1" /> }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-club-purple to-club-pink p-1 rounded-md">
              <span className="font-bold text-white text-xl">
                C3
              </span>
            </div>
            <span className="font-semibold text-xl hidden md:block">Club</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Button key={link.href} variant="ghost" asChild size="sm">
                <Link to={link.href} className="flex items-center">
                  {link.icon}
                  {link.label}
                </Link>
              </Button>
            ))}
            <Button className="ml-2 bg-gradient-to-r from-club-purple to-club-pink hover:opacity-90">Register</Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 pb-3 space-y-1 animate-fade-in">
            {navLinks.map((link) => (
              <Button 
                key={link.href} 
                variant="ghost" 
                className="w-full justify-start" 
                asChild
              >
                <Link 
                  to={link.href} 
                  className="flex items-center" 
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  {link.label}
                </Link>
              </Button>
            ))}
            <Button className="w-full bg-gradient-to-r from-club-purple to-club-pink hover:opacity-90">
              Register
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
