import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";
import locations from "@/lib/data/locations.json";

export const metadata: Metadata = {
    title: "Zones d'Intervention | Électricien Bruxelles & Environs",
    description:
        "COSTI ELEC intervient dans toute la région bruxelloise et sa périphérie. Uccle, Ixelles, Woluwé, Waterloo et plus. Découvrez nos zones.",
};

const premiumLocations = locations.filter((loc) => loc.type === "premium");
const clusterLocations = locations.filter((loc) => loc.type === "cluster");

export default function ZonesPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Zones</span>
                    <h1 className={styles.title}>
                        Nos zones <span className={styles.highlight}>d&apos;intervention</span>
                    </h1>
                    <p className={styles.description}>
                        COSTI ELEC intervient dans toute la région bruxelloise et les
                        communes environnantes. Découvrez notre couverture géographique.
                    </p>
                </div>
            </section>

            {/* Premium Locations */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Communes principales</h2>
                    <div className={styles.grid}>
                        {premiumLocations.map((location) => (
                            <Link
                                key={location.slug}
                                href={`/zones/${location.slug}`}
                                className={styles.card}
                            >
                                <div className={styles.cardHeader}>
                                    <span className={styles.cardIcon}>📍</span>
                                    <span className={styles.cardBadge}>Premium</span>
                                </div>
                                <h3 className={styles.cardTitle}>{location.name}</h3>
                                {location.nameFlemish && (
                                    <p className={styles.cardSubtitle}>{location.nameFlemish}</p>
                                )}
                                <p className={styles.cardDescription}>
                                    {location.content.intro.substring(0, 120)}...
                                </p>
                                <div className={styles.cardNeighborhoods}>
                                    {location.neighborhoods.slice(0, 3).map((n, i) => (
                                        <span key={i} className={styles.chip}>
                                            {n}
                                        </span>
                                    ))}
                                    {location.neighborhoods.length > 3 && (
                                        <span className={styles.chipMore}>
                                            +{location.neighborhoods.length - 3}
                                        </span>
                                    )}
                                </div>
                                <span className={styles.cardCta}>
                                    Voir les détails <span aria-hidden="true">→</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cluster Locations */}
            <section className={styles.sectionAlt}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Périphérie</h2>
                    <div className={styles.clusterGrid}>
                        {clusterLocations.map((location) => (
                            <Link
                                key={location.slug}
                                href={`/zones/${location.slug}`}
                                className={styles.clusterCard}
                            >
                                <h3 className={styles.clusterTitle}>{location.name}</h3>
                                <p className={styles.clusterMunicipalities}>
                                    {location.municipalities?.join(" · ")}
                                </p>
                                <span className={styles.clusterCta}>En savoir plus →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Not listed */}
            <section className={styles.notListed}>
                <div className={styles.container}>
                    <h2 className={styles.notListedTitle}>
                        Votre commune n&apos;est pas listée ?
                    </h2>
                    <p className={styles.notListedText}>
                        Contactez-nous pour vérifier notre disponibilité dans votre zone.
                    </p>
                    <Link href="/contact" className={styles.primaryCta}>
                        Nous contacter
                    </Link>
                </div>
            </section>
        </div>
    );
}
