import type { Metadata } from 'next';

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
        <main>{children}</main>
      </body>
    </html>
  );
}
