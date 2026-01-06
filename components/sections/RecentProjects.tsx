import Image from "next/image";
import Link from "next/link";
import styles from "./RecentProjects.module.css";

const projects = [
    {
        src: "/images/work/project_renovation_ixelles.png",
        title: "Rénovation complète",
        location: "Ixelles",
        alt: "Rénovation électrique complète d'une maison de maître à Ixelles",
    },
    {
        src: "/images/work/project_intercom_etterbeek.png",
        title: "Vidéophonie immeuble",
        location: "Etterbeek",
        alt: "Installation système vidéophonie dans un immeuble à Etterbeek",
    },
    {
        src: "/images/work/project_panel_auderghem.png",
        title: "Tableau 40 modules",
        location: "Auderghem",
        alt: "Installation d'un tableau électrique 40 modules à Auderghem",
    },
];

export function RecentProjects() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Réalisations</span>
                    <h2 className={styles.title}>
                        Projets <span className={styles.highlight}>récents</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <Link href="/realisations" key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.src}
                                    alt={project.alt}
                                    width={400}
                                    height={267}
                                    className={styles.image}
                                />
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
                        </Link>
                    ))}
                </div>

                <div className={styles.cta}>
                    <Link href="/realisations" className={styles.ctaButton}>
                        Voir toutes nos réalisations →
                    </Link>
                </div>
            </div>
        </section>
    );
}
