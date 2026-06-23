"use client";

import {
    editorSelectClassName,
} from "../editorClassNames";
import { EditorFieldShell } from "./EditorFieldShell";

export interface SelectOption<Value extends string> {
    label: string;
    value: Value;
}

interface SelectFieldProps<Value extends string> {
    label: string;
    value: Value;
    options: SelectOption<Value>[];
    onChange: (value: Value) => void;
}

export const SelectField = <Value extends string>({ label, value, options, onChange }: SelectFieldProps<Value>) => {
    return (
        <EditorFieldShell label={label}>
            <select className={editorSelectClassName} value={value} onChange={(event) => onChange(event.target.value as Value)}>
                {options.map((option) => (
                    <option value={option.value} key={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </EditorFieldShell>
    );
};
