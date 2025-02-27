import React from "react";
import { Github, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";
import profilePic from "../assets/images/IMG_20241217_160544.jpg"; 
import profilePicBack from "../assets/images/IMG_20241217_160544.jpg"; 

const Hero = () => {
  return (
    <div className="lg:mt-14 min-h-screen text-white flex flex-col items-center justify-center relative overflow-hidden px-4 audiowide-regular">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </motion.div>

      
      <motion.div
        className="relative z-10 max-w-4xl w-full space-y-16"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        
        <motion.div
          className="relative group bottom-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="absolute -inset-0.5 rounded-full opacity-75 group-hover:opacity-100 transition duration-500 blur"></div>

          <div className="relative h-40 w-40 lg:h-56 lg:w-56 mx-auto rounded-full overflow-hidden border-4 border-white/10 transform transition-transform duration-700 group-hover:rotate-[360deg]">
            <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
              <img
                src={profilePic}
                alt="Front Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              <img
                src={profilePicBack}
                alt="Back Profile"
                className="w-full h-full object-cover self-center"
              />
            </div>
          </div>
        </motion.div>

        {/* Main Text */}
        <motion.div
          className="space-y-7 cursor-default"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#38bdf1] leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-2xl">HEY👋, I AM Ꭺɴᴋɪᴛ </span>
          </motion.h1>
        </motion.div>

        {/* Description */}
        <motion.div
          className="space-y-5 text-gray-400 cursor-default w-[95%] mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <motion.p
            className="text-xs sm:text-sm md:text-base lg:text-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            I do <span className="text-[#38bdf8]">CTF</span> and dig into websites to uncover vulnerabilities.
          </motion.p>
          <motion.p
            className="text-xs sm:text-sm md:text-base lg:text-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            I'm a <span className="text-[#38bdf8]">Web Security</span> professional with expertise in{" "}
            <span className="text-[#38bdf8]">penetration testing</span>, and vulnerability assessment.
          </motion.p>
          <motion.p
            className="text-xs sm:text-sm md:text-base lg:text-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            I'm focused on learning new things and currently <span className="text-[#38bdf8]">open to work</span>.
          </motion.p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a
            href={"#"}
            className="group font-courier font-semibold flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <FileText className="w-5 h-5 text-blue-400" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 group-hover:text-white transition-colors">
              My Resume
            </span>
          </a>
          <a
            href="mailto:ankitydv098@gmail.com"
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <Mail size={24} className="text-gray-300" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 group-hover:text-white transition-colors">
              ankitydv098@gmail.com
            </span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
