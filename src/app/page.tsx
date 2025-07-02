import Navigation from "@/components/navigation";
import HowItWorks from "@/components/how-it-works";
import WhatsIncluded from "@/components/whats-included";
import HealthTracks from "@/components/health-tracks";
import MembershipTiers from "@/components/membership-tiers";
import SocialProof from "@/components/social-proof";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";

// Dynamically import EnhancedHero with SSR disabled to prevent hydration mismatch
const EnhancedHero = dynamic(
  () => import("@/components/enhanced-hero"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <EnhancedHero />
      <HowItWorks />
      <WhatsIncluded />
      <HealthTracks />
      <MembershipTiers />
      <SocialProof />
      <CTASection />
      <Footer />
    </main>
  );
}