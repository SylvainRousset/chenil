'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: '',
    type: 'reservation'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pourrez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Contactez-nous</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Nos coordonnées</h2>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  392 Côte de Parelh, 64800 Arros-de-Nay
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <a href="tel:0659177117" className="hover:text-blue-600 transition-colors">06 59 17 71 17</a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  <a href="mailto:lacolodeslabasseres@gmail.com" className="hover:text-blue-600 transition-colors">lacolodeslabasseres@gmail.com</a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Horaires d&apos;accueil</h2>
              <ul className="space-y-2 text-gray-600">
                <li>Lundi - Samedi: 9h30 - 13h30</li>
                <li>et 17h30 - 20h</li>
                <li>Dimanche: 17h - 20h (sur rendez-vous)</li>
                <li className="text-sm text-blue-600 font-medium">Uniquement sur rendez-vous</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Localisation</h2>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://maps.google.com/maps?q=392+Côte+de+Parelh,+64800+Arros-de-Nay,+France&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation de La Colo des Labassères - 392 Côte de Parelh, 64800 Arros-de-Nay"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                📍 392 Côte de Parelh, 64800 Arros-de-Nay
              </p>
            </div>

            <p className="text-gray-600">
              Pour toute question ou réservation, n&apos;hésitez pas à nous contacter
            </p>

            <p className="text-gray-600">
              Nous sommes à votre écoute pour répondre à toutes vos questions
            </p>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                  Type de demande
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="reservation">Réservation</option>
                  <option value="information">Demande d&apos;information</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 