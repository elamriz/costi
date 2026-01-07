import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";
import services from "@/lib/data/services.json";

export const metadata: Metadata = {
    title: "Nos Services Électriques | COSTI ELEC",
    description:
        "Découvrez tous nos services électriques : conformité RGIE, rénovation, tableaux électriques, vidéophones, bornes de recharge. Électricien à Bruxelles.",
};

const iconMap: Record<string, string> = {
    "shield-check": "🛡️",
    wrench: "🔧",
    "layout-grid": "📋",
    "alert-triangle": "⚠️",
    video: "📹",
    "plug-zap": "🔌",
};

export default function ServicesPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Services</span>
                    <h1 className={styles.title}>
                        Nos services <span className={styles.highlight}>électriques</span>
                    </h1>
                    <p className={styles.description}>
                        De la mise en conformité RGIE à l&apos;installation de bornes de
                        recharge, COSTI ELEC couvre tous vos besoins électriques à
                        Bruxelles.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {services.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className={styles.card}
                            >
                                <div className={styles.cardHeader}>
                                    <span className={styles.cardIcon}>
                                        {iconMap[service.icon] || "⚡"}
                                    </span>
                                </div>
                                <h2 className={styles.cardTitle}>{service.title}</h2>
                                <p className={styles.cardDescription}>{service.description}</p>
                                <ul className={styles.cardFeatures}>
                                    {service.features.slice(0, 3).map((feature, index) => (
                                        <li key={index}>✓ {feature}</li>
                                    ))}
                                </ul>
                                <span className={styles.cardCta}>
                                    En savoir plus <span aria-hidden="true">→</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2 className={styles.ctaTitle}>
                        Vous ne savez pas quel service choisir ?
                    </h2>
                    <p className={styles.ctaSubtitle}>
                        Contactez-nous pour un diagnostic gratuit et des conseils
                        personnalisés.
                    </p>
                    <Link href="/devis-gratuit" className={styles.primaryCta}>
                        Demander un diagnostic gratuit
                    </Link>
                </div>
            </section>
        </div>
    );
}
