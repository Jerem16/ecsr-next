# Audit — cours pilote « L’œil et la conduite »

## Objectif de la correction

Le prototype unifié fonctionnait comme base d’architecture, mais il utilisait encore trop souvent de grandes images contenant du texte. Cette correction distingue mieux :

- Les images sources complètes, conservées en fin de cours.
- Les images pédagogiques essentielles, découpées et intégrées en cartes.
- Les images illustratives, utilisées seulement lorsqu’elles servent une idée précise.
- Les images liées, regroupées dans une même carte comparative.
- Les tableaux, recréés en HTML responsive.

## Problèmes repérés dans le prototype précédent

- Aucun tableau HTML n’était présent dans la version unifiée du cours Vue.
- Plusieurs images extraites correspondaient à des pages presque complètes avec beaucoup de texte.
- Des images liées étaient séparées en simples liens complémentaires.
- Les schémas importants n’étaient pas toujours isolés.
- Les images textuelles étaient utilisées à la place d’un vrai contenu HTML accessible.

## Tableaux restaurés

1. Sens mobilisés dans la conduite.
2. Constitution de l’œil.
3. Temps de latence et distance parcourue.
4. Réduction du champ perceptif avec la vitesse.
5. Vision de jour et conduite de nuit.
6. Pathologies ou limites visuelles.
7. Précautions de conduite liées à la vision.

## Images raffinées créées

| Fichier | Rôle | Type | Décision |
|---|---|---|---|
| `schema-constitution-oeil.jpg` | Identifier les parties de l’œil. | Schéma essentiel | Intégré avec tableau de constitution. |
| `experience-tache-aveugle-quadrillage.jpg` | Faire réaliser l’expérience de la tache aveugle. | Schéma essentiel | Intégré avec consignes en HTML. |
| `schema-trajet-oeil-cerveau.jpg` | Montrer le trajet œil / cerveau. | Schéma essentiel | Découpé depuis la grande page. |
| `schema-coupe-oeil-uv.jpg` | Montrer la coupe de l’œil et les rayons UV. | Schéma complémentaire | Découpé depuis la grande page. |
| `schema-spectre-visible-380-780.jpg` | Montrer les limites 380 à 780 nm. | Schéma essentiel | Découpé, texte recréé en HTML. |
| `photo-eblouissement-route-soleil.jpg` | Illustrer l’éblouissement et les contrastes. | Image illustrative | Intégrée avec explication courte. |
| `photo-croisement-camion-90kmh.jpg` | Illustrer le retard de perception lors d’un croisement. | Image essentielle | Intégrée en carte de situation. |
| `photo-feu-avant-carrefour.jpg` | Montrer une situation de feu et d’intersection. | Image liée | Groupée avec le feu après carrefour. |
| `photo-feu-apres-carrefour-decompte.jpg` | Montrer le feu après carrefour et le décompte. | Image liée | Groupée avec le feu avant carrefour. |
| `photo-feu-orange-decompte-eteint.jpg` | Montrer l’état orange et le décompte éteint. | Image liée | Groupée avec le feu rouge. |
| `photo-feu-rouge-main-levee.jpg` | Montrer l’état rouge et la main levée. | Image liée | Groupée avec le feu orange. |
| `photo-intersection-feux-apres-carrefour.jpg` | Donner un contexte visuel large. | Image illustrative | Conservée dans les images raffinées, utilisable si besoin. |
| `schema-champ-perceptif-vitesse.jpg` | Montrer la réduction du champ perceptif avec la vitesse. | Schéma essentiel | Intégré avec tableau vitesse / champ. |
| `schema-zone-vision-nette-floue-angles-morts.jpg` | Montrer vision nette, vision floue et angles morts. | Schéma essentiel | Intégré avec explication pédagogique. |

## Images non utilisées comme contenu principal

Certaines images extraites du prototype sont des titres, des textes ou des pages complètes. Elles doivent rester consultables dans les sources, mais ne doivent pas remplacer le texte HTML :

- `page-03_image-01.png`
- `page-03_image-02.png`
- `page-04_image-02.png`
- `page-05_image-01.jpeg`
- `page-06_image-02.jpeg`
- `page-13_image-01.jpeg`

## Organisation retenue pour les cartes

- Les schémas seuls sont intégrés dans des cartes image + texte.
- Les images de feux sont intégrées en cartes comparatives, car elles se comprennent ensemble.
- Les images contenant du texte sont remplacées par du texte HTML accessible.
- Les tableaux sont utilisés dès qu’il y a comparaison, valeurs, catégories ou synthèse.

## Reste à améliorer plus tard

- Vérifier manuellement les coordonnées de découpe sur écran large et mobile.
- Ajouter un tableau réglementaire détaillé groupe léger / groupe lourd si la source complète est fournie ou validée.
- Ajouter éventuellement des mini-questions pédagogiques directement sous certaines cartes.
- Harmoniser ensuite les autres cours avec cette méthode.
