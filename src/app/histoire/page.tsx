import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Histoire - Elsa et La Colo des Labassères | Pension canine Arros-de-Nay",
  description: "Découvrez l'histoire d'Elsa, passionnée d'animaux et titulaire ACACED. Pension canine familiale avec parcs 65-80m², piscine et présence permanente à Arros-de-Nay.",
  keywords: "histoire pension canine, Elsa Gracia, ACACED, pension familiale, parcs chiens, Arros-de-Nay, expérience vétérinaire",
  openGraph: {
    title: "Notre Histoire - La Colo des Labassères",
    description: "L'histoire d'Elsa et de sa passion pour les animaux. Pension canine familiale avec parcs spacieux et soins personnalisés.",
    images: ['/images/photo6.jpg'],
  },
};

export default function Histoire() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Notre Histoire</h1>
        <h2 className="text-2xl text-blue-600 text-center mb-12 max-w-3xl mx-auto">
          Passion, bien-être et liberté : ici, votre chien est comme à la maison.
        </h2>

        {/* Section présentation d'Elsa */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Qui suis-je ?</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Je m&apos;appelle <strong>Elsa</strong>. Depuis toute petite, j&apos;ai une passion profonde pour les animaux, et plus 
              particulièrement pour les chiens. Ce lien naturel et sincère m&apos;a conduite à vouloir créer ma propre 
              pension canine familiale, où je peux aujourd&apos;hui leur offrir une attention constante, dans un cadre 
              serein et stimulant.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              J&apos;ai travaillé plusieurs années dans une clinique vétérinaire en tant qu&apos;assistante spécialisée en soins. 
              Je suis également titulaire de l&apos;<strong>ACACED</strong> (Certificat d&apos;Aptitude à l&apos;Exercice des activités liées aux 
              animaux de compagnie d&apos;espèces domestiques).
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/images/photo6.jpg"
              alt="Elsa avec les chiens"
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 512px, 600px"
              priority
              unoptimized={false}
            />
          </div>
        </div>

        {/* Section La colo des labassères */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-xl overflow-hidden md:order-2">
            <Image
              src="/images/photo11.jpg"
              alt="Les parcs spacieux de La colo des labassères"
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 512px, 600px"
              unoptimized={false}
            />
          </div>
          <div className="space-y-6 md:order-1">
            <h3 className="text-2xl font-bold">La colo des labassères</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              J&apos;ai créé <strong>« La colo des labassères »</strong> qui est une pension canine à taille humaine, pensée comme un 
              lieu de vacances pour vos compagnons.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ici, pas de box en enclos bétonné, mais de véritables parcs spacieux de <strong>65 à 80 m²</strong>, où les chiens 
              évoluent par affinité (deux à trois par parc maximum), en toute sécurité et sous surveillance 
              constante. Les chiens ne sont jamais isolés, sauf si cela est nécessaire pour leur bien-être ou leur 
              sécurité.
            </p>
          </div>
        </div>

        {/* Section confort et repas */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Confort et bien-être</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Chaque chien dispose de sa <strong>niche individuelle en bois</strong> qui est entièrement isolée, pour un confort 
              optimal en toutes saisons.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Lors des repas, chaque chien est installé dans sa niche, à l&apos;écart, pour qu&apos;il puisse manger en 
              toute tranquillité, sans stress lié à la proximité des congénères. Cela me permet également de 
              vérifier que chacun mange correctement et sans difficulté.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/images/photo9.jpg"
              alt="Niche individuelle en bois"
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 512px, 600px"
              unoptimized={false}
            />
          </div>
        </div>

        {/* Section activités */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-xl overflow-hidden md:order-2">
            <Image
              src="/images/photo1.jpg"
              alt="Balades dans les bois et les champs"
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 512px, 600px"
              unoptimized={false}
            />
          </div>
          <div className="space-y-6 md:order-1">
            <h3 className="text-2xl font-bold">Activités et jeux</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous avons aussi aménagé un parc de jeux avec une piscine adaptée, pour se rafraîchir et 
              s&apos;amuser en toute sécurité. Chaque jour, des balades dans les bois et les champs attenants à la 
              propriété sont au programme, pour stimuler leurs sens et répondre à leur besoin d&apos;exploration.
            </p>
          </div>
        </div>

        {/* Section présence permanente */}
        <div className="bg-blue-50 p-8 rounded-xl mb-16">
          <h3 className="text-2xl font-bold text-center mb-6">Présence permanente</h3>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Je vis sur place et suis présente en permanence auprès des chiens. Ils reçoivent attention, câlins, 
            soins et activité, comme s&apos;ils étaient à la maison.
          </p>
        </div>

        {/* Section rendez-vous de présentation */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Rendez-vous de présentation</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Avant toute garde, je propose un <strong>rendez-vous de présentation gratuit</strong> (environ 1/2h, 1h), pour 
              vous permettre de découvrir les lieux, poser vos questions, et surtout permettre à votre chien de 
              faire connaissance avec son futur environnement.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Chaque chien est unique et je prends le temps de m&apos;assurer que les conditions de séjour lui 
              conviendront parfaitement.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Je comprends bien que tous les propriétaires ne résident pas à proximité : ce rendez-vous est donc 
              recommandé mais pas obligatoire. Je reste à votre disposition pour répondre à toutes vos 
              questions à distance, si besoin.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/images/photo14.jpg"
              alt="Rendez-vous de présentation"
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 512px, 600px"
              unoptimized={false}
            />
          </div>
        </div>

        {/* Section nouvelles pendant le séjour */}
        <div className="bg-green-50 p-8 rounded-xl mb-16">
          <h3 className="text-2xl font-bold text-center mb-6">Des nouvelles régulières</h3>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Et parce que je sais combien il est rassurant d&apos;avoir des nouvelles, j&apos;envoie régulièrement photos et 
            vidéos pendant leur séjour, pour que vous partiez l&apos;esprit tranquille.
          </p>
        </div>

        {/* Section pension sérieuse */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Une pension familiale… mais aussi sérieuse !</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Oui, ici c&apos;est une pension à taille humaine, pleine d&apos;amour et de liberté pour les chiens — mais tout 
            est aussi fait dans les règles.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-gray-700">
                  Je suis titulaire de l&apos;<strong>ACACED</strong> (délivré par le ministère de l&apos;agriculture)
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-gray-700">
                  La pension est déclarée auprès des services compétents, conformément à la réglementation en 
                  vigueur.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-700">
                Le bien-être, la sécurité et l&apos;hygiène sont au cœur de tout ce que je fais.
              </p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed mt-6 text-center">
            Les chiens sont accueillis dans un cadre sain, suivi, et toujours sous surveillance.
          </p>
        </div>
      </div>
    </main>
  );
} 