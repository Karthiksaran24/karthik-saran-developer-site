
import { ExternalLink, Github, Calendar, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'IPL Prediction System',
      description: 'Machine learning model to predict IPL match outcomes using historical data, player statistics, and team performance metrics.',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=400&fit=crop',
      technologies: ['Python', 'MySQL', 'PowerBI'],
      demoLink: '#',
      githubLink: '#',
      featured: true,
      date: '2023'
    },
    {
      title: 'Capstone Project',
      description: 'Comprehensive data analysis and visualization project demonstrating end-to-end data science workflow and business intelligence.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Python', 'Excel', 'PowerBI', 'MySQL'],
      demoLink: '#',
      githubLink: '#',
      featured: true,
      date: '2023'
    }
  ];

  return (
    <section className="py-20 bg-portfolio-dark">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Key projects showcasing my skills in data analysis, machine learning, and business intelligence.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-portfolio-darker rounded-2xl overflow-hidden border border-gray-800 hover-lift group animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-darker/80 to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.demoLink}
                    className="w-10 h-10 bg-portfolio-red/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-portfolio-red transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubLink}
                    className="w-10 h-10 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-white group-hover:text-portfolio-red transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-portfolio-red hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-portfolio-red text-portfolio-red hover:bg-portfolio-red hover:text-white"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-gray-400 mb-4">Want to see more of my work?</p>
          <Button className="bg-red-gradient hover:bg-red-gradient-dark text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
