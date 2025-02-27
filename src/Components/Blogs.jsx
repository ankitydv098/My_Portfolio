import React from "react";
import { ChevronsLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


import comingSoonImage from "../assets/coming-soon.png"; 

function Blogs() {
  return (
    <>
    
      <div className="relative h-24 flex justify-center items-center cursor-default">
        <Link
          to="/"
          className="absolute my-auto left-7 hover:bg-slate-900 p-2 rounded-full flex justify-center items-center"
        >
          <ChevronsLeft size={32} color="white" />
        </Link>
        <div className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-semibold audiowide-regular">
          Blogs
        </div>
      </div>

      <motion.div
        className="text-white text-xl sm:text-2xl md:text-3xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.img
          src={comingSoonImage}
          alt="Coming Soon"
          className="mt-8 max-w-[350px] sm:max-w-[400px] mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <div className="text-lg sm:text-2xl mt-4">
          Stay tuned for exciting content! 🌟
        </div>
      </motion.div>
    </>
  );
}

export default Blogs;
