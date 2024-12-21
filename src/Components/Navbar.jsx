import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import profilePicture from "../assets/images/profilePic.jpg";
import { Github, Linkedin, Twitter, SquareTerminal } from "lucide-react";
import Dropdown from "./Dropdown";

function Navbar() {

  const [drop, setDrop] = useState(false)

  return (
    <>
      <div className="fixed top-0 mb-16 w-screen h-16 bg-[#040711] flex items-center justify-around font-semibold z-30 cursor-default">
        <div className="lg:w-1/3 rounded-md flex items-center gap-2">

          <img
            src={profilePicture}
            alt="profilePicture"
            className="h-10 w-10 rounded-full border-[#1E293B] border-2"
          />


          <span><a href="#"><img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=500&size=22&duration=3996&pause=1000&color=FFFFFF&vCenter=true&width=435&lines=Rajveer" alt="rajveer" /></a></span>
        </div>

        {/* for big screens */}
        <div className="absolute z-0 w-full justify-center items-center gap-8 text-white hidden lg:flex">
          <span
            className="hover:bg-slate-900 hover:text-[#38bdf8] p-2 hover:rounded-lg"
            onClick={() => window.scrollTo(0, 0)}
          >
            <Link to={"/"}>Home</Link>
          </span>
          <a
            href="#projects"
            className="hover:bg-slate-900 hover:text-[#38bdf8] p-2 hover:rounded-lg"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:bg-slate-900 hover:text-[#38bdf8] p-2 hover:rounded-lg"
          >
            Skills
          </a>
          <span className="hover:bg-slate-900 hover:text-[#38bdf8] p-2 hover:rounded-lg">
            <Link to={"/blogs"}>Blogs</Link>
          </span>
          <span className="hover:bg-slate-900 hover:text-[#38bdf8] p-2 hover:rounded-lg">
            <Link to={"/terminal"}>Terminal</Link>
          </span>
        </div>

        {/* for mobile screens */}
        <div className="absolute z-0 w-full justify-center items-center gap-8 text-white flex lg:hidden">
          {drop ? <Dropdown setDrop={setDrop} /> : null}
        </div>

        <div className="cursor-pointer relative z-20 lg:hidden" onClick={() => { setDrop(!drop) }}>
          <SquareTerminal size={24} color="white" />
        </div>

        <div className="relative z-10 w-1/6 lg:flex justify-center gap-6 items-center hidden">
          <a href="https://github.com/root-0101" target="_blank">
            <Github color="white" size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/r4jv33r/"
            target="_blank"
          >
            <Linkedin color="white" size={20} />
          </a>
          <a href="https://x.com/rajveer_0101" target="_blank">
            <Twitter color="white" size={20} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;