// src/pages/HomePage.jsx
import FloatingModeToggle from "@/components/shared/FloatingModeToggle";
import HeroLaunchSection from "@/components/sections/HeroLaunchSection";
import JoinBetaSection from "@/components/sections/JoinBetaSection";
import WhyPlatformSection from "@/components/sections/WhyPlatformSection";
import CoursesShowcaseSection from "@/components/sections/CoursesShowcaseSection";
import FAQsSection from "@/components/sections/FAQs_Section";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <FloatingModeToggle />
      <HeroLaunchSection />
      <JoinBetaSection />
      <WhyPlatformSection />
      <CoursesShowcaseSection />
      <FAQsSection />
      <Footer />
  </>
);
}