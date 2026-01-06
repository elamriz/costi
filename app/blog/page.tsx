import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Blog | COSTI ELEC — Conseils Électricité",
    description:
        "Conseils, guides et actualités sur l'électricité : normes RGIE, rénovation, bornes de recharge, sécurité électrique et plus.",
};

const articles = [
    {
        slug: "conformite-rgie-guide-complet",
        title: "Guide complet : La conformité RGIE en Belgique",
        excerpt:
            "Tout ce que vous devez savoir sur le contrôle électrique obligatoire : délais, coût, préparation et comment éviter les infractions.",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
        category: "RGIE",
        date: "15 Jan 2026",
    },
    {
        slug: "borne-recharge-maison",
        title: "Installer une borne de recharge à la maison",
        excerpt:
            "Guide pratique pour choisir et installer une borne de recharge pour véhicule électrique. Puissance, coût, démarches.",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop",
        category: "Borne EV",
        date: "10 Jan 2026",
    },
    {
        slug: "securite-electrique-maison",
        title: "5 signes que votre installation électrique est dangereuse",
        excerpt:
            "Apprenez à reconnaître les signaux d'alerte d'une installation vétuste ou dangereuse et quand faire appel à un professionnel.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        category: "Sécurité",
        date: "5 Jan 2026",
    },
    {
        slug: "renovation-electrique-appartement",
        title: "Rénover l'électricité d'un appartement ancien",
        excerpt:
            "Étapes clés et budget pour la rénovation électrique complète d'un appartement des années 60-70.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
        category: "Rénovation",
        date: "28 Dec 2025",
    },
];

export default function BlogPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Blog</span>
                    <h1 className={styles.title}>
                        Conseils <span className={styles.highlight}>électricité</span>
                    </h1>
                    <p className={styles.description}>
                        Guides pratiques, actualités RGIE et conseils d&apos;expert pour vos
                        projets électriques.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {articles.map((article) => (
                            <article key={article.slug} className={styles.card}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        width={600}
                                        height={400}
                                        className={styles.image}
                                    />
                                    <span className={styles.category}>{article.category}</span>
                                </div>
                                <div className={styles.cardContent}>
                                    <span className={styles.date}>{article.date}</span>
                                    <h2 className={styles.cardTitle}>{article.title}</h2>
                                    <p className={styles.cardExcerpt}>{article.excerpt}</p>
                                    <span className={styles.readMore}>Lire l&apos;article →</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2 className={styles.ctaTitle}>Une question sur l&apos;électricité ?</h2>
                    <p className={styles.ctaSubtitle}>
                        Nos experts sont disponibles pour vous répondre.
                    </p>
                    <a
                        href="https://wa.me/32489986209?text=Bonjour, j'ai une question..."
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                    >
                        💬 Poser une question
                    </a>
                </div>
            </section>
        </div>
    );
}
