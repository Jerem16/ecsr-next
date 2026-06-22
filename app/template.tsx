export default function RouteTemplate({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="ecsr-route-shell">{children}</div>;
}
