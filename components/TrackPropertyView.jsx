'use client';

import { useEffect, useRef } from 'react';
import { sendGAEvent } from '@next/third-parties/google';

export default function TrackPropertyView({ property }) {
  const trackedId = useRef(null);

  useEffect(() => {
    if (trackedId.current === property.id) return;
    trackedId.current = property.id;

    sendGAEvent('event', 'view_item', {
      currency: 'MXN',
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
  }, [property]);

  return null;
}
