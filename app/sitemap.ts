import { MetadataRoute } from "next";
import services from "@/lib/data/services.json";
import locations from "@/lib/data/locations.json";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://costielec.be";

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: new Date(), priority: 1.0, changeFrequency: "weekly" },
        { url: `${baseUrl}/services`, lastModified: new Date(), priority: 0.9, changeFrequency: "monthly" },
        { url: `${baseUrl}/zones`, lastModified: new Date(), priority: 0.9, changeFrequency: "monthly" },
        { url: `${baseUrl}/realisations`, lastModified: new Date(), priority: 0.8, changeFrequency: "monthly" },
        { url: `${baseUrl}/a-propos`, lastModified: new Date(), priority: 0.7, changeFrequency: "monthly" },
        { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8, changeFrequency: "monthly" },
        { url: `${baseUrl}/devis-gratuit`, lastModified: new Date(), priority: 0.9, changeFrequency: "monthly" },
        { url: `${baseUrl}/faq`, lastModified: new Date(), priority: 0.7, changeFrequency: "monthly" },
        { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.6, changeFrequency: "weekly" },
        { url: `${baseUrl}/mentions-legales`, lastModified: new Date(), priority: 0.3, changeFrequency: "yearly" },
    ];

    // Service pages
    const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        priority: 0.8,
        changeFrequency: "monthly" as const,
    }));

    // Location pages
    const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
        url: `${baseUrl}/zones/${location.slug}`,
        lastModified: new Date(),
        priority: location.type === "premium" ? 0.8 : 0.7,
        changeFrequency: "monthly" as const,
    }));

    return [...staticPages, ...servicePages, ...locationPages];
}
