import Image from "next/image";
import Link from "next/link";
import ImageCarousel from "./components/ImageCarousel";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/photo8.jpg"
            alt="La Colo des Labassères dans les Pyrénées"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay avec dégradé moderne */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>
        
        {/* Contenu */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white animate-gradient">
            La Colo des Labassères
          </h1>
          <p className="text-2xl md:text-3xl font-light tracking-wide text-blue-100">
            Pension canine familiale à Arros-de-Nay
          </p>
        </div>
      </section>

      {/* À propos Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Link 
              href="/histoire" 
              className="group inline-block"
            >
              <h2 className="section-title group-hover:text-blue-600 transition-colors relative inline-block">
                Notre Histoire
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </h2>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Passion, bien-être et liberté : ici, votre chien est comme à la maison.</h3>
              
              <p className="section-content">
                Je m&apos;appelle <strong>Elsa</strong>. Depuis toute petite, j&apos;ai une passion profonde pour les animaux, et plus 
                particulièrement pour les chiens. Ce lien naturel et sincère m&apos;a conduite à vouloir créer ma propre 
                pension canine familiale, où je peux aujourd&apos;hui leur offrir une attention constante, dans un cadre 
                serein et stimulant.
              </p>
              
              <p className="section-content">
                J&apos;ai travaillé plusieurs années dans une clinique vétérinaire en tant qu&apos;assistante spécialisée en soins. 
                Je suis également titulaire de l&apos;<strong>ACACED</strong> (Certificat d&apos;Aptitude à l&apos;Exercice des activités liées aux 
                animaux de compagnie d&apos;espèces domestiques).
              </p>

              <Link
                href="/histoire"
                className="group inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-blue-700 hover:-translate-y-1"
              >
                <span>Découvrir notre histoire complète</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <ImageCarousel
              images={[
                {
                  src: "/images/photo1.jpg",
                  alt: "La Colo des Labassères - Photo 1"
                },
                {
                  src: "/images/photo2.jpg",
                  alt: "La Colo des Labassères - Photo 2"
                },
                {
                  src: "/images/photo3.jpg",
                  alt: "La Colo des Labassères - Photo 3"
                },
                {
                  src: "/images/photo4.jpg",
                  alt: "La Colo des Labassères - Photo 4"
                },
                {
                  src: "/images/photo5.jpg",
                  alt: "La Colo des Labassères - Photo 5"
                },
                {
                  src: "/images/photo6.jpg",
                  alt: "La Colo des Labassères - Photo 6"
                },
                {
                  src: "/images/photo7.jpg",
                  alt: "La Colo des Labassères - Photo 7"
                },
                {
                  src: "/images/photo8.jpg",
                  alt: "La Colo des Labassères - Photo 8"
                },
                {
                  src: "/images/photo9.jpg",
                  alt: "La Colo des Labassères - Photo 9"
                },
                {
                  src: "/images/photo10.jpg",
                  alt: "La Colo des Labassères - Photo 10"
                },
                {
                  src: "/images/photo11.jpg",
                  alt: "La Colo des Labassères - Photo 11"
                },
                {
                  src: "/images/photo12.jpg",
                  alt: "La Colo des Labassères - Photo 12"
                },
                {
                  src: "/images/photo13.jpg",
                  alt: "La Colo des Labassères - Photo 13"
                },
                {
                  src: "/images/photo14.jpg",
                  alt: "La Colo des Labassères - Photo 14"
                },
                {
                  src: "/images/photo15.jpg",
                  alt: "La Colo des Labassères - Photo 15"
                },
                {
                  src: "/images/photo16.jpg",
                  alt: "La Colo des Labassères - Photo 16"
                },
                {
                  src: "/images/photo17.jpg",
                  alt: "La Colo des Labassères - Photo 17"
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Link 
              href="/services" 
              className="group inline-block"
            >
              <h2 className="section-title group-hover:text-blue-600 transition-colors relative inline-block">
                Nos Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </h2>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/services#${service.id}`}
                className="group relative card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white overflow-hidden"
              >
                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors duration-300" />
                
                {/* Contenu */}
                <div className="relative z-10">
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="card-title group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="card-content">{service.description}</p>
                </div>

                {/* Indicateur de clic pour desktop */}
                <div className="absolute inset-x-0 bottom-4 hidden md:flex justify-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                {/* Indicateur de tap pour mobile */}
                <div className="absolute bottom-4 right-4 md:hidden text-blue-600/80">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Link 
              href="/tarifs" 
              className="group inline-block"
            >
              <h2 className="section-title group-hover:text-blue-600 transition-colors relative inline-block">
                Nos Tarifs
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </h2>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tarifs.map((tarif, index) => (
              <Link
                key={index}
                href="/tarifs"
                className="group relative card p-8 text-center rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white overflow-hidden"
              >
                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors duration-300" />
                
                {/* Contenu */}
                <div className="relative z-10">
                  <h3 className="card-title group-hover:text-blue-600 transition-colors">{tarif.title}</h3>
                  <p className="text-4xl font-bold text-blue-600 mb-4">{tarif.price}€</p>
                  <p className="card-content">{tarif.description}</p>
                </div>

                {/* Indicateur de clic pour desktop */}
                <div className="absolute inset-x-0 bottom-4 hidden md:flex justify-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                {/* Indicateur de tap pour mobile */}
                <div className="absolute bottom-4 right-4 md:hidden text-blue-600/80">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="section-title">Contactez-nous</h2>
          <p className="section-subtitle">
            Pour toute question ou réservation, n&apos;hésitez pas à nous contacter
          </p>
          <Link
            href="/contact"
            className="group inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-blue-700 hover:-translate-y-1"
          >
            <span className="flex items-center gap-2">
              Nous contacter
              <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    icon: "🏠",
    title: "Garde de chiens",
    description: "Hébergement confortable pour votre chien avec des espaces adaptés à sa taille et ses besoins.",
    id: "garde-de-chiens"
  },
  {
    icon: "🐕",
    title: "Promenades",
    description: "Promenades quotidiennes dans notre grand parc sécurisé et en montagne.",
    id: "promenades"
  },
  {
    icon: "❤️",
    title: "Soins personnalisés",
    description: "Suivi personnalisé de votre chien avec des soins adaptés à ses besoins spécifiques.",
    id: "soins-personnalises"
  }
];

const tarifs = [
  {
    title: "Tarif standard",
    price: "20",
    description: "Tous services inclus : parcs, sorties, piscine, surveillance, photos/vidéos"
  },
  {
    title: "Tarif réduit",
    price: "15",
    description: "À partir de 2 chiens de la même famille ou garde de plus de 10 jours"
  },
  {
    title: "Garde individuelle",
    price: "25",
    description: "Pour les chiens nécessitant une garde individuelle ou besoins spécifiques"
  }
];
