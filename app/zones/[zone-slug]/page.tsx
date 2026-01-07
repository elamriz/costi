import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import styles from "./page.module.css";
import locations from "@/lib/data/locations.json";
import services from "@/lib/data/services.json";

type Props = {
    params: Promise<{ "zone-slug": string }>;
};

export async function generateStaticParams() {
    return locations.map((location) => ({
        "zone-slug": location.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { "zone-slug": slug } = await params;
    const location = locations.find((l) => l.slug === slug);

    if (!location) {
        return { title: "Zone non trouvée" };
    }

    return {
        title: location.metaTitle,
        description: location.metaDescription,
        keywords: location.keywords,
        openGraph: {
            title: location.metaTitle,
            description: location.metaDescription,
        },
    };
}

export default async function ZonePage({ params }: Props) {
    const { "zone-slug": slug } = await params;
    const location = locations.find((l) => l.slug === slug);

    if (!location) {
        notFound();
    }

    const topServices = location.content.topServices
        .map((slug) => services.find((s) => s.slug === slug))
        .filter(Boolean);

    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `COSTI ELEC - Électricien ${location.name}`,
        parentOrganization: { "@id": "https://costielec.be/#business" },
        areaServed: {
            "@type": "City",
            name: location.name,
            containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Bruxelles-Capitale",
            },
        },
        url: `https://costielec.be/zones/${location.slug}`,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <div className={styles.page}>
                {/* Breadcrumb */}
                <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
                    <Link href="/">Accueil</Link>
                    <span aria-hidden="true">/</span>
                    <Link href="/zones">Zones</Link>
                    <span aria-hidden="true">/</span>
                    <span aria-current="page">{location.name}</span>
                </nav>

                {/* Hero */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className={styles.heroContent}>
                            <span className={styles.eyebrow}>
                                📍 {location.type === "premium" ? "Commune" : "Zone"}
                            </span>
                            <h1 className={styles.title}>
                                Électricien à {location.name}
                                {location.nameFlemish && (
                                    <span className={styles.nameFlemish}>
                                        {" "}
                                        ({location.nameFlemish})
                                    </span>
                                )}
                            </h1>
                            <p className={styles.description}>{location.content.intro}</p>
                            <div className={styles.ctas}>
                                <Link href="/devis-gratuit" className={styles.primaryCta}>
                                    Demander un devis gratuit
                                </Link>
                                <a href="tel:+32489986209" className={styles.secondaryCta}>
                                    📞 +32 489 98 62 09
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Common Issues */}
                {location.content.commonIssues && (
                    <section className={styles.section}>
                        <div className={styles.container}>
                            <h2 className={styles.sectionTitle}>
                                Problèmes courants à {location.name}
                            </h2>
                            <div className={styles.issuesGrid}>
                                {location.content.commonIssues.map((issue, index) => (
                                    <div key={index} className={styles.issueCard}>
                                        <span className={styles.issueIcon}>⚠️</span>
                                        <span>{issue}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Top Services */}
                <section className={styles.sectionAlt}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>
                            Services les plus demandés à {location.name}
                        </h2>
                        <div className={styles.servicesGrid}>
                            {topServices.map(
                                (service) =>
                                    service && (
                                        <Link
                                            key={service.slug}
                                            href={`/services/${service.slug}`}
                                            className={styles.serviceCard}
                                        >
                                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                                            <p className={styles.serviceDesc}>
                                                {service.shortDescription}
                                            </p>
                                        </Link>
                                    )
                            )}
                        </div>
                    </div>
                </section>

                {/* Neighborhoods */}
                {location.neighborhoods && (
                    <section className={styles.section}>
                        <div className={styles.container}>
                            <h2 className={styles.sectionTitle}>Quartiers desservis</h2>
                            <div className={styles.chips}>
                                {location.neighborhoods.map((neighborhood, index) => (
                                    <span key={index} className={styles.chip}>
                                        {neighborhood}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Cluster municipalities */}
                {location.municipalities && (
                    <section className={styles.section}>
                        <div className={styles.container}>
                            <h2 className={styles.sectionTitle}>Communes couvertes</h2>
                            <div className={styles.chips}>
                                {location.municipalities.map((municipality, index) => (
                                    <span key={index} className={styles.chipLarge}>
                                        📍 {municipality}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA */}
                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <h2 className={styles.ctaTitle}>
                            Besoin d&apos;un électricien à {location.name} ?
                        </h2>
                        <p className={styles.ctaSubtitle}>
                            Intervention rapide 7j/7. Devis gratuit sous 24h.
                        </p>
                        <Link href="/devis-gratuit" className={styles.primaryCta}>
                            Demander un devis gratuit
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}
