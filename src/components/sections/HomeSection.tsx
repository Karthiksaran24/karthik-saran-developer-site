
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomeSection = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-portfolio-darker via-portfolio-dark to-portfolio-darker">
      <div className="container-width section-padding">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-red-gradient p-1">
                <div className="w-full h-full rounded-full bg-portfolio-darker flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-6xl font-bold text-portfolio-red">
                    KS
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-portfolio-red rounded-full opacity-80 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-red-400 rounded-full opacity-60 blur-lg"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              Hi, It's <span className="gradient-text">Karthik</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-portfolio-red font-semibold mb-6">
              I'm a Developer
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Passionate full-stack developer crafting innovative digital solutions. 
              I bring ideas to life through clean code, modern technologies, and 
              user-centered design principles.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-full border-2 border-portfolio-red/30 hover:border-portfolio-red flex items-center justify-center text-gray-300 hover:text-portfolio-red transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <Button className="bg-red-gradient hover:bg-red-gradient-dark text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Download size={20} className="mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
