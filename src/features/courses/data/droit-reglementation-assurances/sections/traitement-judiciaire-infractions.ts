import type { CourseSection } from "../../../types/course";

export const droitReglementationAssurancesTraitementJudiciaireSection: CourseSection = {
    "id": "traitement-judiciaire-infractions",
    "title": "Traitement judiciaire des infractions",
    "intro": "Le traitement judiciaire suit une logique : constatation de l’infraction, appréciation par le parquet, puis décision adaptée à la situation.",
    "blocks": [
        {
            "type": "sequence-card",
            "id": "sequence-traitement-judiciaire",
            "title": "De la constatation à la décision",
            "intro": "Le cheminement dépend de la gravité de l’infraction et du choix du procureur.",
            "parts": [
                {
                    "type": "text",
                    "title": "Constatation",
                    "content": [
                        {
                            "type": "paragraph",
                            "text": "La constatation des infractions routières est en règle générale réalisée par les forces de l’ordre, police ou gendarmerie, au moyen d’un procès-verbal."
                        }
                    ]
                },
                {
                    "type": "text",
                    "title": "Décision du parquet",
                    "content": [
                        {
                            "type": "list",
                            "items": [
                                "Classement sans suite.",
                                "Alternative aux poursuites.",
                                "Poursuites."
                            ],
                            "ordered": true
                        }
                    ]
                },
                {
                    "type": "alert",
                    "tone": "warning",
                    "content": [
                        {
                            "type": "paragraph",
                            "text": "Le paiement d’une amende forfaitaire vaut reconnaissance de l’infraction et peut entraîner le retrait de points lorsque l’infraction est concernée."
                        }
                    ]
                }
            ]
        },
        {
            "type": "table",
            "id": "table-amende-forfaitaire",
            "title": "Amende forfaitaire : repères",
            "caption": "Montants issus de la page source 40 du support.",
            "columns": [
                "Classe",
                "Amende forfaitaire",
                "Minorée",
                "Majorée",
                "Maximum"
            ],
            "rows": [
                [
                    {
                        "label": "1ère classe",
                        "strong": true
                    },
                    {
                        "label": "11 €"
                    },
                    {
                        "label": "-"
                    },
                    {
                        "label": "33 €"
                    },
                    {
                        "label": "38 €"
                    }
                ],
                [
                    {
                        "label": "2ème classe",
                        "strong": true
                    },
                    {
                        "label": "35 €"
                    },
                    {
                        "label": "22 €"
                    },
                    {
                        "label": "75 €"
                    },
                    {
                        "label": "150 €"
                    }
                ],
                [
                    {
                        "label": "3ème classe",
                        "strong": true
                    },
                    {
                        "label": "68 €"
                    },
                    {
                        "label": "45 €"
                    },
                    {
                        "label": "180 €"
                    },
                    {
                        "label": "450 €"
                    }
                ],
                [
                    {
                        "label": "4ème classe",
                        "strong": true
                    },
                    {
                        "label": "135 €"
                    },
                    {
                        "label": "90 €"
                    },
                    {
                        "label": "375 €"
                    },
                    {
                        "label": "750 €"
                    }
                ],
                [
                    {
                        "label": "5ème classe",
                        "strong": true
                    },
                    {
                        "label": "-"
                    },
                    {
                        "label": "-"
                    },
                    {
                        "label": "-"
                    },
                    {
                        "label": "1 500 €, 3 000 € en cas de récidive"
                    }
                ]
            ]
        },
        {
            "type": "comparison-card",
            "id": "delit-contravention",
            "title": "Délit ou contravention : logique de traitement",
            "intro": "Les deux circuits ont des points communs, mais l’autorité compétente et la procédure changent.",
            "items": [
                {
                    "title": "Délit",
                    "content": "Procès-verbal transmis au procureur de la République. Les poursuites peuvent conduire devant le tribunal correctionnel.",
                    "image": {
                        "src": "/cours/droit-assurances/source/page-041-source.png",
                        "alt": "Schéma source du traitement des délits.",
                        "caption": "Page source 41 : traitement des délits.",
                        "role": "source"
                    }
                },
                {
                    "title": "Contravention",
                    "content": "Selon la classe, traitement possible par timbre-amende, ordonnance pénale, tribunal de police ou amende forfaitaire.",
                    "image": {
                        "src": "/cours/droit-assurances/source/page-042-source.png",
                        "alt": "Schéma source du traitement des contraventions.",
                        "caption": "Page source 42 : traitement des contraventions.",
                        "role": "source"
                    }
                }
            ],
            "conclusion": "Dans les deux cas, le retrait de points intervient comme mesure administrative après que la réalité de l’infraction est établie."
        }
    ]
};
