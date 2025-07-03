// src/pages/HomePage.jsx
import HeroLaunchSection from "@/components/sections/HeroLaunchSection";
import JoinBetaSection from "@/components/sections/JoinBetaSection";
import WhyPlatformSection from "@/components/sections/WhyPlatformSection";
import CoursesShowcaseSection from "@/components/sections/CoursesShowcaseSection";
import FAQsSection from "@/components/sections/FAQs_Section";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar.tsx";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroLaunchSection />
      <JoinBetaSection />
      <WhyPlatformSection />
      <CoursesShowcaseSection />
      <FAQsSection />
      <Footer />
  </>
);
}