import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI Chatbot Platform',
      category: 'ai-ml',
      description: 'Intelligent chatbot using NLP and machine learning for customer service automation.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['Python', 'TensorFlow', 'NLP', 'Flask'],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'E-Commerce Dashboard',
      category: 'web-dev',
      description: 'Modern React dashboard with real-time analytics and inventory management.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Spam Detection System',
      category: 'ai-ml',
      description: 'Machine learning model for SMS spam detection with 95% accuracy.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NLTK'],
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'web-dev',
      description: 'Responsive portfolio website with modern design and smooth animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Employee Attrition Predictor',
      category: 'ai-ml',
      description: 'Predictive model to analyze and forecast employee turnover rates.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['Python', 'Random Forest', 'Pandas', 'Matplotlib'],
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Task Management App',
      category: 'web-dev',
      description: 'Full-stack task management application with real-time collaboration.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: '#',
      demo: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI/ML' },
    { id: 'web-dev', label: 'Web Development' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
          Portfolio
        </h2>
        <p className="text-gray-400 text-lg">
          A showcase of my recent projects and technical achievements
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300
              ${activeFilter === filter.id
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
              }
            `}
          >
            <Filter size={18} />
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:transform hover:scale-105"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-800/90 rounded-lg text-white hover:bg-gray-700 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-3 py-2 bg-orange-500/90 rounded-lg text-white hover:bg-orange-600 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
        <p className="text-gray-400 mb-6">
          I'm always open to discussing new opportunities and exciting projects.
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:transform hover:scale-105">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default Portfolio;