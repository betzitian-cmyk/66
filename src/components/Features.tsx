import { motion } from 'motion/react';
import { Trophy, Users, Zap, Shield } from 'lucide-react';
import { Football } from './Icons';

const features = [
  {
    icon: Trophy,
    title: "Championship Pedigree",
    description: "A legacy built on excellence and the relentless pursuit of victory."
  },
  {
    icon: Users,
    title: "Elite Coaching",
    description: "Learn from the best in the business with decades of pro experience."
  },
  {
    icon: Zap,
    title: "High Octane Offense",
    description: "Explosive plays and dynamic strategies that dominate the field."
  },
  {
    icon: Shield,
    title: "Ironclad Defense",
    description: "A wall that never breaks. Discipline, strength, and precision."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black mb-4"
          >
            Why We Dominate
          </motion.h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Our program is built on four pillars of excellence that define the modern game.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-zinc-800/50 border border-white/5 hover:border-football-secondary/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-football-secondary/10 flex items-center justify-center mb-6 group-hover:bg-football-secondary transition-colors">
                <feature.icon className="w-7 h-7 text-football-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
