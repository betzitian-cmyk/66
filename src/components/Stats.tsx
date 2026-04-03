import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

interface StatItemProps {
  label: string;
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const stats = [
    { label: "Championships", value: 12, suffix: "" },
    { label: "Total Yards", value: 4500, suffix: "+" },
    { label: "Touchdowns", value: 84, suffix: "" },
    { label: "Win Rate", value: 92, suffix: "%" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-20">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="text-center"
        >
          <div className="text-4xl md:text-6xl font-display font-black text-football-secondary mb-2">
            <Counter value={stat.value} suffix={stat.suffix} />
          </div>
          <div className="text-zinc-400 uppercase tracking-widest text-sm font-bold">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
