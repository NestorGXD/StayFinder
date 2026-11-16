'use client';

import { useRouter } from 'next/navigation';
import { sendGAEvent } from '@next/third-parties/google';

export default function ReserveButton({ property, nights, total }) {
  const router = useRouter();

  const handleReserve = () => {
    sendGAEvent('event', 'begin_checkout', {
      currency: 'MXN',
      value: total,
      items: [
        {
          item_id: String(property.id),
          item_name: property.title,
          price: total,
          quantity: 1
        }
      ]
    });

    router.push(`/checkout?propertyId=${property.id}&nights=${nights}`);
  };

  return (
    <button
      onClick={handleReserve}
      className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3.5 rounded-xl transition shadow-sm"
    >
      Reservar alojamiento
    </button>
  );
}
