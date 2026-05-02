import { useState } from 'react';
import { 
  Bus, 
  Settings, 
  Search, 
  Mic, 
  Star, 
  Map as MapIcon, 
  Bot, 
  Bookmark, 
  ChevronRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const LANGUAGE_OPTIONS = [
  { id: 'en', label: 'EN' },
  { id: 'zh', label: '中' },
  { id: 'ms', label: 'MY' },
  { id: 'ta', label: 'TA' },
];

const NEARBY_STOPS = [
  {
    id: 1,
    road: 'VICTORIA ST',
    name: 'Bras Basah Cplx',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG8DpZXvrXbzKF3YsaWLjh50wCVSTyR0Gp8zlPJhYAB_6pzQapTEH03J8vmHDjfcET1JT5JgQ0eQNciYYGsufA38HKPXACmyzn1Z9MmFiaE3eT7OvnP6Y1L0Md_MFzmC_VHQLjX0pXoxCVApp1pCGIcOb-D-P209yIF69kbTqtSKQHG9PkQm-2WvuG8jTHUuDQPiWc7wAB5F6CNNRo_n4s684WHIFCHbM4u0HQo-8FtUq72Vng7j7LlM2veo1zi2uZYrVQDj-Yu20',
  },
  {
    id: 2,
    road: 'FULLERTON RD',
    name: 'The Fullerton ...',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJNwcXbWg-YH3fHuZixYOx5bswywXa2pWjDprfy8ntzDnBax_eEGTPcV2LPF2jRvL2yKKY6_5ByvwoyswhcIRFxzSl0djW-qtSnn5_Jo639ak6JkMkdCxDCOy6aja028N_x6qkssjVbBBrcopoh2KcyxqqlCxAbGY1zMC_Gh8WHDXc2aJblDqWexHnwu7HoXa7y1GoaXOFBfmRo6jgEkRVh6mqdIWsq9gzig8kHozlEwBnRc2rNgfxt7PLfQTfVPfgGFf9q-8YrSM',
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('enquiry');
  const [activeLang, setActiveLang] = useState('en');

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9ff] text-[#191c22] font-sans selection:bg-[#aac7ff]">
      {/* Top App Bar */}
      <header className="fixed top-0 left-0 right-0 h-8 bg-black/90 flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-2">
          <Bus size={14} className="text-white" />
          <span className="text-[11px] font-black tracking-widest text-white uppercase">SG BUS</span>
        </div>
        <Settings size={16} className="text-white/80 cursor-pointer hover:text-white transition-colors" />
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-12 pb-32 max-w-lg mx-auto w-full">
        {/* Language Selection */}
        <section className="mt-6 flex justify-center">
          <div className="bg-white/80 backdrop-blur-md border border-black/5 rounded-full p-1 flex items-center shadow-sm">
            {LANGUAGE_OPTIONS.map((lang) => (
              <button
                key={lang.id}
                onClick={() => setActiveLang(lang.id)}
                className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all ${
                  activeLang === lang.id 
                    ? 'bg-[#004e9f] text-white' 
                    : 'text-[#5f5e60] hover:bg-gray-100'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </section>

        {/* Hero */}
        <section className="mt-10 px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[44px] leading-[1.1] font-bold tracking-tight text-[#191c22] mb-8"
          >
            How can I help you today?
          </motion.h1>
          
          <div className="relative group">
            <div className="bg-[#ecedf6] rounded-full px-6 py-4 flex items-center gap-4 border-2 border-transparent focus-within:border-[#0066cc] transition-all">
              <Search size={20} className="text-[#727784]" />
              <input 
                type="text" 
                placeholder="Where to?" 
                className="bg-transparent border-none focus:ring-0 w-full text-[17px] placeholder:text-[#727784] p-0"
              />
              <button className="w-10 h-10 rounded-full bg-[#e1e2eb] flex items-center justify-center text-[#0066cc] active:scale-95 transition-transform">
                <Mic size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Nearby Stops */}
        <section className="mt-12 px-6">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold tracking-tight">Nearby Stops</h2>
            <button className="text-[#0066cc] text-[13px] font-bold tracking-wider hover:opacity-70 transition-opacity">
              VIEW ALL
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {NEARBY_STOPS.map((stop) => (
              <motion.div 
                key={stop.id}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col border border-black/5"
              >
                <div className="aspect-square relative w-full overflow-hidden">
                  <img 
                    src={stop.image} 
                    alt={stop.name}
                    className="object-cover w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[11px] text-[#727784] font-bold tracking-widest uppercase mb-1">{stop.road}</p>
                  <p className="font-semibold text-[#191c22] truncate">{stop.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Route Details */}
        <section className="mt-12 px-4">
          <div className="bg-[#191c22] text-white p-6 rounded-[24px] shadow-xl">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="bg-[#0066cc] text-white px-3 py-1 rounded-lg font-bold text-lg">190</span>
                <h3 className="mt-4 text-2xl font-bold tracking-tight">To Orchard Rd</h3>
                <p className="text-white/60 text-sm mt-1">Kampong Bahru Ter</p>
              </div>
              <Star size={24} className="text-white/20 cursor-pointer hover:text-white transition-colors" />
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-6">
                <span className="text-white/40 font-medium">Next Bus</span>
                <div className="text-right">
                  <span className="text-4xl font-black text-[#2997ff]">4 MIN</span>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mt-1">Expected 14:32</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <p className="text-[10px] text-white/40 font-bold tracking-widest uppercase mb-1">FIRST BUS</p>
                  <p className="font-bold text-xl">05:30</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <p className="text-[10px] text-white/40 font-bold tracking-widest uppercase mb-1">LAST BUS</p>
                  <p className="font-bold text-xl">23:45</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Preview & AI FAB */}
        <section className="mt-12 px-6 relative">
          <div className="rounded-[24px] overflow-hidden h-48 w-full relative shadow-inner border border-black/5">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdGHtdx-dcqRAdC9fcFNU4l3vFkfNi0tjSfrGYkbYMsnViGfY81xlUrQ0SSZx1XN2qIRdEppIm0_JbD-t3EUVEJ9krogOJhcXuRuHkbHPt005JRj92tnGr0JM6kOKufHBiFSfUwv1gR-feBRZhaidBlTFCYGKDyGN1vifPHBDijtvlxTSNLoQmjaMJu-CZOP8mwMVfayTDcTzIpx3DQw7Bqe2z8l4hJrMx7WqfuyruuaBlb_kUzrKzdjOKdTtWNf5TSora0mf9GcM" 
              alt="Map"
              className="w-full h-full object-cover grayscale opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-white/10" />
            
            {/* AI Assistant Bubble */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute -top-6 right-6 w-16 h-16 bg-[#0066cc] text-white rounded-full flex items-center justify-center shadow-2xl z-20 cursor-pointer"
            >
              <Bot size={32} />
            </motion.button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 px-6 pb-20 text-center">
          <p className="text-[10px] text-[#727784] uppercase tracking-[0.2em] font-black mb-2">
            SG BUS — PUBLIC TRANSIT ENQUIRY
          </p>
          <p className="text-xs text-[#727784]/60 max-w-[280px] mx-auto leading-relaxed">
            Powered by LTA DataMall. Minimalist design for a cleaner city transit experience.
          </p>
        </footer>
      </main>

      {/* Bottom Nav Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl z-50 flex justify-around items-center pt-3 pb-8 px-4 border-t border-black/5 shadow-[0_-10px_30px_rgba(0,0,0,0.02)]">
        {[
          { id: 'enquiry', label: 'Enquiry', icon: Search },
          { id: 'map', label: 'Map', icon: MapIcon },
          { id: 'assistant', label: 'Assistant', icon: Bot },
          { id: 'saved', label: 'Saved', icon: Bookmark },
        ].map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${
                isActive ? 'text-[#0066cc]' : 'text-[#727784]'
              }`}
            >
              <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[11px] font-bold tracking-tight ${isActive ? 'opacity-100' : 'opacity-80'}`}>
                {item.label}
              </span>
              {isActive && (
                <motion.div 
                  layoutId="activeTab"
                  className="w-1 h-1 bg-[#0066cc] rounded-full mt-0.5"
                />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
