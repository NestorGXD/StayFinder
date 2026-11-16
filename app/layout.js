import { GoogleAnalytics } from '@next/third-parties/google';
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'StayFinder | Alojamientos únicos en México',
  description: 'Encuentra tu próximo hospedaje con StayFinder',
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-rose-600 tracking-tight">
              StayFinder
            </Link>
            <nav className="text-sm text-gray-600 font-medium">
              Explora México · MXN
            </nav>
          </div>
        </header>

        <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
          Nestor Andre García Magdaleno
        </footer>

        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
