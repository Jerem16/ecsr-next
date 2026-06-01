const homeCards = [
    {
        id: "cours",
        title: "Cours",
        href: "/cours#top",
        text: "Accès aux grandes familles de cours : droit, circulation routière, conducteur, véhicule et pédagogie ECSR."
    },
    {
        id: "fiches-pedagogiques",
        title: "Fiches pédagogiques",
        href: "/fiches-pedagogiques#top",
        text: "Espace prévu pour les fiches courtes, synthétiques et directement exploitables en animation."
    },
    {
        id: "procedures-conduite",
        title: "Procédures de conduite",
        href: "/procedures-conduite#top",
        text: "Espace réservé aux procédures pratiques : installation, départ, intersections, manœuvres et conduite."
    }
];

export default function Home() {
    return (
        <div className="ecsr-page">
            <section className="ecsr-hero" id="top">
                <p className="ecsr-kicker">Wii-Design · Supports ECSR</p>
                <h1>Base de navigation des cours ECSR</h1>
                <p>
                    Version épurée du projet Wii-Design : le logo est conservé, le header responsive est gardé,
                    et les liens sont adaptés aux cours, fiches pédagogiques et procédures de conduite.
                </p>
            </section>

            <section className="ecsr-grid" aria-label="Accès rapides">
                {homeCards.map((card) => (
                    <article className="ecsr-card" id={card.id} key={card.id}>
                        <h2>{card.title}</h2>
                        <p>{card.text}</p>
                        <a href={card.href}>Ouvrir</a>
                    </article>
                ))}
            </section>
        </div>
    );
}
