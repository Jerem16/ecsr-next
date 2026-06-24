import type { CourseSection } from "../../../types/course";

export const droitReglementationAssurancesAssurancesSection: CourseSection = {
    "id": "assurances",
    "title": "Assurances automobiles",
    "intro": "L’assurance automobile protège les victimes, organise l’indemnisation et encadre les responsabilités du conducteur.",
    "blocks": [
        {
            "type": "text-card",
            "id": "responsabilite-civile",
            "title": "Responsabilité civile",
            "content": [
                {
                    "type": "paragraph",
                    "text": "La responsabilité civile vise à réparer le dommage causé à autrui. En matière automobile, elle explique pourquoi l’assurance obligatoire couvre les dommages causés aux tiers."
                },
                {
                    "type": "key-values",
                    "items": [
                        {
                            "label": "Article 1240 du Code civil",
                            "value": "Tout fait quelconque de l’homme, qui cause à autrui un dommage, oblige celui par la faute duquel il est arrivé à le réparer."
                        },
                        {
                            "label": "Article 1241 du Code civil",
                            "value": "Chacun est responsable du dommage qu’il a causé par sa négligence ou son imprudence."
                        }
                    ]
                }
            ],
            "keywords": [
                "responsabilité civile",
                "tiers",
                "réparation"
            ]
        },
        {
            "type": "image-card",
            "id": "exemple-responsabilite-civile",
            "title": "Exemple : ce que couvre la responsabilité civile",
            "content": [
                {
                    "type": "paragraph",
                    "text": "Le conducteur responsable est tenu de réparer les dommages causés aux autres : passagers, conducteur adverse et véhicule tiers. Ses propres dommages corporels ou matériels ne sont pas couverts par la simple responsabilité civile."
                }
            ],
            "image": {
                "src": "/cours/droit-assurances/images/exemple-responsabilite-civile.jpg",
                "alt": "Exemple visuel d’accident entre un véhicule rouge et un véhicule blanc pour expliquer la responsabilité civile.",
                "caption": "Exemple source : responsabilité civile automobile.",
                "role": "illustration"
            },
            "imagePosition": "right"
        },
        {
            "type": "table",
            "id": "garanties-assurance",
            "title": "Garanties obligatoires et facultatives",
            "caption": "Repères utiles pour expliquer les garanties à un conducteur.",
            "columns": [
                "Garantie",
                "Rôle"
            ],
            "rows": [
                [
                    {
                        "label": "Responsabilité civile obligatoire",
                        "strong": true
                    },
                    {
                        "label": "Couvre les dommages causés aux tiers par le véhicule assuré."
                    }
                ],
                [
                    {
                        "label": "Dommages tous accidents",
                        "strong": true
                    },
                    {
                        "label": "Peut couvrir les dommages au véhicule assuré selon les conditions du contrat."
                    }
                ],
                [
                    {
                        "label": "Garantie du conducteur",
                        "strong": true
                    },
                    {
                        "label": "Protège le conducteur pour ses propres dommages corporels selon le contrat."
                    }
                ],
                [
                    {
                        "label": "Vol, incendie, bris de glace",
                        "strong": true
                    },
                    {
                        "label": "Garanties facultatives liées à des risques particuliers."
                    }
                ],
                [
                    {
                        "label": "Protection juridique / assistance",
                        "strong": true
                    },
                    {
                        "label": "Services d’accompagnement, d’aide ou de défense selon le contrat."
                    }
                ]
            ]
        },
        {
            "type": "comparison-card",
            "id": "fgao-bct",
            "title": "FGAO et BCT : deux rôles différents",
            "items": [
                {
                    "title": "FGAO",
                    "content": "Le Fonds de garantie des assurances obligatoires de dommages indemnise les victimes lorsque le responsable est non assuré, inconnu ou insolvable.",
                    "image": {
                        "src": "/cours/droit-assurances/images/route-circulation.jpg",
                        "alt": "Repère sur le Fonds de garantie des assurances obligatoires de dommages.",
                        "caption": "Rôle du FGAO.",
                        "role": "source"
                    }
                },
                {
                    "title": "BCT",
                    "content": "Le Bureau central de tarification permet à un conducteur refusé par les assureurs d’obtenir une assurance responsabilité civile obligatoire.",
                    "image": {
                        "src": "/cours/droit-assurances/images/route-circulation.jpg",
                        "alt": "Repère sur le Bureau central de tarification.",
                        "caption": "Rôle du BCT.",
                        "role": "source"
                    }
                }
            ],
            "conclusion": "Le FGAO protège principalement les victimes ; le BCT aide à accéder à l’assurance obligatoire."
        },
        {
            "type": "table",
            "id": "sanctions-assurance",
            "title": "Sanctions et conséquences liées à l’assurance",
            "caption": "Synthèse des sanctions citées dans le support.",
            "columns": [
                "Situation",
                "Conséquence"
            ],
            "rows": [
                [
                    {
                        "label": "Non-présentation de l’attestation",
                        "strong": true
                    },
                    {
                        "label": "Contravention de 2e classe selon le support."
                    }
                ],
                [
                    {
                        "label": "Non-apposition du certificat",
                        "strong": true
                    },
                    {
                        "label": "Contravention de 2e classe selon le support."
                    }
                ],
                [
                    {
                        "label": "Non-présentation dans les 5 jours",
                        "strong": true
                    },
                    {
                        "label": "Contravention de 4e classe selon le support."
                    }
                ],
                [
                    {
                        "label": "Défaut d’assurance",
                        "strong": true
                    },
                    {
                        "label": "Délit prévu par le Code de la route."
                    }
                ],
                [
                    {
                        "label": "Majoration assureur",
                        "strong": true
                    },
                    {
                        "label": "Ivresse, suspension, annulation ou délit de fuite peuvent entraîner des surprimes ou une résiliation."
                    }
                ]
            ]
        },
        {
            "type": "callout",
            "id": "constat-amiable",
            "title": "Constat amiable",
            "tone": "success",
            "content": [
                {
                    "type": "paragraph",
                    "text": "Le constat amiable permet de préciser les informations sur les circonstances de l’accident et d’aider à déterminer les responsabilités."
                },
                {
                    "type": "list",
                    "items": [
                        "Conserver un constat dans le véhicule.",
                        "Remplir les informations avec précision.",
                        "Signer seulement si les informations et le croquis correspondent à la réalité.",
                        "Transmettre le document à l’assureur dans les 5 jours ouvrés suivant l’accident."
                    ]
                }
            ]
        }
    ]
};
