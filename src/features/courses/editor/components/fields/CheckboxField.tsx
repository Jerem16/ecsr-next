"use client";

interface CheckboxFieldProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const CheckboxField = ({ label, checked, onChange }: CheckboxFieldProps) => {
    return (
        <label className="course-editor-checkbox mt-3 inline-flex w-fit items-center gap-2 rounded-2xl border border-[var(--course-border)] bg-white px-3 py-2 font-black text-[var(--course-primary)] shadow-[0_8px_18px_rgba(18,53,91,0.05)]">
            <input className="h-4 w-4 accent-[var(--course-primary)]" type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} />
            <span>{label}</span>
        </label>
    );
};
