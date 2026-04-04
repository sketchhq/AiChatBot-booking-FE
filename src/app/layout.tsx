import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CarePoint Health',
  description: 'AI appointment booking and chat assistant for clinics.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
