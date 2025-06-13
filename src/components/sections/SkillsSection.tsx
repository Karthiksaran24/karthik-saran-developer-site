
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js', 'Vue.js'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Express.js', 'FastAPI', 'REST APIs', 'GraphQL', 'Microservices'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Database & Cloud',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'AWS', 'Google Cloud', 'Docker', 'Kubernetes'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)', 'Progressive Web Apps'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Palette,
      title: 'Design & Tools',
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'Git', 'GitHub', 'VS Code', 'Postman', 'Jira'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: ['Webpack', 'Vite', 'Babel', 'SASS/SCSS', 'Redux', 'Context API', 'Jest', 'Cypress'],
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section className="py-20 bg-portfolio-dark">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-portfolio-darker p-6 rounded-2xl border border-gray-800 hover-lift group animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-portfolio-red transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-portfolio-red hover:text-white transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Level Bars */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { skill: 'JavaScript/TypeScript', level: 95 },
              { skill: 'React/Next.js', level: 90 },
              { skill: 'Node.js/Express', level: 85 },
              { skill: 'Python/FastAPI', level: 80 },
              { skill: 'Database Design', level: 85 },
              { skill: 'Cloud Services (AWS)', level: 75 }
            ].map((item, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-medium">{item.skill}</span>
                  <span className="text-portfolio-red font-semibold">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div
                    className="bg-red-gradient h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
