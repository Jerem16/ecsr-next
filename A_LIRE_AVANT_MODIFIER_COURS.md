# À lire avant de modifier ou créer un cours ECSR

Ce projet utilise une navigation macro séparée du contenu des cours.

## Règle de fusion utilisée

- La navigation, les pages macro et les menus viennent de `ecsr-navigation-structure-complete`.
- Les composants de rendu des cours, le SCSS de cours, les images et les deux cours complets viennent de `ecsr-navigation`.
- Il ne faut pas remplacer la navigation macro en modifiant un cours.

## Règle importante pour les cours

Un cours ne doit pas être stocké dans un seul énorme fichier TypeScript.

Chaque cours est composé de sections réutilisables :

```txt
src/features/courses/data/<slug-du-cours>/
├─ metadata.ts
├─ index.ts
├─ README_SECTIONS.md
└─ sections/
   ├─ 01-section.ts
   ├─ 02-section.ts
   └─ ...
```

Le fichier `index.ts` refusionne les objets pour produire le cours complet :

```ts
export const exempleCourse: Course = {
    ...exempleMeta,
    sections: exempleSections,
};
```

## Pourquoi ce découpage ?

Chaque section est un objet pédagogique récupérable séparément pour construire plus tard :

- Une fiche pédagogique.
- Une synthèse.
- Une animation en salle.
- Une carte de révision.
- Un cours complet.

Exemple : dans `oeil-conduite`, les objets `plan-cours`, `sens`, `constitution-oeil`, `tache-aveugle`, `croisement`, etc. peuvent être importés séparément.

## Composants disponibles pour le rendu

Les sections peuvent utiliser les blocs suivants :

- `text-card`
- `list-card`
- `image-card`
- `comparison-card`
- `sequence-card`
- `table`
- `callout`
- `source-pages`

Pour les contenus riches, utiliser `RichContent` via les nodes typées : paragraphes, listes, valeurs clés, notes, sources, gras, italique et liens.

## Routes validées actuellement

- `/cours/conducteur-conduite/oeil-conduite`
- `/cours/conducteur-conduite/produits-psychoactifs`

Les routes directes historiques restent disponibles :

- `/cours/oeil-conduite`
- `/cours/produits-psychoactifs`

## À ne pas faire

- Ne pas coller tout un cours dans `page.tsx`.
- Ne pas recréer un fichier unique de 1 500 lignes par cours.
- Ne pas modifier `ecsrStructure.ts` pour changer la mise en forme interne d’un cours.
- Ne pas supprimer `RichContent`, `SequenceCard`, `SourcePagesBlock` : ils servent aux mises en forme complexes.
