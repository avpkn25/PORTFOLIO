import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import StackIcon from "tech-stack-icons";

const About = () => {
  const education = [
    {
      logo: "/education/klu.png",
      school: "Koneru Lakshmaiah Educational Foundation",
      degree: "B Tech in Computer Science & Engineering",
      grade: "CGPA: 9.55",
      location: "Vijayawada, AP",
      period: "2022 - 2026",
    },
    {
      logo: "/education/chai.png",
      school: "Sree Chaitanya Junior College",
      degree: "Intermediate in MPC",
      grade: "Marks: 861",
      location: "Kavali, AP",
      period: "2020 - 2022",
    },
    {
      logo: "/education/school.png",
      school: "Sri Chaitanya Techno Curriculum",
      degree: "Secondary School",
      grade: "Marks: 599",
      location: "Kavali, AP",
      period: "upto 2020",
    },
  ];

  const skills = [
    { name: "Competitive Programming", level: 85 },
    { name: "Full Stack Development", level: 70 },
    { name: "Database Technologies", level: 68 },
    { name: "Cloud Technologies", level: 40 },
    { name: "Data Science", level: 60 },
  ];

  const stats = [
    { title: "Programming Languages Known", value: "3+" },
    { title: "Projects Completed", value: "5+" },
    { title: "Global Certifications", value: "2+" },
    { title: "Tech Stack Mastered", value: "4+ " },
  ];

  const techStack = [
    { name: "Java", icon: <StackIcon name="java" />, url:"https://www.java.com/en/" },
    { name: "Spring Boot", icon: <StackIcon name="spring" />, url: "https://spring.io/projects/spring-boot" },
    { name: "React", icon: <StackIcon name="reactjs" />, url: "https://react.dev/" },
    { name: "Python", icon: <StackIcon name="python" />, url: "https://www.python.org/" },
    { name: "Vite", icon: <StackIcon name="vitejs" />, url: "https://vite.dev/" },
    { name: "JavaScript", icon: <StackIcon name="js" />, url: "https://www.w3schools.com/js/" },
    { name: "MySQL", icon: <StackIcon name="mysql" />, url: "https://www.mysql.com/" },
    // { name: "AWS", icon: <StackIcon name="aws" />, url: "https://aws.amazon.com/" },
    { name: "Html", icon: <StackIcon name="html5" />, url: "https://www.w3schools.com/html/" },
    { name: "Css", icon: <StackIcon name="css3" />, url: "https://www.w3schools.com/css/" },
    { name: "django", icon: <StackIcon name="django" />, url: "https://www.djangoproject.com/" },
    { name: "MongoDB", icon: <StackIcon name="mongodb" />, url: "https://www.mongodb.com/" },
    { name: "Postman", icon: <StackIcon name="postman" />, url: "https://www.postman.com/" },
    { name: "Git", icon: <StackIcon name="git" />, url: "https://git-scm.com/" },
    { name: "Tailwind", icon: <StackIcon name="tailwindcss" />, url: "https://tailwindcss.com/" },
    // { name: "GCloud", icon: <StackIcon name="gcloud" />, url: "https://cloud.google.com/?hl=en" },
    { name: "Vs Code", icon: <StackIcon name="vscode" />, url: "https://code.visualstudio.com/" },
    { name: "Github", icon: <StackIcon name="github" />, url: "https://github.com/" },
    // { name: "Docker", icon: <StackIcon name="docker" />, url: "https://www.docker.com/" },
    // { name: "Azure", icon: <StackIcon name="azure" />, url: "https://azure.microsoft.com/en-in" },
    // { name: "Figma", icon: <StackIcon name="figma" />, url: "https://www.figma.com/" },
    // { name: "Canva", icon: <StackIcon name="canva" />, url: "https://www.canva.com/" },
    // { name: "Red Hat", icon: <StackIcon name="redhat" />, url: "https://www.redhat.com/en" },
    // { name: "Linux", icon: <StackIcon name="linux" />, url: "https://www.linux.org/" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#020305]/90 pt-20 px-3 sm:px-4"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16 md:ml-6"
        >
          <h1 className="text-4xl mt-9 text-center font-bold mb-12">
            About <span className="text-[#c135ff]">Me</span>
          </h1>
          <h2 className="text-2xl text-[#c135ff] sm:text-3xl font-bold mb-6">
            Hey 👋, I'm Praveen Kumar
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="lg:w-2/3 ">
              <p className="text-gray-300 text-base md:text-xl leading-relaxed">
                <ul className="list-none">
                  <li>🟪 I'm a passionate Computer Science Student 🙍 Specializing in Data Science & Big Data Analytics.</li>
                  <li>🟪 I'm a Full Stack Web Developer focused 🔍 on React and Backend Frameworks (Spring Boot, Django).</li>
                  <li>🟪 AWS Certified Cloud Practitioner 📄 & Red Hat Certified Enterprise Application Developer.</li>
                  <li>🟪 Strong Problem Solver 🌟 (2-Star in Code Chef, Leet Code Badges).</li>
                </ul>

                {/* Responsive Lists */}
                <div className="flex flex-col md:gap-10 md:leading-relaxed md:flex-row md:space-x-10 mt-6">
                  <ul className="list-none">
                    <li><span className="text-[#c135ff]">Age:</span> 20 </li>
                    <li><span className="text-[#c135ff]">Gender:</span> Male </li>
                    <li><span className="text-[#c135ff]">Mobile:</span> +91 7893445580 </li>
                    <li><span className="text-[#c135ff]">Email:</span> praveenkumarnaidu88@gmail.com </li>
                  </ul>
                  <ul className="list-none mt-0">
                    <li><span className="text-[#c135ff]">Freelance:</span> Available </li>
                    <li><span className="text-[#c135ff]">Work:</span> Student </li>
                    <li><span className="text-[#c135ff]">Languages:</span> Telugu, English </li>
                    <li><span className="text-[#c135ff]">Country:</span> India </li>
                  </ul>
                </div>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#7127ba] text-white px-6 py-3 rounded-lg hover:bg-[#2e1452] transition-colors"
                  onClick={() =>
                    window.open("https://drive.google.com/file/d/1oIPV8_V-U3_NxauTVKjTtf1ARiUYcYUM/view?usp=sharing", "_blank")
                  }
                >
                  Resume
                </motion.button>
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#9a35ff] text-[#9a35ff] px-6 py-3 rounded-lg hover:bg-[#7127ba] hover:text-white transition-colors"
                onClick={() => (window.location.href = "/projects")}
              >
                View My Work
              </motion.button>
                
              </div>
            </div>
            <div className="lg:w-1/3 mt-2 lg:-ml-16 lg:-mt-20 flex justify-center align-center relative">
              <img src="images/about.jpg" className=" w-[350px] h-[420px] object-cover border-4 border-[#9a35ff] rounded-3xl" />
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-[#c135ff]">My</span> Education
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-[#190b2c] p-6 rounded-lg border-2 border-[#7127ba]"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={edu.logo} // Replace with actual logo path
                    alt="Education Logo"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="text-gray-300 ml-4 text-lg font-semibold">
                    {edu.degree}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{edu.school}</h3>
                <p className="text-gray-400 mb-2">{edu.grade}</p>
                <div className="flex justify-between text-sm text-gray-400">
                  <span className="text-sm bg-[#7127ba]/20 text-[#e2d1fc] cursor-pointer px-3 py-1 rounded-full flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                      {edu.location}
                  </span>
                  
                  <span className="text-sm bg-[#e2d1fc] text-[#000] cursor-pointer px-3 py-1 rounded-full flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                  </span>
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
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-[#c135ff]">My</span> Skills
          </h2>
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
                      className="h-full bg-[#6b25b2] rounded-full"
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
                  className="bg-[#42166d] p-8 rounded-lg text-center"
                >
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-xs sm:text-xl text-gray-200">{stat.title}</p>
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
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-[#c135ff]">My</span> Tech Stack
          </h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {techStack.map((tech, index) => (
              <a key={index} href={tech.url} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#42166d] p-3 sm:p-4 rounded-lg flex items-center justify-center gap-2"
                >
                  <div className="w-8 h-8 sm:w-8 sm:h-8 md:w-12 md:h-12">{tech.icon}</div>
                  <span className="hidden sm:block sm:text-base md:text-lg">{tech.name}</span>
                </motion.div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
