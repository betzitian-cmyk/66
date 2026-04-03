import { motion } from 'motion/react';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';
import { Football } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-football-secondary rounded-lg">
                <Football className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-black tracking-tighter">FLIGHTSCHOOL</span>
            </div>
            <p className="text-zinc-500 max-w-md mb-8">
              The premier destination for elite American football training, analytics, and historical archives. Join the legacy.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="p-3 rounded-full glass hover:text-football-secondary transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Schedule</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roster</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Statistics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tickets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-zinc-500 text-sm mb-4">Get the latest updates and highlights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-football-secondary w-full"
              />
              <button className="bg-football-secondary px-4 py-2 rounded-lg text-sm font-bold uppercase">Join</button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-zinc-600 text-xs uppercase tracking-widest">
          <p>© 2026 FLIGHTSCHOOL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
