import React, { useState } from 'react';
import { Linkedin, Instagram, Send, Twitter, ChevronRight, ChevronLeft } from 'lucide-react';

const SocialLinks = () => {
  const [isVisible, setIsVisible] = useState(false);

  const socialLinks = [
    {
    icon: <Linkedin className="w-6 h-6" />, 
    url: 'https://linkedin.com/in/avpkn25', 
    label: 'LinkedIn'
    },
    {
      icon: <Send className="w-6 h-6" />, 
      url: 'https://t.me/AVPKN_25', 
      label: 'GitHub'
    },
    {
      icon: <Instagram className="w-6 h-6" />, 
      url: 'https://instagram.com/avpkn_25', 
      label: 'Twitter'
    },
    {
      icon: <Twitter className="w-6 h-6" />, 
      url: 'https://x.com/AVPKN_25', 
      label: 'Twitter'
    }
  ];

  return (
    <div className="hidden md:flex fixed left-0 top-20 z-50 items-center">
      <div className={`
        bg-[#2e1452] backdrop-blur-sm rounded-lg py-4 px-3 shadow-lg flex flex-col gap-4
        transform transition-all duration-300 origin-left ${isVisible ? 'opacity-100 w-14 pl-4' : 'opacity-0 w-0 pl-0'}`}
      >
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#c135ff] transform transition-all duration-200 hover:scale-110"
            aria-label={link.label}
          >
            {link.icon}
          </a>
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