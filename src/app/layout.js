import './globals.css';
import '@fontsource/league-spartan/400.css';
import '@fontsource/league-spartan/700.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'ArtEng - Bringing Art & Engineering Together',
  description: 'Bringing creatives and inventors together to transform ideas into unforgettable experiences.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-spartan flex flex-col min-h-screen">
        <div className="bg-arteng-dark pt-16">
          <Navbar />
        </div>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}