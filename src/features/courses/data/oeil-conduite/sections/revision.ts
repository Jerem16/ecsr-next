import type { CourseSection } from "../../../types/course";

export const oeilConduiteRevisionSection: CourseSection = {
            id: "revision",
            title: "Questions de révision",
            intro: "Ces questions servent à vérifier que l’élève relie bien le fonctionnement physiologique à une conséquence concrète en conduite.",
            blocks: [
                {
                    type: "list-card",
                    id: "questions-revision",
                    title: "Questions possibles",
                    ordered: true,
                    items: [
                        "Pourquoi la vue est-elle le sens principal en conduite ?",
                        "Quelle différence peut-on faire entre voir, regarder et observer ?",
                        "Pourquoi la tache aveugle justifie-t-elle de tourner suffisamment la tête ?",
                        "Que signifie le temps de latence de 0,22 seconde ?",
                        "À 90 km/h, quelle distance est parcourue pendant 0,22 seconde ?",
                        "Pourquoi le champ perceptif se réduit-il avec la vitesse ?",
                        "Pourquoi la conduite de nuit impose-t-elle d’adapter l’allure ?",
                    ],
                },
            ],
        };
