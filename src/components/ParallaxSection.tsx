import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage: string;
  overlayColor?: string;
  speed?: number;
}

export default function ParallaxSection({ 
  children, 
  backgroundImage, 
  overlayColor = 'rgba(0,0,0,0.6)',
  speed = 0.5 
}: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y, backgroundImage: `url(${backgroundImage})` }}
        className="absolute inset-0 bg-cover bg-center scale-110"
        referrerPolicy="no-referrer"
      />
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: overlayColor }}
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
