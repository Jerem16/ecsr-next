import type { CourseSection } from "../../../types/course";

export const produitsPsychoactifsCannabisDroguesSection: CourseSection = {
            id: "cannabis-drogues",
            title: "Drogues, cannabis et représentations fausses",
            intro: "La partie consacrée aux drogues prend principalement l’exemple du cannabis, dont le principe actif est le THC.",
            blocks: [
                {
                    type: "image-card",
                    id: "formes-cannabis-thc",
                    title: "Cannabis : formes et principe actif",
                    imagePosition: "right",
                    content: [
                        "Le cannabis peut se présenter sous forme d’herbe, de haschich ou d’huile.",
                        "La concentration en THC varie fortement selon les produits, ce qui rend les effets difficiles à anticiper."
                    ],
                    image: {
                        src: "/cours/produits-psychoactifs/refined/cannabis-thc-formes-produits.png",
                        alt: "Schéma présentant le cannabis, son principe actif THC, ses formes et sa teneur variable.",
                        caption: "Image essentielle : formes du cannabis et THC.",
                        role: "schema"
                    }
                },
                {
                    type: "list-card",
                    id: "accidentologie-stupefiants",
                    title: "Accidentologie liée aux stupéfiants",
                    items: [
                        "Les stupéfiants sont présents dans une part importante des accidents mortels selon le support.",
                        "Les 18-34 ans sont particulièrement concernés.",
                        "Une majorité des accidents mortels avec stupéfiants concernent le cannabis.",
                        "Plus de la moitié des conducteurs concernés étaient aussi positifs à l’alcool.",
                        "Le cumul alcool + cannabis renforce fortement le risque d’accident mortel."
                    ]
                },
                {
                    type: "sequence-card",
                    id: "idees-fausses-cannabis",
                    title: "Quatre idées fausses à déconstruire",
                    intro: "Le cannabis peut donner une impression de calme ou de maîtrise, mais il diminue les capacités utiles pour réagir correctement.",
                    parts: [
                        {
                            type: "text",
                            title: "Idées fausses fréquentes",
                            content: [
                                {
                                    type: "list",
                                    ordered: true,
                                    items: [
                                        "« Je roule plus lentement, donc je suis plus prudent. » Faux : si le conducteur fonctionne au ralenti, il peut ne pas réagir à temps.",
                                        "« Je suis zen, donc l’accident viendrait plutôt des autres. » Faux : des conducteurs sous cannabis peuvent être seuls en cause.",
                                        "« Je ne plane pas, je me sens bien, donc je peux conduire. » Faux : se sentir bien ne prouve pas l’aptitude à conduire.",
                                        "« On ne peut pas vérifier que j’ai fumé. » Faux : les tests salivaires et analyses complémentaires existent."
                                    ]
                                }
                            ]
                        },
                        {
                            type: "alert",
                            tone: "warning",
                            content: [
                                {
                                    type: "paragraph",
                                    text: "Le cannabis ne rend pas plus prudent. Il peut donner l’impression d’être calme, mais il diminue les capacités utiles pour réagir correctement.",
                                    strong: true
                                }
                            ]
                        }
                    ]
                }
            ]
        };
