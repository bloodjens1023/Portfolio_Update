# Portfolio Professionnel React - Jenny Fandresena

Portfolio de **RAKOTOHASIMBOLA Hasiniaina Jenny Fandresena**, Développeur Web Full-Stack et étudiante en **Master 2 Informatique à l'Université ITU (Information Technology University) à Madagascar** (préparation de mémoire).

Ce projet a été transformé en une application **React moderne avec Vite**, conservant l'intégralité du design visuel, des interactions 3D, du thème sombre/clair Unity et du support bilingue (Français / Anglais).

---

## 🚀 Caractéristiques

- **Architecture React 18 + Vite** : Composants modulaires, hooks personnalisés (`useTilt`, `useScrollReveal`), gestion d'état contextuelle (`ThemeContext`, `LanguageContext`).
- **Support Bilingue Interactif (FR / EN)** : Bouton de bascule de langue intégré dans la barre de navigation, traduction dynamique instantanée sans rechargement, persistance dans `localStorage`.
- **Mode Sombre & Clair (Style Unity)** : Thème sombre inspiré de Unity (Carbon black `#0c0d0e`, mint néon `#00ffb4` et bleu électrique `#0091ea`), persistance dans `localStorage`.
- **Navigation HUD technique style ArtCraft** : Cellules délimitées en grille (48px), boutons de bascule de thème et de langue, menu mobile fluide.
- **Arrière-plan 3D interactif** : Canvas de particules connectées réagissant aux mouvements de la souris et adaptées au thème actif.
- **Présentation organique du profil** : Photo dans un pod holographique avec anneau lumineux rotatif, effet tilt 3D et badges technologiques.
- **Formulaire de contact dynamique** : Gestion d'état React, validations, retours visuels animés (envoi en cours, message de succès).

---

## 📁 Architecture du projet React

```
test/
├── public/
│   └── img/                         # Images du profil et des projets
├── src/
│   ├── components/
│   │   ├── Background3D.jsx         # Arrière-plan de particules interactives
│   │   ├── CursorGlow.jsx           # Curseur lumineux suiveur
│   │   ├── Navbar.jsx               # Barre de navigation HUD ArtCraft
│   │   ├── Hero.jsx                 # Section d'accueil et profil 3D
│   │   ├── About.jsx                # Présentation & stats ITU
│   │   ├── Education.jsx            # Cursus académique (M2 ITU, M1, Licence, Bac)
│   │   ├── Skills.jsx               # Compétences Frontend, Backend & Outils
│   │   ├── Projects.jsx             # Projets réels avec cartes 3D Tilt
│   │   ├── Contact.jsx              # Coordonnées et formulaire interactif
│   │   └── Footer.jsx               # Pied de page
│   ├── context/
│   │   ├── ThemeContext.jsx         # Gestion du thème sombre / clair
│   │   └── LanguageContext.jsx      # Gestion des langues (FR / EN)
│   ├── data/
│   │   └── translations.js          # Dictionnaire bilingue complet
│   ├── hooks/
│   │   ├── useTilt.js               # Effet de perspective 3D sur les cartes
│   │   └── useScrollReveal.js       # Animations d'apparition au défilement
│   ├── App.jsx                      # Composant racine
│   ├── index.css                    # Styles globaux & variables CSS Unity
│   └── main.jsx                     # Point d'entrée React
├── index.html                       # Document HTML racine Vite
├── vite.config.js                   # Configuration du bundler Vite
├── package.json                     # Dépendances et scripts
└── vanilla-backup/                  # Sauvegarde de la version HTML/JS vanilla
```

---

## 💻 Démarrage et Utilisation

### 1. Installer les dépendances
```bash
npm install
```

### 2. Lancer le serveur de développement Vite
```bash
npm run dev
```
Puis ouvrez l'adresse indiquée (par défaut `http://localhost:3000` ou `http://localhost:5173`).

### 3. Compiler pour la production
```bash
npm run build
```
Les fichiers optimisés et minifiés seront générés dans le dossier `dist/`.
