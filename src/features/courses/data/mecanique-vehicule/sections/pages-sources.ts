import type { CourseSection } from "../../../types/course";

export const mecaniqueVehiculePagesSourcesSection: CourseSection = {
    "id": "pages-sources",
    "title": "Pages sources conservées",
    "intro": "Les pages sources restent disponibles pour vérifier la transcription, retrouver les schémas d’origine et conserver la traçabilité du cours.",
    "blocks": [
        {
            "type": "source-pages",
            "id": "sources-mecanique",
            "title": "Pages sources du cours mécanique",
            "intro": "Ces visuels correspondent aux pages pédagogiques conservées dans le dossier source du cours.",
            "pages": [
                {
                    "page": 2,
                    "title": "Chaîne cinématique d’un véhicule à traction",
                    "image": "/cours/mecanique/source/page-002-source.jpg",
                    "alt": "Schéma vu du dessus d’un véhicule à traction. Le moteur, l’embrayage ou le convertisseur de boîte automatique, la boîte de vitesses et le pont sont placés à l’avant. Le mouvement est transmis aux roues avant, qui sont les roues motrices.",
                    "transcript": [
                        "Chaîne cinématique d’un véhicule à traction",
                        "Introduction : la chaîne cinématique = la chaîne du mouvement.",
                        "Pont."
                    ]
                },
                {
                    "page": 3,
                    "title": "Chaîne cinématique d’un véhicule à propulsion",
                    "image": "/cours/mecanique/source/page-003-source.jpg",
                    "alt": "Schéma séparant les principaux éléments d’une propulsion : moteur, embrayage, boîte de vitesses, arbre de transmission et pont arrière. Le mouvement part du moteur, passe par l’embrayage et la boîte, puis est transmis vers le pont arrière par l’arbre de transmission.",
                    "transcript": [
                        "Chaîne cinématique d’un véhicule à propulsion."
                    ]
                },
                {
                    "page": 5,
                    "title": "Rôle du moteur",
                    "image": "/cours/mecanique/source/page-005-source.jpg",
                    "alt": "Schéma montrant l’air et le carburant entrant dans le moteur. Le moteur transforme l’énergie produite par la combustion en mouvement, illustré par un véhicule qui avance.",
                    "transcript": [
                        "Rôle : transformer l’énergie calorifique, c’est-à-dire la chaleur due à la combustion, en énergie cinétique, c’est-à-dire en mouvement.",
                        "Air, comburant, plus carburant."
                    ]
                },
                {
                    "page": 6,
                    "title": "Architecture d’un moteur",
                    "image": "/cours/mecanique/source/page-006-source.jpg",
                    "alt": "Vue éclatée d’un moteur. On distingue la culasse en haut, le bloc moteur au centre, l’attelage mobile avec les pistons, bielles et vilebrequin, puis le carter inférieur en bas.",
                    "transcript": [
                        "Architecture d’un moteur.",
                        "La culasse contient les soupapes, la rampe de culbuteurs ou l’arbre à cames en tête. Elle renferme les conduits d’admission et d’échappement.",
                        "Le bloc moteur est la partie la plus volumineuse du moteur. Il renferme les cylindres dans lesquels montent et descendent les pistons, les rampes de lubrification et les conduits de refroidissement.",
                        "L’attelage mobile comprend le vilebrequin, les bielles, les pistons et le volant moteur.",
                        "Le carter inférieur contient l’huile pour la lubrification des éléments mobiles."
                    ]
                },
                {
                    "page": 7,
                    "title": "Éléments moteur fixes",
                    "image": "/cours/mecanique/source/page-007-source.jpg",
                    "alt": "Schéma indiquant les parties fixes du moteur : le cache-culbuteurs au sommet, la culasse en dessous, le bloc moteur au centre et le carter inférieur en bas.",
                    "transcript": [
                        "Éléments moteur fixes.",
                        "Cache-culbuteurs",
                        "Culasse",
                        "Bloc moteur",
                        "Carter inférieur"
                    ]
                },
                {
                    "page": 8,
                    "title": "Éléments moteur mobiles",
                    "image": "/cours/mecanique/source/page-008-source.jpg",
                    "alt": "Schéma présentant les pièces mobiles du moteur. Le piston se déplace dans le cylindre, la bielle relie le piston au vilebrequin, l’arbre à cames commande les soupapes.",
                    "transcript": [
                        "Éléments moteur mobiles.",
                        "Vilebrequin",
                        "Bielle",
                        "Piston",
                        "Arbre à cames",
                        "Soupape"
                    ]
                },
                {
                    "page": 9,
                    "title": "Cycle à quatre temps diesel et essence",
                    "image": "/cours/mecanique/source/page-009-source.jpg",
                    "alt": "Page d’introduction au cycle à quatre temps avec un schéma animé ou illustratif du piston, des soupapes et du mouvement interne du moteur.",
                    "transcript": [
                        "Voici le cycle à quatre temps d’un moteur diesel et d’un moteur essence."
                    ]
                },
                {
                    "page": 10,
                    "title": "Repères du cycle à quatre temps",
                    "image": "/cours/mecanique/source/page-010-source.jpg",
                    "alt": "Schéma expliquant la course du piston entre le point mort haut et le point mort bas. Un deuxième schéma montre le piston, la bielle et le vilebrequin avec les soupapes d’admission et d’échappement.",
                    "transcript": [
                        "Cycle à quatre temps : un temps = une course du piston.",
                        "PMH = point mort haut.",
                        "PMB = point mort bas.",
                        "Éléments repérés :",
                        "Bielle",
                        "Maneton",
                        "Tourillon",
                        "Vilebrequin",
                        "Piston",
                        "Segments"
                    ]
                },
                {
                    "page": 11,
                    "title": "Premier temps : admission",
                    "image": "/cours/mecanique/source/page-011-source.jpg",
                    "alt": "Le piston descend dans le cylindre. La soupape d’admission est ouverte, ce qui permet l’entrée d’air pour le diesel ou l’entrée du mélange air-essence pour le moteur essence.",
                    "transcript": [
                        "Premier temps : admission.",
                        "Soupape d’admission ouverte",
                        "Soupape d’échappement fermée",
                        "Piston en descente du PMH vers le PMB",
                        "Le vilebrequin fait un demi-tour",
                        "Diesel : entrée d’air uniquement.",
                        "Essence : entrée d’un mélange air et essence."
                    ]
                },
                {
                    "page": 12,
                    "title": "Deuxième temps : compression",
                    "image": "/cours/mecanique/source/page-012-source.jpg",
                    "alt": "Le piston remonte dans le cylindre avec les deux soupapes fermées. L’air ou le mélange air-essence est comprimé dans la chambre de combustion.",
                    "transcript": [
                        "Deuxième temps : compression.",
                        "Soupape d’admission fermée",
                        "Soupape d’échappement fermée",
                        "Piston en montée du PMB vers le PMH",
                        "Le vilebrequin fait un demi-tour",
                        "Diesel : compression de l’air. Pression : 30 à 40 bars. Température : 500 à 600 °C.",
                        "Essence : compression du mélange. Pression : 10 à 12 bars. Température : 320 à 380 °C."
                    ]
                },
                {
                    "page": 13,
                    "title": "Troisième temps : détente, travail ou temps moteur",
                    "image": "/cours/mecanique/source/page-013-source.jpg",
                    "alt": "Le piston est repoussé vers le bas par l’énergie de la combustion. C’est le temps qui produit le travail moteur et transmet l’effort au vilebrequin.",
                    "transcript": [
                        "Troisième temps : détente, travail ou temps moteur.",
                        "Soupape d’admission fermée",
                        "Soupape d’échappement fermée",
                        "Piston en descente du PMH vers le PMB",
                        "Le vilebrequin fait un demi-tour",
                        "Diesel : injection sous forte pression du carburant, auto-inflammation du combustible, combustion et forte poussée sur le piston. Pression : 60 à 90 bars. Température : 1 800 à 2 000 °C.",
                        "Essence : étincelle électrique et explosion du mélange, puis poussée sur le piston. Pression : 25 à 30 bars. Température : 2 000 à 2 500 °C."
                    ]
                },
                {
                    "page": 14,
                    "title": "Quatrième temps : échappement",
                    "image": "/cours/mecanique/source/page-014-source.jpg",
                    "alt": "Le piston remonte. La soupape d’échappement est ouverte et les gaz brûlés sont évacués vers l’échappement.",
                    "transcript": [
                        "Quatrième temps : échappement.",
                        "Soupape d’admission fermée",
                        "Soupape d’échappement ouverte",
                        "Piston en montée du PMB vers le PMH",
                        "Le vilebrequin fait un demi-tour",
                        "Diesel : évacuation des gaz brûlés. Température : 450 à 600 °C.",
                        "Essence : évacuation des gaz brûlés. Température : 600 à 800 °C. Gaz plus toxiques : CO2 et CO."
                    ]
                },
                {
                    "page": 15,
                    "title": "Synthèse du cycle à quatre temps",
                    "image": "/cours/mecanique/source/page-015-source.jpg",
                    "alt": "Quatre schémas montrent successivement l’admission, la compression, le temps moteur et l’échappement. Les flèches indiquent la montée ou la descente du piston.",
                    "transcript": [
                        "Le cycle à quatre temps du moteur diesel ou essence nécessite deux tours moteur pour réaliser un cycle complet.",
                        "Admission",
                        "Compression",
                        "Temps moteur",
                        "Échappement"
                    ]
                },
                {
                    "page": 22,
                    "title": "L’injection : composants",
                    "image": "/cours/mecanique/source/page-022-source.jpg",
                    "alt": "Schéma du système d’injection avec huit repères numérotés. Il montre le circuit de carburant, l’arrivée d’air, les sondes et le calculateur qui pilote le fonctionnement.",
                    "transcript": [
                        "L’injection, partie 1.",
                        "Repères du schéma :",
                        "Réservoir",
                        "Pompe électrique",
                        "Filtre à carburant",
                        "Filtre à air",
                        "Tubulure d’admission",
                        "Papillon des gaz",
                        "Calculateur",
                        "Sondes"
                    ]
                },
                {
                    "page": 23,
                    "title": "L’injection : fonctionnement",
                    "image": "/cours/mecanique/source/page-023-source.jpg",
                    "alt": "Schéma de fonctionnement de l’alimentation en carburant. Le carburant part du réservoir, passe par la pompe et le filtre, arrive à la rampe, puis aux injecteurs. Le calculateur commande les injecteurs par impulsions électriques.",
                    "transcript": [
                        "L’injection, partie 2 : fonctionnement.",
                        "Alimentation en carburant.",
                        "Une pompe électrique aspire l’essence du réservoir et la refoule à la rampe d’alimentation par l’intermédiaire d’un filtre.",
                        "La pression d’alimentation est définie par un régulateur de pression.",
                        "Les injecteurs sont commandés par des impulsions électriques générées par le calculateur d’injection.",
                        "Afin de ne pas modifier le débit des injecteurs, la pression du carburant est généralement proportionnelle à la pression régnant dans la tubulure d’admission.",
                        "Repères du schéma :",
                        "Réservoir",
                        "Pompe électrique",
                        "Filtre à carburant"
                    ]
                },
                {
                    "page": 24,
                    "title": "Circuit de refroidissement",
                    "image": "/cours/mecanique/source/page-024-source.jpg",
                    "alt": "Schéma montrant la circulation du liquide de refroidissement entre le moteur, le radiateur, les durites, la pompe à eau, le thermostat, le vase d’expansion et le chauffage de l’habitacle.",
                    "transcript": [
                        "Le circuit de refroidissement.",
                        "Circulation du liquide de refroidissement.",
                        "Éléments repérés :",
                        "Vase d’expansion",
                        "Système de chauffage cabine",
                        "Radiateur",
                        "Durite supérieure",
                        "Ventilateur avec visco-coupleur",
                        "Durite inférieure",
                        "Thermostat"
                    ]
                },
                {
                    "page": 25,
                    "title": "Circuit de lubrification",
                    "image": "/cours/mecanique/source/page-025-source.jpg",
                    "alt": "Schéma du trajet de l’huile dans un moteur. L’huile circule depuis la pompe et le filtre vers la rampe principale, les paliers d’arbre à cames, les têtes de bielles, les paliers de vilebrequin et la rampe de culbuteurs.",
                    "transcript": [
                        "Le circuit de lubrification : moteur atmosphérique.",
                        "Éléments repérés :",
                        "Alimentation pour la lubrification de la rampe de culbuteurs",
                        "Pompe à huile",
                        "Filtre à huile",
                        "Lubrification des paliers d’arbre à cames",
                        "Rampe principale",
                        "Lubrification de la tête de bielle",
                        "Manocontact de pression",
                        "Lubrification du palier de vilebrequin"
                    ]
                },
                {
                    "page": 26,
                    "title": "Turbocompresseur",
                    "image": "/cours/mecanique/source/page-026-source.jpg",
                    "alt": "Schéma du turbocompresseur. Les gaz d’échappement entraînent une turbine, qui entraîne une roue de compresseur côté admission. L’air admis est comprimé avant d’entrer dans le moteur.",
                    "transcript": [
                        "Le turbocompresseur.",
                        "Échappement.",
                        "Admission.",
                        "Repères de température et de pression :",
                        "950 °C et 2 bars côté échappement",
                        "800 °C et 1 bar côté échappement",
                        "20 °C et 1 bar côté admission",
                        "100 °C et 1,5 bar côté admission",
                        "Pour que le « turbo » soit efficace, il doit tourner à un régime élevé, supérieur à 100 000 tr/min.",
                        "En dessous du régime d’accrochage, environ 60 000 tr/min, le « turbo » tourne lentement, entre 500 et 10 000 tr/min, en régime de veille."
                    ]
                },
                {
                    "page": 27,
                    "title": "Allumage",
                    "image": "/cours/mecanique/source/page-027-source.jpg",
                    "alt": "Schéma du circuit d’allumage d’un moteur essence. La batterie alimente le système. Le module et la bobine produisent la haute tension distribuée vers les bougies, en fonction des informations de capteurs.",
                    "transcript": [
                        "L’allumage.",
                        "Repères du schéma :",
                        "Batterie",
                        "Contact allumage et démarrage",
                        "Bobine d’allumage",
                        "Module d’allumage, qui pilote le primaire bobine",
                        "Capteur manométrique",
                        "Capteur volant",
                        "Distributeur haute tension",
                        "Bougies"
                    ]
                },
                {
                    "page": 30,
                    "title": "Embrayage en coupe",
                    "image": "/cours/mecanique/source/page-030-source.jpg",
                    "alt": "Schéma en coupe d’un embrayage. Il montre la cloche d’embrayage, le mécanisme à diaphragme, la butée, la fourchette de commande, le disque d’embrayage, le plateau presseur et l’arbre primaire.",
                    "transcript": [
                        "L’embrayage en coupe.",
                        "Éléments repérés :",
                        "Disque d’embrayage",
                        "Plateau presseur",
                        "Arbre primaire",
                        "Butée d’embrayage",
                        "Cloche d’embrayage",
                        "Fourchette de commande",
                        "Mécanisme à diaphragme"
                    ]
                },
                {
                    "page": 31,
                    "title": "Mécanisme à diaphragme",
                    "image": "/cours/mecanique/source/page-031-source.jpg",
                    "alt": "Schéma montrant le mécanisme à diaphragme de l’embrayage. Le disque d’embrayage est pris entre le volant moteur et le plateau presseur, commandé par le diaphragme.",
                    "transcript": [
                        "L’embrayage : mécanisme à diaphragme.",
                        "Éléments repérés :",
                        "Disque d’embrayage",
                        "Volant moteur",
                        "Diaphragme",
                        "Couvercle",
                        "Plateau presseur"
                    ]
                },
                {
                    "page": 32,
                    "title": "Position débrayée",
                    "image": "/cours/mecanique/source/page-032-source.jpg",
                    "alt": "Schéma montrant l’embrayage en position débrayée. La pression sur le mécanisme libère le disque d’embrayage et coupe la transmission du couple moteur vers la boîte.",
                    "transcript": [
                        "L’embrayage : position débrayée.",
                        "Le couple moteur n’est pas transmis."
                    ]
                },
                {
                    "page": 33,
                    "title": "Position embrayée",
                    "image": "/cours/mecanique/source/page-033-source.jpg",
                    "alt": "Schéma montrant l’embrayage en position embrayée. Le disque est serré entre le volant moteur et le plateau de serrage, ce qui permet au couple moteur d’être transmis à l’arbre primaire.",
                    "transcript": [
                        "L’embrayage : position embrayée.",
                        "Le couple moteur est transmis.",
                        "Éléments repérés :",
                        "Volant moteur",
                        "Disque d’embrayage",
                        "Couvercle",
                        "Butée d’embrayage",
                        "Ressorts de pression",
                        "Plateau de serrage",
                        "Arbre primaire"
                    ]
                },
                {
                    "page": 36,
                    "title": "Constitution de la boîte de vitesses",
                    "image": "/cours/mecanique/source/page-036-source.jpg",
                    "alt": "Schéma éclaté ou en coupe d’une boîte de vitesses avec ses arbres, pignons, fourchettes, roulements et synchroniseurs.",
                    "transcript": [
                        "La boîte de vitesses.",
                        "Repères du schéma :",
                        "Arbre primaire",
                        "Fourchettes",
                        "Axes de fourchettes, ou coulisseaux",
                        "Roulements",
                        "Prise de compteur de vitesse",
                        "Arbre secondaire",
                        "Synchroniseurs",
                        "Pignon"
                    ]
                },
                {
                    "page": 37,
                    "title": "Principe de la boîte de vitesses",
                    "image": "/cours/mecanique/source/page-037-source.jpg",
                    "alt": "Schéma montrant le fonctionnement interne d’une boîte de vitesses. Les pignons peuvent tourner à des régimes différents et les crabots permettent de solidariser un pignon avec l’arbre secondaire pour transmettre le mouvement.",
                    "transcript": [
                        "La boîte de vitesses : le principe.",
                        "L’arbre primaire est monobloc : les pignons sont fixes en rotation",
                        "Les pignons de l’arbre secondaire sont libres en rotation et fixes en translation",
                        "Des crabots coulissants sur l’arbre secondaire lui sont liés en rotation",
                        "Pour changer de rapport, il faut déplacer un crabot pour lier en rotation un pignon fou avec l’arbre secondaire"
                    ]
                },
                {
                    "page": 38,
                    "title": "Du point mort à la marche arrière",
                    "image": "/cours/mecanique/source/page-038-source.jpg",
                    "alt": "Schéma expliquant le passage des rapports dans la boîte. Les synchroniseurs permettent d’égaliser les vitesses avant l’engagement du baladeur sur le pignon.",
                    "transcript": [
                        "La boîte de vitesses : le principe, du point mort à la marche arrière.",
                        "Les pignons fous sur leur arbre tournent à des régimes différents.",
                        "Pour pouvoir engager les dents d’un baladeur sur les dents d’un pignon, il faut synchroniser ces régimes. C’est le rôle des anneaux de synchronisation, dits « synchros », qui sont des sortes de petits embrayages à cônes montés de chaque côté des baladeurs."
                    ]
                },
                {
                    "page": 39,
                    "title": "Boîte moderne à trois arbres",
                    "image": "/cours/mecanique/source/page-039-source.jpg",
                    "alt": "Schéma d’une boîte de vitesses moderne à trois arbres : arbre primaire, arbre intermédiaire et arbre secondaire.",
                    "transcript": [
                        "La boîte de vitesses : une boîte moderne.",
                        "Dans ce cas, la boîte comporte trois arbres :",
                        "Le primaire, entraîné par son extrémité cannelée qui s’insère dans le disque d’embrayage",
                        "L’intermédiaire, ou train fixe, qui est un arbre de renvoi",
                        "Le secondaire, ou arbre de sortie, sur lequel tous les baladeurs sont montés"
                    ]
                },
                {
                    "page": 42,
                    "title": "Le pont",
                    "image": "/cours/mecanique/source/page-042-source.jpg",
                    "alt": "Schéma du pont avec le pignon d’attaque, la grande couronne, le différentiel et les demi-arbres de roue.",
                    "transcript": [
                        "Le pont.",
                        "Boîte plus pont : sur une voiture, c’est un seul et même bloc.",
                        "Pignon d’attaque : le mouvement entrant vient de la boîte de vitesses.",
                        "Grande couronne : elle porte le différentiel.",
                        "Demi-arbre de roue.",
                        "Différentiel."
                    ]
                },
                {
                    "page": 43,
                    "title": "Le différentiel",
                    "image": "/cours/mecanique/source/page-043-source.jpg",
                    "alt": "Schéma du différentiel montrant la transmission du mouvement par le pignon d’attaque et la répartition vers les roues motrices.",
                    "transcript": [
                        "Le différentiel.",
                        "Pignon d’attaque.",
                        "Rôle : permettre aux roues motrices de tourner à des vitesses différentes dans les virages et sur sol inégal."
                    ]
                }
            ]
        }
    ]
};
