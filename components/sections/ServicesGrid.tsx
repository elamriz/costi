import Link from "next/link";
import styles from "./ServicesGrid.module.css";

// Premium SVG icons for services
const ServiceIcons = {
    rgie: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
        </svg>
    ),
    renovation: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    ),
    tableau: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
    ),
    securite: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
    ),
    videophone: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
    ),
    borne: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
    ),
};

const services = [
    {
        slug: "conformite-rgie",
        title: "Passez le contrôle RGIE du premier coup",
        shortTitle: "Conformité RGIE",
        description: "Préparation complète et correction des infractions.",
        icon: ServiceIcons.rgie,
        featured: true,
        chips: ["Attestation immédiate"],
    },
    {
        slug: "borne-recharge-electrique",
        title: "Rechargez chez vous",
        shortTitle: "Borne EV",
        description: "Installation toutes marques.",
        icon: ServiceIcons.borne,
        chips: ["Toutes puissances"],
    },
    {
        slug: "renovation-electrique",
        title: "Modernisez votre installation",
        shortTitle: "Rénovation",
        description: "Du tableau aux prises.",
        icon: ServiceIcons.renovation,
    },
    {
        slug: "tableau-electrique-schema",
        title: "Tableau aux normes",
        shortTitle: "Tableau",
        description: "Schémas inclus.",
        icon: ServiceIcons.tableau,
    },
    {
        slug: "mise-en-securite",
        title: "Mise en sécurité",
        shortTitle: "Sécurité",
        description: "Urgences électriques.",
        icon: ServiceIcons.securite,
    },
    {
        slug: "videophone-interphone",
        title: "Vidéophone connecté",
        shortTitle: "Vidéophone",
        description: "Ouvrez à distance.",
        icon: ServiceIcons.videophone,
    },
];

export function ServicesGrid() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Nos Services</span>
                    <h2 className={styles.title}>
                        Solutions électriques <span className={styles.highlight}>complètes</span>
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className={styles.bentoGrid}>
                    {services.map((service, index) => (
                        <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className={`${styles.card} ${styles[`card${index + 1}`]} ${service.featured ? styles.featured : ""}`}
                        >
                            <div className={styles.cardIcon}>{service.icon}</div>
                            <div className={styles.cardContent}>
                                <span className={styles.cardLabel}>{service.shortTitle}</span>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDescription}>{service.description}</p>
                                {service.chips && (
                                    <div className={styles.chips}>
                                        {service.chips.map((chip, i) => (
                                            <span key={i} className={styles.chip}>{chip}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <span className={styles.cardArrow}>→</span>
                        </Link>
                    ))}
                </div>

                <div className={styles.cta}>
                    <Link href="/services" className={styles.ctaLink}>
                        Voir tous nos services →
                    </Link>
                </div>
            </div>
        </section>
    );
}
