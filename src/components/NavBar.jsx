import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { ChevronDown } from 'lucide-react';
import hero from "../assets/dev.png";
import "../App.css";

export default function NavBar() {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile navigation
  const toggleNav = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto"; // Prevent scrolling when menu is open
  };

  // Handle link clicks
  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    
    // Close mobile nav if open
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = "auto";
    }
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track scroll position for navbar styling and active section
  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'education', 'projects', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center justify-between transition-all duration-300 no-underline ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 z-50 no-underline"
        >
          <a
              href="/"
              className="text-xl font-bold text-gray-900 flex items-center gap-2 no-underline"
            >
              <p className="text-teal-500 no-underline">TR</p>
              <p className="hidden sm:inline no-underline">Thendo Ravhengani</p>
            </a>

        </Link>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden z-50 flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white shadow-md no-underline"
          onClick={toggleNav}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 no-underline ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-1 no-underline"
          }`}></span>
          <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 no-underline ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}></span>
          <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 no-underline ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
          }`}></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {['home', 'about', 'education', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(section);
              }}
              className={`px-4 py-2 mx-1 text-sm font-medium rounded-full transition-all no-underline ${
                activeSection === section 
                  ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white underline" 
                  : "text-gray-700 hover:bg-gray-100 no-underline "
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 text-sm font-medium bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors flex items-center gap-1 no-underline"
          >
            CV <ChevronDown size={14} />
          </a>
        </nav>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`fixed inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="flex flex-col items-center gap-6">
            {['home', 'about', 'education', 'projects', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(section);
                }}
                className={`text-xl font-medium transition-all ${
                  activeSection === section 
                    ? "text-teal-600 scale-110" 
                    : "text-gray-700"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <div className="h-1 w-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mt-1"></div>
                )}
              </a>
            ))}
            
            <a
              href="/cv2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-3 text-base font-medium bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-full hover:opacity-90 transition-colors flex items-center gap-2 no-underline"
            >
              Curriculum Vitae <ChevronDown size={16} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
