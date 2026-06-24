import type { CourseSection } from "../../../types/course";

export const droitReglementationAssurancesTraitementAdministratifSection: CourseSection = {
    "id": "traitement-administratif-retrait-permis",
    "title": "Traitement administratif et retrait du permis",
    "intro": "Certaines mesures visent à empêcher temporairement ou durablement un conducteur dangereux de circuler.",
    "blocks": [
        {
            "type": "image-card",
            "id": "schema-procedure-administrative",
            "title": "Lien entre procédure judiciaire et administrative",
            "content": [
                {
                    "type": "paragraph",
                    "text": "Lorsqu’une infraction peut donner lieu à suspension judiciaire, le préfet peut suspendre le permis le temps que la justice statue."
                },
                {
                    "type": "note",
                    "label": "À retenir",
                    "text": "La mesure administrative cesse lorsque la décision judiciaire est devenue définitive."
                }
            ],
            "image": {
                "src": "/cours/droit-assurances/source/page-050-source.png",
                "alt": "Schéma source montrant le lien entre procédure judiciaire et décision du préfet.",
                "caption": "Page source 50 : procédure administrative.",
                "role": "source"
            },
            "imagePosition": "left"
        },
        {
            "type": "table",
            "id": "procedures-retrait-permis",
            "title": "Procédures de retrait ou limitation du permis",
            "caption": "Synthèse pédagogique issue du module 4.5.",
            "columns": [
                "Niveau",
                "Mesures possibles"
            ],
            "rows": [
                [
                    {
                        "label": "Judiciaire",
                        "strong": true
                    },
                    {
                        "label": "Suspension du permis, annulation du permis, peines complémentaires selon la nature de l’infraction."
                    }
                ],
                [
                    {
                        "label": "Administratif",
                        "strong": true
                    },
                    {
                        "label": "Rétention jusqu’à 72 h, suspension, invalidation pour solde nul."
                    }
                ],
                [
                    {
                        "label": "Médical",
                        "strong": true
                    },
                    {
                        "label": "Maintien du permis soumis à un contrôle médical lorsque l’aptitude à la conduite est en question."
                    }
                ]
            ]
        },
        {
            "type": "callout",
            "id": "retention-permis",
            "title": "Rétention du permis : situations citées",
            "tone": "warning",
            "content": [
                {
                    "type": "list",
                    "items": [
                        "Conduite sous alcool ou sous l’emprise de stupéfiants.",
                        "Dépassement de 40 km/h ou plus de la vitesse autorisée.",
                        "Suspicion d’être responsable d’un accident mortel."
                    ]
                }
            ]
        }
    ]
};
