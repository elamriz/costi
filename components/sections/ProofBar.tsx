import styles from "./ProofBar.module.css";

export function ProofBar() {
    const proofs = [
        { icon: "⚡", label: "Travail soigné" },
        { icon: "🕐", label: "Disponible 7j/7" },
        { icon: "✅", label: "Certifié RGIE" },
        { icon: "🚀", label: "Intervention rapide" },
        { icon: "📋", label: "Devis gratuit" },
        { icon: "🔧", label: "Garantie travaux" },
    ];

    return (
        <section className={styles.proofBar}>
            <div className={styles.container}>
                <div className={styles.track}>
                    {proofs.map((proof, index) => (
                        <div key={index} className={styles.proofItem}>
                            <span className={styles.icon}>{proof.icon}</span>
                            <span className={styles.label}>{proof.label}</span>
                        </div>
                    ))}
                    {/* Duplicate for seamless scroll */}
                    {proofs.map((proof, index) => (
                        <div key={`dup-${index}`} className={styles.proofItem}>
                            <span className={styles.icon}>{proof.icon}</span>
                            <span className={styles.label}>{proof.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
