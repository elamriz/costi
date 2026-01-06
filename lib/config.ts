// Site configuration - reads from environment variables
export const config = {
    // Company
    company: {
        name: "COSTI ELEC",
        phone: process.env.NEXT_PUBLIC_PHONE || "+32489986209",
        whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "32489986209",
        email: process.env.NEXT_PUBLIC_EMAIL || "contact@costielec.be",
    },

    // Formspree
    formspree: {
        contactFormId: process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID || "",
        quoteFormId: process.env.NEXT_PUBLIC_FORMSPREE_QUOTE_ID || "",
    },

    // URLs
    urls: {
        whatsapp: (message = "") =>
            `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || "32489986209"}${message ? `?text=${encodeURIComponent(message)}` : ""}`,
        formspreeContact: () =>
            `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID}`,
        formspreeQuote: () =>
            `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_QUOTE_ID}`,
    },
};
