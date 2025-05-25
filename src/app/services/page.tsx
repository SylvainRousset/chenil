'use client';

import Image from 'next/image';
import { useEffect } from 'react';

const services = [
  {
    id: 'garde-de-chiens',
    title: "Garde de chiens",
    description: "Nous accueillons votre chien dans un environnement sécurisé et adapté à ses besoins. Chaque pensionnaire dispose d'un espace confortable et personnalisé.",
    features: [
      "Boxes individuels spacieux",
      "Sorties régulières dans notre parc",
      "Nourriture adaptée fournie",
      "Suivi personnalisé",
      "Surveillance 24h/24"
    ],
    image: "/images/garde.jpg"
  },
  {
    id: 'promenades',
    title: "Promenades",
    description: "Des promenades quotidiennes dans notre grand parc sécurisé et en montagne pour le bien-être de votre chien.",
    features: [
      "Promenades individuelles ou en groupe",
      "Parcours adaptés à chaque chien",
      "Sorties en montagne",
      "Jeux et activités",
      "Rapport quotidien"
    ],
    image: "/images/promenade.jpg"
  },
  {
    id: 'soins-personnalises',
    title: "Soins personnalisés",
    description: "Nous prenons soin de votre chien comme s'il était le nôtre, avec une attention particulière à ses besoins spécifiques.",
    features: [
      "Suivi médical",
      "Administration de médicaments",
      "Toilettage basique",
      "Régime alimentaire spécial",
      "Exercices adaptés"
    ],
    image: "/images/soin.jpg"
  }
];

export default function Services() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Nos Services</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Découvrez nos services adaptés aux besoins de votre chien. Nous nous engageons à offrir les meilleurs soins dans un environnement sécurisé et confortable.
        </p>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className={`grid md:grid-cols-2 gap-12 items-center scroll-mt-24 ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="text-lg text-gray-600">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`relative h-[400px] rounded-xl overflow-hidden ${
                index % 2 === 1 ? 'md:col-start-1' : ''
              }`}>
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Image à venir</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Section FAQ */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Quelles sont les conditions d&apos;accueil ?</h3>
              <p className="text-gray-600">
                Votre chien doit être à jour de ses vaccins (CHPL, rage) et avoir un traitement antiparasitaire récent. Nous vous demanderons également son carnet de santé lors de l&apos;accueil.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Que dois-je apporter ?</h3>
              <p className="text-gray-600">
                Vous pouvez apporter la nourriture de votre chien, ses jouets préférés, son panier ou couverture. Nous fournissons les gamelles et les couchages de base.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Comment se passent les promenades ?</h3>
              <p className="text-gray-600">
                Les promenades sont adaptées à chaque chien. Nous proposons des sorties individuelles ou en petits groupes, selon le caractère de votre chien.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Quels sont les horaires de visite ?</h3>
              <p className="text-gray-600">
                Vous pouvez visiter notre établissement sur rendez-vous, du lundi au samedi. Les déposes et reprises de chiens sont possibles pendant nos heures d&apos;ouverture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 