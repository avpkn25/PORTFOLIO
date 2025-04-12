import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Linkedin, Instagram, Send, Twitter, ChevronRight, ChevronLeft } from 'lucide-react';

const SocialLinks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState(null);
  const location = useLocation(); // Track route changes

  useEffect(() => {
    setIsVisible(false); // Close the toggle on route change
  }, [location.pathname]);

  const socialLinks = [
    { icon: <Linkedin className="w-6 h-6" />, url: 'https://linkedin.com/in/avpkn25', label: 'LinkedIn' },
    { icon: <Send className="w-6 h-6" />, url: 'https://t.me/AVPKN_25', label: 'Telegram' },
    { icon: <Instagram className="w-6 h-6" />, url: 'https://instagram.com/avpkn25', label: 'Instagram' },
    { icon: <Twitter className="w-6 h-6" />, url: 'https://x.com/avpkn25', label: 'Twitter' }
  ];

  return (
    <div className="hidden md:flex fixed left-0 top-[150px] z-50 items-center">
      <div
        className={`
          bg-[#2e1452] backdrop-blur-sm rounded-lg py-4 px-3 shadow-lg flex flex-col gap-4
          transform transition-all duration-300 origin-left ${isVisible ? 'opacity-100 w-14 pl-4' : 'opacity-0 w-0 pl-0'}`}
      >
        {socialLinks.map((link, index) => (
          <div key={index} className="relative group">
            {hovered === link.label && (
              <span className="absolute bottom-full left-5 transform -translate-x-1/2 mb-2 bg-gray-900 text-white text-xs font-semibold rounded-md px-3 py-1 shadow-md transition-all duration-300 opacity-100 scale-105">
                {link.label}
              </span>
            )}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#c135ff] transform transition-all duration-200 hover:scale-110 relative"
              aria-label={link.label}
              onMouseEnter={() => setHovered(link.label)}
              onMouseLeave={() => setHovered(null)}
            >
              {link.icon}
            </a>
          </div>
        ))}
      </div>

      <button
        onClick={() => setIsVisible(!isVisible)}
        className={`bg-[#2e1452] hover:bg-[#2e1451] p-3 rounded-r-lg shadow-lg transform transition-all duration-200 text-white flex items-center justify-center w-10 h-10 ${isVisible ? 'ml-0' : '-ml-3'}`}
        aria-label="Toggle social links"
      >
        {isVisible ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default SocialLinks;
