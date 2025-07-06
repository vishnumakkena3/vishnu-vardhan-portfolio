import React from 'react';
import { Brain, Code, Database, Camera, Star, Quote } from 'lucide-react';

const About: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI/ML Projects',
      description: 'Building intelligent models and exploring machine learning applications.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Creating responsive, clean, and user-friendly web interfaces.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Programming',
      description: 'Writing efficient code in Python, Java and integrating with databases.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Camera,
      title: 'E-Sports',
      description: 'Professional player at BGMI(battle Grounds Mobile India), COD(Call Of Duty). Played many professional tournments',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      content: 'Vishnu delivered exceptional AI solutions that exceeded our expectations. His attention to detail and innovative approach made our project a huge success.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'Tech Lead',
      content: 'Working with Vishnu was a pleasure. His machine learning expertise and clean coding practices helped us build a robust and scalable system.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Scientist',
      content: 'Vishnu\'s deep understanding of AI/ML algorithms and his ability to translate complex concepts into practical solutions is remarkable.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p className="text-lg">
            I'm <span className="text-orange-400 font-semibold">Vishnu Vardhan Makkena</span>, a Computer Science graduate from 
            Kalasalingam Academy of Research and Education, with a specialization in Artificial Intelligence and Machine Learning. 
            I'm passionate about building intelligent and impactful tech solutions that solve real-world problems.
          </p>
          
          <p>
            During my academic journey, I worked on various projects including Spam SMS Detection, Chatbot Development, 
            Employee Attrition Prediction, and a sustainable wheelchair clamp design using Altair software. 
            My strengths lie in Python, Java, SQL, and front-end technologies like HTML/CSS.
          </p>
        </div>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-2xl font-bold mb-8 text-center">What I'm Doing</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} bg-opacity-20`}>
                  <service.icon className={`text-2xl bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} size={24} />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h3 className="text-2xl font-bold mb-8 text-center">Testimonials</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/30"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 text-orange-400/30" size={24} />
                <p className="text-gray-300 leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>
              
              <div className="flex text-orange-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;