import styles from "./Testimonials.module.css";

const testimonials = [
    {
        id: 1,
        text: "Contrôle RGIE passé sans aucune remarque. Travail propre et électricien très ponctuel. Je recommande vivement !",
        author: "Marc D.",
        location: "Uccle",
        service: "Mise en conformité RGIE",
        rating: 5,
    },
    {
        id: 2,
        text: "Rénovation complète de notre appartement. Costi a été à l'écoute et le résultat est impeccable. Finitions parfaites.",
        author: "Sophie L.",
        location: "Ixelles",
        service: "Rénovation électrique",
        rating: 5,
    },
    {
        id: 3,
        text: "Installation de notre borne de recharge en moins de 48h. Excellente communication et prix honnête.",
        author: "Jean-Pierre V.",
        location: "Woluwe",
        service: "Borne de recharge",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Témoignages</span>
                    <h2 className={styles.title}>
                        Ce que disent nos <span className={styles.highlight}>clients</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className={styles.card}>
                            <div className={styles.stars}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className={styles.star}>★</span>
                                ))}
                            </div>
                            <blockquote className={styles.quote}>
                                « {testimonial.text} »
                            </blockquote>
                            <div className={styles.author}>
                                <span className={styles.authorName}>{testimonial.author}</span>
                                <span className={styles.authorMeta}>
                                    {testimonial.location} • {testimonial.service}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Google Badge */}
                <div className={styles.googleBadge}>
                    <div className={styles.googleLogo}>
                        <span className={styles.googleG}>G</span>
                    </div>
                    <div className={styles.googleInfo}>
                        <div className={styles.googleRating}>
                            <span className={styles.ratingNumber}>4.9</span>
                            <span className={styles.ratingStars}>★★★★★</span>
                        </div>
                        <span className={styles.ratingCount}>sur 47 avis Google</span>
                    </div>
                </div>
            </div>

            {/* Review Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "COSTI ELEC",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "47"
                        },
                        "review": testimonials.map(t => ({
                            "@type": "Review",
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": t.rating.toString()
                            },
                            "author": {
                                "@type": "Person",
                                "name": t.author
                            },
                            "reviewBody": t.text
                        }))
                    })
                }}
            />
        </section>
    );
}
