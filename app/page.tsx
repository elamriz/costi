import styles from "./page.module.css";
import { Hero } from "@/components/sections/Hero";
import { WorkStrip } from "@/components/sections/WorkStrip";
import { ProofBar } from "@/components/sections/ProofBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CoverageMap } from "@/components/sections/CoverageMap";
import { RecentProjects } from "@/components/sections/RecentProjects";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABand } from "@/components/sections/CTABand";
import { FAQSection } from "@/components/sections/FAQSection";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <div className={styles.page}>
        <Hero />
        <WorkStrip />
        <ProofBar />
        <ServicesGrid />
        <ProcessSection />
        <CoverageMap />
        <RecentProjects />
        <Testimonials />
        <FAQSection />
        <CTABand />
      </div>
    </>
  );
}
