import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "The Ultimate Gridiron Experience",
    subtitle: "Experience the intensity of the game like never before.",
    image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=1920",
    cta: "Explore Season"
  },
  {
    id: 2,
    title: "Legendary Moments",
    subtitle: "Relive the greatest plays in football history.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1920",
    cta: "Watch Highlights"
  },
  {
    id: 3,
    title: "Future of the Sport",
    subtitle: "Next-gen training and analytics for elite athletes.",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=1920",
    cta: "Join Academy"
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.div
          key={`content-${current}`}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.span 
            className="inline-block text-football-secondary font-bold tracking-widest uppercase mb-4 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Elite Football Performance
          </motion.span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white leading-none mb-6 drop-shadow-2xl">
            {slides[current].title}
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 font-light">
            {slides[current].subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-football-secondary hover:bg-orange-700 text-white font-bold uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95">
              {slides[current].cta}
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold uppercase tracking-wider border border-white/20 transition-all">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 transition-all duration-500 ${
              current === i ? "w-12 bg-football-secondary" : "w-6 bg-white/30"
            }`}
          />
        ))}
      </div>

      <button 
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass hover:bg-white/20 transition-all hidden md:block"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button 
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass hover:bg-white/20 transition-all hidden md:block"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
