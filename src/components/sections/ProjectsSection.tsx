import { ExternalLink, Github, Calendar, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, order management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'JWT'],
      demoLink: '#',
      githubLink: '#',
      featured: true,
      date: '2023'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['TypeScript', 'React', 'Socket.io', 'PostgreSQL', 'Docker'],
      demoLink: '#',
      githubLink: '#',
      featured: true,
      date: '2023'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Weather API', 'Chart.js', 'Tailwind CSS'],
      demoLink: '#',
      githubLink: '#',
      featured: false,
      date: '2022'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling tools, and performance metrics.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Python', 'FastAPI', 'Redis', 'Chart.js'],
      demoLink: '#',
      githubLink: '#',
      featured: false,
      date: '2022'
    },
    {
      title: 'Real Estate Platform',
      description: 'Property listing platform with advanced search filters, virtual tours, and agent management system.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      technologies: ['React', 'Express.js', 'MySQL', 'AWS S3', 'Google Maps API'],
      demoLink: '#',
      githubLink: '#',
      featured: false,
      date: '2023'
    },
    {
      title: 'Learning Management System',
      description: 'Educational platform with course management, video streaming, quizzes, and progress tracking for students and instructors.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Video.js', 'Firebase'],
      demoLink: '#',
      githubLink: '#',
      featured: false,
      date: '2023'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="py-20 bg-portfolio-dark">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of my latest work and side projects. Each project represents a unique challenge and learning opportunity.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
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
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  
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
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-portfolio-darker p-6 rounded-2xl border border-gray-800 hover-lift group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-red-gradient rounded-lg flex items-center justify-center">
                    <Code className="text-white" size={24} />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.demoLink}
                      className="text-gray-400 hover:text-portfolio-red transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubLink}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-portfolio-red transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
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
