import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useEffect } from "react";


const Projects = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const projects = [
    {
      title: "Project 1",
      description: "This is my first project.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      tech: ["React.js", "Node.js", "MongoDB"],
      github: "https://github.com",
      live: "https://project1.com"
    },
    {
      title: "Project 2",
      description: "This is my second project.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      tech: ["React.js", "Firebase", "Tailwind"],
      github: "https://github.com",
      live: "https://project2.com"
    },
    {
      title: "Project 3",
      description: "This is my third project.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      tech: ["Next.js", "PostgreSQL", "AWS"],
      github: "https://github.com",
      live: "https://project3.com"
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#11071f]/90 pt-20 px-4"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl mt-9 text-center font-bold mb-12"> <span className='text-[#7127ba]' >My</span> Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-[#190b2c] rounded-lg overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black p-2 rounded-full hover:bg-[#7b4ae2] hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black p-2 rounded-full hover:bg-[#7b4ae2] hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm bg-[#7127ba]/20 text-[#e2d1fc] hover:bg-[#e2d1fc] hover:text-[#000] px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;