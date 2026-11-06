import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { EducationSection } from './sections/EducationSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-midnight text-warmWhite selection:bg-softBlush selection:text-midnight font-sans relative">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Canvas Scratch-Reveal Interaction */}
        <HeroSection />

        {/* About Me Section */}
        <AboutSection />

        {/* Technical Skills Section */}
        <SkillsSection />

        {/* Featured Projects Section */}
        <ProjectsSection />

        {/* Professional Experience Section */}
        <ExperienceSection />

        {/* Education Section */}
        <EducationSection />

        {/* Achievements & Leadership Section */}
        <AchievementsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

