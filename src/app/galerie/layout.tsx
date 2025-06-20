import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie Photos - Nos Installations et Pensionnaires | La Colo des Labassères",
  description: "Découvrez en images nos installations : parcs spacieux, piscine, box individuels et nos adorables pensionnaires à La Colo des Labassères, Arros-de-Nay.",
  keywords: "galerie pension canine, photos installations, parcs chiens, piscine chien, box individuel, pensionnaires, Arros-de-Nay",
  openGraph: {
    title: "Galerie Photos - La Colo des Labassères",
    description: "Découvrez nos installations et nos adorables pensionnaires en images. Parcs spacieux, piscine et box individuels.",
    images: ['/images/photo7.jpg'],
  },
};

export default function GalerieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 