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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Navigation />
        <div className="pt-16">
          {children}
        </div>

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Chenil des Pyrénées</h3>
                <p className="text-gray-400">
                  Votre partenaire de confiance pour la garde de vos chiens aux portes des Pyrénées.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>📍 Route des Pyrénées, Pau</li>
                  <li>📞 05 XX XX XX XX</li>
                  <li>✉️ contact@chenildespyrenees.fr</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Horaires</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Lundi - Vendredi: 8h - 19h</li>
                  <li>Samedi: 9h - 18h</li>
                  <li>Dimanche: Sur rendez-vous</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Chenil des Pyrénées. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
