import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useEffect } from "react";

const Achievements = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const achievements = [
    {
      title: "RedHat Certified Enterprise Application Developer",
      image: "/images/certifications/redhat.png",
      proof: "https://www.credly.com/badges/616af425-1dee-4af2-b4c9-e069fabf7be2/public_url"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      image: "/images/certifications/awscp.png",
      proof: "https://www.credly.com/badges/c1386f2b-ad50-415b-8e02-4afcceed1a97/public_url"
    },
    {
      title: "Salesforce Certified AI Associate",
      image: "/images/certifications/salesforce.png",
      proof: "https://drive.google.com/file/d/1BDxV4Q8dgPZqEm9iPRvJJ3p1SgayVsRP/view?usp=sharing"
    },
    {
      title: "AWS Academy Cloud Architecting",
      image: "/images/certifications/ca.png",
      proof: "https://www.credly.com/badges/d4b100ae-0d5e-416b-bbc3-ae527bb97783/public_url"
    },
    {
      title: "Data Science Orientation",
      image: "/images/certifications/dso.png",
      proof: "https://www.credly.com/badges/de459356-675e-4387-ab33-72462a162dc3/public_url"
    },
    {
      title: "Leet Code 50 days Badge",
      image: "/images/certifications/LEETCODE_50DAYS_BADGE.gif",
      proof: "https://leetcode.com/u/AVPKN_25/"
    },
    {
      title: "100 Days Coding Streak in Code Chef",
      image: "/images/certifications/cc100.png",
      proof: "https://www.codechef.com/users/praveen_2506"
    },
    {
      title: "250+ Problems Solved in Code Chef",
      image: "/images/certifications/cc250p.png",
      proof: "https://www.codechef.com/users/praveen_2506"
    },
    {
      title: "Programming in Java",
      image: "/images/certifications/nptel.png",
      proof: "https://drive.google.com/file/d/1nyXu5OjwvIb70MMz__OlWf54TUHlihhp/view?usp=sharing"
    },
    {
      title: "Skill Nation's Power BI Workshop",
      image: "/images/certifications/powerbi.png",
      proof: "https://drive.google.com/file/d/1DNwsMIYoo-B3BXb_6joOEtWFdq1ZAlzW/view?usp=sharing"
    },
    {
      title: "Cloud Virtual Internship by AICTE",
      image: "/images/certifications/cloudvirtual.png",
      proof: "https://drive.google.com/file/d/1RnmxGqgc5hl1iRgw64YO7i0Jy9Bnw6k6/view?usp=sharing"
    },
    {
      title: "AI-ML Virtual Internship by AICTE",
      image: "/images/certifications/aimlvirtual.png",
      proof: "https://drive.google.com/file/d/1CF7glZxhGS7ld1SJt1VZ8HNFIsSBOj5f/view?usp=sharing"
    },
    {
      title: "Flipkart GRiD 6.0 - Software Development Track",
      image: "/images/certifications/unstop/f.png",
      proof: "https://drive.google.com/file/d/1CF7glZxhGS7ld1SJt1VZ8HNFIsSBOj5f/view?usp=sharing"
    },
    {
      title: "L'Oréal Sustainability Challenge 2024",
      image: "/images/certifications/unstop/LOREAL.jpg",
      proof: "https://drive.google.com/file/d/1CF7glZxhGS7ld1SJt1VZ8HNFIsSBOj5f/view?usp=sharing"
    }
    
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#020305]/90 pt-20 px-3 sm:px-4"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl mt-9 font-bold text-center mb-12"> <span className='text-[#c135ff]'>My</span> Achievements</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-[#11071f] rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="w-full h-64 flex items-center justify-center overflow-hidden">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-cover h-64 "
                />
              </div>

              <div className="p-4 bg-[#1e0f31] text-white text-center text-lg font-semibold">
                {achievement.title}
              </div>
              <div className="absolute inset-0 bg-[#190b2c]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href={achievement.proof}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#e2d1fc] text-[#7127ba] px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-[#7127ba] hover:text-white transition-colors"
                >
                  <span>View</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;
