# Validation — Étape 2

## Réalisé

- Création de la route `app/cours/oeil-conduite/page.tsx`.
- Création du module `src/features/courses/`.
- Création d'une donnée éditable `src/features/courses/data/oeil-conduite.ts`.
- Création des composants : `CourseLayout`, `CourseHero`, `CourseSidebar`, `CourseSection`, `TextCard`, `ImageCard`, `ComparisonCard`, `TableBlock`, `CalloutBlock`.
- Ajout de 5 images raffinées dans `public/cours/oeil-conduite/refined/`.
- Ajout d'un lien vers le cours Vue depuis la page `/cours`.
- Ajout d'un lien vers le cours Vue dans les menus mobile et desktop.
- Support d'un `path` optionnel sur les sous-liens de navigation pour permettre un lien direct vers `/cours/oeil-conduite#top`.
- Adaptation du scroll spy desktop pour lire dynamiquement les `section[id]` présents dans la page, comme le mobile.
- Ajout d'un composant léger `AppIcon` en SVG inline pour éviter d'ajouter Material UI tant que le modèle n'est pas stabilisé.

## Contrôles effectués

- Vérification de la présence des nouveaux fichiers.
- Vérification de la présence des images nécessaires.
- Vérification syntaxique par transpilation TypeScript locale des fichiers modifiés et ajoutés.

## Limite de validation

- Le build Next.js complet n'a pas pu être exécuté dans cet environnement car les dépendances `node_modules` ne sont pas installées (`next: not found`).
- À vérifier côté projet local après extraction : `npm install` ou `yarn install`, puis `npm run build` ou `yarn build`.

## Route à tester

- `/cours/oeil-conduite`
