import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vishnumakkena3@gmail.com',
      link: 'mailto:vishnumakkena3@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8712141093',
      link: 'tel:+918712141093',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Andhra Pradesh, India',
      link: '#',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const quickResponses = [
    {
      icon: MessageCircle,
      title: 'General Inquiry',
      description: 'Questions about my work or services',
      responseTime: '24 hours'
    },
    {
      icon: Clock,
      title: 'Project Discussion',
      description: 'Discussing potential collaborations',
      responseTime: '48 hours'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
          Contact
        </h2>
        <p className="text-gray-400 text-lg">
          Let's discuss your next project or just say hello!
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} bg-opacity-20`}>
                    <info.icon className={`bg-gradient-to-r ${info.color} bg-clip-text text-transparent`} size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Response Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Response Times</h4>
            <div className="space-y-3">
              {quickResponses.map((response, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/30"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <response.icon className="text-orange-400" size={18} />
                    <h5 className="font-medium text-white">{response.title}</h5>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{response.description}</p>
                  <p className="text-green-400 text-xs font-medium">
                    Usually responds within {response.responseTime}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3">
                <CheckCircle className="text-green-400" size={20} />
                <p className="text-green-400">
                  Thank you for your message! I'll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:border-orange-500/50 transition-colors text-white placeholder-gray-400"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:border-orange-500/50 transition-colors text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:border-orange-500/50 transition-colors text-white placeholder-gray-400"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:border-orange-500/50 transition-colors text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden">
        <div className="p-6 border-b border-gray-700/50">
          <h3 className="text-xl font-bold">Location</h3>
          <p className="text-gray-400">Andhra Pradesh, India</p>
        </div>
        <div className="h-64 bg-gray-700/30 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="text-orange-400 mx-auto mb-2" size={32} />
            <p className="text-gray-400">Chinnapavani,</p>
            <p className="text-gray-500 text-sm">Andhra Pradesh, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;