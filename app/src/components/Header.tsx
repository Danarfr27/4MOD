import { useState, useEffect } from 'react';
import { Box, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Models', href: '#models' },
  { label: 'Docs', href: '#' },
  { label: 'About', href: '#' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-glass border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="flex items-center justify-between h-14 md:h-16 px-4 md:px-8 max-w-[1400px] mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Box className="w-7 h-7 md:w-8 md:h-8 text-[#FF7A00] transition-transform group-hover:rotate-12" />
          <span className="text-white font-semibold text-base md:text-lg tracking-tight">
            AIVOLKS<span className="text-[#FF7A00]">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm text-white/70 hover:text-white transition-colors px-4 py-2"
          >
            Login
          </a>
          <a
            href="#"
            className="gradient-orange text-white text-sm font-medium px-5 py-2 rounded-full hover:shadow-orange transition-all duration-200 hover:scale-[1.02]"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-glass border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-white/10 mt-2">
              <a
                href="#"
                className="text-sm text-white/70 hover:text-white transition-colors px-4 py-2 text-center"
              >
                Login
              </a>
              <a
                href="#"
                className="gradient-orange text-white text-sm font-medium px-5 py-2 rounded-full text-center"
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
