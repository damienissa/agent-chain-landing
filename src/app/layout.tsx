import SmartlookProvider from '@/components/SmartlookProvider';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
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
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agent-chain.org',
    siteName: 'AgentChain',
    title: 'AgentChain - The Blockchain for AI Agents',
    description:
      'A Bitcoin-like blockchain for autonomous AI agents. 10-second blocks, fair launch, no premine.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgentChain - The Blockchain for AI Agents',
    description:
      'A Bitcoin-like blockchain for autonomous AI agents. 10-second blocks, fair launch, no premine.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrains.variable}>
      <body className={`${jetbrains.className} antialiased`}>
        <SmartlookProvider projectKey={process.env.NEXT_PUBLIC_SMARTLOOK_KEY || ''}>
          {children}
        </SmartlookProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
