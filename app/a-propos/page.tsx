import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "À Propos | COSTI ELEC — Électricien à Bruxelles",
    description:
        "Découvrez COSTI ELEC, votre électricien de confiance. 5 ans d'expérience, certifié RGIE, intervenant à Bruxelles et en Belgique.",
};

export default function AboutPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>À Propos</span>
                    <h1 className={styles.title}>
                        Un électricien <span className={styles.highlight}>passionné</span>
                    </h1>
                    <p className={styles.description}>
                        Depuis 5 ans, COSTI ELEC accompagne les particuliers et
                        professionnels dans tous leurs projets électriques.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/electrician_working.png"
                                alt="Électricien COSTI ELEC au travail"
                                width={600}
                                height={700}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.sectionTitle}>Notre histoire</h2>
                            <p className={styles.text}>
                                COSTI ELEC est né de la passion pour l&apos;électricité et du
                                désir d&apos;offrir un service de qualité irréprochable. Avec
                                5 années d&apos;expérience intensive dans le domaine, nous avons
                                développé une expertise solide et reconnue dans la région de
                                Bruxelles et ses environs.
                            </p>
                            <p className={styles.text}>
                                Notre mission est simple : fournir des solutions électriques
                                fiables, sécurisées et conformes aux normes RGIE, tout en
                                garantissant une transparence totale sur nos tarifs, nos
                                délais et la qualité de notre travail. Chaque projet est une
                                opportunité de démontrer notre savoir-faire.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.sectionAlt}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitleCenter}>Nos valeurs</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>✅</span>
                            <h3 className={styles.valueTitle}>Qualité</h3>
                            <p className={styles.valueText}>
                                Travail soigné et matériaux de qualité pour des installations
                                durables.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>🔒</span>
                            <h3 className={styles.valueTitle}>Sécurité</h3>
                            <p className={styles.valueText}>
                                Respect strict des normes RGIE pour votre protection.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>💬</span>
                            <h3 className={styles.valueTitle}>Transparence</h3>
                            <p className={styles.valueText}>
                                Devis détaillés et communication claire à chaque étape.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>🚀</span>
                            <h3 className={styles.valueTitle}>Réactivité</h3>
                            <p className={styles.valueText}>
                                Disponible 7j/7 avec des délais d&apos;intervention rapides.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2 className={styles.ctaTitle}>Prêt à travailler ensemble ?</h2>
                    <p className={styles.ctaSubtitle}>
                        Contactez-nous pour discuter de votre projet électrique.
                    </p>
                    <a
                        href="https://wa.me/32489986209?text=Bonjour, je souhaite discuter d'un projet..."
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                    >
                        💬 Discuter sur WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
}
