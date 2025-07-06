import React from 'react';
import { Mail, Phone, Calendar, MapPin, Github, Linkedin, Twitter, ChevronDown, Menu, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-lg border border-gray-700"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed lg:relative top-0 left-0 h-full lg:h-auto w-80 lg:w-80
        bg-gray-800/90 lg:bg-gray-800/50 backdrop-blur-sm
        border-r lg:border border-gray-700/50 rounded-none lg:rounded-2xl
        transform transition-transform duration-300 z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-8">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <img
                src="public /IMG_8457.JPG"
                alt="Vishnu Makkena"
                className="w-24 h-24 rounded-2xl object-cover border-4 border-orange-500/30"
              />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-800"></div>
            </div>
            
            <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Vishnu Makkena
            </h1>
            <p className="text-gray-400 text-sm bg-gray-700/50 px-4 py-2 rounded-lg">
              AI/ML Developer
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
              <Mail className="text-orange-400" size={18} />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Email</p>
                <a href="mailto:vishnumakkena3@gmail.com" className="text-sm hover:text-orange-400 transition-colors">
                  vishnumakkena3@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
              <Phone className="text-orange-400" size={18} />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Phone</p>
                <a href="tel:+918712141093" className="text-sm hover:text-orange-400 transition-colors">
                  +91 8712141093
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
              <Calendar className="text-orange-400" size={18} />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Birthday</p>
                <p className="text-sm">April 06, 2004</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
              <MapPin className="text-orange-400" size={18} />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Location</p>
                <p className="text-sm">Andhra Pradesh, India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com"
              className="p-3 bg-gray-700/30 rounded-lg hover:bg-orange-500/20 hover:text-orange-400 transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              className="p-3 bg-gray-700/30 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/vishnumakkena63?s=21"
              className="p-3 bg-gray-700/30 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default Sidebar;