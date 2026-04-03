import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, Search, User } from 'lucide-react';
import { Football } from './Icons';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "bg-black/80 backdrop-blur-xl py-4 border-b border-white/10" : "bg-transparent py-8"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <motion.div 
            whileHover={{ rotate: 20 }}
            className="p-2 bg-football-secondary rounded-lg"
          >
            <Football className="w-6 h-6 text-white" />
          </motion.div>
          <span className="text-2xl font-display font-black tracking-tighter">FLIGHTSCHOOL</span>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {["Home", "Schedule", "Roster", "Stats", "News", "Store"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold uppercase tracking-widest hover:text-football-secondary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:text-football-secondary transition-colors hidden md:block">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:text-football-secondary transition-colors hidden md:block">
            <User className="w-5 h-5" />
          </button>
          <button className="bg-football-secondary px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-orange-700 transition-all hidden sm:block">
            Tickets
          </button>
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
        className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-b border-white/10"
      >
        <div className="px-6 py-10 flex flex-col gap-6">
          {["Home", "Schedule", "Roster", "Stats", "News", "Store"].map((item) => (
            <a 
              key={item} 
              href="#"
              className="text-2xl font-display font-bold uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
