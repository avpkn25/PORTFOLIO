import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-[#11071f]/90 pt-20 px-4 flex items-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="rounded-full border-2 border-[#9a35ff] w-[500px] h-[500px] mx-auto overflow-hidden"
          >
            <img
              src='/images/main.jpg'
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl text-[#882fe0] mb-2">Hey There ✌️</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              I AM <span className="text-[#7127ba]">PRAVEEN KUMAR</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-8">
              <h3>
                {" "}
                I am a
                <TypeAnimation
                  sequence={[
                    " Full Stack Developer",
                    2000,
                    " Java Enthusiast",
                    2000,
                    " Computer Science Student",
                    2000,
                    " Data Science Enthusiast",
                    2000,
                    " Fast Learner",
                    2000,
                    " Programmer",
                    2000,
                  ]}
                  repeat={Infinity}
                />
              </h3>
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#7127ba] text-white px-6 py-3 rounded-lg hover:bg-[#2e1452] transition-colors"
              >
                About Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#9a35ff] text-[#9a35ff] px-6 py-3 rounded-lg hover:bg-[#7127ba] hover:text-white transition-colors"
              >
                View My Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
