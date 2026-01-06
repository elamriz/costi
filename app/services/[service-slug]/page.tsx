import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import styles from "./page.module.css";
import services from "@/lib/data/services.json";
import faqs from "@/lib/data/faqs.json";

type Props = {
    params: Promise<{ "service-slug": string }>;
};

export async function generateStaticParams() {
    return services.map((service) => ({
        "service-slug": service.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { "service-slug": slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return { title: "Service non trouvé" };
    }

    return {
        title: service.metaTitle,
        description: service.metaDescription,
        keywords: service.keywords,
        openGraph: {
            title: service.metaTitle,
            description: service.metaDescription,
        },
    };
}

export default async function ServicePage({ params }: Props) {
    const { "service-slug": slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    // Get related FAQs by category
    const categoryMap: Record<string, string> = {
        "conformite-rgie": "rgie",
        "renovation-electrique": "renovation",
        "borne-recharge-electrique": "ev",
    };
    const category = categoryMap[slug] || "general";
    const relatedFaqs = faqs.filter((f) => f.category === category).slice(0, 5);

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: service.title,
        provider: { "@id": "https://costielec.be/#business" },
        areaServed: { "@type": "Country", name: "Belgium" },
        description: service.description,
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
                    <Link href="/services">Services</Link>
                    <span aria-hidden="true">/</span>
                    <span aria-current="page">{service.shortTitle}</span>
                </nav>

                {/* Hero */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className={styles.heroContent}>
                            <span className={styles.eyebrow}>Service</span>
                            <h1 className={styles.title}>{service.title}</h1>
                            <p className={styles.description}>{service.description}</p>
                            <div className={styles.ctas}>
                                <a
                                    href="https://wa.me/32489986209?text=Bonjour, je souhaite un devis pour..."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.primaryCta}
                                >
                                    💬 Contacter sur WhatsApp
                                </a>
                                <Link href="/devis-gratuit" className={styles.secondaryCta}>
                                    Demander un devis
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Ce que nous proposons</h2>
                        <div className={styles.featuresGrid}>
                            {service.features.map((feature, index) => (
                                <div key={index} className={styles.featureCard}>
                                    <span className={styles.featureIcon}>✓</span>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                {relatedFaqs.length > 0 && (
                    <section className={styles.sectionAlt}>
                        <div className={styles.container}>
                            <h2 className={styles.sectionTitle}>Questions fréquentes</h2>
                            <div className={styles.faqList}>
                                {relatedFaqs.map((faq) => (
                                    <details key={faq.id} className={styles.faqItem}>
                                        <summary className={styles.faqQuestion}>
                                            {faq.question}
                                        </summary>
                                        <p className={styles.faqAnswer}>{faq.answer}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA */}
                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <h2 className={styles.ctaTitle}>
                            Besoin d&apos;un devis pour {service.shortTitle.toLowerCase()} ?
                        </h2>
                        <p className={styles.ctaSubtitle}>
                            Contactez-nous pour une estimation gratuite sous 24h.
                        </p>
                        <a
                            href="https://wa.me/32489986209?text=Bonjour, je souhaite un devis pour..."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.primaryCta}
                        >
                            💬 Contacter sur WhatsApp
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}
