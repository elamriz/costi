import styles from "./CTABand.module.css";

export function CTABand() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.glow} />
                <div className={styles.content}>
                    <span className={styles.eyebrow}>⚡ Disponible aujourd&apos;hui</span>
                    <h2 className={styles.title}>
                        Votre projet électrique<br />
                        <span className={styles.highlight}>démarre ici</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Réponse en moins de 2h • Devis en 24h • Intervention 7j/7
                    </p>
                    <div className={styles.ctas}>
                        <a
                            href="https://wa.me/32489986209?text=Bonjour, je souhaite un devis pour..."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.primaryCta}
                        >
                            💬 WhatsApp — Réponse immédiate
                        </a>
                        <a href="tel:+32489986209" className={styles.secondaryCta}>
                            📞 +32 489 98 62 09
                        </a>
                    </div>
                    <p className={styles.note}>
                        Dernière intervention : Uccle, ce matin
                    </p>
                </div>
            </div>
        </section>
    );
}
