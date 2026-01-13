
export interface Herb {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  image: string;
  category: 'culinary' | 'medicinal' | 'aromatic';
  pairings: string[];
  benefits: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export enum AppSection {
  GARDEN = 'garden',
  EXPLORE = 'explore',
  ASSISTANT = 'assistant'
}
