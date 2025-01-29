import { motion } from "framer-motion";
import { Code, Database, Layout, Brain } from "lucide-react";
import { useEffect } from "react";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const education = [
    {
      school: "K L University",
      degree: "9.5 CGPA",
      location: "Vijayawada, AP",
      period: "2022 - 2026",
    },
    {
      school: "Sree Chaitanya Junior College",
      degree: "861 Marks",
      location: "Kavali, AP",
      period: "2020 - 2022",
    },
    {
      school: "Sri Chaitanya Techno Curriculum",
      degree: "599 Marks",
      location: "Kavali, AP",
      period: "upto 2020",
    },
  ];

  const skills = [
    { name: "Competitive Programming", level: 90 },
    { name: "Full Stack Development", level: 70 },
    { name: "Database", level: 60 },
    { name: "UI/UX Design", level: 50 },
    { name: "Data Science", level: 40 },
  ];

  const stats = [
    { title: "Years of Experience", value: "2" },
    { title: "Projects Completed", value: "5+" },
    { title: "Global Certifications", value: "2+" },
    { title: "Years of Experience", value: "2" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#11071f]/90 pt-20 px-4"
    >
      <div className="container mx-auto">
        {/* About Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h1 className="text-4xl mt-9 text-center font-bold mb-12">
            About <span className="text-[#7127ba]" >Me</span>
          </h1>
          <h2 className="text-3xl font-bold mb-6">My Name is Praveen Kumar</h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            I am a passionate software developer with expertise in backend
            development, data science, and cloud computing, specializing in
            Spring Boot, Java, and SQL, along with frontend technologies like
            JSP, React, and Angular. My projects, including enterprise
            applications, certification management systems, and pet adoption
            platforms, showcase my ability to design and deploy scalable, full-
            stack solutions. With AWS and Red Hat certifications, I am deeply
            committed to cloud computing and DevOps. Constantly exploring
            emerging technologies, I strive to build impactful, high-
            performance applications and am eager to contribute to innovative
            software solutions in a dynamic development role.
          </p>
          <div className="flex gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#7127ba] text-white px-6 py-3 rounded-lg hover:bg-[#2e1452] transition-colors"
            >
              Resume
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#9a35ff] text-[#9a35ff] px-6 py-3 rounded-lg hover:bg-[#7127ba] hover:text-white transition-colors"
            >
              Download CV
            </motion.button>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8"><span className="text-[#7127ba]" >My</span> Education</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-[#190b2c] p-6 rounded-lg"
              >
                <div className="bg-[#a536ff]/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Code className="text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{edu.school}</h3>
                <p className="text-gray-400 mb-2">{edu.degree}</p>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{edu.location}</span>
                  <span>{edu.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8"><span className="text-[#7127ba]" >My</span> Skills</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-[#9a35ff]">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-[#112240] rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="h-full bg-[#9a35ff] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#7127ba] p-6 rounded-lg text-center"
                >
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-sm text-gray-200">{stat.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8"><span className="text-[#7127ba]" >My</span> Tech Stack</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {/* Add your tech stack icons here */}
            {Array.from({ length: 16 }).map((_, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-[#42166d] p-4 rounded-lg flex items-center justify-center"
              >
                <Code className="text-blue-500 w-8 h-8" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
