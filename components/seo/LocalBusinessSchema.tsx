export function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Electrician",
        "@id": "https://costielec.be/#business",
        name: "COSTI ELEC",
        image: "https://costielec.be/logo.png",
        telephone: "+32489986209",
        email: "costi.elec@gmail.com",
        url: "https://costielec.be",
        priceRange: "€€",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Bruxelles",
            addressRegion: "Bruxelles-Capitale",
            addressCountry: "BE",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 50.8503,
            longitude: 4.3517,
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                ],
                opens: "08:00",
                closes: "20:00",
            },
        ],
        areaServed: [
            { "@type": "City", name: "Bruxelles" },
            { "@type": "City", name: "Uccle" },
            { "@type": "City", name: "Ixelles" },
            { "@type": "City", name: "Woluwe-Saint-Pierre" },
            { "@type": "City", name: "Woluwe-Saint-Lambert" },
            { "@type": "City", name: "Etterbeek" },
            { "@type": "City", name: "Auderghem" },
            { "@type": "City", name: "Watermael-Boitsfort" },
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Services électriques",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Conformité RGIE" },
                },
                {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Rénovation électrique" },
                },
                {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Tableau électrique" },
                },
                {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Mise en sécurité" },
                },
                {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Vidéophone & Interphone" },
                },
                {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Borne de recharge" },
                },
            ],
        },
        sameAs: [
            "https://www.facebook.com/costielec",
            "https://www.instagram.com/costielec",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
