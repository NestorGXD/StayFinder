'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { properties } from '@/data/properties';
import TrackPropertyView from '@/components/TrackPropertyView';
import ReserveButton from '@/components/ReserveButton';
import { ArrowLeft, Star, Users } from 'lucide-react';

export default function PropertyDetailPage({ params }) {
  const { id } = use(params);
  const property = properties.find((p) => p.id === id);
  const [nights, setNights] = useState(3);

  if (!property) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600 mb-4">Alojamiento no encontrado.</p>
        <Link href="/" className="text-rose-600 underline">Volver al inicio</Link>
      </div>
    );
  }

  const total = property.pricePerNight * nights;

  return (
    <div>
      <TrackPropertyView property={property} />

      <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-4 h-4" /> Volver a resultados
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gray-200">
            <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-rose-600">{property.city}</span>
              <span className="flex items-center gap-1 font-medium">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> {property.rating}
              </span>
            </div>
            <h1 className="text-3xl font-bold mt-1">{property.title}</h1>
            <p className="flex items-center gap-2 text-gray-600 mt-2">
              <Users className="w-4 h-4" /> Capacidad para {property.guests} huéspedes
            </p>
          </div>

          <div className="border-t pt-6">
            <h2 className="font-semibold text-lg mb-2">Acerca de este espacio</h2>
            <p className="text-gray-600 leading-relaxed">{property.description}</p>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-2xl border shadow-sm sticky top-24 space-y-5">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-2xl font-bold">${property.pricePerNight.toLocaleString('es-MX')}</span>
                <span className="text-gray-500 text-sm"> MXN / noche</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cantidad de noches
              </label>
              <select
                value={nights}
                onChange={(e) => setNights(Number(e.target.value))}
                className="w-full border rounded-xl px-3 py-2.5 bg-white"
              >
                {[1, 2, 3, 4, 5, 7, 10].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? 'noche' : 'noches'}</option>
                ))}
              </select>
            </div>

            <div className="border-t pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total.toLocaleString('es-MX')} MXN</span>
            </div>

            <ReserveButton property={property} nights={nights} total={total} />
            <p className="text-xs text-center text-gray-400">No se realizará ningún cargo todavía</p>
          </div>
        </div>
      </div>
    </div>
  );
}
