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
                  Route des Pyrénées, Pau
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  05 XX XX XX XX
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  contact@chenildespyrenees.fr
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Horaires d'ouverture</h2>
              <ul className="space-y-2 text-gray-600">
                <li>Lundi - Vendredi: 8h - 19h</li>
                <li>Samedi: 9h - 18h</li>
                <li>Dimanche: Sur rendez-vous</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Localisation</h2>
              <div className="aspect-video bg-gray-200 rounded-lg">
                {/* Ici, vous pourrez ajouter une carte Google Maps */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Carte à intégrer
                </div>
              </div>
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