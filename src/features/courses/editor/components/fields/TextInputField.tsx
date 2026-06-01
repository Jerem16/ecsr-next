"use client";

interface TextInputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const TextInputField = ({ label, value, onChange, placeholder }: TextInputFieldProps) => {
    return (
        <label className="course-editor-field">
            <span>{label}</span>
            <input value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} />
        </label>
    );
};
