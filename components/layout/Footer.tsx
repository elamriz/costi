import Link from "next/link";
import styles from "./Footer.module.css";
import services from "@/lib/data/services.json";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        <Link href="/" className={styles.logo}>
                            <span className={styles.logoText}>COSTI</span>
                            <span className={styles.logoBolt}>⚡</span>
                            <span className={styles.logoAccent}>ELEC</span>
                        </Link>
                        <p className={styles.tagline}>
                            Votre électricien de confiance. Qualité, réactivité et
                            transparence. Bruxelles, alentours et toute la Belgique.
                        </p>
                        <div className={styles.badges}>
                            <span className={styles.badge}>Certifié RGIE</span>
                            <span className={styles.badge}>7j/7</span>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className={styles.linksColumn}>
                        <h3 className={styles.columnTitle}>Services</h3>
                        <ul className={styles.linksList}>
                            {services.map((service) => (
                                <li key={service.slug}>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className={styles.link}
                                    >
                                        {service.shortTitle}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation Column */}
                    <div className={styles.linksColumn}>
                        <h3 className={styles.columnTitle}>Navigation</h3>
                        <ul className={styles.linksList}>
                            <li>
                                <Link href="/a-propos" className={styles.link}>
                                    À propos
                                </Link>
                            </li>
                            <li>
                                <Link href="/realisations" className={styles.link}>
                                    Réalisations
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className={styles.link}>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className={styles.link}>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/devis-gratuit" className={styles.linkAccent}>
                                    Devis gratuit →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className={styles.contactColumn}>
                        <h3 className={styles.columnTitle}>Contact</h3>
                        <div className={styles.contactInfo}>
                            <a
                                href="https://wa.me/32489986209"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.whatsappLink}
                            >
                                <span className={styles.contactIcon}>💬</span>
                                <span>WhatsApp</span>
                            </a>
                            <a href="tel:+32489986209" className={styles.contactLink}>
                                <span className={styles.contactIcon}>📞</span>
                                <span>+32 489 98 62 09</span>
                            </a>
                            <a
                                href="mailto:costi.elec@gmail.com"
                                className={styles.contactLink}
                            >
                                <span className={styles.contactIcon}>✉️</span>
                                <span>costi.elec@gmail.com</span>
                            </a>
                        </div>
                        <div className={styles.hours}>
                            <p className={styles.hoursLabel}>Disponibilité</p>
                            <p className={styles.hoursValue}>Lun - Dim: 08:00 - 20:00</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} COSTI ELEC. Tous droits réservés.
                    </p>
                    <div className={styles.legalLinks}>
                        <Link href="/mentions-legales" className={styles.legalLink}>
                            Mentions légales
                        </Link>
                        <span className={styles.separator}>·</span>
                        <Link href="/sitemap.xml" className={styles.legalLink}>
                            Plan du site
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
