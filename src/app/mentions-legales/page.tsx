export default function MentionsLegales() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Mentions légales</h1>

        <div className="space-y-12">
          {/* Éditeur du site */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Éditeur du site</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>La Colo des Labassères</strong></p>
              <p><strong>Responsable :</strong> Gracia Elsa</p>
              <p><strong>Adresse :</strong> 392 Côte de Parelh, 64800 Arros-de-Nay</p>
              <p><strong>Tél :</strong> <a href="tel:0659177117" className="text-blue-600 hover:underline">06 59 17 71 17</a></p>
              <p><strong>Mail :</strong> <a href="mailto:lacolodeslabasseres@gmail.com" className="text-blue-600 hover:underline">lacolodeslabasseres@gmail.com</a></p>
              <p><strong>SIREN :</strong> 944 323 013</p>
              <p><strong>Certificat de capacité :</strong> n°2024/8170-AFD 4</p>
            </div>
          </section>

          {/* Hébergement du site */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Hébergement du site</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Vercel Inc.</strong></p>
              <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
              <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://vercel.com</a></p>
            </div>
          </section>

          {/* Assurance responsabilité professionnelle */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Assurance responsabilité professionnelle</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Compagnie :</strong> MAAF</p>
              <p>Contrat couvrant l&apos;activité de pension canine.</p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Propriété intellectuelle</h2>
            <div className="text-gray-700 leading-relaxed">
              <p>
                L&apos;ensemble du contenu du site (textes, photos, vidéos, logo, design) est la propriété exclusive de 
                La Colo des Labassères. Toute reproduction, même partielle, est interdite sans autorisation écrite 
                préalable.
              </p>
            </div>
          </section>

          {/* Protection des données */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Protection des données</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Les informations collectées via le formulaire de contact ou par e-mail sont utilisées uniquement 
                pour vous répondre. Elles ne sont ni revendues, ni utilisées à des fins commerciales.
              </p>
              <p>
                Conformément au RGPD, vous pouvez demander la modification ou la suppression de vos données 
                personnelles en écrivant à : 
                <a href="mailto:lacolodeslabasseres@gmail.com" className="text-blue-600 hover:underline ml-1">
                  lacolodeslabasseres@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Informations RGPD supplémentaires */}
          <section className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Vos droits RGPD</h2>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
              <ul className="space-y-2 ml-6">
                <li>• <strong>Droit d&apos;accès :</strong> obtenir une copie de vos données personnelles</li>
                <li>• <strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
                <li>• <strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
                <li>• <strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                <li>• <strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à : 
                <a href="mailto:lacolodeslabasseres@gmail.com" className="text-blue-600 hover:underline ml-1">
                  lacolodeslabasseres@gmail.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 