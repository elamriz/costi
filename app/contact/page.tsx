import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Contact | COSTI ELEC — Électricien Bruxelles",
    description:
        "Contactez COSTI ELEC, votre électricien à Bruxelles. Téléphone, WhatsApp, email. Disponible 7j/7. Devis gratuit.",
};

export default function ContactPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Contact</span>
                    <h1 className={styles.title}>
                        Contactez-<span className={styles.highlight}>nous</span>
                    </h1>
                    <p className={styles.description}>
                        Une question, un projet ? Nous sommes disponibles 7 jours sur 7
                        pour vous répondre.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {/* Contact Info */}
                        <div className={styles.infoColumn}>
                            <h2 className={styles.infoTitle}>Nos coordonnées</h2>

                            <div className={styles.contactCard}>
                                <span className={styles.cardIcon}>📞</span>
                                <div>
                                    <h3 className={styles.cardTitle}>Téléphone</h3>
                                    <a href="tel:+32489986209" className={styles.cardLink}>
                                        +32 489 98 62 09
                                    </a>
                                </div>
                            </div>

                            <div className={styles.contactCard}>
                                <span className={styles.cardIcon}>💬</span>
                                <div>
                                    <h3 className={styles.cardTitle}>WhatsApp</h3>
                                    <a
                                        href="https://wa.me/32489986209"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.cardLink}
                                    >
                                        Envoyer un message
                                    </a>
                                </div>
                            </div>

                            <div className={styles.contactCard}>
                                <span className={styles.cardIcon}>✉️</span>
                                <div>
                                    <h3 className={styles.cardTitle}>Email</h3>
                                    <a
                                        href="mailto:costi.elec@gmail.com"
                                        className={styles.cardLink}
                                    >
                                        costi.elec@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className={styles.availability}>
                                <h3 className={styles.availabilityTitle}>Disponibilité</h3>
                                <p className={styles.availabilityText}>
                                    Lundi - Dimanche : 08:00 - 20:00
                                </p>
                                <span className={styles.availabilityBadge}>
                                    ⚡ Réponse sous 24h
                                </span>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={styles.formColumn}>
                            <h2 className={styles.formTitle}>Envoyez-nous un message</h2>
                            <form className={styles.form}>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name" className={styles.label}>
                                            Nom complet *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className={styles.input}
                                            placeholder="Votre nom"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone" className={styles.label}>
                                            Téléphone *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            className={styles.input}
                                            placeholder="+32 4XX XX XX XX"
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.label}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={styles.input}
                                        placeholder="votre@email.be"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="service" className={styles.label}>
                                        Service souhaité
                                    </label>
                                    <select id="service" name="service" className={styles.select}>
                                        <option value="">Sélectionnez un service</option>
                                        <option value="conformite-rgie">Conformité RGIE</option>
                                        <option value="renovation">Rénovation électrique</option>
                                        <option value="tableau">Tableau électrique</option>
                                        <option value="securite">Mise en sécurité</option>
                                        <option value="videophone">Vidéophone / Interphone</option>
                                        <option value="borne">Borne de recharge</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.label}>
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        className={styles.textarea}
                                        placeholder="Décrivez votre projet ou votre question..."
                                    />
                                </div>

                                <button type="submit" className={styles.submitButton}>
                                    Envoyer le message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
