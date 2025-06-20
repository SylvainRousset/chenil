import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { metadata } from "./metadata";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

export { metadata };

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://lacolodeslabasseres.fr",
  "name": "La Colo des Labassères",
  "alternateName": "Pension canine La Colo des Labassères",
  "description": "Pension canine familiale à Arros-de-Nay. Parcs spacieux de 65-80m², piscine, balades en nature. Garde de chiens avec ACACED et présence permanente.",
  "url": "https://lacolodeslabasseres.fr",
  "telephone": "+33659177117",
  "email": "lacolodeslabasseres@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "392 Côte de Parelh",
    "addressLocality": "Arros-de-Nay",
    "postalCode": "64800",
    "addressCountry": "FR",
    "addressRegion": "Nouvelle-Aquitaine"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.2834,
    "longitude": -0.2567
  },
  "openingHours": [
    "Mo-Sa 09:30-13:30",
    "Mo-Sa 17:30-20:00",
    "Su 17:00-20:00"
  ],
  "priceRange": "15€-25€",
  "paymentAccepted": "Cash, Bank Transfer",
  "currenciesAccepted": "EUR",
  "founder": {
    "@type": "Person",
    "name": "Elsa Gracia",
    "jobTitle": "Propriétaire et responsable pension canine",
    "hasCredential": "ACACED 2024/8170-AFD 4"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 43.2834,
      "longitude": -0.2567
    },
    "geoRadius": "50000"
  },
  "serviceType": "Pension canine, Garde de chiens",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de pension canine",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Garde standard",
          "description": "Tous services inclus : parcs, sorties, piscine, surveillance, photos/vidéos"
        },
        "price": "20",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "20",
          "priceCurrency": "EUR",
          "unitText": "par jour"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tarif réduit",
          "description": "À partir de 2 chiens de la même famille ou garde de plus de 10 jours"
        },
        "price": "15",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "15",
          "priceCurrency": "EUR",
          "unitText": "par jour"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Garde individuelle",
          "description": "Pour les chiens nécessitant une garde individuelle ou besoins spécifiques"
        },
        "price": "25",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "25",
          "priceCurrency": "EUR",
          "unitText": "par jour"
        }
      }
    ]
  },
  "image": [
    "https://lacolodeslabasseres.fr/images/photo8.jpg",
    "https://lacolodeslabasseres.fr/images/photo11.jpg",
    "https://lacolodeslabasseres.fr/images/photo7.jpg"
  ],
  "sameAs": [
    "https://lacolodeslabasseres.fr"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Navigation />
        <div className="pt-16">
          {children}
        </div>

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">La Colo des Labassères</h3>
                <p className="text-gray-400">
                  Pension canine familiale dans les Pyrénées. Passion, bien-être et liberté pour votre chien.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>📍 392 Côte de Parelh, 64800 Arros-de-Nay</li>
                  <li>📞 <a href="tel:0659177117" className="hover:text-white transition-colors">06 59 17 71 17</a></li>
                  <li>✉️ <a href="mailto:lacolodeslabasseres@gmail.com" className="hover:text-white transition-colors">lacolodeslabasseres@gmail.com</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Horaires d&apos;accueil</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Lundi - Samedi: 9h30 - 13h30</li>
                  <li>et 17h30 - 20h</li>
                  <li>Dimanche: 17h - 20h (RDV)</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-900/50 rounded-lg">
                  <p className="text-sm text-blue-200 font-medium">
                    📞 Joignable en dehors des heures d&apos;accueil
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} La Colo des Labassères. Tous droits réservés.</p>
                <div className="mt-4 md:mt-0">
                  <a href="/mentions-legales" className="hover:text-white transition-colors">
                    Mentions légales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
