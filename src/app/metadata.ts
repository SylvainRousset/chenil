import type { Metadata } from "next";
 
export const metadata: Metadata = {
  title: "La Colo des Labassères - Pension canine familiale à Arros-de-Nay (64)",
  description: "Pension canine familiale à Arros-de-Nay près de Pau. Parcs spacieux 65-80m², piscine, balades en nature. Garde de chiens avec ACACED. Tarifs dès 15€/jour.",
  keywords: "pension canine, garde chien, Arros-de-Nay, Pau, Pyrénées, ACACED, pension familiale, garde chien 64, chien vacances",
  authors: [{ name: "Elsa Gracia - La Colo des Labassères" }],
  creator: "La Colo des Labassères",
  publisher: "La Colo des Labassères",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lacolodeslabasseres.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "La Colo des Labassères - Pension canine familiale",
    description: "Pension canine familiale à Arros-de-Nay. Parcs spacieux, piscine, balades en nature. Garde de chiens avec passion et professionnalisme.",
    url: 'https://lacolodeslabasseres.fr',
    siteName: 'La Colo des Labassères',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/photo8.jpg',
        width: 1200,
        height: 630,
        alt: 'La Colo des Labassères - Pension canine familiale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "La Colo des Labassères - Pension canine familiale",
    description: "Pension canine familiale à Arros-de-Nay. Parcs spacieux, piscine, balades en nature.",
    images: ['/images/photo8.jpg'],
  },
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
  verification: {
    google: 'google-site-verification-code-here',
  },
}; 