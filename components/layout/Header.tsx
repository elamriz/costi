"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Header.module.css";
import services from "@/lib/data/services.json";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="COSTI ELEC - Électricien Bruxelles"
                        width={160}
                        height={50}
                        className={styles.logoImage}
                        priority
                        unoptimized
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav}>
                    <div
                        className={styles.navItem}
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <button className={styles.navButton}>
                            Services
                            <svg
                                className={styles.chevron}
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                            >
                                <path
                                    d="M3 4.5L6 7.5L9 4.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                        {servicesOpen && (
                            <div className={styles.dropdown}>
                                <div className={styles.dropdownGrid}>
                                    {services.map((service) => (
                                        <Link
                                            key={service.slug}
                                            href={`/services/${service.slug}`}
                                            className={styles.dropdownItem}
                                        >
                                            <span className={styles.dropdownTitle}>
                                                {service.title}
                                            </span>
                                            <span className={styles.dropdownDesc}>
                                                {service.shortDescription}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <Link href="/zones" className={styles.navLink}>
                        Zones
                    </Link>
                    <Link href="/realisations" className={styles.navLink}>
                        Réalisations
                    </Link>
                    <Link href="/a-propos" className={styles.navLink}>
                        À propos
                    </Link>
                    <Link href="/contact" className={styles.navLink}>
                        Contact
                    </Link>
                </nav>

                {/* CTA Button */}
                <Link href="/devis-gratuit" className={styles.ctaButton}>
                    Devis Gratuit
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuButton}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Menu"
                >
                    <span
                        className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.open : ""}`}
                    />
                    <span
                        className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.open : ""}`}
                    />
                    <span
                        className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.open : ""}`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <nav className={styles.mobileNav}>
                        <Link
                            href="/services"
                            className={styles.mobileNavLink}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Services
                        </Link>
                        {services.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className={styles.mobileNavSubLink}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {service.title}
                            </Link>
                        ))}
                        <Link
                            href="/zones"
                            className={styles.mobileNavLink}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Zones
                        </Link>
                        <Link
                            href="/realisations"
                            className={styles.mobileNavLink}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Réalisations
                        </Link>
                        <Link
                            href="/a-propos"
                            className={styles.mobileNavLink}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            À propos
                        </Link>
                        <Link
                            href="/contact"
                            className={styles.mobileNavLink}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/devis-gratuit"
                            className={styles.mobileCta}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Devis Gratuit
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
