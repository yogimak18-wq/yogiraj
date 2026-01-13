
import { Herb } from './types';

export const HERBS: Herb[] = [
  {
    id: 'thyme',
    name: 'Thyme',
    scientificName: 'Thymus vulgaris',
    description: 'A versatile perennial herb with tiny, aromatic leaves and a woody stem. Essential in Mediterranean cooking.',
    image: 'https://images.unsplash.com/photo-1594411133742-f81643666f7d?auto=format&fit=crop&q=80&w=800',
    category: 'culinary',
    pairings: ['Lemon', 'Garlic', 'Rosemary', 'Chicken', 'Potatoes'],
    benefits: ['Antiseptic', 'Cough relief', 'Rich in Vitamin C']
  },
  {
    id: 'rosemary',
    name: 'Rosemary',
    scientificName: 'Salvia rosmarinus',
    description: 'A woody, perennial herb with fragrant, evergreen, needle-like leaves. Known for its intense aroma.',
    image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&q=80&w=800',
    category: 'culinary',
    pairings: ['Lamb', 'Pork', 'Potatoes', 'Bread'],
    benefits: ['Improves memory', 'Digestion support', 'Antioxidant']
  },
  {
    id: 'basil',
    name: 'Basil',
    scientificName: 'Ocimum basilicum',
    description: 'Commonly known as Sweet Basil, it is the cornerstone of Italian pesto and Southeast Asian cuisine.',
    image: 'https://images.unsplash.com/photo-1618376168163-6677c5b71990?auto=format&fit=crop&q=80&w=800',
    category: 'culinary',
    pairings: ['Tomatoes', 'Mozzarella', 'Pine Nuts', 'Olive Oil'],
    benefits: ['Anti-inflammatory', 'Stress reduction', 'Antibacterial']
  },
  {
    id: 'lavender',
    name: 'Lavender',
    scientificName: 'Lavandula',
    description: 'A flowering plant in the mint family, famous for its sweet floral scent and beautiful purple spikes.',
    image: 'https://images.unsplash.com/photo-1471958680802-1345a694ba6d?auto=format&fit=crop&q=80&w=800',
    category: 'aromatic',
    pairings: ['Honey', 'Lemon', 'Vanilla', 'Shortbread'],
    benefits: ['Sleep aid', 'Reduces anxiety', 'Skin health']
  },
  {
    id: 'mint',
    name: 'Mint',
    scientificName: 'Mentha',
    description: 'A fast-growing herb known for its cooling sensation and refreshing aroma in drinks and desserts.',
    image: 'https://images.unsplash.com/photo-1603569524163-977490437213?auto=format&fit=crop&q=80&w=800',
    category: 'culinary',
    pairings: ['Lime', 'Chocolate', 'Lamb', 'Cucumber'],
    benefits: ['Digestion aid', 'Freshens breath', 'Headache relief']
  },
  {
    id: 'sage',
    name: 'Sage',
    scientificName: 'Salvia officinalis',
    description: 'Grayish-green leaves with a velvety texture and a savory, slightly peppery flavor.',
    image: 'https://images.unsplash.com/photo-1605701375323-9528e1926678?auto=format&fit=crop&q=80&w=800',
    category: 'culinary',
    pairings: ['Butter', 'Onions', 'Turkey', 'Squash'],
    benefits: ['Cognitive boost', 'Oral health', 'Menopause relief']
  }
];
