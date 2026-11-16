'use client';

import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';
import { Star } from 'lucide-react';

export default function PropertyCard({ property }) {
  const handleSelect = () => {
    sendGAEvent('event', 'select_item', {
      item_list_name: 'Resultados de búsqueda',
      items: [
        {
          item_id: String(property.id),
          item_name: property.title,
          item_category: 'Alojamiento',
          price: property.pricePerNight,
          quantity: 1
        }
      ]
    });
  };

  return (
    <Link
      href={`/properties/${property.id}`}
      onClick={handleSelect}
      className="group bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition block"
    >
      <div className="aspect-[4/3] overflow-hidden bg-gray-200">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-gray-900 line-clamp-1">{property.title}</h3>
          <span className="flex items-center gap-1 text-sm font-medium shrink-0">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            {property.rating}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">{property.city} · Hasta {property.guests} huéspedes</p>
        <p className="mt-3 text-gray-900">
          <span className="font-bold">${property.pricePerNight.toLocaleString('es-MX')} MXN</span>{' '}
          <span className="text-sm text-gray-500">/ noche</span>
        </p>
      </div>
    </Link>
  );
}
