# Mode édition local des cours ECSR

Cette version ajoute une première couche d’édition locale directement dans les pages de cours.

## Principe

- Le cours s’ouvre normalement en lecture.
- Le bouton `Modifier le cours` active le mode édition sur la même page.
- Les champs sont préremplis depuis les données TypeScript existantes.
- La sauvegarde écrit des fichiers JSON dans le projet local.
- Aucun CMS, aucune base distante et aucun serveur externe ne sont utilisés.

## Fichiers créés après sauvegarde

La première sauvegarde d’un cours crée :

```txt
src/features/courses/data/editable/<slug>/course.json
src/features/courses/data/editable/<slug>/metadata.json
src/features/courses/data/editable/<slug>/manifest.json
src/features/courses/data/editable/<slug>/sections/*.json
```

`course.json` sert au rechargement complet du cours.

Les fichiers de `sections/` servent à garder une structure modulaire réutilisable pour les futures fiches pédagogiques.

## Fonctionnement du fallback

- Si une version locale éditable existe, elle est chargée.
- Sinon, le cours TypeScript d’origine reste utilisé.
- Le mode édition fonctionne même quand aucun JSON local n’existe encore.

## Dépendances ajoutées

Les icônes Material UI sont importées icône par icône, par exemple :

```ts
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
```

Les champs de texte riche utilisent TipTap pour gérer :

- Le gras.
- L’italique.
- Les listes simples.
- Les listes ordonnées.
- Les liens.

Après récupération du ZIP, exécuter :

```bash
yarn install
```

Puis :

```bash
yarn dev
```

## Pages concernées

Le mode édition est actif sur :

```txt
/cours/conducteur-conduite/oeil-conduite
/cours/oeil-conduite
/cours/conducteur-conduite/produits-psychoactifs
/cours/produits-psychoactifs
```
