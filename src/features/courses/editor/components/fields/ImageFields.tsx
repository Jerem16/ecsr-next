"use client";

import type { CourseImage } from "../../../types/course";
import { SelectField, type SelectOption } from "./SelectField";
import { TextInputField } from "./TextInputField";

interface ImageFieldsProps {
    image: CourseImage;
    onChange: (image: CourseImage) => void;
}

const imageRoleOptions: SelectOption<NonNullable<CourseImage["role"]>>[] = [
    { value: "schema", label: "Schématique" },
    { value: "illustration", label: "Illustrative" },
    { value: "comparaison", label: "Comparative" },
    { value: "contexte", label: "Contextuelle" },
    { value: "source", label: "Source" },
];

export const ImageFields = ({ image, onChange }: ImageFieldsProps) => {
    return (
        <div className="course-editor-image-fields">
            {image.src ? (
                <figure>
                    <img src={image.src} alt={image.alt} loading="lazy" />
                    {image.caption ? <figcaption>{image.caption}</figcaption> : null}
                </figure>
            ) : null}
            <div className="course-editor-grid course-editor-grid--2">
                <TextInputField label="Chemin de l’image" value={image.src} onChange={(src) => onChange({ ...image, src })} />
                <SelectField
                    label="Rôle pédagogique"
                    value={image.role ?? "illustration"}
                    options={imageRoleOptions}
                    onChange={(role) => onChange({ ...image, role })}
                />
                <TextInputField label="Texte alternatif" value={image.alt} onChange={(alt) => onChange({ ...image, alt })} />
                <TextInputField label="Légende" value={image.caption ?? ""} onChange={(caption) => onChange({ ...image, caption })} />
            </div>
        </div>
    );
};
