'use client';

import { useState } from 'react';
import Image from 'next/image';

const categories = [
  { id: 'tous', label: 'Tous' },
  { id: 'installations', label: 'Nos installations' },
  { id: 'chiens', label: 'Nos pensionnaires' },
  { id: 'montagne', label: 'Sorties en montagne' }
];

const photos = [
  {
    id: 1,
    src: '/images/box.jpg',
    alt: 'Box individuel spacieux',
    category: 'installations',
    title: 'Box individuel'
  },
  {
    id: 2,
    src: '/images/parc.jpg',
    alt: 'Parc de jeux extérieur',
    category: 'installations',
    title: 'Parc de jeux'
  },
  {
    id: 3,
    src: '/images/parc2.jpg',
    alt: 'Chien jouant dans le parc',
    category: 'chiens',
    title: 'Jeux dans le parc'
  },
  {
    id: 4,
    src: '/images/detente.jpg',
    alt: 'Chien se reposant',
    category: 'chiens',
    title: 'Moment de détente'
  },
  {
    id: 5,
    src: '/images/promenadegal.jpg',
    alt: 'Sortie en montagne',
    category: 'montagne',
    title: 'Promenade quotidienne'
  },
  {
    id: 6,
    src: '/images/acceuil.jpg',
    alt: 'Vue sur les Pyrénées',
    category: 'montagne',
    title: 'Vue panoramique'
  },
  {
    id: 7,
    src: '/images/repos.jpg',
    alt: 'Zone de repos',
    category: 'installations',
    title: 'Zone de repos'
  }
];

export default function Galerie() {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const filteredPhotos = selectedCategory === 'tous'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  const handleImageError = (photoId: number) => {
    setImageErrors(prev => ({ ...prev, [photoId]: true }));
  };

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Notre Galerie</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Découvrez notre établissement et la vie quotidienne de nos pensionnaires à travers ces photos.
        </p>

        {/* Filtres */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grille de photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map(photo => (
            <div
              key={photo.id}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedPhoto(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform group-hover:scale-105"
                priority={photo.id <= 3}
              />
              {/* Overlay uniquement au survol */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal pour afficher la photo en grand */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="relative max-w-4xl w-full aspect-[4/3]">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
                priority
              />
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhoto(null);
                }}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">{selectedPhoto.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 