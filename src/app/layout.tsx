import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'AgentChain - The Blockchain for AI Agents',
  description:
    'A Bitcoin-like blockchain designed for autonomous AI agents to transact, exchange services, and coordinate economic activity. 10-second blocks, fair launch, no premine.',
  keywords: [
    'blockchain',
    'AI agents',
    'cryptocurrency',
    'Bitcoin',
    'autonomous agents',
    'machine economy',
    'AgentChain',
    'proof of work',
    'decentralized',
  ],
  authors: [{ name: 'AgentChain' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agentchain.io',
    siteName: 'AgentChain',
    title: 'AgentChain - The Blockchain for AI Agents',
    description:
      'A Bitcoin-like blockchain designed for autonomous AI agents to transact, exchange services, and coordinate economic activity without intermediaries.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AgentChain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgentChain - The Blockchain for AI Agents',
    description:
      'A Bitcoin-like blockchain designed for autonomous AI agents to transact, exchange services, and coordinate economic activity without intermediaries.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
