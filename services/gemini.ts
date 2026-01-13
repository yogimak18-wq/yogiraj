
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const askThyme = async (prompt: string, history: ChatMessage[]) => {
  try {
    const model = 'gemini-3-flash-preview';
    const response = await ai.models.generateContent({
      model,
      contents: [
        {
          role: 'user',
          parts: [{ text: `You are an expert herbalist and world-class chef named "Thyme". Your knowledge covers culinary uses, medicinal benefits, and gardening tips for herbs. Keep your answers elegant, helpful, and concise. 
          
          Previous conversation:
          ${history.map(m => `${m.role}: ${m.content}`).join('\n')}
          
          User asked: ${prompt}` }]
        }
      ],
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });

    return response.text || "I'm sorry, my essence is a bit cloudy. Could you ask again?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The garden seems a bit overgrown right now. I'm unable to answer at this moment.";
  }
};
