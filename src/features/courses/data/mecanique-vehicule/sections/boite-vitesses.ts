import type { CourseSection } from "../../../types/course";

export const mecaniqueVehiculeBoiteVitessesSection: CourseSection = {
    "id": "boite-vitesses",
    "title": "La boîte de vitesses",
    "intro": "La boîte de vitesses adapte le couple moteur au couple résistant selon les conditions de circulation.",
    "blocks": [
        {
            "type": "text-card",
            "id": "role-boite-vitesses",
            "title": "Rôle de la boîte de vitesses",
            "content": [
                "La boîte de vitesses sert à adapter le couple moteur au couple résistant.",
                "Le couple moteur correspond à la force du moteur. Le couple résistant correspond aux forces qui s’opposent à l’avancement : poids, frottements, air, pneumatiques et relief."
            ],
            "keywords": [
                "Couple moteur",
                "Couple résistant",
                "Rapports"
            ]
        },
        {
            "type": "image-card",
            "id": "constitution-boite",
            "title": "Constitution de la boîte de vitesses",
            "imagePosition": "right",
            "content": [
                "On retrouve notamment l’arbre primaire, les fourchettes, les axes de fourchettes, les roulements, la prise de compteur, l’arbre secondaire, les synchroniseurs et les pignons."
            ],
            "image": {
                "src": "/cours/mecanique/refined/boite-vitesses-constitution.jpg",
                "alt": "Schéma de constitution d’une boîte de vitesses.",
                "caption": "Constitution de la boîte de vitesses.",
                "role": "schema"
            }
        },
        {
            "type": "image-card",
            "id": "principe-boite",
            "title": "Principe de fonctionnement",
            "imagePosition": "left",
            "content": [
                "L’arbre primaire est monobloc. Les pignons de l’arbre primaire sont fixes en rotation.",
                "Les pignons de l’arbre secondaire sont libres en rotation et fixes en translation. Pour changer de rapport, un crabot lie en rotation un pignon fou avec l’arbre secondaire."
            ],
            "image": {
                "src": "/cours/mecanique/refined/boite-vitesses-principe.jpg",
                "alt": "Schéma du principe de fonctionnement d’une boîte de vitesses.",
                "caption": "Principe de fonctionnement de la boîte de vitesses.",
                "role": "schema"
            }
        },
        {
            "type": "image-card",
            "id": "synchronisation-rapports",
            "title": "Synchronisation des rapports",
            "imagePosition": "right",
            "content": [
                "Les pignons fous tournent à des régimes différents. Pour engager les dents d’un baladeur sur celles d’un pignon, il faut synchroniser ces régimes.",
                "Ce rôle est assuré par les anneaux de synchronisation, appelés « synchros »."
            ],
            "image": {
                "src": "/cours/mecanique/refined/boite-vitesses-point-mort-marche-arriere.jpg",
                "alt": "Schéma illustrant le passage du point mort à la marche arrière et la logique des baladeurs.",
                "caption": "Synchronisation et déplacement des baladeurs.",
                "role": "schema"
            }
        },
        {
            "type": "image-card",
            "id": "boite-trois-arbres",
            "title": "Boîte moderne à trois arbres",
            "imagePosition": "left",
            "content": [
                "Une boîte moderne peut comporter trois arbres : le primaire, l’intermédiaire ou train fixe, et le secondaire.",
                "Le secondaire est l’arbre de sortie sur lequel tous les baladeurs sont montés."
            ],
            "image": {
                "src": "/cours/mecanique/refined/boite-vitesses-trois-arbres.jpg",
                "alt": "Schéma d’une boîte de vitesses moderne à trois arbres.",
                "caption": "Boîte moderne à trois arbres.",
                "role": "schema"
            }
        }
    ]
};
