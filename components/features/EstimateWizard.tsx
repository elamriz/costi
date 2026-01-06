"use client";

import { useState } from "react";
import styles from "./EstimateWizard.module.css";

type PropertyType = "maison" | "appartement" | "immeuble" | "";
type ServiceType = "rgie" | "renovation" | "tableau" | "securite" | "videophone" | "borne" | "";

// Premium SVG icons
const PropertyIcons = {
    maison: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    ),
    appartement: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
            <line x1="9" y1="6" x2="9.01" y2="6" />
            <line x1="15" y1="6" x2="15.01" y2="6" />
            <line x1="9" y1="10" x2="9.01" y2="10" />
            <line x1="15" y1="10" x2="15.01" y2="10" />
            <line x1="9" y1="14" x2="9.01" y2="14" />
            <line x1="15" y1="14" x2="15.01" y2="14" />
            <path d="M9 18h6v4H9z" />
        </svg>
    ),
    immeuble: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="3" y1="15" x2="21" y2="15" />
            <line x1="9" y1="9" x2="9" y2="21" />
            <line x1="15" y1="9" x2="15" y2="21" />
        </svg>
    ),
};

const ServiceIcons = {
    rgie: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
        </svg>
    ),
    renovation: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    ),
    tableau: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
        </svg>
    ),
    securite: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
    ),
    videophone: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
    ),
    borne: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
    ),
};

export function EstimateWizard() {
    const [step, setStep] = useState(1);
    const [propertyType, setPropertyType] = useState<PropertyType>("");
    const [serviceType, setServiceType] = useState<ServiceType>("");

    const propertyOptions = [
        { value: "maison", label: "Maison" },
        { value: "appartement", label: "Appartement" },
        { value: "immeuble", label: "Immeuble" },
    ];

    const serviceOptions = [
        { value: "rgie", label: "RGIE" },
        { value: "renovation", label: "Rénovation" },
        { value: "tableau", label: "Tableau" },
        { value: "securite", label: "Sécurité" },
        { value: "videophone", label: "Vidéophone" },
        { value: "borne", label: "Borne EV" },
    ];

    const handlePropertySelect = (value: PropertyType) => {
        setPropertyType(value);
        setStep(2);
    };

    const handleServiceSelect = (value: ServiceType) => {
        setServiceType(value);
        const property = propertyOptions.find(p => p.value === propertyType)?.label;
        const service = serviceOptions.find(s => s.value === value)?.label;
        const message = encodeURIComponent(
            `Bonjour, je souhaite un devis pour ${service} dans mon ${property?.toLowerCase()}.`
        );
        window.open(`https://wa.me/32489986209?text=${message}`, "_blank");
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <div className={styles.wizard}>
            <div className={styles.header}>
                <svg className={styles.headerIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span className={styles.title}>Devis express</span>
            </div>

            {step === 1 && (
                <div className={styles.step}>
                    <p className={styles.question}>Type de bien ?</p>
                    <div className={styles.options}>
                        {propertyOptions.map((option) => (
                            <button
                                key={option.value}
                                className={styles.optionButton}
                                onClick={() => handlePropertySelect(option.value as PropertyType)}
                            >
                                <span className={styles.optionIcon}>
                                    {PropertyIcons[option.value as keyof typeof PropertyIcons]}
                                </span>
                                <span className={styles.optionLabel}>{option.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className={styles.step}>
                    <p className={styles.question}>Service ?</p>
                    <div className={styles.optionsGrid}>
                        {serviceOptions.map((option) => (
                            <button
                                key={option.value}
                                className={styles.optionButtonSmall}
                                onClick={() => handleServiceSelect(option.value as ServiceType)}
                            >
                                <span className={styles.optionIconSmall}>
                                    {ServiceIcons[option.value as keyof typeof ServiceIcons]}
                                </span>
                                <span className={styles.optionLabelSmall}>{option.label}</span>
                            </button>
                        ))}
                    </div>
                    <button className={styles.backButton} onClick={handleBack}>
                        ← Retour
                    </button>
                </div>
            )}

            <div className={styles.progress}>
                <div
                    className={styles.progressBar}
                    style={{ width: `${(step / 2) * 100}%` }}
                />
            </div>
        </div>
    );
}
