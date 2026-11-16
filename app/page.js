'use client';

import { useState } from 'react';
import { properties } from '@/data/properties';
import SearchBar from '@/components/SearchBar';
import PropertyCard from '@/components/PropertyCard';

export default function HomePage() {
  const [filtered, setFiltered] = useState(properties);
  const [activeQuery, setActiveQuery] = useState('');

  const handleSearch = (query) => {
    setActiveQuery(query);
    if (!query) {
      setFiltered(properties);
      return;
    }
    const lower = query.toLowerCase();
    const results = properties.filter(
      (p) =>
        p.city.toLowerCase().includes(lower) ||
        p.title.toLowerCase().includes(lower)
    );
    setFiltered(results);
  };

  return (
    <div>
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Encuentra tu próxima estancia</h1>
        <p className="text-gray-600 mt-1">Explora alojamientos verificados en los mejores destinos</p>
      </div>

      <SearchBar onSearch={handleSearch} />

      {activeQuery && (
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Mostrando {filtered.length} resultado(s) para <strong>"{activeQuery}"</strong>
          </p>
          <button
            onClick={() => handleSearch('')}
            className="text-sm text-rose-600 hover:underline"
          >
            Limpiar filtro
          </button>
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border">
          <p className="text-gray-500">No encontramos alojamientos para "{activeQuery}".</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}
