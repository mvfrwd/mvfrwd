import '@/styles/globals.css';
import { Syne, Space_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import { BackgroundSystem } from '@/components/ui/BackgroundSystem';
import { DynamicIslandNavbar } from '@/components/ui/DynamicIslandNavbar';
import { Footer } from '@/components/ui/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { InitialLoader } from '@/components/ui/InitialLoader';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Metadata, Viewport } from 'next';

const syne = Syne({ subsets: ['latin'], variable: '--font-syne', weight: ['700', '800'], display: 'swap' });
const spaceMono = Space_Mono({ subsets: ['latin'], variable: '--font-space-mono', weight: ['400', '700'], display: 'swap' });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta', weight: ['400', '500', '600'], display: 'swap' });

export const viewport: Viewport = {
  themeColor: '#080808',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mvfrwd.vercel.app/'),
  title: {
    default: 'mvfrwd. — Digital Marketing & Web Development Agency',
    template: '%s | mvfrwd.',
  },
  description:
    'mvfrwd. is a digital agency helping ambitious brands move forward through web development, digital marketing, SEO, branding, and AI-powered systems.',
  applicationName: 'mvfrwd.',
  authors: [{ name: 'mvfrwd. team', url: 'https://mvfrwd.vercel.app/' }],
  generator: 'Next.js',
  keywords: [
    'digital agency',
    'web development',
    'digital marketing',
    'SEO agency',
    'branding agency',
    'AI automation',
    'mvfrwd',
    'move forward',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'mvfrwd.',
  publisher: 'mvfrwd.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'mvfrwd. — Digital Marketing & Web Development Agency',
    description:
      'We help ambitious businesses build, market, and grow through technology, strategy, and creative design.',
    url: 'https://mvfrwd.vercel.app/',
    siteName: 'mvfrwd.',
    images: [
      {
        url: '/assets/logo-primary.png',
        width: 1200,
        height: 630,
        alt: 'mvfrwd. digital agency primary logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mvfrwd. — Digital Marketing & Web Development Agency',
    description:
      'We help ambitious businesses build, market, and grow through technology, strategy, and creative design.',
    images: ['/assets/logo-primary.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/assets/logo-primary.png', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/logo-primary.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'mvfrwd.',
    url: 'https://mvfrwd.vercel.app/',
    logo: 'https://mvfrwd.vercel.app/assets/logo-primary.png',
    image: 'https://mvfrwd.vercel.app/assets/logo-primary.png',
    description:
      'mvfrwd. is a digital agency helping ambitious brands move forward through web development, digital marketing, SEO, branding, and AI automation.',
    sameAs: [
      'https://linkedin.com/company/mvfrwd',
      'https://instagram.com/mvfrwd.co',
      'https://github.com/mvfrwdco',
    ],
    offers: {
      '@type': 'OfferCatalog',
      name: 'Digital Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Search Engine Optimization (SEO)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Branding & Creative Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI & Automation' } },
      ],
    },
  };

  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable} ${plusJakarta.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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