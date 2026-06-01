# Validation — navigation ECSR

## Objectif

Mettre en place une trame de navigation complète avant l’intégration détaillée des contenus.

## Ce qui a été fait

- Création d’une source centralisée de structure : `src/features/navigation/data/ecsrStructure.ts`.
- Création d’une source centralisée de menu : `src/features/navigation/data/ecsrMenu.ts`.
- Mise à jour du menu mobile et du menu desktop pour lire la même donnée.
- Ajout de sous-groupes ouvrants dans les sous-menus.
- Ajout des pages d’index :
  - `/cours`
  - `/fiches-pedagogiques`
  - `/procedures-conduite`
- Ajout de routes dynamiques accessibles :
  - `/cours/[...slug]`
  - `/fiches-pedagogiques/[slug]`
  - `/procedures-conduite/[...slug]`
- Ajout d’un alias propre pour le cours déjà intégré :
  - `/cours/conducteur-conduite/oeil-conduite`
- Conservation de l’ancienne URL du cours Vue :
  - `/cours/oeil-conduite`
- Aucun moteur de recherche ajouté pour l’instant.

## Structure retenue

### Cours

- Droit, réglementation et assurances
- Circulation routière
- Conducteur et conduite
- Véhicules
- Pédagogie ECSR

### Fiches pédagogiques

- Index direct des 62 fiches, sans sous-groupes.

### Procédures de conduite

- Compétence 1
- Compétence 2
- Compétence 3
- Compétence 4
- Procédure de cours

## Remarque build

Le build complet n’a pas été exécuté dans l’environnement de travail, car les dépendances `node_modules` / Yarn ne sont pas installées. La modification porte uniquement sur les fichiers de structure, de rendu de menu et de pages Next.js.
