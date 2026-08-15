import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'mvfrwd. — Move Forward',
    short_name: 'mvfrwd.',
    description: 'Digital Marketing & Web Development Agency',
    start_url: '/',
    display: 'standalone',
    background_color: '#080808',
    theme_color: '#FF4B2B',
    icons: [
      {
        src: '/assets/logo-primary.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}