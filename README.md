# StayFinder - Implementación de Google Analytics 4

Proyecto Next.js (App Router) estilo Airbnb preparado con integración oficial de Google Analytics 4 (`@next/third-parties/google`).

## Configuración rápida

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Crea tu archivo `.env.local` tomando como base `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   Edita `.env.local` y sustituye `G-XXXXXXXXXX` por tu **ID de medición** de GA4.
3. Ejecuta en local:
   ```bash
   npm run dev
   ```
4. En **Vercel**, agrega la variable de entorno `NEXT_PUBLIC_GA_ID` con tu ID `G-XXXXXXXXXX` y despliega.
