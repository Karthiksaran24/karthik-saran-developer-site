
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Your University Name',
      location: 'City, State',
      duration: '2019 - 2023',
      gpa: '8.5/10.0',
      description: 'Specialized in Software Engineering and Data Structures. Graduated with First Class Honors.',
      achievements: [
        'Dean\'s List for 6 consecutive semesters',
        'Winner of Annual Coding Competition 2022',
        'President of Computer Science Society'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (Science)',
      institution: 'Your School Name',
      location: 'City, State',
      duration: '2017 - 2019',
      gpa: '92%',
      description: 'Mathematics, Physics, Chemistry with Computer Science as additional subject.',
      achievements: [
        'School Topper in Computer Science',
        'State Level Science Olympiad Qualifier',
        'Head of Tech Club'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-CSA-2023-001'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023',
      credentialId: 'GCP-PD-2023-002'
    },
    {
      name: 'Meta React Developer Certificate',
      issuer: 'Meta (Facebook)',
      date: '2022',
      credentialId: 'META-RD-2022-003'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2022',
      credentialId: 'MDB-CD-2022-004'
    }
  ];

  return (
    <section className="py-20 bg-portfolio-darker">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic foundation and continuous learning journey that shaped my development career.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-portfolio-red to-red-400"></div>
            
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative flex items-start mb-12 animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 bg-portfolio-red rounded-full border-4 border-portfolio-darker"></div>
                
                {/* Content */}
                <div className="ml-20 bg-portfolio-dark p-6 rounded-2xl border border-gray-800 hover-lift w-full">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 lg:mb-0">{edu.degree}</h3>
                    <div className="flex items-center text-portfolio-red font-semibold">
                      <Calendar size={16} className="mr-1" />
                      {edu.duration}
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex items-center text-gray-300 mb-2 lg:mb-0">
                      <GraduationCap size={16} className="mr-2" />
                      {edu.institution}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin size={16} className="mr-1" />
                      {edu.location}
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <Award size={16} className="mr-2 text-portfolio-red" />
                    <span className="text-gray-300">GPA: <span className="text-portfolio-red font-semibold">{edu.gpa}</span></span>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{edu.description}</p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            Professional <span className="gradient-text">Certifications</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-portfolio-dark p-6 rounded-2xl border border-gray-800 hover-lift animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
                    <p className="text-gray-400 mb-1">{cert.issuer}</p>
                    <p className="text-portfolio-red font-medium">{cert.date}</p>
                  </div>
                  <BookOpen className="text-portfolio-red mt-1" size={24} />
                </div>
                <div className="text-sm text-gray-500">
                  Credential ID: {cert.credentialId}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
