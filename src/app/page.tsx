import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import TrustSection from "@/components/trust-section";
import ServicesSection from "@/components/services-section";
import MembershipSection from "@/components/membership-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <MembershipSection />
      <ContactSection />
    </main>
  );
}