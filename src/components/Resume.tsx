import React from 'react';
import { GraduationCap, Briefcase, Award, TrendingUp } from 'lucide-react';

const Resume: React.FC = () => {
  const education = [
    {
      title: 'B.Tech in Computer Science (AI & ML)',
      institution: 'Kalasalingam Academy of Research and Education',
      period: '2021 — 2025',
      description: 'Specialized in Artificial Intelligence and Machine Learning with focus on deep learning, neural networks, and data science applications.',
      grade: 'CGPA: 7.82/10'
    },
    {
      title: 'Higher Secondary Education',
      institution: 'Narayana Junior College',
      period: '2019 — 2021',
      description: 'Mathematics, Physics, Chemistry with strong foundation in analytical thinking and problem-solving.',
      grade: 'Percentage: 93%'
    }
  ];

  const experience = [
    {
      title: 'AI/ML Intern',
      company: 'xxxxxxx',
      period: '2023 — 2024',
      description: 'Developed machine learning models for predictive analytics, implemented chatbot solutions, and worked on computer vision projects using Python and TensorFlow.',
      achievements: ['Improved model accuracy by 15%', 'Reduced processing time by 30%']
    },
    {
      title: 'Web Development Intern',
      company: 'xxxxxxxx',
      period: '2022 — 2023',
      description: 'Built responsive web applications using React.js and Node.js, collaborated with design teams to implement user-friendly interfaces.',
      achievements: ['Delivered 5+ projects on time', 'Increased user engagement by 25%']
    }
  ];

  const skills = [
    { name: 'Python', level: 90, color: 'from-blue-500 to-blue-600' },
    { name: 'Machine Learning', level: 85, color: 'from-green-500 to-green-600' },
    { name: 'Java', level: 75, color: 'from-orange-500 to-orange-600' },
    { name: 'HTML & CSS', level: 80, color: 'from-cyan-500 to-cyan-600' },
    { name: 'SQL', level: 85, color: 'from-purple-500 to-purple-600' },
  ];

  const certifications = [
    'Machine Learning Specialization - Stanford University',
    'Deep Learning Specialization - DeepLearning.AI',
    'AWS Certified Cloud Practitioner',
    'Google Analytics Certified'
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
          Resume
        </h2>
      </div>

      {/* Education */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
            <GraduationCap className="text-white" size={24} />
          </div>
          <h3 className="text-2xl font-bold">Education</h3>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {edu.title}
                  </h4>
                  <p className="text-blue-400 font-medium">{edu.institution}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                    {edu.period}
                  </span>
                  {edu.grade && (
                    <p className="text-green-400 text-sm mt-2 font-medium">{edu.grade}</p>
                  )}
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
            <Briefcase className="text-white" size={24} />
          </div>
          <h3 className="text-2xl font-bold">Experience</h3>
        </div>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {exp.title}
                  </h4>
                  <p className="text-green-400 font-medium">{exp.company}</p>
                </div>
                <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
              {exp.achievements && (
                <div>
                  <h5 className="text-sm font-semibold text-gray-400 mb-2">Key Achievements:</h5>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <TrendingUp className="text-white" size={24} />
          </div>
          <h3 className="text-2xl font-bold">Skills</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium text-white">{skill.name}</span>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
            <Award className="text-white" size={24} />
          </div>
          <h3 className="text-2xl font-bold">Certifications</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <Award className="text-orange-400" size={20} />
                <span className="text-gray-300">{cert}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;