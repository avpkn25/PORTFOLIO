import { Linkedin, Instagram, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a0b2e]/90 text-gray-300 py-4 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#9a35ff] transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#9a35ff] transition-colors">
            <Github size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#9a35ff] transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#9a35ff] transition-colors">
            <Twitter size={20} />
          </a>
        </div>
        <p className="text-base ">
          <span className='text-[#9a35ff] ' >©</span> Made with ❤️ by <span className="text-[#9a35ff]" >Praveen Kumar</span> Using Reactjs
        </p>
      </div>
    </footer>
  );
};

export default Footer;