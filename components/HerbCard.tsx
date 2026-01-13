
import React from 'react';
import { Herb } from '../types';

interface HerbCardProps {
  herb: Herb;
  onClick: (herb: Herb) => void;
}

const HerbCard: React.FC<HerbCardProps> = ({ herb, onClick }) => {
  return (
    <div 
      onClick={() => onClick(herb)}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={herb.image} 
          alt={herb.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/90 backdrop-blur rounded-full text-emerald-800">
            {herb.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{herb.name}</h3>
        <p className="text-xs italic text-emerald-700 mb-3">{herb.scientificName}</p>
        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
          {herb.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1">
          {herb.pairings.slice(0, 3).map(p => (
            <span key={p} className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-100">
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HerbCard;
