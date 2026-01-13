
import React, { useState } from 'react';
import { HERBS } from './constants';
import { Herb, AppSection } from './types';
import HerbCard from './components/HerbCard';
import ChatInterface from './components/ChatInterface';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.EXPLORE);
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHerbs = HERBS.filter(herb => 
    herb.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    herb.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-stone-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 herb-gradient rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-900/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-black text-emerald-900 tracking-tight uppercase">Thyme & Essence</h1>
              <p className="text-[10px] tracking-widest uppercase font-semibold text-emerald-600">Digital Herbalist</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
            <button 
              onClick={() => setActiveSection(AppSection.EXPLORE)}
              className={`hover:text-emerald-800 transition-colors ${activeSection === AppSection.EXPLORE ? 'text-emerald-800 font-bold' : ''}`}
            >
              Herbarium
            </button>
            <button 
              onClick={() => setActiveSection(AppSection.ASSISTANT)}
              className={`hover:text-emerald-800 transition-colors ${activeSection === AppSection.ASSISTANT ? 'text-emerald-800 font-bold' : ''}`}
            >
              Ask AI
            </button>
            <a href="#" className="hover:text-emerald-800 transition-colors">Gardening</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="bg-emerald-50 text-emerald-700 p-2 rounded-full hover:bg-emerald-100 transition-colors md:hidden">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <button className="hidden sm:block bg-emerald-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-emerald-800 transition-all shadow-md active:scale-95">
              Sync My Garden
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8 md:py-12 flex flex-col md:flex-row gap-8">
        
        {/* Left Column: Explorer / Garden */}
        <div className={`flex-1 flex flex-col gap-6 ${activeSection === AppSection.ASSISTANT ? 'hidden md:flex' : 'flex'}`}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">The Herbarium</h2>
              <p className="text-stone-500 max-w-lg">Discover the culinary secrets, medicinal healing, and aromatic wonders of nature's finest herbs.</p>
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Filter by name or use..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white border border-stone-200 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 w-full md:w-64"
              />
              <svg className="w-4 h-4 absolute left-3.5 top-2.5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHerbs.map(herb => (
              <HerbCard 
                key={herb.id} 
                herb={herb} 
                onClick={(h) => setSelectedHerb(h)} 
              />
            ))}
          </div>

          {filteredHerbs.length === 0 && (
            <div className="text-center py-20 bg-stone-50 rounded-3xl border border-dashed border-stone-300">
              <p className="text-stone-400 italic">No herbs found matching your search. Try "mint" or "medicinal".</p>
            </div>
          )}
        </div>

        {/* Right Column: AI Assistant & Details */}
        <div className={`w-full md:w-80 lg:w-96 shrink-0 flex flex-col gap-6 h-[calc(100vh-140px)] sticky top-28 ${activeSection === AppSection.EXPLORE ? 'hidden md:flex' : 'flex'}`}>
          
          {/* Chat Interface */}
          <ChatInterface />

          {/* Quick Info Box (Selected Herb) */}
          <div className={`bg-emerald-900 text-white p-6 rounded-3xl shadow-xl transition-all duration-500 overflow-hidden relative ${selectedHerb ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-4 pointer-events-none'}`}>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            {selectedHerb ? (
              <>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold">{selectedHerb.name}</h4>
                    <p className="text-xs text-emerald-300 italic">{selectedHerb.scientificName}</p>
                  </div>
                  <button onClick={() => setSelectedHerb(null)} className="text-white/50 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <h5 className="font-bold text-emerald-200 uppercase text-[10px] tracking-widest mb-1">Top Pairings</h5>
                    <p className="text-emerald-50/80">{selectedHerb.pairings.join(' • ')}</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-emerald-200 uppercase text-[10px] tracking-widest mb-1">Health Benefits</h5>
                    <ul className="list-disc list-inside text-emerald-50/80">
                      {selectedHerb.benefits.map(b => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                  <button 
                    onClick={() => {
                      setActiveSection(AppSection.ASSISTANT);
                      // Custom logic to prepopulate chat could go here
                    }}
                    className="w-full mt-4 bg-white text-emerald-900 font-bold py-2 rounded-xl text-center shadow-lg hover:bg-emerald-50 transition-colors"
                  >
                    Recipes with {selectedHerb.name}
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-10 opacity-50">
                <p className="text-sm">Select an herb to see deep insights and curated benefits.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-6 border-t border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg herb-gradient opacity-80"></div>
            <span className="font-bold text-white text-lg tracking-tight uppercase">Thyme & Essence</span>
          </div>
          <div className="flex gap-8 text-xs font-medium uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Botanical API</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Gardeners Guild</a>
          </div>
          <p className="text-[10px]">© 2024 Thyme & Essence. Powered by Gemini Flash.</p>
        </div>
      </footer>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-stone-900/90 backdrop-blur-lg rounded-full py-4 px-8 flex justify-between items-center z-50 shadow-2xl border border-white/10">
        <button 
          onClick={() => setActiveSection(AppSection.EXPLORE)}
          className={`transition-all ${activeSection === AppSection.EXPLORE ? 'text-emerald-400 scale-125' : 'text-stone-500'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </button>
        <div className="w-12 h-12 herb-gradient rounded-full -translate-y-4 border-4 border-stone-900 flex items-center justify-center text-white shadow-xl">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <button 
          onClick={() => setActiveSection(AppSection.ASSISTANT)}
          className={`transition-all ${activeSection === AppSection.ASSISTANT ? 'text-emerald-400 scale-125' : 'text-stone-500'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;
