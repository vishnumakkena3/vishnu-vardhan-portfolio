import React from 'react';
import { User, FileText, Briefcase, Gamepad2, BookOpen, MessageCircle } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'games', label: 'Games', icon: Gamepad2 },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: MessageCircle },
  ];

  return (
    <nav className="border-b border-gray-700/50 bg-gray-800/30 backdrop-blur-sm">
      <div className="flex overflow-x-auto scrollbar-hide">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onSectionChange(id)}
            className={`
              flex items-center gap-2 px-6 py-4 whitespace-nowrap transition-all duration-300
              ${activeSection === id
                ? 'text-orange-400 border-b-2 border-orange-400 bg-orange-500/10'
                : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
              }
            `}
          >
            <Icon size={18} />
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;