import Image from "next/image";
import Link from "next/link";
import styles from "./WorkStrip.module.css";

const workImages = [
    {
        src: "/images/work/panel_uccle.png",
        location: "Uccle",
        alt: "Tableau électrique moderne installé dans une maison à Uccle",
    },
    {
        src: "/images/work/bornederecharge2.JPG",
        location: "Dilbeek",
        alt: "Borne de recharge installée à Dilbeek",
    },
    {
        src: "/images/work/renovation_ixelles.png",
        location: "Ixelles",
        alt: "Rénovation électrique dans un appartement à Ixelles",
    },
    {
        src: "/images/work/borne4.JPG",
        location: "Waterloo",
        alt: "Installation borne de recharge à Waterloo",
    },
    {
        src: "/images/work/ev_charger_woluwe.png",
        location: "Woluwe",
        alt: "Borne de recharge Wallbox installée à Woluwe-Saint-Pierre",
    },
    {
        src: "/images/work/tableau2.JPG",
        location: "Zaventem",
        alt: "Tableau électrique professionnel à Zaventem",
    },
    {
        src: "/images/work/videophone_etterbeek.png",
        location: "Etterbeek",
        alt: "Vidéophone installé dans un immeuble à Etterbeek",
    },
    {
        src: "/images/work/borne3.JPG",
        location: "Tervuren",
        alt: "Installation borne EV à Tervuren",
    },
];

export function WorkStrip() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Nos derniers travaux — <span className={styles.highlight}>Bruxelles &amp; alentours</span>
                    </h2>
                    <Link href="/realisations" className={styles.link}>
                        Voir tous →
                    </Link>
                </div>

                <div className={styles.strip}>
                    {workImages.map((image, index) => (
                        <Link href="/realisations" key={index} className={styles.imageCard}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={160}
                                    height={160}
                                    className={styles.image}
                                />
                            </div>
                            <span className={styles.location}>{image.location}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
