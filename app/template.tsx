import { RouteVisualEffect } from "./RouteVisualEffect";

export default function RouteTemplate({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="ecsr-route-shell">
            <RouteVisualEffect />
            {children}
        </div>
    );
}
