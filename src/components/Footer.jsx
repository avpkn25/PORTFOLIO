import { Linkedin, Instagram, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#010101] text-gray-300 py-4 px-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex md:hidden space-x-4 mb-4">
          <a href="https://www.linkedin.com/in/avpkn25/" target="_blank" rel="noopener noreferrer" className="hover:text-[#9a35ff] transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/avpkn25" target="_blank" rel="noopener noreferrer" className="hover:text-[#9a35ff] transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.instagram.com/avpkn_25/" target="_blank" rel="noopener noreferrer" className="hover:text-[#9a35ff] transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://x.com/AVPKN_25" target="_blank" rel="noopener noreferrer" className="hover:text-[#9a35ff] transition-colors">
            <Twitter size={20} />
          </a>
        </div>
        <p className="text-sm sm:text-base text-center">
          <span className="text-[#9a35ff]">©</span> Made with ❤️ by <span className="text-[#c135ff]">Praveen Kumar</span> Using Reactjs
        </p>
      </div>
    </footer>
  );
};

export default Footer;
