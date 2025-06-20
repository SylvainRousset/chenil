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
