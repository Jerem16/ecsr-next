# Wii-Design — Navigation ECSR épurée

Cette version conserve le logo Wii-Design et le moteur de navigation responsive du projet initial, mais remplace les liens du header par une arborescence ECSR.

## Ce qui est conservé

- Le logo Wii-Design.
- Le header desktop adaptable.
- Le menu mobile.
- Les sous-menus.
- Les breakpoints existants : 1024, 1170 et 1440 px.
- La logique d’ouverture des sous-menus.

## Ce qui a été supprimé ou neutralisé

- Les anciennes pages `services`, `réalisations`, `à propos`, `contact`, `réservation`, `connexion` et `search`.
- Les éléments Amplify.
- Les pages légales et debug.
- La sidebar verticale Wii-Design, non utile pour la lecture des cours.

## Nouvelle navigation

- Accueil.
- Cours.
  - Droit, réglementation et assurances.
  - Circulation routière.
  - Conducteur et conduite.
  - Véhicules.
  - Pédagogie ECSR.
- Fiches pédagogiques.
- Procédures de conduite.

## Pages disponibles

- `/`
- `/cours`
- `/fiches-pedagogiques`
- `/procedures-conduite`

## Commandes

```bash
corepack enable
yarn install
yarn dev
```

Le contenu est volontairement minimal : cette base sert surtout à valider la navigation avant d’intégrer les cours HTML accessibles.
