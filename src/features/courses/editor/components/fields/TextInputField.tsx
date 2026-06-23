"use client";

import {
    editorInputClassName,
} from "../editorClassNames";
import { EditorFieldShell } from "./EditorFieldShell";

interface TextInputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const TextInputField = ({ label, value, onChange, placeholder }: TextInputFieldProps) => {
    return (
        <EditorFieldShell label={label}>
            <input className={editorInputClassName} value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} />
        </EditorFieldShell>
    );
};
