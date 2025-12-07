import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'; // <--- Importe aqui

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Adicione a classe aqui no body: */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}