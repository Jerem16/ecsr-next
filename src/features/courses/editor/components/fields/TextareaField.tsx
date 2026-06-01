"use client";

interface TextareaFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    rows?: number;
}

export const TextareaField = ({ label, value, onChange, placeholder, rows = 4 }: TextareaFieldProps) => {
    return (
        <label className="course-editor-field">
            <span>{label}</span>
            <textarea value={value} placeholder={placeholder} rows={rows} onChange={(event) => onChange(event.target.value)} />
        </label>
    );
};
