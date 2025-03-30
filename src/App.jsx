import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButton from './components/FloatingButton';
import SocialLinks from './components/SocialLinks';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const disableRightClick = (event) => event.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#020305]/100 text-white">
        <Navbar />
        <SocialLinks />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <FloatingButton resumeUrl="https://drive.google.com/file/d/1iQ7eCQiIjCvhEFS-wYYbMTBHc4VWvtZr/view?usp=sharing" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
