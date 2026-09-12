# Vantex Bank — Prototype Next.js

Conversion du prototype de site "Vantex Bank" (initialement en HTML/CSS/JS statique) vers Next.js 14 (App Router + TypeScript).

⚠️ **Ceci est un prototype de démonstration.** Aucun formulaire n'envoie de données à un serveur : les uploads de documents, la connexion, l'inscription et la soumission de dossier sont entièrement simulés côté client (comme dans la maquette d'origine), à des fins de présentation uniquement.

## Démarrage

```bash
npm install
npm run dev
```

Puis ouvrez [http://localhost:3000](http://localhost:3000).

## Structure

- `app/` — layout, page principale, styles globaux (repris fidèlement du CSS d'origine)
- `components/` — un composant par section (Navbar, Hero, Steps, Simulator, Conditions, Testimonials, Trust, Footer) + les deux modales (Auth, App) + utilitaires (Reveal au scroll, compteur animé)
- `lib/loan.ts` — logique de calcul du prêt (taux, mensualité, coût total)

## Ce qui a été converti

- Toute la logique JavaScript vanille (scroll reveal, compteur animé, simulateur de prêt, système de modales, onglets connexion/inscription, parcours de demande en 4 étapes, upload simulé, soumission avec écran de chargement puis succès) a été réécrite en React (hooks `useState`/`useEffect`/`useMemo`, `IntersectionObserver`).
- L'état du simulateur (montant, durée) est partagé entre la section Simulateur et la modale de demande via un contexte React, pour rester synchronisé comme dans l'original.
- Les images externes (Unsplash, pravatar) passent par `next/image`.
- Les polices Google (Inter, DM Serif Display) sont chargées via `next/font/google` plutôt que par balise `<link>`.

