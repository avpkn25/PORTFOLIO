import { motion } from "framer-motion";
import { MapPin, Languages, Calendar, User, Briefcase } from "lucide-react";
import StackIcon from "tech-stack-icons";

const About = () => {
  const education = [
    {
      logo: "/education/klu.png",
      school: "Koneru Lakshmaiah Educational Foundation",
      degree: "B Tech in Computer Science & Engineering",
      grade: "9.5 CGPA",
      location: "Vijayawada, AP",
      period: "2022 - 2026",
    },
    {
      logo: "/education/chai.png",
      school: "Sree Chaitanya Junior College",
      degree: "Intermediate",
      grade: "861 Marks",
      location: "Kavali, AP",
      period: "2020 - 2022",
    },
    {
      logo: "/education/school.png",
      school: "Sri Chaitanya Techno Curriculum",
      degree: "Secondary School",
      grade: "599 Marks",
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

  const personalDetails = [
    {
      icon: MapPin,
      label: "From",
      value: "Gowravaram, Kavali, Nellore, Andhra Pradesh, India",
    },
    { icon: Languages, label: "Languages", value: "English and Telugu" },
    { icon: Calendar, label: "Age", value: "20" },
    { icon: User, label: "Gender", value: "Male" },
    { icon: Briefcase, label: "Work", value: "Student" },
  ];

  const techStack = [
    { name: "Java", icon: <StackIcon name="java" />, url:"https://www.java.com/en/" },
    { name: "Spring Boot", icon: <StackIcon name="spring" />, url: "https://spring.io/projects/spring-boot" },
    { name: "React", icon: <StackIcon name="reactjs" />, url: "https://react.dev/" },
    { name: "Python", icon: <StackIcon name="python" />, url: "https://www.python.org/" },
    { name: "Vite", icon: <StackIcon name="vitejs" />, url: "https://vite.dev/" },
    { name: "JavaScript", icon: <StackIcon name="js" />, url: "https://www.w3schools.com/js/" },
    { name: "MySQL", icon: <StackIcon name="mysql" />, url: "https://www.mysql.com/" },
    { name: "AWS", icon: <StackIcon name="aws" />, url: "https://aws.amazon.com/" },
    { name: "Html", icon: <StackIcon name="html5" />, url: "https://www.w3schools.com/html/" },
    { name: "Css", icon: <StackIcon name="css3" />, url: "https://www.w3schools.com/css/" },
    { name: "django", icon: <StackIcon name="django" />, url: "https://www.djangoproject.com/" },
    { name: "MongoDB", icon: <StackIcon name="mongodb" />, url: "https://www.mongodb.com/" },
    { name: "Postman", icon: <StackIcon name="postman" />, url: "https://www.postman.com/" },
    { name: "Git", icon: <StackIcon name="git" />, url: "https://git-scm.com/" },
    { name: "Tailwind", icon: <StackIcon name="tailwindcss" />, url: "https://tailwindcss.com/" },
    { name: "GCloud", icon: <StackIcon name="gcloud" />, url: "https://cloud.google.com/?hl=en" },
    { name: "Vs Code", icon: <StackIcon name="vscode" />, url: "https://code.visualstudio.com/" },
    { name: "Github", icon: <StackIcon name="github" />, url: "https://github.com/" },
    { name: "Docker", icon: <StackIcon name="docker" />, url: "https://www.docker.com/" },
    { name: "Azure", icon: <StackIcon name="azure" />, url: "https://azure.microsoft.com/en-in" },
    { name: "Figma", icon: <StackIcon name="figma" />, url: "https://www.figma.com/" },
    { name: "Canva", icon: <StackIcon name="canva" />, url: "https://www.canva.com/" },
    { name: "Red Hat", icon: <StackIcon name="redhat" />, url: "https://www.redhat.com/en" },
    { name: "Linux", icon: <StackIcon name="linux" />, url: "https://www.linux.org/" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#11071f]/90 pt-20 px-3 sm:px-4"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h1 className="text-4xl mt-9 text-center font-bold mb-12">
            About <span className="text-[#7127ba]">Me</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            My Name is Praveen Kumar
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="lg:w-2/3">
              <p className="text-gray-300 leading-relaxed ">
                I’m a passionate Computer Science and Engineering student
                specializing in Data Science & Big Data Analytics. With a strong
                foundation in backend development, I have hands-on experience
                building full-stack applications using Spring Boot, JSP, and
                React. My projects range from enterprise applications to
                certification management systems, integrating secure
                authentication, cloud databases, and automation. I enjoy solving
                complex problems, optimizing system performance, and exploring
                emerging technologies. Currently, I’m enhancing my skills in
                SQL, Angular, and Power BI while actively seeking opportunities
                to grow as a software developer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
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
                  onClick={() =>
                    window.open("https://wa.me/+917893445580", "_blank")
                  }
                >
                  Let's Talk!
                </motion.button>
              </div>
            </div>
            <div className="lg:w-1/3 mt-2 sm:-mt-8 relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#7127ba]/30"></div>
              <div className="space-y-6 pl-8">
                {personalDetails.map((detail, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#7127ba] rounded-full"></div>
                    <div className="flex items-start gap-2">
                      <detail.icon className="w-5.5 h-5.5 text-[#9a35ff] shrink-0 mt-1" />
                      <div>
                        <span className="text-[#9a35ff] text-lg">
                          {detail.label}:
                        </span>
                        <p className="text-gray-300 text-base">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
            <span className="text-[#7127ba]">My</span> Education
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-[#190b2c] p-6 rounded-lg"
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
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-[#7127ba]">My</span> Skills
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
                  <p className="text-1xl text-gray-200">{stat.title}</p>
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
            <span className="text-[#7127ba]">My</span> Tech Stack
          </h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {techStack.map((tech, index) => (
              <a key={index} href={tech.url} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#42166d] p-3 sm:p-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <div className="w-12 h-12">{tech.icon}</div>
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
