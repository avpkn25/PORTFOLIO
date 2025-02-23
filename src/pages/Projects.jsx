import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: "Personal Portfolio",
      image: "/project/portfolio.png",
      tech: ["Vite", "React", "JavaScript", "Tailwind"],
      github: "https://github.com/avpkn25/Pet_Adoption",
      live: "https://avpkn.vercel.app",
    },
    {
      title: "Skill Certification Management System",
      image:"/project/jfsd.png",
      tech: ["Spring Boot", "JSP", "MySQL"],
      github: "https://github.com/avpkn25/certifystack",
      live: "NA",
    },
    {
      title: "Expense Tracker App",
      image:"/project/expense.png",
      tech: ["Vite", "React.js", "Context API", "Chart.js"],
      github: "https://github.com/avpkn25/certifystack",
      live: "https://expense-tracker-avpkn25.vercel.app/",
    },
    {
      title: "Car Showroom Management System",
      image:"/project/car.png",
      tech: ["JSF", "EJB", "JPA", "MySQL"],
      github: "https://github.com/avpkn25/CAR-SHOWROOM",
      live: "NA",
    },
    {
      title: "Pet Adoption Management System",
      image:"/project/pet.png",
      tech: ["Django", "HTML", "CSS", "PostgreSQL"],
      github: "https://github.com/avpkn25/Pet_Adoption",
      live: "NA",
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
        <h1 className="text-4xl mt-9 text-center font-bold mb-12">
          {" "}
          <span className="text-[#c135ff]">My</span> Projects
        </h1>
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
                  className="w-cover h-64 "
                />
                
                <div className="absolute inset-0 bg-[#190b2c]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[#7127ba] px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-[#7127ba] hover:text-white transition-colors"
                    >
                      <span>Code</span>
                      <Github size={20} />
                    </a>
                    {project.live !== "NA" ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-[#7127ba] px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-[#7127ba] hover:text-white transition-colors"
                      >
                        <span>Link</span>
                        <ExternalLink size={20} />
                      </a>
                    ) : (
                      <a></a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl  font-semibold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm bg-[#7127ba]/20 text-[#e2d1fc] cursor-pointer hover:bg-[#e2d1fc] hover:text-[#000] px-3 py-1 rounded-full"
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
