import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dinev Agro Partners',
  description: 'Reliable grain and fertilizer trading across Southern Bulgaria.',
  metadataBase: new URL('https://dinev-agro-partners.example'),
  openGraph: {
    title: 'Dinev Agro Partners',
    description: 'Trusted agricultural trading partner in Southern Bulgaria.',
    url: 'https://dinev-agro-partners.example',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
