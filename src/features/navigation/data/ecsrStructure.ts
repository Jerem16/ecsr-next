export type NodeStatus = "ready" | "draft" | "planned";

export interface NavigationNode {
    id: string;
    title: string;
    shortTitle?: string;
    href: string;
    description?: string;
    status?: NodeStatus;
    children?: NavigationNode[];
}

export const courseGroups: NavigationNode[] = [
    {
        id: "droit-reglementation-assurances",
        title: "Droit, réglementation et assurances",
        shortTitle: "Droit et assurances",
        href: "/cours/droit-reglementation-assurances",
        description: "Règles, infractions, permis à points, assurances et cadre institutionnel.",
        children: [
            {
                id: "sources-du-droit",
                title: "Sources du droit et divisions du droit",
                href: "/cours/droit-reglementation-assurances/sources-du-droit",
                description: "Repères de base pour comprendre la hiérarchie des textes et les grandes branches du droit."
            },
            {
                id: "reglementation-circulation",
                title: "Réglementation de la circulation routière",
                href: "/cours/droit-reglementation-assurances/reglementation-circulation",
                description: "Règles de circulation, obligations du conducteur et logique réglementaire."
            },
            {
                id: "traitement-infractions",
                title: "Traitement judiciaire des infractions",
                href: "/cours/droit-reglementation-assurances/traitement-infractions",
                description: "Organisation judiciaire, qualification des infractions et suites possibles."
            },
            {
                id: "retrait-permis",
                title: "Procédures de retrait du permis",
                href: "/cours/droit-reglementation-assurances/retrait-permis",
                description: "Rétention, suspension, annulation, invalidation et conséquences pratiques."
            },
            {
                id: "permis-points",
                title: "Permis à points",
                href: "/cours/droit-reglementation-assurances/permis-points",
                description: "Fonctionnement, retrait, récupération de points et période probatoire."
            },
            {
                id: "assurances",
                title: "Assurances automobiles",
                href: "/cours/droit-reglementation-assurances/assurances",
                description: "Assurance obligatoire, garanties, responsabilités et indemnisation."
            },
            {
                id: "constat-amiable",
                title: "Constat amiable",
                href: "/cours/droit-reglementation-assurances/constat-amiable",
                description: "Rôle, remplissage, circonstances, croquis, signatures et limites."
            },
            {
                id: "politique-securite-routiere",
                title: "Politique de sécurité routière",
                href: "/cours/droit-reglementation-assurances/politique-securite-routiere",
                description: "CISR, DSR, CSER, acteurs institutionnels et continuum éducatif."
            }
        ]
    },
    {
        id: "circulation-routiere",
        title: "Circulation routière",
        href: "/cours/circulation-routiere",
        description: "Réseau routier, signalisation, règles d’usage de la route et situations types.",
        children: [
            {
                id: "reseau-routier",
                title: "Réseau routier",
                href: "/cours/circulation-routiere/reseau-routier",
                description: "Catégories de routes, caractéristiques, usage et environnement de circulation."
            },
            {
                id: "parc-automobile",
                title: "Parc automobile",
                href: "/cours/circulation-routiere/parc-automobile",
                description: "Composition du parc, évolution des mobilités et place des différents véhicules."
            },
            {
                id: "signalisation-verticale",
                title: "Signalisation verticale",
                href: "/cours/circulation-routiere/signalisation-verticale",
                description: "Familles de panneaux, signification, comportement attendu et références."
            },
            {
                id: "signalisation-horizontale",
                title: "Signalisation horizontale",
                href: "/cours/circulation-routiere/signalisation-horizontale",
                description: "Marquages, lignes, voies, zébras et règles associées."
            },
            {
                id: "signalisation-lumineuse",
                title: "Signalisation lumineuse et dynamique",
                href: "/cours/circulation-routiere/signalisation-lumineuse-dynamique",
                description: "Feux, signaux dynamiques, voies réservées dynamiques et signalisation temporaire."
            },
            {
                id: "arret-stationnement",
                title: "Arrêt, stationnement et immobilisation",
                href: "/cours/circulation-routiere/arret-stationnement",
                description: "Différences, interdictions, stationnement gênant, dangereux ou abusif."
            },
            {
                id: "intersections-priorites",
                title: "Intersections et priorités",
                href: "/cours/circulation-routiere/intersections-priorites",
                description: "Priorité à droite, cédez-le-passage, stop, giratoires et feux."
            }
        ]
    },
    {
        id: "conducteur-conduite",
        title: "Conducteur et conduite",
        href: "/cours/conducteur-conduite",
        description: "Fonctionnement humain, perception, psychologie, produits psychoactifs et tâche de conduite.",
        children: [
            {
                id: "oeil-conduite",
                title: "L’œil et la conduite",
                href: "/cours/conducteur-conduite/oeil-conduite",
                description: "Vue, perception, champ visuel, tache aveugle, vitesse et retard de traitement.",
                status: "ready"
            },
            {
                id: "temps-reaction",
                title: "Temps de réaction",
                href: "/cours/conducteur-conduite/temps-reaction",
                description: "Percevoir, analyser, décider, agir : temps de réaction et distance parcourue."
            },
            {
                id: "produits-psychoactifs",
                title: "Produits psychoactifs",
                href: "/cours/conducteur-conduite/produits-psychoactifs",
                description: "Effets des substances sur la perception, le jugement, la décision et l’action.",
                status: "ready",
                children: [
                    {
                        id: "alcool",
                        title: "Alcool",
                        href: "/cours/conducteur-conduite/produits-psychoactifs/alcool",
                        description: "Diffusion, élimination, effets, accidentologie et cadre réglementaire."
                    },
                    {
                        id: "substances-illicites",
                        title: "Substances illicites",
                        href: "/cours/conducteur-conduite/produits-psychoactifs/substances-illicites",
                        description: "Cannabis, stupéfiants, polyconsommation et risques de conduite."
                    },
                    {
                        id: "substances-medicamenteuses",
                        title: "Substances licites médicamenteuses",
                        href: "/cours/conducteur-conduite/produits-psychoactifs/substances-medicamenteuses",
                        description: "Médicaments, pictogrammes, vigilance, somnolence et interactions."
                    }
                ]
            },
            {
                id: "affections-incompatibles",
                title: "Affections incompatibles avec la conduite",
                href: "/cours/conducteur-conduite/affections-incompatibles",
                description: "Aptitude médicale, restrictions et incompatibilités selon les situations."
            },
            {
                id: "analyse-taches-conducteur",
                title: "Tâches du conducteur",
                href: "/cours/conducteur-conduite/taches-conducteur",
                description: "Analyse des tâches, prise d’information, décision, action et contrôle."
            },
            {
                id: "psychologie-conducteur",
                title: "Psychologie du conducteur",
                href: "/cours/conducteur-conduite/psychologie-conducteur",
                description: "Représentations, attitudes, motivations, émotions et comportements."
            },
            {
                id: "systeme-hve",
                title: "Système homme-véhicule-environnement",
                href: "/cours/conducteur-conduite/systeme-homme-vehicule-environnement",
                description: "Interaction entre conducteur, véhicule, environnement et situation routière."
            },
            {
                id: "developpement-durable",
                title: "Développement durable et conduite",
                href: "/cours/conducteur-conduite/developpement-durable",
                description: "Mobilité, éco-conduite, environnement et choix de déplacement."
            }
        ]
    },
    {
        id: "vehicules",
        title: "Véhicules",
        href: "/cours/vehicules",
        description: "Mécanique, dynamique, énergie, forces, sécurité active/passive et entretien.",
        children: [
            {
                id: "mecanique",
                title: "Mécanique du véhicule",
                href: "/cours/vehicules/mecanique",
                description: "Fonctionnement général, organes principaux et vérifications utiles.",
                children: [
                    {
                        id: "moteur-thermique",
                        title: "Moteur thermique",
                        href: "/cours/vehicules/mecanique/moteur-thermique",
                        description: "Fonctionnement de base, admission, combustion, transmission de l’énergie."
                    },
                    {
                        id: "moteur-electrique",
                        title: "Moteur électrique",
                        href: "/cours/vehicules/mecanique/moteur-electrique",
                        description: "Principe, batterie, autonomie, recharge et spécificités pédagogiques."
                    },
                    {
                        id: "organes-securite",
                        title: "Organes de sécurité",
                        href: "/cours/vehicules/mecanique/organes-securite",
                        description: "Freinage, direction, pneumatiques, éclairage, visibilité et entretien."
                    }
                ]
            },
            {
                id: "dynamique",
                title: "Dynamique du véhicule",
                href: "/cours/vehicules/dynamique",
                description: "Transfert de masse, adhérence, trajectoire et équilibre du véhicule."
            },
            {
                id: "energie-cinetique",
                title: "Énergie cinétique",
                href: "/cours/vehicules/energie-cinetique",
                description: "Lien entre masse, vitesse, choc et distance nécessaire pour s’arrêter."
            },
            {
                id: "forces-vehicule",
                title: "Forces exercées sur le véhicule",
                href: "/cours/vehicules/forces",
                description: "Inertie, force centrifuge, adhérence, pente et charge."
            },
            {
                id: "distance-freinage",
                title: "Distance de freinage",
                href: "/cours/vehicules/distance-freinage",
                description: "Freinage, adhérence, vitesse, état de la chaussée et réaction."
            },
            {
                id: "securite-active-passive",
                title: "Sécurité active et passive",
                href: "/cours/vehicules/securite-active-passive",
                description: "Aides à éviter l’accident et dispositifs limitant les conséquences."
            },
            {
                id: "entretien-equipements",
                title: "Entretien et équipements",
                href: "/cours/vehicules/entretien-equipements",
                description: "Choix du véhicule, entretien, équipements et effets sur la sécurité."
            },
            {
                id: "consommation-polluants",
                title: "Consommation et émissions de polluants",
                href: "/cours/vehicules/consommation-polluants",
                description: "Impact du véhicule et de l’usage sur la consommation et l’environnement."
            }
        ]
    },
    {
        id: "pedagogie-ecsr",
        title: "Pédagogie ECSR",
        href: "/cours/pedagogie-ecsr",
        description: "Préparer, animer, évaluer, remédier et analyser une séance ou une action de sensibilisation.",
        children: [
            {
                id: "preparer-seance-remc",
                title: "Construire et préparer une séance REMC",
                href: "/cours/pedagogie-ecsr/preparer-seance-remc",
                description: "Objectifs, progression, plans types, module et projet pédagogique."
            },
            {
                id: "animer-seance-collective",
                title: "Animer une séance collective",
                href: "/cours/pedagogie-ecsr/animer-seance-collective",
                description: "Communication, débat, animation de groupe, motivations et freins."
            },
            {
                id: "animer-seance-vehicule",
                title: "Animer une séance pratique véhicule léger",
                href: "/cours/pedagogie-ecsr/animer-seance-vehicule",
                description: "Cours pratique, double commande, commentaire de conduite et éco-conduite."
            },
            {
                id: "gestion-stress-risques",
                title: "Gestion du stress et anticipation des risques",
                href: "/cours/pedagogie-ecsr/gestion-stress-risques",
                description: "Risques environnementaux, comportementaux, stress, prévention et correction."
            },
            {
                id: "evaluation-remediation",
                title: "Évaluation et remédiation",
                href: "/cours/pedagogie-ecsr/evaluation-remediation",
                description: "Fonctions, outils, techniques d’évaluation et remédiation."
            },
            {
                id: "difficultes-apprentissage",
                title: "Difficultés d’apprentissage",
                href: "/cours/pedagogie-ecsr/difficultes-apprentissage",
                description: "Difficultés courantes, différences inter/intra-individuelles et remédiation."
            },
            {
                id: "sensibilisation-usagers",
                title: "Sensibilisation des usagers",
                href: "/cours/pedagogie-ecsr/sensibilisation-usagers",
                description: "Analyse de demande, construction, animation et analyse des pratiques professionnelles."
            }
        ]
    }
];

export const fichePedagogiqueItems: NavigationNode[] = [
    ["01", "Substances psychoactives — sauf alcool"],
    ["02", "Alcool — diffusion et élimination de l’alcool"],
    ["03", "Attention du conducteur — vigilance, attention et fatigue"],
    ["04", "Vue du conducteur — fonctionnement de l’œil, acuité, champs visuels, tache de Mariotte et réglementation"],
    ["05", "Temps de réaction et distances de sécurité"],
    ["06", "Écoconduite"],
    ["07", "Communication entre les usagers de la route"],
    ["08", "Transport d’une charge — sécurité à l’aide d’un véhicule"],
    ["09", "Comportement en cas d’accident — corporel et matériel"],
    ["10", "Surfaces vitrées et rétroviseurs — usages et entretien"],
    ["11", "Dépassements"],
    ["12", "Véhicules d’intérêt général"],
    ["13", "Passages à niveau"],
    ["14", "Vérifications de sécurité du véhicule"],
    ["15", "Assurance automobile — constat amiable"],
    ["16", "Lois physiques appliquées au véhicule — identification et conséquences"],
    ["17", "Freinage — en virage et d’urgence"],
    ["18", "Distances d’arrêt"],
    ["19", "Pneumatiques — adhérence, entretien et réglementation"],
    ["20", "Utilisation rationnelle du véhicule — aspect mécanique"],
    ["21", "Alcool — cadre réglementaire"],
    ["22", "Permis à points — rôle et fonctionnement"],
    ["23", "Assurance automobile — rôle, garanties, défaut d’assurance"],
    ["24", "Vitesse — réglementation et sanctions"],
    ["25", "Vitesse — signalisation et rôle"],
    ["26", "Ensembles de véhicules catégorie B — réglementation, signalisation et comportement"],
    ["27", "Feux des véhicules — obligatoires et facultatifs"],
    ["28", "Documents et équipements du conducteur — obligatoires et facultatifs"],
    ["29", "Permis de conduire — catégorie B, obtention et période probatoire"],
    ["30", "Permis de conduire — sanctions administratives et pénales"],
    ["31", "Signalisation horizontale"],
    ["32", "Signalisation verticale"],
    ["33", "Panneaux de prescription"],
    ["34", "Stationnement, arrêt et immobilisation — cas de force majeure"],
    ["35", "Intersections avec signalisation lumineuse"],
    ["36", "Intersections sans signalisation lumineuse"],
    ["37", "Ronds-points et sens giratoires"],
    ["38", "Voies réservées"],
    ["39", "Autoroute"],
    ["40", "Alcool — estimation du taux d’alcoolémie"],
    ["40b", "Alcoolémie — estimation du taux"],
    ["41", "Réglementation en sécurité routière — fonction sociale"],
    ["42", "Continuum éducatif — formation obligatoire et facultative"],
    ["43", "Vitesse inadaptée — pressions et influences"],
    ["44", "Partage social de la route — piétons"],
    ["45", "Partage social de la route — deux-roues et L5e"],
    ["46", "Partage social de la route — véhicules du groupe lourd"],
    ["47", "Transports exceptionnels"],
    ["48", "Aides et assistances à la conduite — rôle et homéostasie du risque"],
    ["49", "Systèmes de retenue — rôle, réglementation, accidentologie et installation"],
    ["50", "Dispositifs de sécurité active — fonction et effets pervers"],
    ["51", "Croisements"],
    ["52", "Risque routier des 18-24 ans"],
    ["53", "Usagers vulnérables"],
    ["54", "Circulation et environnement — impact environnemental"],
    ["55", "Alcool — effets et accidentologie"],
    ["56", "Accident — approche multifactorielle et système HEVO"],
    ["57", "Circulation en hiver — conduite et préparation d’un voyage"],
    ["58", "Âge et conduite — classes d’âge, sexes et risques"],
    ["59", "Conduite par intempéries — risques associés"],
    ["60", "Conduite de nuit — risques associés"],
    ["61", "Politiques de sécurité routière — justifications"],
    ["62", "Continuum éducatif — formation obligatoire et facultative"]
].map(([number, title]) => ({
    id: `fiche-${number}`,
    title: `${number} — ${title}`,
    shortTitle: `${number}`,
    href: `/fiches-pedagogiques/${slugify(`${number}-${title}`)}`,
    description: "Fiche prévue dans la bibliothèque. Le contenu détaillé sera intégré ensuite."
}));

export const procedureGroups: NavigationNode[] = [
    {
        id: "competence-1",
        title: "Compétence 1",
        href: "/procedures-conduite/competence-1",
        description: "Maîtriser le maniement du véhicule dans un trafic faible ou nul.",
        children: [
            {
                id: "organes-commandes-verifications",
                title: "Organes, commandes et vérifications",
                href: "/procedures-conduite/competence-1/organes-commandes-verifications",
                description: "Principaux organes, commandes, vérifications intérieures et extérieures."
            },
            {
                id: "installation-poste-conduite",
                title: "Installation au poste de conduite",
                href: "/procedures-conduite/competence-1/installation-poste-conduite",
                description: "Installation, réglages, ceinture, rétroviseurs, position et préparation au départ."
            },
            {
                id: "volant-trajectoire",
                title: "Volant et trajectoire",
                href: "/procedures-conduite/competence-1/volant-trajectoire",
                description: "Regard, tenue du volant, trajectoire, précision et maniement."
            },
            {
                id: "demarrer-sarreter",
                title: "Démarrer et s’arrêter",
                href: "/procedures-conduite/competence-1/demarrer-sarreter",
                description: "Départ, arrêt, maîtrise des commandes et sécurité."
            }
        ]
    },
    {
        id: "competence-2",
        title: "Compétence 2",
        href: "/procedures-conduite/competence-2",
        description: "Appréhender la route et circuler dans des conditions normales.",
        children: [
            {
                id: "apprehender-route",
                title: "Appréhender la route et circuler",
                href: "/procedures-conduite/competence-2/apprehender-route-circuler",
                description: "Prise d’information, placement, trajectoire et adaptation."
            },
            {
                id: "adapter-allure",
                title: "Adapter l’allure aux situations",
                href: "/procedures-conduite/competence-2/adapter-allure",
                description: "Adapter son allure selon visibilité, trafic, environnement et danger."
            },
            {
                id: "intersections-priorites",
                title: "Intersections et priorités",
                href: "/procedures-conduite/competence-2/intersections-priorites",
                description: "Préparer, observer, décider et franchir une intersection."
            }
        ]
    },
    {
        id: "competence-3",
        title: "Compétence 3",
        href: "/procedures-conduite/competence-3",
        description: "Circuler dans des conditions difficiles et partager la route."
    },
    {
        id: "competence-4",
        title: "Compétence 4",
        href: "/procedures-conduite/competence-4",
        description: "Pratiquer une conduite autonome, sûre et économique."
    },
    {
        id: "procedure-cours",
        title: "Procédure de cours",
        href: "/procedures-conduite/procedure-cours",
        description: "Objectif de cours, phases d’un cours sur véhicule, animation, évaluation et restitution.",
        children: [
            {
                id: "objectif-cours",
                title: "Objectif de cours en conduite",
                href: "/procedures-conduite/procedure-cours/objectif-cours",
                description: "Définir et annoncer l’objectif d’une séance pratique."
            },
            {
                id: "phases-cours-vehicule",
                title: "Phases d’un cours sur véhicule",
                href: "/procedures-conduite/procedure-cours/phases-cours-vehicule",
                description: "Accueil, bilan, objectif, exercice, guidage, évaluation et synthèse."
            },
            {
                id: "evaluer-apprenant",
                title: "Évaluer un apprenant",
                href: "/procedures-conduite/procedure-cours/evaluer-apprenant",
                description: "Observation, critères, remédiation et progression."
            }
        ]
    }
];

export function slugify(value: string): string {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

export function flattenNodes(nodes: NavigationNode[]): NavigationNode[] {
    return nodes.flatMap((node) => [
        node,
        ...(node.children ? flattenNodes(node.children) : [])
    ]);
}

export function findNodeByHref(nodes: NavigationNode[], href: string): NavigationNode | undefined {
    return flattenNodes(nodes).find((node) => node.href === href);
}

export function findChildrenByHref(nodes: NavigationNode[], href: string): NavigationNode[] {
    return findNodeByHref(nodes, href)?.children ?? [];
}
