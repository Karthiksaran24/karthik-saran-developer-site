
import { Code, Database, BarChart3, FileSpreadsheet, Globe, Palette } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: 'Web Development',
      skills: ['HTML', 'CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'Programming',
      skills: ['Python'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['MySQL'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FileSpreadsheet,
      title: 'Data Analysis',
      skills: ['Excel'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      skills: ['PowerBI'],
      color: 'from-yellow-500 to-orange-500'
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
            Core technologies and tools I use for development and data analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
      </div>
    </section>
  );
};

export default SkillsSection;
