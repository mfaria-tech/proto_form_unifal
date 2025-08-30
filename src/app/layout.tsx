import '@/styles/globals.css';
import '@/styles/theme.css'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proto-form-unifal',
  description: 'Pprototype form for use in UNIFAL research',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
