import '@/styles/globals.css';
import { Syne, Space_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import { BackgroundSystem } from '@/components/ui/BackgroundSystem';
import { DynamicIslandNavbar } from '@/components/ui/DynamicIslandNavbar';
import { Footer } from '@/components/ui/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { InitialLoader } from '@/components/ui/InitialLoader';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Metadata } from 'next';

const syne = Syne({ subsets: ['latin'], variable: '--font-syne', weight: ['700', '800'] });
const spaceMono = Space_Mono({ subsets: ['latin'], variable: '--font-space-mono', weight: ['400', '700'] });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta', weight: ['400', '500', '600'] });

export const metadata: Metadata = {
  title: 'mvfrwd. | Digital Marketing, Web Development & Growth',
  description: 'mvfrwd. is an ambitious digital agency building high-performance web systems, brand platforms, and modern growth pipelines.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable} ${plusJakarta.variable} dark`}>
      <body className="bg-brand-black text-brand-off-white antialiased selection:bg-brand-orange selection:text-white font-sans overflow-x-hidden">
        <InitialLoader />
        <ScrollProgress />
        <BackgroundSystem />
        <CustomCursor />
        <DynamicIslandNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}