# Vantex Bank — Plateforme de Financement en Ligne

Plateforme bancaire moderne développée avec Next.js 14 (App Router + TypeScript), offrant des solutions de crédit rapide, sécurisé et 100% en ligne.

## Fonctionnalités

- **Simulateur de prêt dynamique** : Calcul instantané des mensualités et du coût total.
- **Parcours de demande intuitif** : Processus en 4 étapes avec upload de documents et signature électronique.
- **Interface responsive** : Design moderne et fluide, optimisé pour tous les terminaux (Mobile, Tablette, Desktop).
- **Logique métier robuste** : Calculs de taux et d'échéanciers précis côté serveur et client.
- **Sécurité** : Structure conforme aux standards modernes du Web.

## Démarrage

```bash
npm install
npm run dev
```

Puis ouvrez [http://localhost:3000](http://localhost:3000).

## Structure du projet

- `app/` — Layout, pages de services, espace client et styles globaux.
- `components/` — Bibliothèque de composants UI (Navbar, Hero, Simulateur, Modales, etc.).
- `lib/loan.ts` — Moteur de calcul financier (Taux, mensualités, intérêts).

## Technologies utilisées

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Style** : CSS3 moderne (Variables, Flexbox, Grid)
- **Animations** : Hooks React + Intersection Observer pour le Reveal au scroll.
- **Optimisation** : `next/image` et `next/font` pour des performances maximales.
