'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { properties } from '@/data/properties';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const propertyId = searchParams.get('propertyId');
  const nights = Number(searchParams.get('nights') || 1);
  const property = properties.find((p) => p.id === propertyId);

  if (!property) {
    return (
      <div className="text-center py-12">
        <p className="mb-4">No hay una reservación activa.</p>
        <Link href="/" className="text-rose-600 underline">Volver al inicio</Link>
      </div>
    );
  }

  const total = property.pricePerNight * nights;

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border shadow-sm">
      <h1 className="text-2xl font-bold mb-2">Solicitud de reservación</h1>
      <p className="text-sm text-gray-500 mb-6">
        Completa tus datos de prueba para continuar (no uses datos reales).
      </p>

      <div className="bg-gray-50 p-4 rounded-xl mb-6 space-y-1">
        <p className="font-semibold">{property.title}</p>
        <p className="text-sm text-gray-600">{property.city} · {nights} noche(s)</p>
        <p className="font-bold text-rose-600 pt-2">Total: ${total.toLocaleString('es-MX')} MXN</p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Flujo de prueba completado (evento begin_checkout registrado previamente).');
        }}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Nombre del huésped (ficticio)</label>
          <input type="text" required placeholder="Ej. Ana López" className="w-full border rounded-xl px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Correo electrónico (ficticio)</label>
          <input type="email" required placeholder="prueba@ejemplo.com" className="w-full border rounded-xl px-3 py-2" />
        </div>
        <button
          type="submit"
          className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 rounded-xl transition"
        >
          Confirmar solicitud de prueba
        </button>
      </form>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<p className="text-center py-10">Cargando reservación...</p>}>
      <CheckoutContent />
    </Suspense>
  );
}
