"use client";

import Image from "next/image";
import { useState } from "react";
import type { Metadata } from "next";
import styles from "./page.module.css";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

const projects = [
    {
        type: "slider" as const,
        beforeImage: "/images/work/rgie_before_2.png",
        afterImage: "/images/work/rgie_after_2.png",
        title: "Après mise en conformité",
        location: "Uccle",
        category: "RGIE",
        beforeAlt: "Installation électrique non-conforme RGIE",
        afterAlt: "Installation électrique conforme RGIE",
    },
    {
        type: "slider" as const,
        beforeImage: "/images/work/rgie_before.png",
        afterImage: "/images/work/rgie_after.png",
        title: "Mise en conformité RGIE",
        location: "Bruxelles",
        category: "RGIE",
        beforeAlt: "Tableau électrique avant mise en conformité RGIE",
        afterAlt: "Tableau électrique après mise en conformité RGIE",
    },
    {
        type: "image" as const,
        src: "/images/work/ev_hero.png",
        title: "Borne de recharge Alfen 22kW",
        location: "Woluwe-Saint-Pierre",
        category: "Borne EV",
        alt: "Installation professionnelle de borne de recharge 22kW à Woluwe-Saint-Pierre",
    },
    {
        type: "image" as const,
        src: "/images/work/panel_uccle.png",
        title: "Tableau électrique Hager",
        location: "Uccle",
        category: "Tableau",
        alt: "Tableau électrique moderne Hager installé à Uccle",
    },
    {
        type: "image" as const,
        src: "/images/work/bornederecharge2.JPG",
        title: "Borne de recharge résidentielle",
        location: "Dilbeek",
        category: "Borne EV",
        alt: "Installation borne de recharge résidentielle à Dilbeek",
    },
    {
        type: "image" as const,
        src: "/images/work/project_renovation_ixelles.png",
        title: "Rénovation complète appartement",
        location: "Ixelles",
        category: "Rénovation",
        alt: "Rénovation électrique complète d'un appartement à Ixelles",
    },
    {
        type: "image" as const,
        src: "/images/work/borne4.JPG",
        title: "Borne Wallbox Pulsar",
        location: "Waterloo",
        category: "Borne EV",
        alt: "Installation Wallbox Pulsar à Waterloo",
    },
    {
        type: "image" as const,
        src: "/images/work/borne3.JPG",
        title: "Installation borne garage",
        location: "Tervuren",
        category: "Borne EV",
        alt: "Installation borne de recharge dans garage à Tervuren",
    },
    {
        type: "image" as const,
        src: "/images/work/project_intercom_etterbeek.png",
        title: "Vidéophonie immeuble 12 unités",
        location: "Etterbeek",
        category: "Vidéophone",
        alt: "Installation système vidéophonie dans immeuble à Etterbeek",
    },
    {
        type: "image" as const,
        src: "/images/work/tableau2.JPG",
        title: "Tableau professionnel",
        location: "Zaventem",
        category: "Tableau",
        alt: "Installation tableau électrique professionnel à Zaventem",
    },
    {
        type: "image" as const,
        src: "/images/work/renovation_ixelles.png",
        title: "Câblage rénovation",
        location: "Ixelles",
        category: "Rénovation",
        alt: "Rénovation électrique câblage professionnel à Ixelles",
    },
    {
        type: "image" as const,
        src: "/images/work/ev_charger_woluwe.png",
        title: "Borne Wallbox extérieure",
        location: "Woluwe-Saint-Pierre",
        category: "Borne EV",
        alt: "Borne de recharge Wallbox extérieure à Woluwe-Saint-Pierre",
    },
    {
        type: "image" as const,
        src: "/images/work/project_panel_auderghem.png",
        title: "Tableau 40 modules",
        location: "Auderghem",
        category: "Tableau",
        alt: "Installation tableau électrique 40 modules à Auderghem",
    },
    {
        type: "image" as const,
        src: "/images/work/videophone_etterbeek.png",
        title: "Vidéophone moderne",
        location: "Etterbeek",
        category: "Vidéophone",
        alt: "Installation vidéophone moderne à Etterbeek",
    },
    {
        type: "image" as const,
        src: "/images/work/socket_auderghem.png",
        title: "Finitions soignées",
        location: "Auderghem",
        category: "Rénovation",
        alt: "Installation prises électriques finitions soignées à Auderghem",
    },
];

const categories = ["Tous", "Borne EV", "Tableau", "RGIE", "Rénovation", "Vidéophone"];

export default function RealisationsPage() {
    const [activeCategory, setActiveCategory] = useState("Tous");

    const filteredProjects =
        activeCategory === "Tous"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Portfolio</span>
                    <h1 className={styles.title}>
                        Nos <span className={styles.highlight}>réalisations</span>
                    </h1>
                    <p className={styles.description}>
                        Découvrez nos travaux récents à Bruxelles et en périphérie.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className={styles.stats}>
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>500+</span>
                            <span className={styles.statLabel}>Projets réalisés</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>50+</span>
                            <span className={styles.statLabel}>Bornes EV</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>100%</span>
                            <span className={styles.statLabel}>Satisfaction</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className={styles.gallery}>
                <div className={styles.container}>
                    {/* Category Filter */}
                    <div className={styles.filters}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ""}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Masonry Grid */}
                    <div className={styles.grid}>
                        {filteredProjects.map((project, index) => (
                            <div
                                key={index}
                                className={`${styles.card} ${index % 5 === 0 ? styles.cardLarge : ""}`}
                            >
                                {project.type === "slider" ? (
                                    <>
                                        <BeforeAfterSlider
                                            beforeImage={project.beforeImage}
                                            afterImage={project.afterImage}
                                            beforeAlt={project.beforeAlt}
                                            afterAlt={project.afterAlt}
                                        />
                                        <div className={styles.cardContent}>
                                            <h3 className={styles.cardTitle}>{project.title}</h3>
                                            <span className={styles.cardLocation}>
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                    <circle cx="12" cy="10" r="3" />
                                                </svg>
                                                {project.location}
                                            </span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className={styles.imageWrapper}>
                                            <Image
                                                src={project.src}
                                                alt={project.alt}
                                                width={600}
                                                height={400}
                                                className={styles.image}
                                            />
                                            <div className={styles.overlay}>
                                                <span className={styles.category}>{project.category}</span>
                                            </div>
                                        </div>
                                        <div className={styles.cardContent}>
                                            <h3 className={styles.cardTitle}>{project.title}</h3>
                                            <span className={styles.cardLocation}>
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                    <circle cx="12" cy="10" r="3" />
                                                </svg>
                                                {project.location}
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2 className={styles.ctaTitle}>Votre projet est le prochain ?</h2>
                    <p className={styles.ctaSubtitle}>Demandez votre devis gratuit en 2 minutes.</p>
                    <div className={styles.ctaButtons}>
                        <a
                            href="https://wa.me/32489986209?text=Bonjour, je souhaite un devis..."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.primaryCta}
                        >
                            💬 WhatsApp
                        </a>
                        <a href="/devis-gratuit" className={styles.secondaryCta}>
                            Demander un devis
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
