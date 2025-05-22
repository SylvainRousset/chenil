import Link from 'next/link';

const forfaits = [
  {
    title: "Garde à la journée",
    price: "25",
    period: "jour",
    description: "Idéal pour une garde ponctuelle",
    features: [
      "Accueil de 8h à 19h",
      "Nourriture fournie",
      "2 promenades quotidiennes",
      "Box individuel",
      "Soins de base"
    ],
    popular: false
  },
  {
    title: "Garde à la semaine",
    price: "150",
    period: "semaine",
    description: "Notre forfait le plus populaire",
    features: [
      "7 jours de garde",
      "Nourriture fournie",
      "3 promenades quotidiennes",
      "Box individuel spacieux",
      "Soins personnalisés",
      "Rapport quotidien",
      "Sortie en montagne incluse"
    ],
    popular: true
  },
  {
    title: "Garde au mois",
    price: "500",
    period: "mois",
    description: "Solution économique pour longue durée",
    features: [
      "30 jours de garde",
      "Nourriture fournie",
      "3 promenades quotidiennes",
      "Box individuel premium",
      "Soins personnalisés",
      "Rapport quotidien",
      "2 sorties en montagne par semaine",
      "Toilettage basique inclus"
    ],
    popular: false
  }
];

const servicesAdditionnels = [
  {
    title: "Promenade supplémentaire",
    price: "10",
    description: "Promenade individuelle de 30 minutes"
  },
  {
    title: "Toilettage complet",
    price: "35",
    description: "Bain, séchage, coupe des griffes et brossage"
  },
  {
    title: "Sortie en montagne",
    price: "25",
    description: "Promenade de 2 heures en montagne"
  },
  {
    title: "Transport",
    price: "15",
    description: "Aller-retour dans un rayon de 10km"
  }
];

const tarifs = [
  {
    nom: "Box Standard",
    prix: 20,
    inclus: [
      "Box individuel spacieux",
      "Sorties régulières",
      "Nourriture basique",
      "Surveillance 24h/24",
      "Soins de base"
    ]
  },
  {
    nom: "Box Confort",
    prix: 25,
    inclus: [
      "Box individuel premium",
      "Sorties plus fréquentes",
      "Nourriture premium",
      "Surveillance 24h/24",
      "Soins personnalisés",
      "Jeux et activités"
    ]
  },
  {
    nom: "Box Luxe",
    prix: 30,
    inclus: [
      "Box individuel de luxe",
      "Sorties illimitées",
      "Nourriture premium",
      "Surveillance 24h/24",
      "Soins personnalisés",
      "Jeux et activités",
      "Massages et câlins"
    ]
  }
];

export default function Tarifs() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Nos Tarifs</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Des tarifs transparents et adaptés à vos besoins. Choisissez le forfait qui vous convient le mieux.
        </p>

        {/* Forfaits principaux */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {forfaits.map((forfait, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
              style={{ minHeight: '540px' }}
            >
              <div className="p-8 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold mb-2">{forfait.title}</h2>
                <p className="text-gray-600 mb-6">{forfait.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{forfait.price}€</span>
                  <span className="text-gray-600"> / {forfait.period}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {forfait.features.map((feature, featureIndex) => (
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
            </div>
          ))}
        </div>

        {/* Cartes de tarifs */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {tarifs.map((tarif, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
              style={{ minHeight: '400px' }}
            >
              <div className="p-6 flex-1">
                <h3 className="text-2xl font-bold mb-4">{tarif.nom}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  {tarif.prix}€
                  <span className="text-base font-normal text-gray-600">/jour</span>
                </div>
                <ul className="space-y-3">
                  {tarif.inclus.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Services additionnels */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Services additionnels</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesAdditionnels.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">{service.price}€</p>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Informations supplémentaires */}
        <div className="mt-24 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Informations importantes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Conditions de réservation</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Réservation recommandée 48h à l'avance</li>
                <li>• Un acompte de 30% est demandé pour confirmer la réservation</li>
                <li>• Annulation gratuite jusqu'à 24h avant</li>
                <li>• Paiement par carte bancaire, espèces ou chèque</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Ce qui est inclus</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Nourriture de qualité adaptée à votre chien</li>
                <li>• Box individuel confortable</li>
                <li>• Promenades quotidiennes</li>
                <li>• Soins de base et surveillance</li>
                <li>• Photos et nouvelles quotidiennes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 