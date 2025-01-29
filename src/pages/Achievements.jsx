import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { useEffect } from "react";


const Achievements = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const achievements = [
    {
      title: "RedHat Certified Enterprise Application Developer",
      description: "Achieved by Red Hat",
      image: "/images/certifications/redhat.png",
      proof: "https://aws.amazon.com/certification"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      description: "Achieved by Amazon Web Services",
      // image: "/src/images/certifications/awscp.svg",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&h=500&fit=crop",
      proof: "https://hackathon.com"
    },
    {
      title: "Leet Code 50 days",
      description: "Achieved by Leet code of maintaining 50 active days count",
      // image: "/src/images/certifications/LEETCODE_50DAYS_BADGE.gif",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&h=500&fit=crop",
      proof: "https://journal.com"
    },
    {
      title: "Salesforce Certified AI Associate",
      description: "Ranked #1 in College Coding Competition",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&h=500&fit=crop",
      proof: "https://competition.com"
    },
    {
      title: "Open Source",
      description: "Major Contributor to Open Source Project",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&h=500&fit=crop",
      proof: "https://github.com"
    },
    {
      title: "Tech Talk",
      description: "Speaker at Tech Conference",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&h=500&fit=crop",
      proof: "https://conference.com"
    },
    {
      title: "Tech Talk",
      description: "Speaker at Tech Conference",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&h=500&fit=crop",
      proof: "https://conference.com"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#11071f]/90 pt-20 px-4"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl mt-9 font-bold text-center mb-12"> <span className='text-[#7127ba]' >My</span> Achievements</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-90 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-gray-300 text-sm">{achievement.description}</p>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-[#190b2c]/80 flex items-center justify-center"
                >
                  <a
                    href={achievement.proof}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#7127ba] px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-[#7127ba] hover:text-white transition-colors"
                  >
                    <span>View</span>
                    <ExternalLink size={16} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;