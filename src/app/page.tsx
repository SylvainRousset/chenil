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
            src="/images/acceuil.jpg"
            alt="Chenil dans les Pyrénées"
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
            Chenil des Pyrénées
          </h1>
          <p className="text-2xl md:text-3xl font-light tracking-wide text-blue-100">
            Garde de chiens de confiance au cœur des Pyrénées
          </p>
        </div>
      </section>

      {/* À propos Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Notre Histoire</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="section-content">
                Situé aux portes des Pyrénées, notre chenil offre un cadre idyllique pour vos compagnons à quatre pattes. 
                Nous accueillons vos chiens dans un environnement sécurisé et adapté à leurs besoins.
              </p>
              <p className="section-content">
                Notre équipe passionnée s&apos;engage à offrir les meilleurs soins à vos animaux, 
                avec des espaces de vie spacieux et des activités quotidiennes adaptées.
              </p>
            </div>
            <ImageCarousel
              images={[
                {
                  src: "/images/box.jpg",
                  alt: "Box individuel spacieux pour le confort de votre chien"
                },
                {
                  src: "/images/parc.jpg",
                  alt: "Notre grand parc de jeux extérieur"
                },
                {
                  src: "/images/parc2.jpg",
                  alt: "Les chiens jouant dans le parc"
                },
                {
                  src: "/images/detente.jpg",
                  alt: "Zone de détente pour nos pensionnaires"
                },
                {
                  src: "/images/promenadegal.jpg",
                  alt: "Sortie en montagne avec les chiens"
                },
                {
                  src: "/images/repos.jpg",
                  alt: "Zone de repos confortable"
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
    title: "Garde à la journée",
    price: "25",
    description: "Pour une journée complète de garde, incluant les repas et les promenades."
  },
  {
    title: "Garde à la semaine",
    price: "150",
    description: "Tarif avantageux pour une semaine complète de garde."
  },
  {
    title: "Garde au mois",
    price: "500",
    description: "Solution économique pour les gardes de longue durée."
  }
];
