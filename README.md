# Faire-Part Numérique Interactif — Carole & Benjamin

Bienvenue sur le projet officiel de faire-part numérique interactif de mariage pour **Carole & Benjamin** (Samedi 30 Janvier 2027).

Conçu comme une expérience web haut de gamme, fluide, réutilisable et mobile-first.

---

## 🌟 Caractéristiques du Projet

- **Architecture :** Next.js (App Router), React, TypeScript, Tailwind CSS.
- **Animations :** Framer Motion avec accélération matérielle, confettis dorés et orangés.
- **Direction Artistique :** Esthétique africaine contemporaine et raffinement nuptial :
  - Vert profond : `#174D36`
  - Orange chaleureux : `#E66C32`
  - Ivoire texturé : `#F5EBDD`
  - Or & reflets dorés : `#C6A45A`
- **10 Scènes Interactives :**
  1. **Scène 1 — Arrivée :** Enveloppe fermée avec papier texturé, sceau de cire 3D (initiales C & B) et bouton « Ouvrir mon invitation ».
  2. **Scène 2 — Animation d'ouverture :** Bris du sceau, dépliement du rabat en perspective 3D, élévation de la carte intérieure et pluie de confettis dorés.
  3. **Scène 3 — Présentation des mariés :** Portrait officiel, prénoms et accroche « Célébrons ensemble notre union ! ».
  4. **Scène 4 — Message officiel :** Typographie soignée et texte officiel scrupuleusement respecté.
  5. **Scène 5 — Compte à rebours dynamique :** Jours, heures, minutes, secondes calés sur le fuseau horaire `Africa/Abidjan` (30 janvier 2027 à 11h00).
  6. **Scène 6 — Programme :** 11h00 (Cérémonie civile, Mairie de Dabou) & 13h00 (Réception, Cour familiale de la mariée, Lopou).
  7. **Scène 7 — Localisation :** Deux entrées distinctes avec boutons Google Maps et coordonnées GPS précises pour Lopou (5.419569, -4.469182).
  8. **Scène 8 — Galerie photographique :** Lightbox responsive en plein écran avec navigation tactile et clavier (Escape / Flèches).
  9. **Scène 9 — RSVP WhatsApp :** Bouton direct vers WhatsApp avec message prérempli encodé vers le numéro `+221 77 097 62 57`.
  10. **Scène 10 — Conclusion :** Signature élégante et message de clôture chaleureux.
- **Musique Nuptiale :** Lecteur audio flottant avec gestion des restrictions de lecture automatique navigateur.
- **Version PDF Souvenir :** Page dédiée `/souvenir-pdf` optimisée pour l'impression A4 et la génération PDF haute fidélité.
- **Architecture Réutilisable :** Configuration centralisée dans `src/data/wedding-config.ts` et route dynamique `/mariage/[slug]`.

---

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+ ou 20+
- npm ou yarn ou pnpm

### Installation et Lancement Local
```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de Production
```bash
npm run build
npm start
```

---

## 📂 Organisation des Fichiers

```text
├── public/
│   ├── audio/                      # Emplacement pour la musique du mariage (.mp3)
│   └── images/
│       └── carole-benjamin/        # Photographies optimisées (WebP, SVG & OG Image)
├── src/
│   ├── app/
│   │   ├── globals.css             # Textures papier, reflets or, styles print A4
│   │   ├── layout.tsx              # Polices Google Fonts, OpenGraph WhatsApp
│   │   ├── page.tsx                # Expérience complète du faire-part
│   │   ├── mariage/
│   │   │   └── [slug]/             # Route dynamique réutilisable
│   │   └── souvenir-pdf/           # Version imprimable et PDF souvenir
│   ├── components/
│   │   ├── AudioPlayer.tsx         # Lecteur musical discret
│   │   ├── EnvelopeAnimation.tsx   # Enveloppe 3D et sceau de cire animé
│   │   ├── FloatingControls.tsx    # Boutons d'accès rapide (RSVP, PDF, Partage)
│   │   ├── InvitationCover.tsx     # Présentation principale du couple
│   │   ├── InvitationMessage.tsx   # Texte d'invitation officiel
│   │   ├── PhotoGallery.tsx        # Galerie et Lightbox plein écran
│   │   ├── RSVPButton.tsx          # Bouton de confirmation WhatsApp
│   │   ├── SouvenirPDFView.tsx     # Vue dédiée au format PDF souvenir
│   │   ├── WeddingCountdown.tsx    # Compte à rebours dynamique
│   │   ├── WeddingFooter.tsx       # Conclusion & Monogramme
│   │   ├── WeddingLocation.tsx     # Cartes et coordonnées GPS
│   │   └── WeddingSchedule.tsx     # Programme officiel du 30 Janvier 2027
│   └── data/
│       └── wedding-config.ts       # Données centralisées (facilement modifiables)
```

---

## 🚢 Déploiement sur Vercel

Le projet est 100% optimisé pour un déploiement instantané sur Vercel :

1. Pousser le dépôt sur GitHub / GitLab.
2. Se connecter sur [vercel.com](https://vercel.com) et cliquer sur **Add New Project**.
3. Sélectionner le dépôt `Mariage site web`.
4. Vercel détecte automatiquement Next.js :
   - Framework Preset : `Next.js`
   - Build Command : `npm run build`
   - Output Directory : `.next`
5. Cliquer sur **Deploy**.

---

## 📋 Éléments Restant à Fournir par le Client

1. **Fichiers originaux des 3 photographies (haute résolution) :**
   - Photo 1 : portrait sur fond noir avec ballon rouge en forme de cœur (à déposer dans `public/images/carole-benjamin/photo-1-portrait.webp`).
   - Photo 2 : gros plan des mains avec alliances (à déposer dans `public/images/carole-benjamin/photo-2-alliances.webp`).
   - Photo 3 : inspiration de décorations et tenues orange & vert (à déposer dans `public/images/carole-benjamin/photo-3-decoration.webp`).
2. **Fichier audio de la musique :**
   - Dès que le couple aura choisi le morceau, déposer le fichier `.mp3` dans `public/audio/mariage-musique.mp3`.
