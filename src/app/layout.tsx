import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import './styles.scss';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Test : Delosi',
  description: 'Webapp invertir matriz a 90 grados prueba para delosi.',
  keywords: 'delosi, matriz, matrices, algebra, matematicas, interactivos',
  openGraph: {
    title: 'Invertir matrices',
    description: 'App para invertir matrices - evaluación para delosi.',
    type: 'website',
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>       

        <main>
          { children }
        </main>

        <footer>
          <p>&copy; 2024 Developed by KevinPeinado33</p>
        </footer>
      </body>
    </html>
  );
}
