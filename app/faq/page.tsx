import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import faqs from "@/lib/data/faqs.json";

export const metadata: Metadata = {
    title: "FAQ | COSTI ELEC — Questions Fréquentes Électricité",
    description:
        "Toutes les réponses à vos questions sur les services électriques : tarifs, conformité RGIE, rénovation, bornes de recharge, délais et plus.",
};

const categories = [
    { id: "general", label: "Questions générales", icon: "💡" },
    { id: "rgie", label: "Conformité RGIE", icon: "🛡️" },
    { id: "renovation", label: "Rénovation électrique", icon: "🔧" },
    { id: "ev", label: "Bornes de recharge", icon: "⚡" },
    { id: "prix", label: "Tarifs & Paiement", icon: "💶" },
];

export default function FAQPage() {
    // FAQPage Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className={styles.page}>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <span className={styles.eyebrow}>FAQ</span>
                        <h1 className={styles.title}>
                            Questions <span className={styles.highlight}>fréquentes</span>
                        </h1>
                        <p className={styles.description}>
                            Retrouvez les réponses aux questions les plus posées sur nos services électriques.
                        </p>
                    </div>
                </section>

                {categories.map(category => {
                    const categoryFaqs = faqs.filter(faq => faq.category === category.id);
                    if (categoryFaqs.length === 0) return null;

                    return (
                        <section key={category.id} className={styles.section} id={category.id}>
                            <div className={styles.container}>
                                <h2 className={styles.sectionTitle}>
                                    <span className={styles.sectionIcon}>{category.icon}</span>
                                    {category.label}
                                </h2>
                                <div className={styles.faqGrid}>
                                    {categoryFaqs.map((faq) => (
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
                    );
                })}

                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <h2 className={styles.ctaTitle}>Vous n&apos;avez pas trouvé votre réponse ?</h2>
                        <p className={styles.ctaSubtitle}>
                            Contactez-nous directement, nous vous répondons en moins de 2h.
                        </p>
                        <div className={styles.ctas}>
                            <a
                                href="https://wa.me/32489986209?text=Bonjour, j'ai une question..."
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.primaryCta}
                            >
                                💬 WhatsApp
                            </a>
                            <a href="tel:+32489986209" className={styles.secondaryCta}>
                                📞 +32 489 98 62 09
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
