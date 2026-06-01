import type { CourseSection } from "../../../types/course";

export const oeilConduiteOeilSection: CourseSection = {
            id: "oeil",
            title: "L’œil : constitution et limites",
            intro: "Le schéma de l’œil sert à comprendre que l’image n’est pas une copie instantanée du réel : elle est reçue, transformée puis interprétée.",
            blocks: [
                {
                    type: "image-card",
                    id: "schema-constitution-oeil",
                    title: "Schéma de constitution de l’œil",
                    imagePosition: "left",
                    image: {
                        src: "/cours/oeil-conduite/refined/schema-constitution-oeil.jpg",
                        alt: "Schéma de coupe de l’œil indiquant la cornée, la choroïde, la sclérotique, l’iris, la pupille, la macula, le point aveugle, le cristallin, la rétine et le nerf optique.",
                        caption: "Schéma explicatif de l’œil.",
                        role: "schema",
                    },
                    content: [
                        "Le schéma permet d’identifier les principales parties de l’œil utiles pour comprendre la perception visuelle.",
                        "Le point aveugle est important, car il correspond à une zone sans photorécepteurs.",
                    ],
                },
                {
                    type: "table",
                    id: "table-constitution-oeil",
                    title: "Constitution de l’œil",
                    caption:
                        "Repères essentiels pour expliquer le fonctionnement de l’œil",
                    columns: ["Élément", "Rôle ou repère"],
                    rows: [
                        [
                            {
                                label: "Cornée",
                                strong: true,
                            },
                            {
                                label: "Partie transparente située à l’avant de l’œil.",
                            },
                        ],
                        [
                            {
                                label: "Iris et pupille",
                                strong: true,
                            },
                            {
                                label: "L’iris correspond à la couleur de l’œil ; la pupille laisse entrer la lumière.",
                            },
                        ],
                        [
                            {
                                label: "Cristallin",
                                strong: true,
                            },
                            {
                                label: "Participe à la mise au point de l’image.",
                            },
                        ],
                        [
                            {
                                label: "Rétine",
                                strong: true,
                            },
                            {
                                label: "Zone sensible à la lumière, où l’information lumineuse devient information nerveuse.",
                            },
                        ],
                        [
                            {
                                label: "Macula",
                                strong: true,
                            },
                            {
                                label: "Zone centrale de la vision fine.",
                            },
                        ],
                        [
                            {
                                label: "Point aveugle",
                                strong: true,
                            },
                            {
                                label: "Zone sans photorécepteurs à la jonction avec le nerf optique.",
                            },
                        ],
                        [
                            {
                                label: "Nerf optique",
                                strong: true,
                            },
                            {
                                label: "Transmet l’information visuelle vers le cerveau.",
                            },
                        ],
                    ],
                },
            ],
        };
