"use client";

import type { ReactNode } from "react";
import {
    editorCompactFieldShellClassName,
    editorFieldHelperClassName,
    editorFieldLabelClassName,
    editorFieldShellClassName,
} from "../editorClassNames";

interface EditorFieldShellProps {
    label: string;
    children: ReactNode;
    helper?: ReactNode;
    compact?: boolean;
    className?: string;
    asLabel?: boolean;
}

export const EditorFieldShell = ({
    label,
    children,
    helper,
    compact = false,
    className = "",
    asLabel = true,
}: EditorFieldShellProps) => {
    const Component = asLabel ? "label" : "div";
    const shellClassName = `${compact ? editorCompactFieldShellClassName : editorFieldShellClassName} ${className}`.trim();

    return (
        <Component className={shellClassName}>
            <span className={editorFieldLabelClassName}>{label}</span>
            {children}
            {helper ? <p className={editorFieldHelperClassName}>{helper}</p> : null}
        </Component>
    );
};
