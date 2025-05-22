# Chenil des Pyrénées - Site Vitrine

Site vitrine moderne pour un chenil situé aux portes des Pyrénées, à Pau. Ce site permet aux propriétaires de chiens de découvrir les services proposés, les tarifs et de prendre rendez-vous pour la garde de leurs animaux.

## Technologies utilisées

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- ESLint

## Fonctionnalités

- Design moderne et responsive
- Pages principales :
  - Accueil
  - Services
  - Tarifs
  - Galerie
  - Contact
- Formulaire de contact
- Galerie photo interactive
- Présentation détaillée des services
- Tarifs clairs et transparents

## Prérequis

- Node.js 18.17 ou supérieur
- npm ou yarn

## Installation

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/chenil.git
cd chenil
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
```

3. Créez un fichier `.env.local` à la racine du projet et ajoutez les variables d'environnement nécessaires :
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Lancez le serveur de développement :
```bash
npm run dev
# ou
yarn dev
```

Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## Structure des dossiers

```
chenil/
├── public/
│   └── images/          # Images du site
│       ├── galerie/     # Photos de la galerie
│       └── ...
├── src/
│   ├── app/            # Pages de l'application
│   │   ├── contact/    # Page de contact
│   │   ├── galerie/    # Page galerie
│   │   ├── services/   # Page services
│   │   ├── tarifs/     # Page tarifs
│   │   └── ...
│   └── components/     # Composants réutilisables
├── .env.local          # Variables d'environnement
└── ...
```

## Déploiement

Le site peut être déployé sur Vercel en quelques clics :

1. Créez un compte sur [Vercel](https://vercel.com)
2. Importez votre repository GitHub
3. Configurez les variables d'environnement
4. Déployez !

## Personnalisation

### Images

Placez vos images dans le dossier `public/images/` en respectant la structure suivante :
- `public/images/hero-bg.jpg` : Image de fond de la page d'accueil
- `public/images/about.jpg` : Image de la section "À propos"
- `public/images/galerie/` : Photos de la galerie
- `public/images/service-*.jpg` : Images des services

### Contenu

Modifiez le contenu des pages dans les fichiers correspondants du dossier `src/app/`.

### Styles

Les styles sont gérés avec Tailwind CSS. Vous pouvez personnaliser les couleurs et autres paramètres dans le fichier `tailwind.config.js`.

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
