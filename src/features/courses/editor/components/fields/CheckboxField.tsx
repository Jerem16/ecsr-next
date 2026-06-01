"use client";

interface CheckboxFieldProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const CheckboxField = ({ label, checked, onChange }: CheckboxFieldProps) => {
    return (
        <label className="course-editor-checkbox">
            <input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} />
            <span>{label}</span>
        </label>
    );
};
