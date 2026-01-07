"use client";

import { useState } from "react";
import type { Metadata } from "next";
import styles from "./page.module.css";
import services from "@/lib/data/services.json";
import locations from "@/lib/data/locations.json";

type Step = 1 | 2 | 3 | 4;
type PropertyType = "maison" | "appartement" | "immeuble" | "";

const premiumLocations = locations.filter((l) => l.type === "premium");

export default function DevisGratuitPage() {
    const [step, setStep] = useState<Step>(1);
    const [propertyType, setPropertyType] = useState<PropertyType>("");
    const [selectedService, setSelectedService] = useState("");
    const [municipality, setMunicipality] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const selectedServiceData = services.find((s) => s.slug === selectedService);
        const subject = `Demande de devis - ${selectedServiceData?.title || "Service"} - ${municipality}`;

        const body = `Bonjour COSTI ELEC,

Je souhaite recevoir un devis pour le service suivant :

📋 RÉCAPITULATIF
Type de propriété : ${propertyType}
Service demandé : ${selectedServiceData?.title || selectedService}
Commune : ${municipality}

👤 MES COORDONNÉES
Nom : ${formData.name}
Téléphone : ${formData.phone}
${formData.email ? `Email : ${formData.email}` : ""}

${formData.message ? `💬 MESSAGE\n${formData.message}` : ""}

Merci de me recontacter dans les meilleurs délais.

Cordialement,
${formData.name}`;

        window.location.href = `mailto:costi.elec@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Devis Gratuit</span>
                    <h1 className={styles.title}>
                        Demandez votre <span className={styles.highlight}>devis</span>
                    </h1>
                    <p className={styles.description}>
                        Remplissez ce formulaire en 2 minutes et recevez votre devis
                        personnalisé sous 24h.
                    </p>
                </div>
            </section>

            <section className={styles.wizardSection}>
                <div className={styles.wizardContainer}>
                    {/* Progress */}
                    <div className={styles.progress}>
                        {[1, 2, 3, 4].map((s) => (
                            <div
                                key={s}
                                className={`${styles.progressStep} ${step >= s ? styles.active : ""}`}
                            >
                                <span className={styles.progressNumber}>{s}</span>
                                <span className={styles.progressLabel}>
                                    {s === 1 && "Type"}
                                    {s === 2 && "Service"}
                                    {s === 3 && "Zone"}
                                    {s === 4 && "Contact"}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Step 1: Property Type */}
                    {step === 1 && (
                        <div className={styles.stepContent}>
                            <h2 className={styles.stepTitle}>Type de propriété</h2>
                            <p className={styles.stepDesc}>
                                Quel type de bien nécessite une intervention ?
                            </p>
                            <div className={styles.optionsGrid}>
                                {[
                                    { value: "maison", label: "Maison", icon: "🏠" },
                                    { value: "appartement", label: "Appartement", icon: "🏢" },
                                    { value: "immeuble", label: "Immeuble", icon: "🏬" },
                                ].map((option) => (
                                    <button
                                        key={option.value}
                                        className={`${styles.optionCard} ${propertyType === option.value ? styles.selected : ""}`}
                                        onClick={() => {
                                            setPropertyType(option.value as PropertyType);
                                            setStep(2);
                                        }}
                                    >
                                        <span className={styles.optionIcon}>{option.icon}</span>
                                        <span className={styles.optionLabel}>{option.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 2: Service */}
                    {step === 2 && (
                        <div className={styles.stepContent}>
                            <h2 className={styles.stepTitle}>Service souhaité</h2>
                            <p className={styles.stepDesc}>
                                Quel type d&apos;intervention recherchez-vous ?
                            </p>
                            <div className={styles.servicesGrid}>
                                {services.map((service) => (
                                    <button
                                        key={service.slug}
                                        className={`${styles.serviceCard} ${selectedService === service.slug ? styles.selected : ""}`}
                                        onClick={() => {
                                            setSelectedService(service.slug);
                                            setStep(3);
                                        }}
                                    >
                                        <span className={styles.serviceTitle}>{service.title}</span>
                                        <span className={styles.serviceDesc}>
                                            {service.shortDescription}
                                        </span>
                                    </button>
                                ))}
                            </div>
                            <button
                                className={styles.backButton}
                                onClick={() => setStep(1)}
                            >
                                ← Retour
                            </button>
                        </div>
                    )}

                    {/* Step 3: Municipality */}
                    {step === 3 && (
                        <div className={styles.stepContent}>
                            <h2 className={styles.stepTitle}>Votre commune</h2>
                            <p className={styles.stepDesc}>
                                Où se situe le bien à intervenir ?
                            </p>
                            <div className={styles.municipalityGrid}>
                                {premiumLocations.map((loc) => (
                                    <button
                                        key={loc.slug}
                                        className={`${styles.municipalityChip} ${municipality === loc.name ? styles.selected : ""}`}
                                        onClick={() => {
                                            setMunicipality(loc.name);
                                            setStep(4);
                                        }}
                                    >
                                        {loc.name}
                                    </button>
                                ))}
                                <button
                                    className={`${styles.municipalityChip} ${municipality === "Autre" ? styles.selected : ""}`}
                                    onClick={() => {
                                        setMunicipality("Autre");
                                        setStep(4);
                                    }}
                                >
                                    Autre commune
                                </button>
                            </div>
                            <button
                                className={styles.backButton}
                                onClick={() => setStep(2)}
                            >
                                ← Retour
                            </button>
                        </div>
                    )}

                    {/* Step 4: Contact Form */}
                    {step === 4 && (
                        <div className={styles.stepContent}>
                            <h2 className={styles.stepTitle}>Vos coordonnées</h2>
                            <p className={styles.stepDesc}>
                                Comment pouvons-nous vous recontacter ?
                            </p>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.label}>
                                        Nom complet *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className={styles.input}
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
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
                                        required
                                        className={styles.input}
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({ ...formData, phone: e.target.value })
                                        }
                                        placeholder="+32 4XX XX XX XX"
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.label}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className={styles.input}
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        placeholder="votre@email.be"
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.label}>
                                        Message (optionnel)
                                    </label>
                                    <textarea
                                        id="message"
                                        className={styles.textarea}
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        placeholder="Décrivez votre projet..."
                                    />
                                </div>

                                {/* Summary */}
                                <div className={styles.summary}>
                                    <h3 className={styles.summaryTitle}>Récapitulatif</h3>
                                    <div className={styles.summaryItem}>
                                        <span>Type:</span>
                                        <span>{propertyType}</span>
                                    </div>
                                    <div className={styles.summaryItem}>
                                        <span>Service:</span>
                                        <span>
                                            {services.find((s) => s.slug === selectedService)?.title}
                                        </span>
                                    </div>
                                    <div className={styles.summaryItem}>
                                        <span>Commune:</span>
                                        <span>{municipality}</span>
                                    </div>
                                </div>

                                <button type="submit" className={styles.submitButton}>
                                    ⚡ Recevoir mon devis gratuit
                                </button>
                            </form>
                            <button
                                className={styles.backButton}
                                onClick={() => setStep(3)}
                            >
                                ← Retour
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
