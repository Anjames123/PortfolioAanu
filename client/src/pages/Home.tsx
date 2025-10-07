import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AchievementBadges from "@/components/AchievementBadges";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import StatisticsSection from "@/components/StatisticsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import MobileNavigation from "@/components/MobileNavigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Header />
      <main>
        <HeroSection />
        <AchievementBadges />
        <AboutSection />
        <SkillsSection />
        <StatisticsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileNavigation />
    </div>
  );
}
