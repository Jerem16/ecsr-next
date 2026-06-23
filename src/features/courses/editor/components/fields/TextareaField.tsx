"use client";

import {
    editorTextareaClassName,
} from "../editorClassNames";
import { EditorFieldShell } from "./EditorFieldShell";

interface TextareaFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    rows?: number;
}

export const TextareaField = ({ label, value, onChange, placeholder, rows = 4 }: TextareaFieldProps) => {
    return (
        <EditorFieldShell label={label}>
            <textarea className={editorTextareaClassName} value={value} placeholder={placeholder} rows={rows} onChange={(event) => onChange(event.target.value)} />
        </EditorFieldShell>
    );
};
