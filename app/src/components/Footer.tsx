import { Box } from 'lucide-react';

const footerLinks = [
  { label: 'Dashboard', href: '#' },
  { label: 'Playground', href: '#' },
  { label: 'Docs', href: '#' },
  { label: 'About', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Box className="w-6 h-6 text-[#FF7A00] transition-transform group-hover:rotate-12" />
            <span className="text-white font-semibold">AIVOLKS</span>
          </a>

          {/* Nav Links */}
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FF7A00] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-white/30">
            &copy; 2025 AIVOLKS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
