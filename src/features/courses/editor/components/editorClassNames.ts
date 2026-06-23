export const editorFrameClassName =
    "min-w-0 border border-[var(--course-border)] bg-[var(--course-surface)] shadow-[var(--course-shadow)]";

export const editorPanelClassName =
    `${editorFrameClassName} scroll-mt-[var(--course-anchor-offset)] rounded-[28px] p-[clamp(20px,3vw,32px)]`;

export const editorPanelHeroClassName =
    `${editorPanelClassName} bg-[linear-gradient(135deg,#fff_0%,#eef5ff_100%)]`;

export const editorSectionClassName =
    `${editorFrameClassName} scroll-mt-[var(--course-anchor-offset)] rounded-[24px] p-[clamp(18px,2.6vw,26px)]`;

export const editorBlockClassName =
    `${editorFrameClassName} rounded-[20px] !p-5 shadow-none max-[640px]:!p-4`;

export const editorSubcardClassName =
    `${editorFrameClassName} rounded-[18px] !bg-[#fbfdff] !p-5 shadow-none max-[640px]:!p-4`;

export const editorKickerClassName =
    "mb-1.5 mt-0 text-[0.75rem] font-black uppercase tracking-[0.05em] text-[var(--course-accent)]";

export const editorPanelKickerClassName =
    "mb-2 mt-0 text-[0.78rem] font-black uppercase tracking-[0.06em] text-[var(--course-accent)]";

export const editorTitleClassName =
    "m-0 text-[var(--course-primary)]";

export const editorPanelTitleClassName =
    "m-0 text-[clamp(1.6rem,3vw,2.2rem)] text-[var(--course-primary)]";

export const editorGridClassName =
    "course-editor-grid grid gap-4";

export const editorGridTwoClassName =
    `${editorGridClassName} grid-cols-2 max-[820px]:grid-cols-1`;

export const editorButtonBaseClassName =
    "inline-flex cursor-pointer items-center justify-center gap-2 font-black transition-[transform,box-shadow,background,color,border-color] duration-150 hover:-translate-y-px focus-visible:-translate-y-px focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 disabled:transform-none disabled:shadow-none [&_svg]:transition-colors [&_svg]:duration-150";

export const editorButtonClassName =
    `course-editor-button ${editorButtonBaseClassName} rounded-full !border !border-[var(--course-primary)] !bg-[var(--course-primary)] !px-3.5 !py-2.5 !text-white shadow-[0_10px_24px_rgba(18,53,91,0.18)] hover:!border-[#0d2948] hover:!bg-[#0d2948] hover:shadow-[0_14px_30px_rgba(18,53,91,0.24)] focus-visible:!border-[#0d2948] focus-visible:!bg-[#0d2948]`;

export const editorGhostButtonClassName =
    `course-editor-button course-editor-button--ghost ${editorButtonBaseClassName} rounded-full !border !border-[var(--course-primary)] !bg-white !px-3.5 !py-2.5 !text-[var(--course-primary)] shadow-[0_8px_18px_rgba(18,53,91,0.06)] hover:!bg-[var(--course-primary)] hover:!text-white hover:shadow-[0_12px_26px_rgba(18,53,91,0.18)] focus-visible:!bg-[var(--course-primary)] focus-visible:!text-white`;

export const editorDangerButtonClassName =
    `course-editor-button course-editor-button--danger ${editorButtonBaseClassName} rounded-full !border !border-[#b42318] !bg-white !px-3.5 !py-2.5 !text-[#b42318] shadow-[0_8px_18px_rgba(180,35,24,0.08)] hover:!bg-[#b42318] hover:!text-white hover:shadow-[0_12px_26px_rgba(180,35,24,0.2)] focus-visible:!bg-[#b42318] focus-visible:!text-white`;

export const editorSoftButtonClassName =
    `course-editor-button course-editor-button--soft ${editorButtonBaseClassName} rounded-full !border !border-[var(--course-border)] !bg-[var(--course-primary-soft)] !px-3.5 !py-2.5 !text-[var(--course-primary)] shadow-[0_8px_18px_rgba(18,53,91,0.06)] hover:!border-[var(--course-primary)] hover:!bg-[var(--course-primary)] hover:!text-white hover:shadow-[0_12px_26px_rgba(18,53,91,0.18)] focus-visible:!border-[var(--course-primary)] focus-visible:!bg-[var(--course-primary)] focus-visible:!text-white`;

export const editorIconButtonBaseClassName =
    `${editorButtonBaseClassName} h-10 w-10 flex-none rounded-[14px] !p-0`;

export const editorIconButtonClassName =
    `course-editor-icon-button ${editorIconButtonBaseClassName} !border !border-[var(--course-primary)] !bg-white !text-[var(--course-primary)] shadow-[0_8px_18px_rgba(18,53,91,0.08)] hover:!bg-[var(--course-primary)] hover:!text-white hover:shadow-[0_12px_26px_rgba(18,53,91,0.18)] focus-visible:!bg-[var(--course-primary)] focus-visible:!text-white`;

export const editorDangerIconButtonClassName =
    `course-editor-icon-button course-editor-icon-button--danger ${editorIconButtonBaseClassName} !border !border-[#b42318] !bg-white !text-[#b42318] shadow-[0_8px_18px_rgba(180,35,24,0.08)] hover:!bg-[#b42318] hover:!text-white hover:shadow-[0_12px_26px_rgba(180,35,24,0.2)] focus-visible:!bg-[#b42318] focus-visible:!text-white`;

export const editorPrimaryIconButtonClassName =
    `course-editor-icon-button course-editor-icon-button--primary ${editorIconButtonBaseClassName} !border !border-[var(--course-primary)] !bg-[var(--course-primary)] !text-white shadow-[0_10px_22px_rgba(18,53,91,0.2)] hover:!border-[#0d2948] hover:!bg-[#0d2948] hover:shadow-[0_14px_28px_rgba(18,53,91,0.26)] focus-visible:!border-[#0d2948] focus-visible:!bg-[#0d2948]`;

export const editorSoftIconButtonClassName =
    `course-editor-icon-button course-editor-icon-button--soft ${editorIconButtonBaseClassName} !border !border-[var(--course-border)] !bg-[var(--course-primary-soft)] !text-[var(--course-primary)] shadow-[0_8px_18px_rgba(18,53,91,0.08)] hover:!border-[var(--course-primary)] hover:!bg-[var(--course-primary)] hover:!text-white hover:shadow-[0_12px_26px_rgba(18,53,91,0.18)] focus-visible:!border-[var(--course-primary)] focus-visible:!bg-[var(--course-primary)] focus-visible:!text-white`;

export const editorActiveIconButtonClassName =
    `course-editor-icon-button is-active ${editorIconButtonBaseClassName} !border !border-[var(--course-primary)] !bg-[var(--course-primary)] !text-white shadow-[0_10px_22px_rgba(18,53,91,0.2)] hover:!border-[#0d2948] hover:!bg-[#0d2948]`;

export const editorFieldClassName =
    "course-editor-field grid min-w-0 gap-2";

export const editorFieldShellClassName =
    `${editorFieldClassName} rounded-[18px] !border !border-[var(--course-border)] !bg-white !p-4 shadow-[0_10px_24px_rgba(18,53,91,0.06)]`;

export const editorCompactFieldShellClassName =
    `${editorFieldClassName} rounded-2xl !border !border-[var(--course-border)] !bg-white !p-3 shadow-[0_8px_18px_rgba(18,53,91,0.05)]`;

export const editorFieldLabelClassName =
    "text-[0.82rem] font-black uppercase tracking-[0.035em] text-[var(--course-primary)]";

export const editorInputClassName =
    "box-border min-h-12 w-full rounded-2xl !border !border-[var(--course-border)] !bg-[#fbfdff] !px-4 !py-3 text-[var(--course-text)] leading-normal shadow-inner shadow-[rgba(18,53,91,0.03)] transition-[border,box-shadow,background] duration-150 placeholder:text-[var(--course-muted)] focus:!border-[var(--course-primary)] focus:!bg-white focus:outline-[3px_solid_rgba(18,53,91,0.12)]";

export const editorTextareaClassName =
    "box-border min-h-[118px] w-full resize-y rounded-2xl !border !border-[var(--course-border)] !bg-[#fbfdff] !px-4 !py-3 text-[var(--course-text)] leading-[1.55] shadow-inner shadow-[rgba(18,53,91,0.03)] transition-[border,box-shadow,background] duration-150 placeholder:text-[var(--course-muted)] focus:!border-[var(--course-primary)] focus:!bg-white focus:outline-[3px_solid_rgba(18,53,91,0.12)]";

export const editorSelectClassName =
    `${editorInputClassName} min-h-11`;

export const editorCompactSelectClassName =
    "box-border min-h-10 w-full rounded-xl !border !border-[var(--course-border)] !bg-[#fbfdff] !px-3 !py-2 text-[0.92rem] text-[var(--course-text)] leading-normal focus:!border-[var(--course-primary)] focus:!bg-white focus:outline-[3px_solid_rgba(18,53,91,0.12)]";

export const editorFieldHelperClassName =
    "m-0 text-[0.86rem] leading-[1.45] text-[var(--course-muted)]";

export const editorGroupCardClassName =
    "course-editor-group mt-5 grid gap-4 rounded-[20px] !border !border-[var(--course-border)] !bg-[#fbfdff] !p-4 max-[640px]:!p-3.5";

export const editorListRowClassName =
    "rounded-[18px] !border !border-[var(--course-border)] !bg-white !p-3.5 shadow-[0_8px_18px_rgba(18,53,91,0.04)]";

export const editorGroupHeaderClassName =
    "flex items-start justify-between gap-3 max-[820px]:flex-col max-[820px]:items-stretch";

export const editorInlineActionsClassName =
    "course-editor-actions-inline flex flex-wrap gap-2 max-[820px]:w-full";
