"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import type { CourseImage } from "../../../types/course";
import { SelectField, type SelectOption } from "./SelectField";
import { TextInputField } from "./TextInputField";

interface ImageFieldsProps {
    image: CourseImage;
    onChange: (image: CourseImage) => void;
    courseSlug?: string;
    showCaption?: boolean;
    showRole?: boolean;
}

interface UploadAssetResponse {
    src?: string;
    message?: string;
}

const imageRoleOptions: SelectOption<NonNullable<CourseImage["role"]>>[] = [
    { value: "schema", label: "Schématique" },
    { value: "illustration", label: "Illustrative" },
    { value: "comparaison", label: "Comparative" },
    { value: "contexte", label: "Contextuelle" },
    { value: "source", label: "Source" },
];

const createAltFromFileName = (fileName: string): string => {
    const nameWithoutExtension = fileName.replace(/\.[a-z0-9]+$/i, "");

    return nameWithoutExtension
        .replace(/[-_]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
};

export const ImageFields = ({
    image,
    onChange,
    courseSlug,
    showCaption = true,
    showRole = true,
}: ImageFieldsProps) => {
    const [previewSrc, setPreviewSrc] = useState<string>();
    const [isUploading, setIsUploading] = useState(false);
    const [uploadStatus, setUploadStatus] = useState<string>();
    const previewToRevoke = useRef<string | null>(null);
    const displaySrc = previewSrc ?? image.src;

    useEffect(() => {
        return () => {
            if (previewToRevoke.current) {
                URL.revokeObjectURL(previewToRevoke.current);
            }
        };
    }, []);

    const updatePreview = (file: File) => {
        if (previewToRevoke.current) {
            URL.revokeObjectURL(previewToRevoke.current);
        }

        const nextPreview = URL.createObjectURL(file);
        previewToRevoke.current = nextPreview;
        setPreviewSrc(nextPreview);
    };

    const uploadImage = async (file: File) => {
        if (!courseSlug) {
            setUploadStatus("Le slug du cours est nécessaire pour enregistrer l’image.");
            return;
        }

        setIsUploading(true);
        setUploadStatus("Import local de l’image en cours...");

        try {
            const formData = new FormData();
            formData.append("image", file);

            const response = await fetch(`/api/courses/${encodeURIComponent(courseSlug)}/assets`, {
                method: "POST",
                body: formData,
            });
            const payload = (await response.json()) as UploadAssetResponse;

            if (!response.ok || !payload.src) {
                throw new Error(payload.message ?? "L’import local de l’image a échoué.");
            }

            onChange({
                ...image,
                src: payload.src,
                alt: image.alt || createAltFromFileName(file.name),
            });
            setUploadStatus("Image importée localement.");
        } catch (error) {
            setUploadStatus(error instanceof Error ? error.message : "L’import local de l’image a échoué.");
        } finally {
            setIsUploading(false);
        }
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        updatePreview(file);
        void uploadImage(file);
        event.target.value = "";
    };

    return (
        <div className="course-editor-image-fields">
            {displaySrc ? (
                <figure>
                    <img src={displaySrc} alt={image.alt} loading="lazy" />
                    {image.caption && showCaption ? <figcaption>{image.caption}</figcaption> : null}
                </figure>
            ) : null}

            <div className="course-editor-image-upload">
                <label className="course-editor-upload-button">
                    <FileUploadIcon fontSize="small" />
                    <span>{isUploading ? "Import en cours..." : "Importer une image"}</span>
                    <input type="file" accept="image/*" onChange={handleFileChange} disabled={isUploading || !courseSlug} />
                </label>
                {uploadStatus ? <p>{uploadStatus}</p> : null}
            </div>

            <div className="course-editor-grid course-editor-grid--2">
                <TextInputField label="Chemin de l’image" value={image.src} onChange={(src) => onChange({ ...image, src })} />
                {showRole ? (
                    <SelectField
                        label="Rôle pédagogique"
                        value={image.role ?? "illustration"}
                        options={imageRoleOptions}
                        onChange={(role) => onChange({ ...image, role })}
                    />
                ) : null}
                <TextInputField label="Texte alternatif" value={image.alt} onChange={(alt) => onChange({ ...image, alt })} />
                {showCaption ? (
                    <TextInputField label="Légende" value={image.caption ?? ""} onChange={(caption) => onChange({ ...image, caption })} />
                ) : null}
            </div>
        </div>
    );
};
