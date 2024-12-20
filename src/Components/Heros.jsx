import React from "react";
import profilePicture from "../assets/images/profilePic.jpg";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";


function Heros() {
  return (
    <>
      <motion.div
        id="home"
        className="w-screen h-[750px] bg-[#09090b] flex items-center justify-center gap-12 text-[#5e5e73] flex-col audiowide-regular cursor-default"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          id="home"
          className="w-screen h-[750px] bg-[#09090b] flex items-center justify-center gap-12 text-[#a4a4b9] flex-col audiowide-regular"
        >
          <div className="h-[200px] w-[200px] rounded-full flex items-center justify-center overflow-hidden border-[3px] border-[#38bdf8] hover:animate-spinOnce">
            <img
              src={profilePicture}
              alt="Profilepic"
              className="h-full w-full"
            />
          </div>

          <div className="flex flex-col text-center gap-4 text-sm w-[80vw]">
            <p className="text-[#38bdf8] text-2xl audiowide-regular">HEY👋, I AM RAJVEER</p>
            <p>
              I do <span className="text-[#38bdf8]">ctf</span> and dig into the websites to uncover the vulnerabilities.
            </p>
            <p>
              I'm a <span className="text-[#38bdf8]">Web Security</span> professional with expertise in <span className="text-[#38bdf8]">penetration testing</span>, vulnerability assessment.
            </p>
            <p>
              I'm focused to learn new stuff and currently <span className="text-[#38bdf8]">open to work</span>
            </p>
          </div>

          <motion.div
            className="lg:w-full lg:p-0 p-3 flex justify-center gap-10 items-center border-2 border-slate-500 rounded-3xl lg:border-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              className="flex items-center gap-2"
              whileTap={{ scale: 0.95 }}
            >
              <a href="mailto:rajveer.raj2006@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:bg-[#2e2e2e] gap-2 px-2 py-1 rounded-md flex">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48"><path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path></svg>

                <p className="hidden lg:block text-white font-courier hover:text-[#38BDF8]">rajveer.raj2006@gmail.com</p>
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 hover:bg-[#2e2e2e] rounded-md px-2 py-1"
              whileTap={{ scale: 0.95 }}
            >
              <a href="https://github.com/root-0101" target="_blank" rel="noopener noreferrer" className="flex gap-2">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"><path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                <p className="hidden lg:block text-white font-courier hover:text-[#38BDF8]">root-0101</p>
              </a>
            </motion.div>
          </motion.div>
        </div>

      </motion.div>

      <div className="w-full flex justify-center">
        <div className="border border-[#27272A] w-[80%]"></div>
      </div>

    </>
  );
}

export default Heros;
