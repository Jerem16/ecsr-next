import type { CourseSection } from "../../../types/course";

export const mecaniqueVehiculeMoteurThermiqueSection: CourseSection = {
    "id": "moteur-thermique",
    "title": "Le moteur thermique à quatre temps",
    "intro": "Le moteur thermique transforme l’énergie produite par la combustion en mouvement. Le cycle à quatre temps permet de comprendre la logique interne du moteur.",
    "blocks": [
        {
            "type": "image-card",
            "id": "role-moteur",
            "title": "Rôle du moteur",
            "imagePosition": "right",
            "content": [
                "Le moteur transforme l’énergie calorifique, c’est-à-dire la chaleur issue de la combustion, en énergie cinétique, c’est-à-dire en mouvement.",
                "La combustion nécessite un carburant et de l’air, qui joue le rôle de comburant."
            ],
            "image": {
                "src": "/cours/mecanique/refined/role-moteur.jpg",
                "alt": "Schéma montrant l’air et le carburant entrant dans le moteur pour produire le mouvement du véhicule.",
                "caption": "Le moteur transforme l’énergie de combustion en mouvement.",
                "role": "schema"
            }
        },
        {
            "type": "image-card",
            "id": "architecture-moteur",
            "title": "Architecture générale du moteur",
            "imagePosition": "left",
            "content": [
                "Le moteur comprend plusieurs ensembles : la culasse, le bloc moteur, l’attelage mobile et le carter inférieur.",
                "Chaque ensemble a un rôle dans l’admission, la combustion, la transformation du mouvement ou la lubrification."
            ],
            "image": {
                "src": "/cours/mecanique/refined/architecture-moteur.jpg",
                "alt": "Vue éclatée d’un moteur montrant la culasse, le bloc moteur, l’attelage mobile et le carter inférieur.",
                "caption": "Architecture d’un moteur thermique.",
                "role": "schema"
            }
        },
        {
            "type": "comparison-card",
            "id": "elements-fixes-mobiles",
            "title": "Éléments fixes et éléments mobiles",
            "intro": "Le moteur combine des pièces fixes qui structurent l’ensemble et des pièces mobiles qui produisent ou transmettent le mouvement.",
            "items": [
                {
                    "title": "Éléments fixes",
                    "content": "Les éléments fixes sont le cache-culbuteurs, la culasse, le bloc moteur et le carter inférieur.",
                    "image": {
                        "src": "/cours/mecanique/refined/elements-moteur-fixes.jpg",
                        "alt": "Schéma des éléments fixes du moteur : cache-culbuteurs, culasse, bloc moteur et carter inférieur.",
                        "caption": "Éléments fixes du moteur.",
                        "role": "schema"
                    }
                },
                {
                    "title": "Éléments mobiles",
                    "content": "Les éléments mobiles sont le vilebrequin, la bielle, le piston, l’arbre à cames et les soupapes.",
                    "image": {
                        "src": "/cours/mecanique/refined/elements-moteur-mobiles.jpg",
                        "alt": "Schéma des éléments mobiles du moteur : vilebrequin, bielle, piston, arbre à cames et soupape.",
                        "caption": "Éléments mobiles du moteur.",
                        "role": "schema"
                    }
                }
            ]
        },
        {
            "type": "image-card",
            "id": "reperes-cycle",
            "title": "Repères du cycle à quatre temps",
            "imagePosition": "right",
            "content": [
                "Un temps correspond à une course du piston.",
                "Les deux repères principaux sont le PMH, point mort haut, et le PMB, point mort bas. Un cycle complet nécessite deux tours moteur."
            ],
            "image": {
                "src": "/cours/mecanique/refined/reperes-cycle-quatre-temps.jpg",
                "alt": "Schéma expliquant le déplacement du piston entre le point mort haut et le point mort bas.",
                "caption": "Repères du cycle à quatre temps.",
                "role": "schema"
            }
        },
        {
            "type": "sequence-card",
            "id": "cycle-quatre-temps",
            "title": "Cycle à quatre temps",
            "intro": "Le cycle se déroule toujours dans le même ordre : admission, compression, temps moteur, échappement.",
            "parts": [
                {
                    "type": "figure",
                    "title": "1. Admission",
                    "image": {
                        "src": "/cours/mecanique/refined/admission.jpg",
                        "alt": "Schéma du premier temps : le piston descend et la soupape d’admission est ouverte.",
                        "caption": "Premier temps : admission.",
                        "role": "schema"
                    },
                    "content": [
                        {
                            "type": "list",
                            "items": [
                                "La soupape d’admission est ouverte.",
                                "La soupape d’échappement est fermée.",
                                "Le piston descend du PMH vers le PMB.",
                                "Le vilebrequin fait un demi-tour."
                            ]
                        }
                    ]
                },
                {
                    "type": "figure",
                    "title": "2. Compression",
                    "image": {
                        "src": "/cours/mecanique/refined/compression.jpg",
                        "alt": "Schéma du deuxième temps : le piston remonte avec les deux soupapes fermées.",
                        "caption": "Deuxième temps : compression.",
                        "role": "schema"
                    },
                    "content": [
                        {
                            "type": "list",
                            "items": [
                                "Les deux soupapes sont fermées.",
                                "Le piston monte du PMB vers le PMH.",
                                "L’air ou le mélange air-essence est comprimé.",
                                "Le vilebrequin fait un demi-tour."
                            ]
                        }
                    ]
                },
                {
                    "type": "figure",
                    "title": "3. Détente, travail ou temps moteur",
                    "image": {
                        "src": "/cours/mecanique/refined/temps-moteur.jpg",
                        "alt": "Schéma du troisième temps : la combustion repousse le piston vers le bas.",
                        "caption": "Troisième temps : temps moteur.",
                        "role": "schema"
                    },
                    "content": [
                        {
                            "type": "list",
                            "items": [
                                "Les deux soupapes sont fermées.",
                                "La combustion provoque une forte poussée sur le piston.",
                                "Le piston descend du PMH vers le PMB.",
                                "C’est le temps qui produit le travail moteur."
                            ]
                        }
                    ]
                },
                {
                    "type": "figure",
                    "title": "4. Échappement",
                    "image": {
                        "src": "/cours/mecanique/refined/echappement.jpg",
                        "alt": "Schéma du quatrième temps : le piston remonte et la soupape d’échappement est ouverte.",
                        "caption": "Quatrième temps : échappement.",
                        "role": "schema"
                    },
                    "content": [
                        {
                            "type": "list",
                            "items": [
                                "La soupape d’admission est fermée.",
                                "La soupape d’échappement est ouverte.",
                                "Le piston monte du PMB vers le PMH.",
                                "Les gaz brûlés sont évacués."
                            ]
                        }
                    ]
                },
                {
                    "type": "alert",
                    "tone": "success",
                    "content": [
                        {
                            "type": "paragraph",
                            "text": "À retenir : un cycle complet nécessite quatre courses du piston et deux tours moteur."
                        }
                    ]
                }
            ]
        },
        {
            "type": "table",
            "id": "comparaison-diesel-essence",
            "title": "Diesel et essence pendant le cycle",
            "caption": "Repères issus du support source, utiles pour comprendre les différences de fonctionnement.",
            "columns": [
                "Temps",
                "Diesel",
                "Essence"
            ],
            "rows": [
                [
                    {
                        "label": "Admission",
                        "strong": true
                    },
                    {
                        "label": "Entrée d’air uniquement"
                    },
                    {
                        "label": "Entrée d’un mélange air-essence"
                    }
                ],
                [
                    {
                        "label": "Compression",
                        "strong": true
                    },
                    {
                        "label": "Compression de l’air, environ 30 à 40 bars et 500 à 600 °C"
                    },
                    {
                        "label": "Compression du mélange, environ 10 à 12 bars et 320 à 380 °C"
                    }
                ],
                [
                    {
                        "label": "Temps moteur",
                        "strong": true
                    },
                    {
                        "label": "Injection, auto-inflammation, 60 à 90 bars et 1 800 à 2 000 °C"
                    },
                    {
                        "label": "Étincelle, explosion du mélange, 25 à 30 bars et 2 000 à 2 500 °C"
                    }
                ],
                [
                    {
                        "label": "Échappement",
                        "strong": true
                    },
                    {
                        "label": "Évacuation des gaz brûlés, environ 450 à 600 °C"
                    },
                    {
                        "label": "Évacuation des gaz brûlés, environ 600 à 800 °C"
                    }
                ]
            ]
        }
    ]
};
