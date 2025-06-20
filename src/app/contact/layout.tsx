import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact et Réservation - La Colo des Labassères | Pension Canine Arros-de-Nay",
  description: "Contactez La Colo des Labassères pour réserver la garde de votre chien. 392 Côte de Parelh, Arros-de-Nay. Tél: 06 59 17 71 17. Horaires et localisation.",
  keywords: "contact pension canine, réservation garde chien, Arros-de-Nay, 06 59 17 71 17, 392 Côte de Parelh, rendez-vous chien",
  openGraph: {
    title: "Contact - La Colo des Labassères",
    description: "Contactez-nous pour réserver la garde de votre chien. Pension familiale à Arros-de-Nay avec carte de localisation.",
    images: ['/images/photo14.jpg'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 