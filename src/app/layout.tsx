import type { Metadata } from 'next';
import { TRPCProvider } from '@/trpc/provider';
import './global.css';

export const metadata: Metadata = {
  title: 'RepoVault',
  description: 'Your personal repository organizer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TRPCProvider>
          <main>{children}</main>
        </TRPCProvider>
      </body>
    </html>
  );
}
