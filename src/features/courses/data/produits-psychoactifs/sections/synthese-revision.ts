import type { CourseSection } from "../../../types/course";

export const produitsPsychoactifsSyntheseRevisionSection: CourseSection = {
            id: "synthese-revision",
            title: "Synthèse générale et questions de révision",
            intro: "Les produits psychoactifs agissent sur le cerveau et peuvent modifier la perception, l’attention, la vitesse de décision, les réflexes et le comportement.",
            blocks: [
                {
                    type: "list-card",
                    id: "messages-essentiels",
                    title: "Messages essentiels à retenir",
                    items: [
                        "L’alcool réduit la vision périphérique, fausse l’évaluation des distances et augmente la prise de risque.",
                        "Le risque d’accident augmente fortement avec le taux d’alcoolémie.",
                        "Le cannabis ralentit la décision, perturbe l’attention et dégrade le contrôle de trajectoire.",
                        "Le cumul alcool + cannabis multiplie fortement le risque d’accident mortel.",
                        "Certains médicaments peuvent provoquer de la somnolence ou une baisse de vigilance.",
                        "La conduite exige une pleine capacité physique et psychique."
                    ]
                },
                {
                    type: "list-card",
                    id: "questions-revision-psychoactifs",
                    title: "Questions de révision",
                    ordered: true,
                    items: [
                        "Qu’est-ce qu’un produit psychoactif ?",
                        "Pourquoi un produit légal peut-il être dangereux pour conduire ?",
                        "Pourquoi parle-t-on de 10 grammes d’alcool pur dans un verre standard ?",
                        "Quels sont les principaux effets de l’alcool sur la vision et la perception ?",
                        "Quelle est la différence entre dépistage et mesure du taux d’alcoolémie ?",
                        "Pourquoi le cannabis ne rend-il pas le conducteur plus prudent ?",
                        "Quels sont les risques du cumul alcool + cannabis ?",
                        "Que signifient les pictogrammes de niveau 1, 2 et 3 sur les médicaments ?"
                    ]
                },
                {
                    type: "callout",
                    id: "phrase-conclusion-psychoactifs",
                    title: "Phrase de conclusion",
                    tone: "success",
                    content: "Sur la route, le risque commence dès que le conducteur n’est plus totalement disponible pour percevoir, analyser, décider et agir."
                }
            ]
        };
