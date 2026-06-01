# Intégration du cours pilote « L’œil et la conduite »

## Ce qui a été ajouté

- Route Next.js : `app/cours/oeil-conduite/page.tsx`
- Module réutilisable : `src/features/courses/`
- Données éditables : `src/features/courses/data/oeil-conduite.ts`
- Types stricts : `src/features/courses/types/course.ts`
- Composants : `CourseLayout`, `CourseSidebar`, `CourseSection`, `TextCard`, `ImageCard`, `ComparisonCard`, `TableBlock`, `CalloutBlock`
- Images publiques : `public/cours/oeil-conduite/refined/`
- Lien ajouté dans la page `/cours`
- Lien ajouté dans les menus mobile et desktop vers `/cours/oeil-conduite#top`

## Choix important

Le cours n’est pas collé en HTML brut. Il est représenté par une structure de données TypeScript éditable.
Les composants se chargent ensuite de rendre les cartes, images, tableaux et comparaisons.

## Icônes

Un composant léger `AppIcon` a été ajouté avec des SVG inline. C’est volontaire : cela évite d’ajouter directement `@mui/material` et `@mui/icons-material` tant que le modèle de cours n’est pas stabilisé.

Si tu veux passer à Material UI ensuite, il suffira de modifier `src/features/courses/components/AppIcon.tsx` et d’importer seulement les icônes nécessaires une par une.

## Étape suivante conseillée

Valider visuellement la route `/cours/oeil-conduite`, puis ajouter le bloc suivant du cours Vue dans `oeil-conduite.ts` : feux, conduite de nuit ou réglementation.
