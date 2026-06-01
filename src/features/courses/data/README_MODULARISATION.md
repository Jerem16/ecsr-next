# Modularisation des données de cours

Chaque cours est composé de plusieurs objets `CourseSection` isolés dans `sections/`.

Objectif : pouvoir récupérer une section précise pour fabriquer une fiche pédagogique sans recopier tout le cours.

## Cours déjà modularisés

- `oeil-conduite/`
- `produits-psychoactifs/`

Chaque dossier contient :

- `metadata.ts` : titre, résumé, objectifs.
- `sections/*.ts` : un objet pédagogique par fichier.
- `sections/index.ts` : ordre officiel du cours.
- `index.ts` : cours complet refusionné.
- `README_SECTIONS.md` : liste des objets exportés.
