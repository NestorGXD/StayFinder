'use client';

import { useState } from 'react';
import { sendGAEvent } from '@next/third-parties/google';
import { Search } from 'lucide-react';

export default function SearchBar({ onSearch }) {
  const [destination, setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanQuery = destination.trim();

    if (cleanQuery) {
      sendGAEvent('event', 'search', {
        search_term: cleanQuery
      });
    }

    onSearch(cleanQuery);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-2 rounded-full shadow-md border flex items-center max-w-2xl mx-auto mb-10"
    >
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="¿A dónde vas? (Ej. Cancún, Morelia, CDMX...)"
        className="flex-1 px-5 py-2.5 bg-transparent focus:outline-none text-gray-700"
      />
      <button
        type="submit"
        className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2.5 rounded-full font-medium flex items-center gap-2 transition"
      >
        <Search className="w-4 h-4" />
        Buscar
      </button>
    </form>
  );
}
