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
      className="min-h-screen bg-[#020305]/90 pt-20 px-4 flex items-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="relative z-[1] sm:w-[400px] sm:h-[400px] w-64 h-64 mt-4 mx-auto overflow-hidden border-[4px] border-[#2e1451] shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-[morphing_10s_infinite]"
          style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
        >
          <img
            src="/images/newimage.png"
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
            <h2 className="text-2xl md:text-3xl text-white mb-2">Hello ! <span className="text-[#c135ff]" >I'm Praveen Kumar </span></h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {" "}
                I am a
              <TypeAnimation
                  sequence={[
                    " Full Stack Developer",
                    2000,
                    " Java Enthusiast",
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
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mt-8 mb-8">
              <h3 className="text-base md:text-xl">
                I'm a Computer Science Student.
              </h3>
              <h4 className="text-base md:text-xl">Currently, Pursuing my B.Tech Degree at <img className=" inline-flex w-5 h-5" src="education/klu-nobg.png" /> <span className="text-[#c135ff]" >KL University</span>.</h4>
            </div>
            <div className="flex space-x-4 justify-center lg:gap-3 md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#7127ba] text-white px-6 py-3 rounded-lg hover:bg-[#2e1452] transition-colors w-full sm:w-auto"
                onClick={() => (window.location.href = "/about")}
              >
                About Me
              </motion.button>
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[#9a35ff] text-[#9a35ff] px-6 py-3 rounded-lg hover:bg-[#7127ba] hover:text-white transition-colors w-full sm:w-auto"
                  onClick={() =>
                    window.open("https://wa.me/+917893445580", "_blank")
                  }
                >
                  Let's Talk!
                </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
