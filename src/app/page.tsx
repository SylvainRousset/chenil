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
          <Link href="/services" className="block">
            <h2 className="section-title text-center hover:text-blue-600 transition-colors">Nos Services</h2>
          </Link>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-8">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-content">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Link href="/tarifs" className="block">
            <h2 className="section-title text-center hover:text-blue-600 transition-colors">Nos Tarifs</h2>
          </Link>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tarifs.map((tarif, index) => (
              <div key={index} className="card p-8 text-center">
                <h3 className="card-title">{tarif.title}</h3>
                <p className="text-4xl font-bold text-blue-600 mb-4">{tarif.price}€</p>
                <p className="card-content">{tarif.description}</p>
              </div>
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
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Nous contacter
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
    description: "Hébergement confortable pour votre chien avec des espaces adaptés à sa taille et ses besoins."
  },
  {
    icon: "🐕",
    title: "Promenades",
    description: "Promenades quotidiennes dans notre grand parc sécurisé et en montagne."
  },
  {
    icon: "❤️",
    title: "Soins personnalisés",
    description: "Suivi personnalisé de votre chien avec des soins adaptés à ses besoins spécifiques."
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
