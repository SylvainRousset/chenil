// import Link from 'next/link';

export default function Tarifs() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Horaires et Tarifs</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Des tarifs transparents et des horaires adaptés pour le bien-être de votre chien.
        </p>

        {/* Tarifs de garde */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Tarifs de garde</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tarif standard */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">20€</div>
              <div className="text-gray-600 mb-4">par jour</div>
              <h3 className="text-xl font-semibold mb-4">Tarif standard</h3>
              <p className="text-gray-700 leading-relaxed">
                Tous services inclus (parcs, sorties, piscine, surveillance, photos/vidéos)
              </p>
            </div>

            {/* Tarif réduit */}
            <div className="bg-green-50 rounded-xl shadow-lg p-8 text-center border-2 border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-4">15€</div>
              <div className="text-gray-600 mb-4">par jour</div>
              <h3 className="text-xl font-semibold mb-4">Tarif réduit</h3>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>• À partir de 2 chiens de la même famille</p>
                <p>• Pour une garde de plus de 10 jours</p>
              </div>
            </div>

            {/* Garde individuelle */}
            <div className="bg-blue-50 rounded-xl shadow-lg p-8 text-center border-2 border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-4">25€</div>
              <div className="text-gray-600 mb-4">par jour</div>
              <h3 className="text-xl font-semibold mb-4">Garde individuelle</h3>
              <p className="text-gray-700 leading-relaxed">
                Pour les chiens nécessitant une garde individuelle (non sociables ou besoins spécifiques)
              </p>
            </div>
          </div>
        </section>

        {/* Nourriture non fournie */}
        <section className="mb-16">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-8 rounded-r-xl">
            <h3 className="text-2xl font-bold mb-4 text-yellow-800">Nourriture non fournie</h3>
            <p className="text-gray-700 leading-relaxed">
              Pour garantir le confort digestif de chaque chien et éviter tout trouble intestinal lié à un 
              changement brutal d&apos;alimentation, les repas sont à fournir par les propriétaires, en quantité 
              suffisante pour toute la durée du séjour.
            </p>
          </div>
        </section>

        {/* Services inclus */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Tous les tarifs comprennent :</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Hébergement en niche isolée individuelle</span>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Accès aux parcs et à la piscine</span>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Balades quotidiennes en nature</span>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Envoi de photos/vidéos pendant le séjour</span>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Présence humaine permanente</span>
              </div>
            </div>
          </div>
        </section>

        {/* Préparer le séjour */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Préparer le séjour de votre chien</h2>
          <p className="text-center text-gray-600 mb-8">
            Pour le bien-être et la sécurité de tous, merci de prévoir les éléments suivants à l&apos;arrivée :
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* À apporter obligatoirement */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-red-600">À apporter obligatoirement :</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Carnet de santé à jour</h4>
                  <p className="text-gray-700 mb-2">Avec les vaccinations suivantes obligatoires :</p>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Carré</li>
                    <li>• Hépatite de Rubarth</li>
                    <li>• Leptospirose</li>
                    <li>• Parvovirose</li>
                    <li>• Toux du chenil</li>
                  </ul>
                  <p className="text-sm text-red-600 mt-2 font-medium">
                    Tous les vaccins doivent dater de moins d&apos;un an.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Traitement antiparasitaire complet</h4>
                  <p className="text-gray-700 mb-2">Administré avant l&apos;arrivée :</p>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Vermifuge</li>
                    <li>• Antipuces / antitiques</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Papiers d&apos;identification</h4>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• N° de tatouage ou puce électronique (obligatoire)</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-2">
                    Ces documents seront conservés pendant toute la durée du séjour
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Équipement</h4>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Laisse et collier</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Confort personnel */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Confort personnel :</h3>
              
              <div className="space-y-4 text-gray-700">
                <p>• Panier ou couverture (si le chien en a un)</p>
                <p>
                  • Si ce n&apos;est pas possible, pensez à apporter un vieux tee-shirt avec votre odeur : 
                  cela aide beaucoup votre chien à se sentir rassuré.
                </p>
              </div>

              <div className="mt-8 bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-red-800 mb-2">❌ Important :</h4>
                <p className="text-red-700">
                  Les chiennes en chaleur ne sont pas acceptées à la pension.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Horaires et fonctionnement */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Horaires & fonctionnement</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <p className="text-center text-gray-700 mb-8 text-lg">
              Les arrivées et départs de pension se font uniquement sur rendez-vous, afin de garantir calme et 
              sécurité à tous les chiens présents.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Horaires d&apos;accueil</h3>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Du lundi au samedi :</h4>
                    <p className="text-gray-700">de 9h30 à 13h30</p>
                    <p className="text-gray-700">et de 17h30 à 20h</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Dimanche et jours fériés :</h4>
                    <p className="text-gray-700">de 17h à 20h</p>
                    <p className="text-sm text-gray-600">(sur rendez-vous uniquement)</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-green-600">Conditions de facturation</h3>
                
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Arrivée à partir de midi :</h4>
                    <p className="text-gray-700">facturée une demi-journée seulement</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Départ entre midi et 13h30 :</h4>
                    <p className="text-gray-700">une demi-journée supplémentaire sera facturée</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-4">
                🐕 Merci de venir avec votre chien tenu en laisse à l&apos;entrée et à la sortie.
              </p>
              <p className="text-red-600 font-semibold">
                Les chèques ne sont pas acceptés
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 