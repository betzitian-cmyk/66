import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import ParallaxSection from './components/ParallaxSection';
import Stats from './components/Stats';
import Features from './components/Features';
import Footer from './components/Footer';
import { Football } from './components/Icons';

export default function App() {
  return (
    <main className="relative">
      <Navbar />
      
      {/* Hero Section */}
      <HeroCarousel />

      {/* Stats Section */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <Stats />
        </div>
      </section>

      {/* Parallax 1: Intensity */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=1920"
      >
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-display font-black mb-6"
          >
            Unmatched <span className="text-football-secondary">Intensity</span>
          </motion.h2>
          <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
            Every snap, every play, every yard. We push the boundaries of human performance to achieve the impossible.
          </p>
          <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-football-secondary hover:text-white transition-all">
            Join the Hunt
          </button>
        </div>
      </ParallaxSection>

      {/* Features Section */}
      <Features />

      {/* Parallax 2: Legacy */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1920"
        speed={0.3}
      >
        <div className="max-w-2xl ml-auto text-right">
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-display font-black mb-6"
          >
            Built on <span className="text-football-secondary">Legacy</span>
          </motion.h2>
          <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
            From the muddy fields of the past to the high-tech stadiums of today, our history is written in sweat and gold.
          </p>
          <button className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            View History
          </button>
        </div>
      </ParallaxSection>

      {/* Gallery/Action Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-black mb-4">Action in Motion</h2>
              <p className="text-zinc-400">Capturing the raw energy of the gridiron.</p>
            </div>
            <button className="text-football-secondary font-bold uppercase tracking-widest hover:underline">
              View All Media
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1529762717188-50781fe6c8f1?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1461896756964-34221972b941?auto=format&fit=crop&q=80&w=800"
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
              >
                <img 
                  src={img} 
                  alt="Football action" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-4 bg-football-secondary rounded-full">
                    <Football className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-football-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1000" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-8">Ready to Join the Elite?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Whether you're a player, a fan, or a partner, there's a place for you in our legacy.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-football-secondary text-white font-bold uppercase tracking-widest rounded-full hover:bg-orange-700 transition-all shadow-xl">
              Get Started Now
            </button>
            <button className="px-10 py-5 bg-white text-football-primary font-bold uppercase tracking-widest rounded-full hover:bg-blue-50 transition-all shadow-xl">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
