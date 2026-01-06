import Link from "next/link";
import styles from "./CoverageMap.module.css";

const communes = [
    "Uccle", "Ixelles", "Etterbeek", "Woluwe-St-Pierre",
    "Woluwe-St-Lambert", "Auderghem", "Watermael-Boitsfort",
    "Forest", "Saint-Gilles", "Schaerbeek"
];

export function CoverageMap() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Main content */}
                <div className={styles.content}>
                    <div className={styles.textSide}>
                        <span className={styles.eyebrow}>Zone d&apos;intervention</span>
                        <h2 className={styles.title}>
                            Nous intervenons <span className={styles.highlight}>partout</span>
                        </h2>
                        <p className={styles.description}>
                            Bruxelles et ses 19 communes, la périphérie, et toute la Belgique sur demande.
                        </p>

                        {/* Location chips */}
                        <div className={styles.chips}>
                            {communes.map((commune, i) => (
                                <span key={i} className={styles.chip}>{commune}</span>
                            ))}
                            <span className={styles.chipMore}>+10 autres</span>
                        </div>
                    </div>

                    <div className={styles.mapSide}>
                        {/* Coverage visual */}
                        <div className={styles.coverageVisual}>
                            <div className={styles.ring}>
                                <div className={styles.ringInner}>
                                    <span className={styles.ringLabel}>Bruxelles</span>
                                    <span className={styles.ringCount}>19 communes</span>
                                </div>
                            </div>
                            <div className={styles.ringOuter}>
                                <span>Périphérie</span>
                            </div>
                            <div className={styles.ringFull}>
                                <span>Belgique sur demande</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className={styles.cta}>
                    <p className={styles.ctaText}>
                        Votre commune n&apos;est pas listée ? Pas de souci, nous y intervenons probablement.
                    </p>
                    <div className={styles.ctaButtons}>
                        <a
                            href="https://wa.me/32489986209?text=Bonjour, intervenez-vous à [ma commune] ?"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.primaryCta}
                        >
                            Vérifier ma zone
                        </a>
                        <Link href="/zones" className={styles.secondaryCta}>
                            Voir toutes les zones →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
