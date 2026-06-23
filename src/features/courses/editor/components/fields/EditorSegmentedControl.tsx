"use client";

import type { ReactNode } from "react";

export interface EditorSegmentedOption<Value extends string> {
    value: Value;
    label: string;
    icon?: ReactNode;
}

interface EditorSegmentedControlProps<Value extends string> {
    label: string;
    value: Value;
    options: EditorSegmentedOption<Value>[];
    onChange: (value: Value) => void;
}

export const EditorSegmentedControl = <Value extends string>({
    label,
    value,
    options,
    onChange,
}: EditorSegmentedControlProps<Value>) => {
    return (
        <div className="grid gap-2">
            <span className="text-[0.82rem] font-black uppercase tracking-[0.035em] text-[var(--course-primary)]">{label}</span>
            <div className="inline-grid w-fit grid-flow-col gap-1 rounded-2xl border border-[var(--course-border)] bg-white p-1 shadow-[0_8px_18px_rgba(18,53,91,0.05)] max-[820px]:w-full" role="group" aria-label={label}>
                {options.map((option) => {
                    const isActive = option.value === value;

                    return (
                        <button
                            key={option.value}
                            type="button"
                            className={`inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-[0.9rem] font-black transition-[background,color,box-shadow] duration-150 max-[820px]:flex-1 ${
                                isActive
                                    ? "bg-[var(--course-primary)] text-white shadow-[0_8px_18px_rgba(18,53,91,0.18)]"
                                    : "text-[var(--course-primary)] hover:bg-[var(--course-primary-soft)] focus-visible:bg-[var(--course-primary-soft)] focus-visible:outline-none"
                            }`}
                            onClick={() => onChange(option.value)}
                            aria-pressed={isActive}
                        >
                            {option.icon}
                            {option.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
