
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HomeSection from '@/components/sections/HomeSection';
import SkillsSection from '@/components/sections/SkillsSection';
import EducationSection from '@/components/sections/EducationSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Handle navigation scroll and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-portfolio-darker text-white">
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      <main>
        <section id="home">
          <HomeSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <section id="education">
          <EducationSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-portfolio-darker border-t border-gray-800 py-8">
        <div className="container-width section-padding">
          <div className="text-center">
            <p className="text-gray-400">
              © 2023 Karthik Saran. Built with ❤️ using React & Tailwind CSS
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Designed for modern web experiences
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
