import type { SVGProps } from "react";

export type CourseIconName = "eye" | "book" | "image" | "compare" | "table" | "warning";

interface AppIconProps extends SVGProps<SVGSVGElement> {
    name: CourseIconName;
    label?: string;
}

const paths: Record<CourseIconName, string> = {
    eye: "M12 5c5.2 0 9.2 4.4 10.5 7-1.3 2.6-5.3 7-10.5 7S2.8 14.6 1.5 12C2.8 9.4 6.8 5 12 5Zm0 2C8.4 7 5.4 9.6 3.9 12c1.5 2.4 4.5 5 8.1 5s6.6-2.6 8.1-5C18.6 9.6 15.6 7 12 7Zm0 2.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6Z",
    book: "M5 4.5C5 3.7 5.7 3 6.5 3H21v16.5H7.5A2.5 2.5 0 0 0 5 22V4.5Zm2 1V17.2c.2 0 .3-.1.5-.1H19V5H7ZM3 5h2v17H3V5Z",
    image: "M4 5h16c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1Zm1 2v8.6l3.5-3.5 2.5 2.5 4-4L19 14.6V7H5Zm0 10h14l-4-4-4 4-2.5-2.5L5 17Zm4-8.5A1.5 1.5 0 1 0 9 11a1.5 1.5 0 0 0 0-3Z",
    compare: "M10 4H4v6h2V7.4l4.3 4.3 1.4-1.4L7.4 6H10V4Zm4 0v2h2.6l-4.3 4.3 1.4 1.4L18 7.4V10h2V4h-6ZM4 14v6h6v-2H7.4l4.3-4.3-1.4-1.4L6 16.6V14H4Zm14 2.6-4.3-4.3-1.4 1.4 4.3 4.3H14v2h6v-6h-2v2.6Z",
    table: "M4 4h16c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1Zm1 2v3h14V6H5Zm0 5v3h6v-3H5Zm8 0v3h6v-3h-6Zm-8 5v2h6v-2H5Zm8 0v2h6v-2h-6Z",
    warning: "M12 2 22 20H2L12 2Zm0 4.2L5.4 18h13.2L12 6.2Zm-1 4.1h2v4.8h-2v-4.8Zm0 6.1h2v2h-2v-2Z"
};

export const AppIcon = ({ name, label, className, ...props }: AppIconProps) => {
    const ariaHidden = label ? undefined : true;
    const iconClassName = ["course-icon", className].filter(Boolean).join(" ");

    return (
        <svg
            className={iconClassName}
            viewBox="0 0 24 24"
            role={label ? "img" : undefined}
            aria-label={label}
            aria-hidden={ariaHidden}
            focusable="false"
            {...props}
        >
            <path fill="currentColor" d={paths[name]} />
        </svg>
    );
};
