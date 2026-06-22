# Mode édition local des cours ECSR

Cette version ajoute une couche d’édition locale directement dans les pages de cours.

## Principe

- Le cours s’ouvre normalement en lecture.
- Le bouton `Modifier le cours` active le mode édition sur la même page.
- Les champs sont préremplis depuis les données TypeScript existantes.
- La sauvegarde écrit des fichiers JSON dans le projet local.
- Aucun CMS, aucune base distante et aucun serveur externe ne sont utilisés.

## Listes `ul`, `ol` et `li`

Les champs TipTap conservent maintenant les listes dans la structure `RichContent` :

```ts
{
    type: "list",
    ordered: true,
    items: ["Premier élément", "Deuxième élément"]
}
```

Dans les blocs `list-card`, chaque élément de liste est éditable séparément. Les éléments peuvent contenir du gras, de l’italique ou des liens sans être transformés en texte brut.

Le choix `Liste ordonnée` permet de basculer le rendu entre :

```html
<ul>
    <li>Élément</li>
</ul>
```

et :

```html
<ol>
    <li>Élément</li>
</ol>
```

## Import local des images

Les cartes image, comparaisons, séquences et pages sources disposent d’un bouton `Importer une image`.

Au choix du fichier :

- Un aperçu local `blob:` est affiché immédiatement.
- L’image est copiée dans le projet local.
- Le champ `src` est remplacé par un chemin exploitable dans Next.js.

Les images sont enregistrées dans :

```txt
public/cours/<slug>/uploads/
```

Le chemin sauvegardé dans le cours ressemble à :

```txt
/cours/<slug>/uploads/2026-06-01t13-40-00-000z-mon-image.jpg
```

Formats acceptés :

```txt
jpg, png, webp, gif, svg
```

Limite actuelle : 8 Mo par image.

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

## Correction — Type de liste des objectifs

Le bloc « Objectif » du panneau « Informations du cours » possède maintenant un choix de type de liste :

- Puces : rendu en `<ul>`.
- Numérotée : rendu en `<ol>`.

Ce choix est sauvegardé dans le cours avec la propriété `objectivesOrdered`.

Quand `objectivesOrdered` vaut `true`, la page de cours affiche les objectifs dans une liste ordonnée `<ol>`. Sinon, elle garde une liste à puces `<ul>`.
