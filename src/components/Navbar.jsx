import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to handle hash links on home vs other pages
  const NavLink = ({ href, children }) => {
    if (isHomePage && href.startsWith('#')) {
      return (
        <a href={href} className="text-xs font-bold tracking-widest text-slate-400 hover:text-white transition-colors uppercase">
          {children}
        </a>
      );
    }
    // If it's a hash link but we're not on home, go to home first
    if (href.startsWith('#')) {
      return (
        <Link to={`/${href}`} className="text-xs font-bold tracking-widest text-slate-400 hover:text-white transition-colors uppercase">
          {children}
        </Link>
      );
    }
    // Standard route link
    return (
      <Link to={href} className="text-xs font-bold tracking-widest text-slate-400 hover:text-white transition-colors uppercase">
        {children}
      </Link>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen ? 'bg-[#020408]/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-md group-hover:bg-accent-blue transition-colors duration-300">
              <span className="text-black font-bold text-lg">TL</span>
            </div>
            <span className="text-sm font-bold tracking-widest text-white uppercase group-hover:text-accent-blue transition-colors">
              TrendLens
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#problem">The Problem</NavLink>
            <NavLink href="#how-it-works">How it Works</NavLink>
            <NavLink href="#benefits">Benefits</NavLink>
            <NavLink href="/support">Support</NavLink>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/signin" className="text-xs font-bold tracking-widest text-slate-400 hover:text-white transition-colors uppercase">
              Sign In
            </Link>
            <Link to="/waitlist">
              <Button variant="primary" size="sm" className="py-2.5 px-6 text-xs rounded-md">
                Request Access
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-400 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#020408] fixed inset-0 top-[60px] z-40 overflow-y-auto"
          >
            <div className="px-6 py-8 space-y-6 flex flex-col">
              <div className="space-y-4 border-b border-white/5 pb-6">
                <a href="/#problem" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between text-sm font-bold tracking-widest text-slate-300 hover:text-white uppercase py-2">
                  The Problem <ChevronRight className="w-4 h-4" />
                </a>
                <a href="/#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between text-sm font-bold tracking-widest text-slate-300 hover:text-white uppercase py-2">
                  How it Works <ChevronRight className="w-4 h-4" />
                </a>
                <a href="/#benefits" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between text-sm font-bold tracking-widest text-slate-300 hover:text-white uppercase py-2">
                  Benefits <ChevronRight className="w-4 h-4" />
                </a>
                <Link to="/support" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between text-sm font-bold tracking-widest text-slate-300 hover:text-white uppercase py-2">
                  Support <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="space-y-4 pt-2">
                <Link to="/signin" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center py-3 text-sm font-bold tracking-widest text-slate-300 hover:text-white uppercase border border-white/10 rounded-md">
                  Sign In
                </Link>
                <Link to="/waitlist" onClick={() => setIsMobileMenuOpen(false)} className="block w-full">
                  <Button variant="primary" className="w-full justify-center">
                    Request Access
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
